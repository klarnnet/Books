import React from "react";
import {Link} from 'react-router-dom'
const Card = ({ res }) => {
    return (
            <div className="container"> 
                <div className="cards">  
                    {res.map(book => ( 
        <Link  style={{ color: 'inherit', textDecoration: 'inherit'}} to="/modal" state = {{ book : book }}>
                        
                        <div className="card">

                            <div className='cardin'> 
                                <div className='image'>
                                <img  src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />  
                                </div>
                                <div className="text-card">  
                                    <p>{book.volumeInfo.categories!==undefined?
                                    (String(book.volumeInfo.categories).split(' ')[0].slice(-1)==','?
                                    String(book.volumeInfo.categories).split(' ')[0].slice(0,-1):
                                    String(book.volumeInfo.categories).split(' ')[0]):''}</p>
                                    <h5 className="card-title">{book.volumeInfo.title}</h5>  
                                    <p>{book.volumeInfo.authors!==undefined?String(book.volumeInfo.authors ):''}</p>
                                </div>  
                            </div>  
                        </div> 
            </Link>
                    ))}  

                </div> 
            </div> 
    )
}
export default Card;