import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './user.css'
function User() {
    const navigate = useNavigate();

    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit=(event)=> {
        const user={id:userid,password:password}
        localStorage.setItem("id",userid)
        navigate("/sched");

        event.preventDefault();
        
      }
    return(
  <section>
    <div className="container">
    <div className="user signinBx">
        <div className="formBx">
          <form >
            <h2>Create an account</h2>
            <input type="text"  placeholder="user id"   onChange={(e)=>setUserid(e.target.value)}/>
            <input type="email"  placeholder="password"  onChange={(e)=>setPassword(e.target.value)}/>
            <input name="" type="submit" value="Sign Up" onClick={handleSubmit}/>
            <br></br>
            
          </form>
        </div>
    </div>
    </div>

  </section>
    );
  }
  
  export default User;