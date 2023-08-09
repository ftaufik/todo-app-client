import { useNavigate } from "react-router-dom";
import Box from "../../components/Box";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if(!userId){
      navigate('/');
    }
  })

  function handleLogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    navigate('/');
  }
  return (
    <div className="h-screen w-screen bg-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-center h-screen">
            <div className="flex mb-3 items-center justify-center">
              <h1 className="text-white text-2xl font-bold leading-10">Hello, <span className="text-lime-400">{username}</span></h1>
               <button
                type="submit"
                onClick={handleLogout}
                className="flex ms-3 w-1/4 h-8 justify-center pt-0.5 text-center rounded-md bg-indigo-600 px-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Logout
              </button>
            </div>
            <Box/>
        </div>
    </div>
  )
}
