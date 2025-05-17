/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsCalendar } from 'react-icons/bs';
import Image from 'next/image';

const DevArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('https://dev.to/api/articles?username=sharjeelyunus');
      const data = await response.json();
      // Filter out Boost posts and limit to 4 articles
      const filteredArticles = data
        .filter(article => !article.title.toLowerCase().includes('boost'))
        .slice(0, 6);
      setArticles(filteredArticles);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto space-y-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-[#1a1f2e] rounded-lg overflow-hidden animate-pulse flex items-center p-3 gap-4"
          >
            <div className="w-20 h-20 bg-[#232936] rounded-lg shrink-0" />
            <div className="flex-grow space-y-2">
              <div className="h-5 bg-[#232936] rounded w-3/4" />
              <div className="h-4 bg-[#232936] rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {articles.map((article, index) => (
        <motion.a
          key={article.id}
          href={article.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="group block"
        >
          <article className="bg-[#1a1f2e] rounded-lg overflow-hidden flex items-center p-3 gap-4 transition-all duration-300 hover:bg-[#232936]">
            {/* Article Image */}
            <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
              {article.cover_image ? (
                <Image
                  src={article.cover_image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-[#232936] flex items-center justify-center">
                  <span className="text-[#8B8B8B] text-xs">No image</span>
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="flex-grow min-w-0">
              <h3 className="text-base font-medium text-white group-hover:text-[#00A6ED] transition-colors duration-300 line-clamp-2 mb-2">
                {article.title}
              </h3>
              
              <div className="flex items-center text-sm text-[#8B8B8B]">
                <BsCalendar className="w-4 h-4 mr-2" />
                <span>{new Date(article.published_at).toLocaleDateString()}</span>
                <span className="ml-auto text-[#00A6ED] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read →
                </span>
              </div>
            </div>
          </article>
        </motion.a>
      ))}
    </div>
  );
};

export default DevArticles;
