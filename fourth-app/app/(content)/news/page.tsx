import NewsList from "@/component/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {

  const news = await getAllNews();

  let newsNotEmpty;
  if (news.length === 0) {
    return;
  } else {
    newsNotEmpty = news;
  }

  return (
    <main>
      <h1>News Page</h1>
      <NewsList news={newsNotEmpty} />
    </ main>
  )
}