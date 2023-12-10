import React, {useState} from 'react';

function Form({article}) {
  const[title, setTitle] = useState('')
  const[body, setBody] = useState('')
  return (
    <div>
      {article ? (
        <div>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Please Enter Title"
          />
          <label htmlFor="body" className="form-label">
            Description
          </label>
          <textarea
            id="body"
            className="form-control"
            placeholder="Please Enter Description"
          />
        </div>
      ) : null}
    </div>
  );
}

export default Form;