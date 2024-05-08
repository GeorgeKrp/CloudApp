// AddArticleForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddArticleForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3000/articles', { title, body });
      // Optionally, you can update the UI to reflect the newly added article
      setTitle('');
      setBody('');
      alert('Article added successfully!');
    } catch (error) {
      console.error('Error adding article:', error);
      alert('Failed to add article. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
      <button type="submit">Add Article</button>
    </form>
  );
};

export default AddArticleForm;
