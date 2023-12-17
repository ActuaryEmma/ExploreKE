import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FullArticle() {
  const { articleId } = useParams(); // Get the articleId from the URL params
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch the detailed information of the article using the articleId
    fetch(`/article/${articleId}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error('Error fetching article:', error));
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  return (
    <div className="full-article">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      {/* Other details you want to display */}
    </div>
  );
}

export default FullArticle;
