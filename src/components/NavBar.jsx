import { Link } from "react-router-dom";
export default function NavBar(){
   return(
      <div className="flex justify-between items-center px-6 py-7 bg-[#FFF7ED]">
         <Link to="/" className="font-bold text-3xl">#VANLIFE</Link>
         <div className="flex gap-5">
            <Link to="/about" className="text-gray-500 border-b-1 border-transparent hover:border-black hover:text-black transition duration-200">About</Link>
            <Link to="/vans" className="text-gray-500 border-b-1 border-transparent hover:border-black hover:text-black transition duration-200">Vans</Link>
         </div>
      </div>
   )
}