import { useState } from 'react'
import './AddBookForm.css'

function AddBookForm({ onAddBook }) {
  const [form, setForm] = useState({
    name: '',
    author: '',
    imgUrl: '',
    description: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.author) {
      return
    }
    console.log('Book added:', form)
    onAddBook(form)
    setForm({
      ...form,
      name: '',
      author: '',
      imgUrl: '',
      description: '',
    })
  }

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        placeholder="name"
      />
      <input
        name="author"
        type="text"
        value={form.author}
        onChange={handleChange}
        placeholder="author"
      />
      <input
        name="imgUrl"
        type="text"
        value={form.imgUrl}
        onChange={handleChange}
        placeholder="img url"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="description"
        rows="4"
      />
      <button type="submit">Add book</button>
    </form>
  )
}

export default AddBookForm
