import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewArticleDetails = ({ articleId }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticleDetail();
  }, []);

  const fetchArticleDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/articles/${articleId}`);
      setArticle(response.data);
    } catch (error) {
      console.error('Error fetching article detail:', error);
    }
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
};

export default ViewArticleDetails;
