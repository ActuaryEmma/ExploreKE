import React, { useState } from 'react';

const NewArticle = () =>{
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !body) {
      alert("Missing 'title' or 'body' ");
      return;
    }
    try {
      const response = await fetch(`/newarticle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          body,
        }),
      });
      if (response.status === 201) {
        alert("Article Successfully Posted");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return(
    <div className='max-h mx-auto p-6 rounded-md'>
      <form onSubmit={handleSubmit} className='mt-6 '>
        <label class="block text-sm font-medium text-green-600">
          Title: 
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} class="mt-1 p-2 w-full border-none"
          required />
        </label>
        <label class="block text-sm font-medium text-green-600">
          Body:
          <textarea value={body} onChange={e => setBody(e.target.value)} class="mt-1 p-2 w-full text-black border-none rounded-md" defaultValue="Document your journey..."
          required/>
        </label>
        {/*
        <label class="block text-sm border-none font-medium text-green-600">
          Media:
          <input type="image" class="mt-1 p-2 w-full border rounded-md" alt='supporting' />
        </label>
        */}
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 m-3"> PUBLISH </button>
      </form>
    </div>
  );
};
export default NewArticle;