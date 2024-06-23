// pages/index.js
"use client"
import { GoTrash } from "react-icons/go";
import { useState, useEffect } from 'react';

export default function Page() {
  const handleDelete = async (_id) => {
    try {

        await deleteSubmit(_id);
        // Optionally, you can refresh the list or update state after deletion
    } catch (error) {
        console.error('Failed to delete note:', error.message);
        // Handle error as needed (e.g., show an error message to the user)
    }
};
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://note-app-sable-eight.vercel.app/api/notelist');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } 
    }
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <main className='flex flex-col justify-center items-center'>
      <h1 className='md:text-3xl text-xl m-10'>Note List</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id} className='m-2 text-xl md:text-2xl'>{item.title} : {item.note} <button onClick={handleDelete}><GoTrash /></button></li>
        ))}
      </ul>
    </main>
  );
}
