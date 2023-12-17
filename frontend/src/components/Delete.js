import React from 'react';
import { RiDeleteBin2Line } from "react-icons/ri";

const Delete = ({ id, title, body, onDelete }) => {
    const handleDelete = async () => {
        try {
            const response = await fetch(`/article/${id}`, {
                method: 'Delete',
            });
            if (response.status === 200) {
                onDelete(id);
                alert("Article Successfully Deleted");
            }
        } catch (error) {
        console.error('Error:', error);
        }
    };
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleDelete}>
            <RiDeleteBin2Line /> Delete
            </button>
        </div>
    )
}


export default Delete