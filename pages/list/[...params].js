import { useEffect, useState } from "react";

export default function Detail( {params}) {
const [title, id] = params || [];
const [lists, setList] = useState([])
const onNavigate = (url) => {
location.assign(url)
}
useEffect(()=> {
    (async () => {
       await (await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)).json()
       .then(json => 
        setList(json.results)
        )
    })()
},[])
    

    return (
        <div>
           <h2>{title}</h2>
            <div className="detail">
           {lists.books?.map((book)=> (
           <div className="item" key={book.rank}>
            <div className="book_image" />
                <img src={book.book_image} alt={book.title}/>
               <span>{`${book.rank}. ${book.title}`}</span>
               <p>{book.author}</p>
               <button onClick={()=> onNavigate(book["amazon_product_url"])}>Buy now ➡️ </button>
           </div>
           
           )) || <div className="loading">loading...</div> } </div>  

           <style jsx>{`
           .loading {
            padding: 70px;
            text-align: center;
            font-size: 30px;
           }
            h2 {
                font-size: 2.5em;
                text-align: center;
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
                position: relative;
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

export function getServerSideProps( {params : {params}}) {

    return {
        props : {params,},
    }
}