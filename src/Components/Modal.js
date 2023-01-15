import React from 'react';
import {Link,useLocation} from 'react-router-dom'
const Modal=()=>{
    const { state: { book } = {} } = useLocation();
    return(            <div className="modal-window">
    <div className="box">
    <div className="left-box">
        <img  src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  
    </div>
    <div className="right-box">
         <Link to='/'><button className="close">close</button></Link>
        <p>{book.volumeInfo.categories}</p>
        <h1>{book.volumeInfo.title}</h1>
        <p>{String(book.volumeInfo.authors)}</p>
        <div className="desc">{book.volumeInfo.description!==undefined?book.volumeInfo.description:''}</div>
        <div className='end'> &emsp; </div>
    </div>
    </div>
   
</div>
    )
}
export default Modal;