import React, { useState, useEffect } from 'react';
import Form from './Form';
import NewForm from './NewForm';
import './blog.css'

function Blog({ articles, editArticle, setArticles }) {
  const [isAddingNewArticle, setIsAddingNewArticle] = useState(false);
  const [editedArticle, setEditedArticle] = useState(null);

  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    fetch(`get`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching articles:', error));
  }, [setArticles]);

  const handleEditArticle = (article) => {
    setEditedArticle(article);
    setEditedTitle(article.title);
    setEditedContent(article.content);
  };

  const addNewArticle = () => {
    setIsAddingNewArticle(true);
    setEditedArticle(null);
    setEditedTitle('');
    setEditedContent('');
  };

  const insertArticle = (newArticle) => {
    fetch(`/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newArticle.title,
        body: newArticle.content,
      }),
    })
      .then((response) => {
        if (response.ok) {
          fetch(`/get`)
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) =>
              console.error('Error fetching articles after insert:', error)
            );
        } else {
          throw new Error('Insert failed');
        }
      })
      .catch((error) => {
        console.error('Error inserting article:', error);
      });
  };

  const deleteArticle = (articleId) => {
    fetch(`/delete/${articleId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          fetch('/get')
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) =>
              console.error('Error fetching articles after delete:', error)
            );
        } else {
          throw new Error('Delete failed');
        }
      })
      .catch((error) => {
        console.error('Error deleting article:', error);
      });
  };

  const updateArticle = () => {
    if (editedArticle) {
      const updatedArticle = {
        id: editedArticle.id,
        title: editedTitle,
        content: editedContent,
      };

      fetch(`/update/${editedArticle.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedArticle),
      })
        .then((response) => {
          if (response.ok) {
            setEditedArticle(null);
            setEditedTitle('');
            setEditedContent('');
            fetch('/get')
              .then((response) => response.json())
              .then((data) => setArticles(data))
              .catch((error) =>
                console.error('Error fetching articles after update:', error)
              );
          } else {
            throw new Error('Update failed');
          }
        })
        .catch((error) => {
          console.error('Error updating article:', error);
        });
    }
  };

  return (
    <div className="mainpost" style={{ backgroundColor: '#92400e'}} >
      <div style={{justifyContent: 'center', alignItems: 'right', display: 'flex' }}>
      <button
        className="newbtn"
        onClick={addNewArticle}
      >
        New Post
      </button>
      </div >
      
      <div className="">
        <div className="post">
        {articles.map((article) => (
          <div key={article.id} style = {{padding: 20}}>
            <h2 className="font-bold">{article.title}</h2>
            <p className="paragraph">{article.content}</p>

            <div className="">
              <button
                class="editbtn"
                onClick={() => handleEditArticle(article)}
              >
                Edit
              </button>
              <button
                className="deletebtn"
                onClick={() => deleteArticle(article.id)}
              >
                Delete
              </button>
            </div>
            <hr/>
          </div>
        ))}
        

        {editedArticle && (
          <Form
            title={editedTitle}
            content={editedContent}
            setTitle={setEditedTitle}
            setContent={setEditedContent}
            updateArticle={updateArticle}
          />
        )}

        {isAddingNewArticle && (
          <NewForm
            title={editedTitle}
            content={editedContent}
            setTitle={setEditedTitle}
            setContent={setEditedContent}
            insertArticle={insertArticle}
          />
        )}
        </div>
        
      </div>
    </div>
    
  );
}

export default Blog;