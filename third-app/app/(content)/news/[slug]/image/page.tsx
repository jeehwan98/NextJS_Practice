import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ImageProps {
  params: {
    slug: string
  }
}

export default function ImagePage({ params }: ImageProps) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

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