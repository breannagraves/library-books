import { useEffect, useState } from 'react'

export const UnavailBooks = () => {
    const [bookData, setBookData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3002/books/unavail/")
            .then((res) => res.json())
            .then((book) => {
                console.log(book, "bookData")
                setBookData(book)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const CheckIn = (e) => {
        let bookID = e.target.getAttribute("data-id")
        console.log(bookID)
        console.log(bookID)
        const currBook = bookData.find((book) => {
            return book.id === bookID
        });
        currBook.avail = true;

        console.log(currBook)
        fetch(`http://localhost:3002/books/${bookID}`, {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
                },
            body: JSON.stringify(currBook)
            
        })
        .then(() => {
            const updatedBookData = bookData.filter((book) => {
                return book.id !== bookID
            });
            setBookData(updatedBookData);
        })
    }
    
    return (
        <>
            <div><h2>Books Available For Checkout</h2></div>

            <table style={{ width: 1000 }}>
                {bookData.length > 0 && bookData.map((book) => {
                    return (
                        <>
                            <tr key={(book.id)}>
                                
                                <td><h3>Id:</h3> {book.id} </td>
                                <td><h3>Title:</h3> {book.title}</td>
                                <td><h3>Author:</h3> {book.author} </td>
                                <td><h3>Publisher:</h3> {book.publisher}</td>
                                <td><h3>ISBN:</h3> {book.isbn}</td>
                                <td><button data-id={book.id} onClick={CheckIn} >Check-In</button></td>
                                
                            </tr>
                        </>
                    )
                })}

            </table>
        </>

    )
}


