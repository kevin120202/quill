import { Link } from "react-router-dom"
import logo from "../assets/quill-high-resolution-logo-transparent.png"

function Login() {
    return (
        <div className="container mx-auto flex flex-col gap-10">
            <nav className="flex justify-between items-center py-8 mx-auto container">
                <Link to="/">
                    <img src={logo} alt="" className="md:h-20 h-14 w-auto object-contain" />
                </Link>
                <div className="flex gap-6">
                    <Link
                        to="/login"
                        className="px-4 py-2 border border-blue-600 text-blue-600 bg-transparent rounded hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-gray-700 transition duration-300"
                    >
                        Register
                    </Link>
                </div>
            </nav>
            <h1 className="text-center text-3xl md:text-4xl font-bold">Welcome Back!</h1>
            <form className="flex flex-col gap-6 items-center w-[60%] mx-auto">
                <label htmlFor="" className="text-gray-700 text-sm font-bold w-full">
                    Email
                    <input type="email" className="border border-rounded w-full py-1 px-2 font-normal border-black"
                    />
                </label>

                <label htmlFor="" className="text-gray-700 text-sm font-bold w-full">
                    Password
                    <input type="password" className="border border-rounded w-full py-1 px-2 font-normal border-black"
                    />
                </label>

                <button
                    type="submit"
                    className=" px-6 py-2 font-bold hover:cursor-pointer text-xl disabled:bg-gray-500 w-full bg-blue-600 text-white rounded hover:bg-gray-700 transition duration-300"
                >Submit</button>
            </form>
        </div>
    )
}

export default Login