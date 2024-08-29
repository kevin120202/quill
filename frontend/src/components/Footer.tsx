import { Link } from "react-router-dom"
import logo from "../assets/quill-high-resolution-logo-transparent.png"

function Footer() {
    return (
        <div className="container mx-auto flex flex-col gap-4 mt-40 pb-8 text-center">
            <img src={logo} alt="" className="md:h-20 h-14 w-auto object-contain" />
            <div className="flex justify-center gap-4">
                <Link to="/" className="text-2xl">Home</Link>
                <Link to="/login" className="text-2xl">Login</Link>
                <Link to="/register" className="text-2xl">Register</Link>
            </div>
            <p>Made with 💜 in Chicago</p>
        </div>
    )
}

export default Footer