import React from 'react';
import ArticleList from './components/ArticleList';
import AddArticleForm from './components/AddArticleForm';
import EditArticleForm from './components/EditArticleForm';
import DeleteArticle from './components/DeleteArticle';
import ViewArticleDetails from './components/ViewArticleDetails';

function App() {
  return (
    <div>
      <h1>My Article Management App</h1>
      <ArticleList />
      <AddArticleForm />
      <EditArticleForm />
      <DeleteArticle />
      <ViewArticleDetails />
    </div>
  );
}

export default App;
