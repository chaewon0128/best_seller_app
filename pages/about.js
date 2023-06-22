
export default function About() {
    return (
        <main>
            <div className="content">
            <h2>About Us</h2>
            <p>Welcome to the official explorer for The New York Times Best Seller list explorer. <br />
            We hope you enjoy your stay!</p> 
            </div>

            <style jsx>{`
                .content {       
                       max-width: 700px; 
                       margin: 0 auto;
                       padding: 40px 30px;
                       margin-top: 30px;
                       box-shadow: 5px 5px 30px #bdc3c7;
                }
                h2 {
                    font-size: 60px;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 16px;
                    line-height: 40px;
          
                }
                `}

            </style>
        </main>
    );
}

