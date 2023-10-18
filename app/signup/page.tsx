'use client'
import Link from 'next/link';
import { initFirebase } from '../config/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/navigation';

export default function Signup(){

    const app = initFirebase();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    if(user){
        router.push("/");
    }

    const signIn = async () => {

        const result = await signInWithPopup(auth, provider);
    }

    return(
        <div className = "w-screen h-[125vh] md:h-[110vh]">
            <h1 className = "text-3xl pt-20 text-center">Create an Account</h1>
            <div className = "grid grid-cols-1 w-80  mx-auto">
                <h1 className = "pt-8 pb-2 text-lg">First Name:</h1>
                <input type = "text" className = "border rounded border-[#BDBDBD]" id = "firstName"></input>
                <h1 className = "pt-8 pb-2 text-lg">Last Name:</h1>
                <input type = "text" className = "border rounded border-[#BDBDBD]" id = "lastName"></input>
                <h1 className = "pt-8 pb-2 text-lg">Username:</h1>
                <input type = "text" className = "border rounded border-[#BDBDBD]" id = "userName"></input>
                <h1 className = "pt-8 pb-2 text-lg">Password:</h1>
                <input type = "password" className = "border rounded border-[#BDBDBD]" id = "password"></input>
                <h1 className = "pt-8 pb-2 text-lg">Confirm Password:</h1>
                <input type = "password" className = "border rounded border-[#BDBDBD]" id = "confirmPassword"></input>
                <button className = "rounded-md hover:bg-[#aa8a40] active:bg-[#977b39] bg-[#BD9A48] mt-8 py-3 text-center text-xl text-white shadow-xl">Register</button>
                <div className=" flex flex-1 justify-center items-center mt-8">
                    <hr className='w-full border-black ' />
                    <p className=" text-grayish sm:px-3 p-1 sm:text-medium text-xs sm:font-normal font-small">or</p>
                    <hr className='w-full border-black' />
                </div>               
                <button onClick = {signIn} className = "border border-black rounded-md active:bg-[#cccccc] hover:bg-[#e5e5e5] bg-[#FFFFFF] flex justify-center mt-8 py-3 text-center text-xl text-black shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" className = "mr-1">
                    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
                    </svg>
                    Sign in with Google   
                </button>
                <button className = "border border-black rounded-md active:bg-[#cccccc] hover:bg-[#e5e5e5] bg-[#FFFFFF] flex justify-center mt-8 py-3 text-center text-xl text-black shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className = "mr-1">
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg>
                Sign in with Facebook
                </button>
                <p className = "text-sm mt-4 text-center">By creating an account, you agree to our Terms of Use & Privacy Policy</p>
                <button className = "py-2 w-64 place-self-center text-sm mt-4 text-center active:bg-[#cccccc] hover:bg-[#e5e5e5] hover:rounded-md">Already have an account? Log in</button>
            </div>
        </div>
    )
}
