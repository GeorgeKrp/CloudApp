import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [publishedFilter, setPublishedFilter] = useState('');

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:3000/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handlePublishedFilterChange = (event) => {
    setPublishedFilter(event.target.value);
  };

  return (
    <div>
      <h2>Article List</h2>
      <div>
        <label>
          Filter by Published Status:
          <select value={publishedFilter} onChange={handlePublishedFilterChange}>
            <option value="">All</option>
            <option value="true">Published</option>
            <option value="false">Unpublished</option>
          </select>
        </label>
      </div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
