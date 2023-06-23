

export default function NotFound() {
    return (
        <div>
           <span>Oops!</span>
           <p> We can't seem to find the page you're looking for.</p>


           <style jsx>{`
            span {
                display: inline-block;
                font-size: 70px;
                margin-bottom: 20px;
            }
            p {
                font-size: 20px;
            }
            
            `}

           </style>
        </div>
    );
}

