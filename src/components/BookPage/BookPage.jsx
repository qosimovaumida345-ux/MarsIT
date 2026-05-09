import { useState } from 'react'
import AddBookForm from '../AddBookForm/AddBookForm.jsx'
import BookCard from '../BookCard/BookCard.jsx'
import tafsiriHilolImage from '../../assets/tafsiri-hilol.png'
import ijtimoiyImage from '../../assets/ijtimoiy-odoblar.png'
import ulamolarImage from '../../assets/ulamolar-nazdida.png'
import oltinSilsilaImage from '../../assets/dunyoning-ishlari.png'
import ikkiEshikImage from '../../assets/ikki-eshik.png'
import otkanKunlar1Image from '../../assets/otkan-kunlar1.png'
import otkanKunlar2Image from '../../assets/otkan-kunlar2.png'
import './BookPage.css'

const desc =
  "Roman XIX asr voqealarini o'z ichiga olgan. Murakkab tarixiy hodisalar romanining bosh qahramonlari Otabek va Kumushbibining fojiaviy sevgisi qissa asarlarida ifodalangan."

const initialBooks = [
  {
    id: 1,
    name: 'Tafsiri Hilol',
    author: 'Shayx Muhammad Sodiq Muhammad Yusuf',
    imgUrl: tafsiriHilolImage,
    description: desc,
  },
  {
    id: 2,
    name: 'Ijtimoiy Odoblar',
    author: 'Shayx Muhammad Sodiq Muhammad Yusuf',
    imgUrl: ijtimoiyImage,
    description: desc,
  },
  {
    id: 3,
    name: 'Ulamolar Nazdida Vaqtning Qadri',
    author: 'Shayx Muhammad Sodiq Muhammad Yusuf',
    imgUrl: ulamolarImage,
    description: desc,
  },
  {
    id: 4,
    name: 'Oltin Silsila',
    author: 'Shayx Muhammad Sodiq Muhammad Yusuf',
    imgUrl: oltinSilsilaImage,
    description: desc,
  },
  {
    id: 5,
    name: "Ikki Eshik Orasi",
    author: 'Abdulla Qodiriy',
    imgUrl: ikkiEshikImage,
    description: desc,
  },
  {
    id: 6,
    name: "O'tkan Kunlar",
    author: 'Abdulla Qodiriy',
    imgUrl: otkanKunlar1Image,
    description: desc,
  },
  {
    id: 7,
    name: "O'tkan Kunlar",
    author: 'Abdulla Qodiriy',
    imgUrl: otkanKunlar2Image,
    description: desc,
  },
  {
    id: 8,
    name: "O'tkan Kunlar",
    author: 'Abdulla Qodiriy',
    imgUrl: otkanKunlar1Image,
    description: desc,
  },
]

function BookPage() {
  const [books, setBooks] = useState(initialBooks)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddBook = async (book) => {
    try {
      const response = await fetch('https://marsit.onrender.com/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      })

      if (!response.ok) {
        throw new Error(`Failed to add book: ${response.status}`)
      }

      const newBook = await response.json()
      console.log('Book saved to database:', newBook)

      setBooks((prevBooks) => [newBook, ...prevBooks])
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error adding book:', error)
      alert('Failed to add book. Please try again.')
    }
  }

  return (
    <div className="book-page">
      <div className="book-page-header">
        <h1>MY Books</h1>
        <button className="add-book-button" onClick={() => setIsModalOpen(true)}>
          Add Book
        </button>
      </div>

      <div className="book-list-panel">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <AddBookForm onAddBook={handleAddBook} />
          </div>
        </div>
      )}
    </div>
  )
}

export default BookPage