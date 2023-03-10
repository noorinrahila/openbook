import React ,{useState}from 'react'
import Modal from "./Modal";
const Card = ({book}) => {
  const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
  console.log(book);
  return (
   <>
   {
    book.map((item)=>{
      let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
      if (thumbnail!== undefined ) {
        return(
          <> 
          <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
          <img src={thumbnail} alt="" />
          <div className="bottom">
              <h1 className="title">{item.volumeInfo.title}</h1>
          </div>
         </div>
         <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
         </>
        )
      }
      
    })
   }
  
   </>
  )
}

export default Card;