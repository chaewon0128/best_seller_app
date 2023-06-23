import { useRouter } from "next/router";

export default function IndexPage({results}) {
const router = useRouter();
const onNavigate =(encodeName, title) => {
  router.push({
    pathname: `/list/${title}/${encodeName}`,
    }
  )
}

  return <div>
<h1>The New York Times Best Seller Explorer</h1>

<div className="book_list">
{results?.map((book) => (
<div key={book["list_name_encoded"]} onClick={()=> onNavigate(book["list_name_encoded"], book["display_name"])} className="book_name" >{book["display_name"]} ➡️ </div>
))}
</div>


<style jsx global>{`
  h1 {
    margin-top: 10px;
    font-size: 34px;
    text-align: center;
    font-weight: 700;
  }
  .book_list {
    padding-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px
  }
.book_name {
  display: inline-block;
  padding: 15px 10px;
  margin-bottom: 10px;
  box-shadow: 5px 5px 10px #bdc3c7;
  cursor: pointer;
}
.book_name:hover {
  background-color: #22a6b3 ;
  color: #FFFFFF;
  transition: all 0.5s ease-out;
}
  
  `}</style>
  </div>;
}


export async function getServerSideProps() {

const { results } = await (
  await fetch('https://books-api.nomadcoders.workers.dev/lists')
  ).json();
  return {

    props: {
      results,
    }
  }
}