import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation"

interface NewsProps {
  params: {
    slug: string
  }
}

export default async function NewsDetailPage({ params }: NewsProps) {
  const newsSlug = params.slug;
  // const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug);
  const newsItem = await getNewsItem(newsSlug);
  console.log(newsItem);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>News ID: {newsSlug}</p>
    </article>
  )
}