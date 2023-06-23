import Nav from "./Nav";
import Seo from "./Seo";


export default function Layout({children}) {
    return (
        <>
        <Seo />
         <Nav />
         <main>{children}</main> 

        <style jsx global>{`
            main {
                max-width: 700px; 
                       margin: 0 auto;
                       padding: 40px 30px;
                       margin-top: 30px;
                       box-shadow: 5px 5px 30px #bdc3c7;
                       min-height: 10vh;
                       margin-bottom: 50px;
            }
            `}
            
        </style>
        </>
    );
}

