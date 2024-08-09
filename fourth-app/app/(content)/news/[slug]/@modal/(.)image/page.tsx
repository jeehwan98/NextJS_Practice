import ModalBackdrop from "@/component/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

interface ImageProps {
  params: {
    slug: string
  }
}

export default async function InterceptedImagePage({ params }: ImageProps) {

  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          />
        </div>
      </dialog>
    </>
  )
}
