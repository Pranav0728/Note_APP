// pages/index.js
"use client"
import { GoTrash } from "react-icons/go";
import { useState, useEffect } from 'react';

export default function Page() {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/notelist');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
      } 
    }
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <main className='flex flex-col justify-center items-center'>
      <h1 className='md:text-3xl text-xl m-10'>Note List</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id} className='m-2 text-xl md:text-2xl'>{item.title} : {item.note}</li>
        ))}
      </ul>
    </main>
  );
}
