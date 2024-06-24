"use client"
import { useState } from 'react';
import { submitNote } from "@/actions/action";

export default function Home() {
  const [formData, setFormData] = useState({
    title: '',
    note: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await submitNote({
        title: formData.title,
        note: formData.note
      });
      
      console.log("Note submitted successfully!", response);
    } catch (error) {
      console.error("Error submitting note:", error);
    }
    setFormData({
      title: '',
      note: ''
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-2xl">Note App</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 m-5 w-60 md:w-80"
          placeholder="Enter Title"
        />
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          className="border p-2 m-2 w-60 md:w-80"
          rows={7}
          placeholder="Enter Text"
        ></textarea>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </main>
  );
}
