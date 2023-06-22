import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Id() {
const router = useRouter()
const {id} = router.query;
const [lists, setList] = useState([])

useEffect(()=> {
    (async () => {
       await (await fetch(`https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction`)).json()
       .then(json =>setList(json.results))


    })()
},[])
    
    return (
        <div>
           <h2>{id}</h2>
           <div className="detail">
           {lists.books?.map((book)=> (
           <div className="item" key={book.rank}>
            <div className="book_image" />
                <img src={book.book_image} alt={book.title}/>
               <span>{book.title}</span>
               <p>{book.author}</p>
               <button >Buy now ➡️ </button>
           </div>
           
           ))}
           </div>


           <style jsx>{`

            h2 {
                font-size: 40px;
            }
            .detail {
                display: grid;
                 grid-template-columns: repeat(3,1fr);
                 gap: 10px
            }
        
            .item {
               
                height: 500px;
               display: flex;
               flex-flow: column;
    
               justify-content: space-between;
            }    
            img {
                width: 100%;
            }
            span {
                font-size: 20px;
            }
            p {
                color: #22a6b3 ;
            }
            button {
                border: none;
                box-shadow: 5px 5px 10px #bdc3c7;
                background-color: transparent;
                padding: 10px 10px;
                cursor: pointer;
            }

            button:hover {
                background-color: #22a6b3 ;
  color: #FFFFFF;
  transition: all 0.5s ease-out;
            }
            `}
           </style>
        </div>
    );
}

