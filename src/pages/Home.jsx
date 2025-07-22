import img from "../assets/homeBg.png"
export default function Home() {
   return (
   <div className="before:h-full before:absolute before:w-full before:bg-[#0000004c] before:left-0 before:top-0 before:z-[1] relative bg-[url('./assets/homeBg.png')] bg-cover bg-center h-[calc(100vh-95px)] flex items-center justify-center flex-col p-5">
      <h1 className="text-white text-5xl font-bold relative z-[2]">You got the travel plans, we got the travel vans.</h1>
      <p className="text-white text-lg my-10 relative z-[2]">
         Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
      </p>
      <button className="bg-[#FF8C38] text-white min-w-[400px] max-w-[800px] w-full cursor-pointer px-6 py-3 rounded relative z-[2] hover:bg-[#e67e22] transition duration-200">
         Find your van
      </button>
   </div>
   );
}