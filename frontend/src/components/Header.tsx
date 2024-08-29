import { Link } from "react-router-dom"
import logo from "../assets/quill-high-resolution-logo-transparent.png"

function Header() {
    return (
        <div className="container mx-auto min-h-screen">
            <nav className="flex justify-between items-center py-8 absolute container mx-auto left-0 right-0">
                <img src={logo} alt="" className="md:h-20 h-14 w-auto object-contain" />
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

            <div className="flex flex-col items-center gap-6 text-center min-h-screen justify-center ">
                <h1 className="text-4xl md:text-5xl font-bold space-y-2"><span className="bg-purple-500 px-3 text-white py-1">Mindful living</span> for the <span className="block">digital world</span></h1>
                <p className="md:text-lg">The ultimate bullet journal app to document, reflect, and embrace your personal journey</p>
                <div className="flex gap-6">
                    <Link
                        to="/register"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-gray-700 transition duration-300"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/info"
                        className="px-4 py-2 border border-blue-600 text-blue-600 bg-transparent rounded hover:bg-blue-600 hover:text-white transition duration-300"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header