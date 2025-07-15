import React, { useEffect } from "react";
import logo from "/logo.png";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/Services/login";
import { addUserData } from "@/features/user/userFeatures";

function Header({user}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      console.log("Printing From Header User Found");
    }
    else{
      console.log("Printing From Header User Not Found");
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response.statusCode == 200) {
        dispatch(addUserData(""));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      id="printHeader"
      className="flex justify-between px-10 py-5 shadow-md items-center"
    >
      <img src={logo} alt="logo" width={100} height={100} />
      {user ? (
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </Button>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <Link to="/auth/sign-in">
          {/* <Button>Get Started</Button> */}
          <button class="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:shadow-pink-500/50 transition duration-300 hover:scale-105">
  Login
</button>

        </Link>
      )}
    </div>
  );
}

export default Header;
