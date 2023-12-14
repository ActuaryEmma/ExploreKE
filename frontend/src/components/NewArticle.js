import React, { useState } from 'react';

const NewArticle = ()=>{
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }
    function handleBodyChange(event) {
        setBody(event.target.value)
    }

async function handleSubmit(event) {
    event.preventDefault();
    const article = { title, body };
    const response = await fetch("/post", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    });
    if (response.ok) {
        console.log("Article Posted");
    } else {
        console.error("Something went wrong")
    }
}

return (
    <div className="p-4 border">
      <input
        className="w-full border rounded mb-2 p-2"
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <textarea
        className="w-full border rounded p-2"
        value={body}
        onChange={handleBodyChange}
        placeholder="Content"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Save
      </button>
    </div>
  );
};

export default NewArticle;