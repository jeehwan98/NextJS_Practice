import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

interface ImageProps {
  params: {
    slug: string
  }
}

export default async function ImagePage({ params }: ImageProps) {
  const newsItemSlug = params.slug;
  // const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);
  const newsItem = await getNewsItem(newsItemSlug);
  console.log(newsItem.image);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
      />
    </div>
  )
}