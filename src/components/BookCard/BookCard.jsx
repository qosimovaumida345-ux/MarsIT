import './BookCard.css'

function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className="book-card-image">
        <img src={book.imgUrl || placeholderImage} alt={book.name} />
      </div>
      <div className="book-card-content">
        <h3>{book.name}</h3>
        <p className="book-card-author">{book.author}</p>
        <p>{book.description}</p>
      </div>
    </article>
  )
}

export default BookCard
