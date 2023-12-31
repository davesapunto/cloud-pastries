import Link from "next/link";
const links = ["Home", "Products", "About", "Contacts"]

export default function Header(){
    return(
    <div>
        <nav className = "bg-neutral-950 flex items-center w-screen h-20">

        

            <p className = "text-yellow-200 font-semibold text-2xl ml-20"> Paccino's </p>

            <ul className ="list-none text-white mx-auto px-8">
                <li>
                    <Link className = "p-3 mx-6 hover:bg-neutral-500 active:bg-neutral-600 py-3" href = "/">Home</Link>
                    <Link className = "p-3 mx-6 hover:bg-neutral-500 active:bg-neutral-600 py-3" href = "/products">Products</Link>
                    <Link className = "p-3 mx-6 hover:bg-neutral-500 active:bg-neutral-600 py-3" href = "/about">About</Link>
                    <Link className = "p-3 mx-6 hover:bg-neutral-500 active:bg-neutral-600 py-3" href = "/contacts">Contacts</Link>
                </li>
            </ul>
        
            <button className = "hover:bg-neutral-500 active:bg-neutral-600 py-3">
            <svg xmlns= "http://www.w3.org/2000/svg" 
                fill= "none" 
                viewBox= "0 0 24 24" 
                stroke-width= "1.5" 
                stroke= "currentColor" 
                className= "w-6 h-6 text-white mx-8">
                <path stroke-linecap= "round" 
                stroke-linejoin= "round" 
                d= "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        
            </button>
            <button className = "hover:bg-neutral-500 active:bg-neutral-600 py-3">
            <svg xmlns= "http://www.w3.org/2000/svg" 
                fill= "none" 
                viewBox= "0 0 24 24" 
                stroke-width= "1.5" 
                stroke= "currentColor" 
                className= "w-6 h-6 text-white mx-8">
                <path stroke-linecap= "round" 
                stroke-linejoin= "round" 
                d= "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg> 
            </button>  
        </nav>
    </div>
    );
}
