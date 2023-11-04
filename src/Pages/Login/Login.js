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
    <div className='flex '>
      <div className='w-1/2'>
        <img src={loginImage}></img>
      </div>
      <div className='w-1/2'>
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        </div>
    </div>
  );
}

export default Login;