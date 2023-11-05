import React, { useState } from 'react';
import usersData from '../../Data/customer.json'; // Import the JSON file
import userDetail from '../../Data/Account.json';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../Resource/loginImage/loginImg.jpg';


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userID,setUserID] = useState('');  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    for(let i = 0; i < usersData.customers.length; i++){  
        
        if(usersData.customers[i].email === email){
            if(usersData.customers[i].Password === password){
                setUserID(usersData.customers[i].customerID);
                localStorage.setItem('user', JSON.stringify(usersData.customers[i]));
                for(let j = 0; j < userDetail.accounts.length; j++){
                    if(userDetail.accounts[j].customerID === userID){
                        localStorage.setItem('account', JSON.stringify(userDetail.accounts[j]));
                        navigate('/');
                        window.location.reload();

                        break;

                    }
                }
                break;
            }
            else{
                console.log("wrong password");
                break;
            }
            
        }
        else{
            console.log("Login Failed");
        }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4">
        <img src={loginImage} alt="Login Image" className="w-full h-120 object-cover" />
      </div>
      <div className="w-1/2  flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleFormSubmit} className="">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded-md"
          />
          <div className=" justify-between items-center">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <button
              type="submit"
              className=" bg-westpac-red text-white rounded-md p-2 hover:bg-westpac-red"
            >
              Login
            </button>
          </div>
        </form>

        <div>
          <a>Email : JohnDoe@gmail.com</a>
          <br />
          <a>Password : password123</a>
        </div>
      </div>
    </div>

  );
}

export default Login;
