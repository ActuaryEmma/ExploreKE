import React from 'react'

function Blog({articles, editArticle}) {
    const editedArticle = (article)=> {
        editArticle(article)
    }
  return (
    <div>
        {articles.map(article => {
          return (
            <div key = {article.id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <p>{article.postDate}</p>
              <div>
              <button class="bg-red hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick = {() => editedArticle(article)}>
                Edit
              </button>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Delete
              </button>
              </div>
              <hr/>
              
            </div>

          )
        })}

    </div>
  )
}
export default Blog;