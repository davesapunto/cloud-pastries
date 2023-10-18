import Link from 'next/link';

export default function Signin(){
    return(
    <div className = "w-screen h-[150vh] md:h-[75vh]">
        <h1 className = "text-2xl pt-20 text-center">Sign in</h1>
        <div className = "grid grid-cols-1 justify-items-center md:flex md:justify-center gap-[8rem] pt-20">
            <div className = "">
                <h1 className = "pt-4 pb-2 text-lg">Email Address:</h1>
                <input type = "text" className = "border rounded border-[#BDBDBD] pr-16" id = "userName"></input>
                <h1 className = "pt-4 pb-2 text-lg">Password:</h1>
                <input type = "password" className = "border rounded border-[#BDBDBD] pr-16" id = "password"></input>
                <div className = "">
                <button className = "rounded-md hover:bg-[#aa8a40] active:bg-[#977b39] bg-[#BD9A48] mt-6 p-2 text-center text-white">Sign in</button>
                <button className = "ml-4 px-2 text-lg active:bg-[#cccccc] hover:bg-[#e5e5e5] hover:rounded">Forgot Password?</button>
                </div>
            </div>
            <div className = " w-96 h-[18rem] bg-[#F8F5F0] border border-[#BDBDBD]">
                <h1 className = "text-lg pl-4 pt-4">New Customer?</h1>
                <h1 className = "text-sm pl-4 pt-4">Create an account with us and you'll able to:</h1>
                <li className = "text-sm pl-4 pt-4">Check out faster</li>
                <li className = "text-sm pl-4 pt-4">Access your order history</li>
                <li className = "text-sm pl-4 pt-4">Save items to your cart</li>
                <button className = "rounded-md hover:bg-[#aa8a40] active:bg-[#977b39] bg-[#BD9A48] mt-6 ml-4 p-2 text-center text-white">Create Account</button>
            </div>
        </div>
    </div>
    )
}