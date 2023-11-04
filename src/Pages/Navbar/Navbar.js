import React, { useEffect, useState } from "react";
import logo from "../../Resource/logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {

  ///Toggle Menu (Collapsed)///

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);


  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      setIsLogin(true);
    }
    else {
      setIsLogin(false);
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('account');
    setIsLogin(false);
    window.location.reload();
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };


  return (
    <div>
      <div
        className="w-5 bg-da1710 w-full h-20"
        style={{ backgroundColor: '#DA1710' }}
      >
      </div>
      {/* empty red bar */}
      <div className="flex items-center">
        <div className="w-1/3 border-r-2  border-white-500 ml-4 mt-4 pr-9 sm:w-48 max-w-3xl md:w-64 max-w-4xl lg:w-96 max-w-7xl" >
          <img src={logo} alt="logo" className="object-fill w-full" />
        </div>


        {!isMenuOpen && (
          <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="ml-auto inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#DA1710" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
        )
        }
        {
          isMenuOpen && (

            <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="ml-auto inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#DA1710" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-red">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )
        }


        {/*  !!!NONE MOBILE!!! */}
        <div className={`w-2/3  items-center pl-10 pt-5 h-full w-auto hidden md:flex`}>
          <ul className="flex  h-24 items-center">
            <li className=" ml-4 items-center border-b-2 border-white hover:border-red-500 sm:text-xl md:text-2xl-large lg:text-3xl  ">
              <Link to="/">Home</Link>
            </li>
            <li className=" ml-9 mr-4 items-center border-b-2 border-white hover:border-red-500 sm:text-xl md:text-2xl-large lg:text-3xl">
              <Link to="PriceChecker">Purchase Planner</Link>
            </li>
            <li className=" ml-9 mr-4 items-center border-b-2 border-white hover:border-red-500 sm:text-xl md:text-2xl-large lg:text-3xl">
              <Link to="PlanList">Plans List</Link>
            </li>
            {
              isLogin ? (
                <li className="ml-9 mr-4 items-center border-b-2 border-white hover:border-red-500 sm:text-xl md:text-2xl-large lg:text-3xl">
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              ) : (
                <li className="ml-9 mr-4 items-center border-b-2 border-white hover:border-red-500 sm:text-xl md:text-2xl-large lg:text-3xl">

                  <Link to="/login">Login</Link>
                </li>
              )
            }


          </ul>

        </div>

      </div>

      {/*  !!!!!MOBILE!!!! */}

      {isMenuOpen && (
        <div className=" items-center pl-10 pt-5 h-full md:hidden">
          <ul className="flex flex-col items-center  h-24">
            <li className="w-full my-4 items-center border-b-2 border-white hover:border-red-500 sm:text-xl md:text-2xl-large lg:text-3xl">
              <Link to="/">Home</Link>
            </li>
            <li className="w-full my-4 items-center border-b-2 border-white hover:border-red-500 sm:text-xl md:text-2xl-large lg:text-3xl">
              <Link to="/PriceChecker">Purchase Planner</Link>
            </li>
            <li className=" ml-9 mr-4 items-center border-b-2 border-white hover:border-red-500 sm:text-xl md:text-2xl-large lg:text-3xl">
              <Link to="PlanList">Plans List</Link>
            </li>
          </ul>
        </div>
      )
      }

    </div>



  );
};

export default Navbar;

/*
TODO LIST

now put style on menu bar for mobile

*/
