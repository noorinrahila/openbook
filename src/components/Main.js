import React, { useState } from 'react'
import Card from './Card';
import axios from 'axios';

const Main = () => {
  const[search,setSearch]= useState("");
  const [bookData,setData]=useState([]);
  const searchBook=(evt)=>{
    if(evt.key === "Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCcujqJht_huFgPTBk1QIh1F-dfIaO09kg'+'&maxResults=40')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err))
    }
  }
  return (
<>
<div className="header">
    <div className="row1">
        <h1>A room without books is like <br />a body without soul</h1>

    </div>
    <div className="row2">
        <h2>Find Your Book</h2>
        <div className="search">
            <input type="text" placeholder="Enter Book Name" 
            value={search} onChange={e=>setSearch(e.target.value)}
           onKeyPress={searchBook}/>
            <button> <i className="fas fa-search"></i></button><br />
        
        </div>
        <div className="image">
        <img src="./images/bg2.webp" alt="" />
        </div>
    </div>
</div>
<div className="container">
{
    <Card book={bookData}/>
}
</div>
</>
   
  )
}

export default Main