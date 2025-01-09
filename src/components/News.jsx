"use client";

import { useState, useEffect } from 'react';

export default function News() {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);
  useEffect(() => {
    fetch(`https://saurav.tech/NewsAPI/top-headlines/category/business/us.json`)
    .then((res) => res.json())
    .then((data) => setNews(data.articles));
  }, []);
  return <div>
    {news.slice(0, articleNum).map((article) =>(
      <div className="">
        <h2 className='text-lg font-semibold'>{article.title}</h2>
        <p className="text-sm">{article.description}</p>
      </div>
    ))}
  </div>;
  
}
