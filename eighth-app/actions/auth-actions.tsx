'use server';

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/userInfo";
import { redirect } from "next/navigation";

export async function signup(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  let errors: { email?: string; password?: string; } = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (password.trim().length < 8) {
    errors.password = 'Password must be at least 8 characters long.';
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const hashedPassword = hashUserPassword(password);

  try {
    const userId = await createUser(email, hashedPassword);
    // upon successful signup
    await createAuthSession(userId.toString());
    redirect('training');
  } catch (error: any) {
    if (error?.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return {
        errors: {
          email: 'It seems like an account for the chosen email already exists'
        }
      };
    }
    throw error;
  }
}

export async function login(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const existingUser = await getUserByEmail(email as string);

  if (!existingUser) {
    return {
      errors: {
        email: "Email doesn't exist"
      }
    }
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      errors: {
        password: 'Incorrect password'
      }
    }
  }

  await createAuthSession(existingUser.id);
  redirect('/training');
}

export async function auth(mode: string, prevState: any, formData: FormData) {
  if (mode === 'login') {
    return login(prevState, formData);
  }
  return signup(prevState, formData);
}

export async function logout() {
  await destroySession();
  redirect('/');
}