'use client'
import React from "react";
import { ReactDOM } from "react";
import { books } from "./components/books";
import { Book } from "./components/Book";



const BookList = () => {

    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        console.log(book);

    }

    return <section className="booklist">
        <>
        <h1>Amazon</h1>
        {books.map((book,index) => {
            return <Book number={index+1} key={book.id} {...book} getBook={getBook} />
            
        })}
        </>

    </section>

}

export default BookList;






