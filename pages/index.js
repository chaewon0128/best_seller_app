import Link from "next/link";

export default function IndexPage({results}) {

console.log(results[0])
  return <div>
<h1>The New York Times Best Seller Explorer</h1>

<div className="book_list">
{results?.map((book) => (
<Link className="book_name" href={`/list/[id]`}>{book["display_name"]} ➡️ </Link>
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