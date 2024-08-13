import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "./db";
import { cookies } from "next/headers";

const adapter = new BetterSqlite3Adapter(db, {
  user: 'users',      // table name
  session: 'sessions' // where we're storing the sessions

});
const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production' // not running the app locally during development and deploy it
    }
  }
});

export async function createAuthSession(userId: string) {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}

// check whether an incoming request is from an authenticated user
export async function verifyAuth() {
  const sessionCookie = cookies().get(lucia.sessionCookieName);
  if (!sessionCookie) {
    return {
      user: null,
      session: null
    };
  }

  const sessionId = sessionCookie.value;

  if (!sessionId) {
    return {
      user: null,
      session: null
    }
  }

  // if we have sessionCookie and sessionCookie
  const result = await lucia.validateSession(sessionId); // this will look into the DB and see if it finds a session with that id in the DB

  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
    // clear the existing cookie becuase it contains invalid session data
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {

  }

  return result;
}

export async function destroySession() {
  const { session } = await verifyAuth();
  if (!session) {
    return {
      error: 'Unauthorized!'
    }
  }

  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}