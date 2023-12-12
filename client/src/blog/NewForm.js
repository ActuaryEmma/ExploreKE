import React from 'react';

function NewForm({ title, content, setTitle, setContent,insertArticle}) {
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Call insertArticle function here
    insertArticle({ title, content }); // Pass the title and content as an object

    // Clear the form fields if needed
    setTitle('');
    setContent('');
  };

  return (
    <div className="p-4 border">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border rounded mb-2 p-2"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
        />
        <textarea
          className="w-full border rounded p-2"
          value={content}
          onChange={handleContentChange}
          placeholder="Content"
        />
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 cursor-pointer"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}

export default NewForm;