import Header from "@/components/custom/Header";
import React, { useEffect } from "react";
import heroSnapshot from "@/assets/heroSnapshot.png";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaCircle, FaInfoCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { startUser } from "../../Services/login.js";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "@/features/user/userFeatures.js";

function HomePage() {
  const user = useSelector((state) => state.editUser.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    window.open(
      "https://github.com/AshikurRahman3/ai-resume-maker",
      "_blank"
    );
  };

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await startUser();
        if (response.statusCode == 200) {
          dispatch(addUserData(response.data));
        } else {
          dispatch(addUserData(""));
        }
      } catch (error) {
        console.log(
          "Printing from Home Page there was a error ->",
          error.message
        );
        dispatch(addUserData(""));
      }
    };
    fetchResponse();
  }, []);

  const hadnleGetStartedClick = () => {
    if (user) {
      console.log("Printing from Homepage User is There ");
      navigate("/dashboard");
    } else {
      console.log("Printing for Homepage User Not Found");
      navigate("/auth/sign-in");
    }
  };
  return (
    <>
      <Header user={user} />
      <section className="pt-24 pb-20 bg-white">
        <div className="px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl md:tracking-tight">
              <span>Kickstart</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-md lg:inline">
                your next career move
              </span>{" "}
              <span>with a standout resume.</span>
            </h1>

            <p className="px-0 mb-8 text-lg md:text-xl lg:px-24 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 font-medium">
              Think Less. Achieve More. AI Builds It Better.
            </p>

            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <a
  className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg font-semibold text-white rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 sm:w-auto sm:mb-0 hover:cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_rgba(236,72,153,0.7),0_0_20px_rgba(139,92,246,0.6)] transition-transform duration-300"
  onClick={hadnleGetStartedClick}
>
  Begin Now
  <svg
    className="w-5 h-5 ml-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
</a>

              <a
                onClick={handleClick}
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0 cursor-pointer"
              >
               Github
                <svg
  className="w-5 h-5 ml-1 text-transparent stroke-[1.8] drop-shadow-md"
  viewBox="0 0 24 24"
  fill="none"
  stroke="url(#neonGradient)"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="neonGradient" x1="0" y1="0" x2="100%" y2="0">
      <stop offset="0%" stopColor="#a855f7" />    {/* Purple */}
      <stop offset="50%" stopColor="#ec4899" />   {/* Pink */}
      <stop offset="100%" stopColor="#ef4444" />  {/* Red */}
    </linearGradient>
  </defs>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  />
</svg>

              </a>
            </div>
          </div>
          <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 bg-gradient-to-r from-green-400 to-purple-500 h-11 rounded-t-xl">
                  <div className="flex space-x-1.5">
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
                  </div>
                  <FaInfoCircle className="text-white hover:text-gray-300 transition duration-300 transform hover:rotate-45" />
                </div>
                <img
                  className="object-cover py-2 px-4 rounded-b-lg transition duration-300 transform hover:scale-105"
                  src={heroSnapshot}
                  alt="Dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white" aria-labelledby="footer-heading">
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 p-5 flex justify-between">
          <p className="text-xs leading-5 text-gray-500">
            &copy; 2025 Ai-Resume-Maker. All rights reserved.
          </p>
          <div>
            <Button variant="secondary" onClick={handleClick}>
              <FaGithub className="w-4 h-4 mr-1" />
              GitHub
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
