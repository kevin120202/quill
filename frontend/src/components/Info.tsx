import { Link } from "react-router-dom"
import img_1 from "../assets/undraw_Mindfulness_8gqa.png"
import img_2 from "../assets/undraw_Sorting_thoughts_re_fgli.png"
import img_3 from "../assets/undraw_Taking_notes_re_bnaf.png"

function Info() {
    return (
        <div className="container mx-auto min-h-screen mt-1" >
            <h2 className="text-center text-4xl md:text-5xl font-semibold">Finally, a <span className="bg-orange-400 px-3">simple and easy</span> to use journal app</h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mt-32" >
                <div className="text-center md:text-left md:w-[60%]">
                    <p className="font-semibold text-3xl md:text-4xl mb-2">Write all your journals in a few clicks</p>
                    <p>Unlock the simplicity of online journaling - say goodbye to the hassle of pen and paper and hello to effortless journaling with a just a few clicks</p>
                </div>
                <img src={img_1} alt="" className="none md:block md:h-80 h-40 w-auto object-contain" />
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mt-32">
                <img src={img_2} alt="" className="none md:block md:h-80 h-40 w-auto object-contain" />
                <div className="text-center md:text-left md:w-[60%]">
                    <p className="font-semibold text-3xl md:text-4xl mb-2">Beautifully displayed and neatly designed</p>
                    <p>Not just words on a screen - our journals are beautifully displayed and neatly organized</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mt-32">
                <div className="text-center md:text-left md:w-[60%]">
                    <p className="font-semibold text-3xl md:text-4xl mb-2">Create and reflect from anywhere in the world</p>
                    <p>Wheater you're at home or exploring the far corners of the world, create and reflext on your experiences, thoughts, and emotions from anywhere on the globe</p>
                </div>
                <img src={img_3} alt="" className="none md:block md:h-80 h-40 w-auto object-contain" />
            </div>

            <div className="mt-32 border-2 w-[80%] mx-auto flex flex-col items-center py-16 bg-blue-600 gap-7 rounded-3xl">
                <p className="text-white font-bold text-3xl md:text-4xl">Get Started Now</p>
                <Link
                    to="/register"
                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-gray-700 transition duration-300"
                >
                    Get Started
                </Link>
            </div>

        </div>
    )
}

export default Info