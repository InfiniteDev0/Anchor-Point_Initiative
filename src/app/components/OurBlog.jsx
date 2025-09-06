import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";

const CARDS_PER_PAGE = 3;

const OurBlog = () => {
  const { getMentalHealthNews, loading, articles } = useContext(AppContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMentalHealthNews();
    // eslint-disable-next-line
  }, []);

  const totalPages = Math.ceil(articles.length / CARDS_PER_PAGE);
  const paginatedArticles = articles.slice(
    (page - 1) * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE
  );

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));
  const handleRefresh = () => getMentalHealthNews();

  return (
    <div className="max-w-7xl mx-auto !py-16 !px-5">
      <div className="flex justify-between items-center !mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href="/blog">View all blogs</Link>
        </Button>
        <Button size="sm" onClick={handleRefresh}>
          Refresh
        </Button>
      </div>
      <h2 className="text-3xl font-bold !mb-2">Blog and Article</h2>
      <p className="text-gray-500 !mb-10 text-sm max-w-2xl">
        Latest mental health news and articles from trusted sources.
      </p>
      <div className="relative">
        {/* Carousel */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[...Array(CARDS_PER_PAGE)].map((_, idx) => (
              <Card key={idx} className="p-0 border-none bg-transparent">
                <Skeleton className="w-full h-64 rounded-2xl mb-4" />
                <CardContent className="!pt-6 !pb-6 !px-0">
                  <Skeleton className="h-[20px] w-[100px] rounded-full !mb-2" />
                  <Skeleton className="h-[20px] w-[200px] rounded !mb-2" />
                  <Skeleton className="h-[16px] w-[180px] rounded !mb-2" />
                  <Skeleton className="h-[16px] w-[220px] rounded !mb-2" />
                  <Skeleton className="h-[20px] w-[80px] rounded-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {paginatedArticles.map((article, idx) => (
              <Card
                key={article.article_id || idx}
                className="p-0 border-none flex flex-col gap-0 shadow-none bg-transparent"
              >
                <div className="relative w-full h-[30vh]">
                  <img
                    src={article.image_url || "/default.jpg"}
                    alt={article.title}
                    className="object-cover w-full h-full rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <CardContent className="!pt-6 !pb-6">
                  <div className="flex gap-2 !my-2 flex-wrap">
                    {(article.keywords || []).slice(0, 3).map((kw, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          i === 0
                            ? "bg-blue-100 text-blue-600"
                            : i === 1
                            ? "bg-red-100 text-red-600"
                            : "bg-gray-600 text-white"
                        }`}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-400 !my-3">
                    {new Date(article.pubDate).toLocaleDateString()} — 9 min
                    read
                  </div>
                  <Link href={article.link} target="_blank">
                    <div className="font-semibold  text-gray-900 mb-2 hover:underline cursor-pointer">
                      {article.title}
                    </div>
                  </Link>
                  <div className="text-xs text-gray-500 mb-4 line-clamp-2">
                    {article.description}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href={article.link}
                      target="_blank"
                      className="text-white bg-black !px-5 !py-1 rounded-full text-sm font-medium flex items-center gap-1 hover:underline"
                    >
                      Read post <span aria-hidden>↗</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}
        {/* Pagination Controls */}
        <Pagination className="!mt-10 flex justify-center">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={handlePrev}
                disabled={page === 1}
                className={"hover:bg-black hover:text-white !mr-7"}
              />
            </PaginationItem>
            <PaginationItem>
              <span className="text-gray-500">
                {page} / {totalPages}
              </span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={handleNext}
                disabled={page === totalPages}
                className={"bg-black text-white !ml-10"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default OurBlog;
