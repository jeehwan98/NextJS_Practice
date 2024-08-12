import { Suspense } from 'react';

import Posts, { Post } from '@/components/posts';
import { getPosts } from '@/lib/posts';

export const metadata = {
  title: 'Latest Post',
  description: 'Browse our latest post!'
}


async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts as Post[]} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here&apos;s what you might&apos;ve missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
