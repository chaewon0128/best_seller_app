import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();

    return (
        <nav>
        <Link className={router.pathname === "/" ? "active" : ""} href={"/"}>Home</Link>
         <Link className={router.pathname === "/about" ? "active" : ""} href={"/about"}>About</Link>

            <style jsx global>{`
                nav {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  height: 40px;
                  font-size: 30px;
                  padding: 10px 20px;
                }
                a {
                    color: #353b48;
                }
               .active {
                border-bottom: 2px double black;
                 
                }
                `}
            </style>
        </nav>

    );
}

