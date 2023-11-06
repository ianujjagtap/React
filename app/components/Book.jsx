 export const Book = (props) => {
    const {image,author,title,getBook,id,number}=props;
    const getSingleBook = () => {
        getBook(id)
    };

    return <article className="book">
        <h3 className="number">{'#'+ number}</h3>
        <img src={image} />
        <h2>{title}</h2>
        <button onClick={getSingleBook}>click me </button>
        <h3 className="author">{author} </h3>
    </article>
}
