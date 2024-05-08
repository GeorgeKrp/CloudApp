import React from 'react';
import axios from 'axios';

const DeleteArticle = ({ articleId }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/articles/${articleId}`);
      // Optionally, you can redirect or perform any other action after deleting the article
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete Article</button>
  );
};

export default DeleteArticle;
