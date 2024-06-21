import type { Blog } from ".velite/index";
import Card from "@/components/FeaturedNews/Card";
import { getPosts, sorters } from "@/lib/get-content";
import { useEffect, useState } from "react";
import NotFound from "../notFound/NotFound";

type NewsState = Blog[] | null;

const News = () => {
  const [news, setNews] = useState<NewsState>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData: Blog[] = await getPosts(
        undefined,
        sorters.createdAtDesc,
        Infinity,
        0,
      );
      setNews(newsData);
    };

    fetchNews();
  }, []);

  if (!news) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto mb-20 mt-40">
      <div className="flex w-full flex-col gap-2 border-b pb-4">
        <h1 className="text-5xl font-semibold">Latest Weather News</h1>
        <p className="text-lg">
          Stay updated with the most recent weather stories and updates.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        {news.map((post, index) => (
          <Card index={index} key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default News;
