import React, { useState } from "react";  
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import axios from 'axios';  
import './Main.css';
import Modal from "./Modal";
import Card from "./Card";
import Loader from "./Loader/Loader";
import Loadmore from "./Loadmore";
function googleBooksSearch() {  
    const [book, setBook] = useState(""); 
    const [allres, setAll] = useState("0");  
    const [books, setBooks] = useState([]);  
    const [subject, setSubject] = useState("");
    const [order,setOrder]=useState("relevance");
    const [isloading,setIsloading]=useState(false);
    const [isbooks,setIsbooks]=useState(false);

    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    } 

    function handleSubmit(event) {  
        setIsloading(true)
        event.preventDefault();  
        let p = "https://www.googleapis.com/books/v1/volumes?q=" + book + subject + "&key=AIzaSyCCeAADHLeOU5yt5BiF1kGuoAiwDgAF7Pg&startIndex="+start+"&maxResults=30&orderBy="+order
        axios.get(p)  
            .then(data => {  
                console.log(p);  
                console.log(data.data.items);
                if(start==0){
                    setAll(data.data.totalItems);
                }
                setBooks(books.concat(data.data.items))
                setIsloading(false)
                setIsbooks(true)
            })  
            .catch(err=>console.log(err))
    }  
    const [start,setStart]=useState(0);

    function loadMore2(){
        setStart(start+30)
}
    function scroller() {
    window.scrollTo(0, 0);
    }
    return (  
        <form  onSubmit={handleSubmit}>
        <div className="main-head">
        <div className="header">
            <div>
            <div className="head">Search for books</div>
           
           <div className="search">  
               <div>  
                   <input className="firstinput" onChange={handleChange} placeholder="Type something..." type="text" />  
               </div>  
               <div>
                   <input className="secondinput" type="submit"value="🔍"   
                onClick={()=>{setBooks([]);setStart(0);scroller()}}/>  

               </div>  
           </div>  
    <form id='some-form'>
    <div className="selects">
   <div className="categories">
       <div>Categories</div>
       <select onChange={(e) => {setSubject(e.target.value);setBooks([]);setStart(0);scroller()}}  onClick={handleSubmit}>
           <option value="">all</option>
           <option value=":subject:art">art</option>
           <option value=":subject:biography">biography</option>
           <option value=":subject:computers">computers</option>
           <option value=":subject:history">history</option>
           <option value=":subject:medical">medical</option>
           <option value=":subject:poetry">poetry</option>
       </select> 
   </div>
   <div className="sorting">
       <div>Sorting by</div>
       <select  onChange={(e) => {setOrder(e.target.value);setBooks([]);setStart(0);scroller()}} onClick={handleSubmit}>
           <option value="relevance">relevance</option>
           <option value="newest">newest</option>
       </select> 
   </div>
   </div>
    </form>
  
</div>
        </div>  
        </div>
        <div className="foundRes">Found {allres} results</div>
      
            {isloading?<Loader/>:null}
        <Router>
          <Routes>
            <Route exact path="/" element={<Card res={books}/>} />
            <Route exact path="/modal" element={<Modal/>} />
          </Routes>
        </Router>
            {isbooks?<Loadmore loadMore2={loadMore2}/>:null}
            </form>  
  
    )  
}  
  
export default googleBooksSearch  
