import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Home() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [name, setName] = useState();
  const [sname, setSname] = useState();
  const [password, setPassword] = useState();
  const [days2, setDays2] = useState();
  const [beds, setBeds] = useState();
  const [id, setId] = useState();
  const [days, setDays] = useState();
  const [ast, setAst] = useState();
  const [spacename, setSpacename] = useState();
  const [age, setAge] = useState();
  const [employeeData,setEmployeedata] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const fun=(event)=>{
    const user={name:name,id:id,days:days,spacename:spacename,age:age}
    console.log(user)
    axios
    .post('http://localhost:4000/user-api/create-user', user)
    .then((response) => {
      console.log(response.data.message)
      alert(response.data.message)
    });
    event.preventDefault();
  }
  const create=(event)=>{
    const user={name:sname,days:days2,ast:ast,beds:beds,password:password}
    console.log(user)
    axios
    .post('http://localhost:4000/det-api/create', user)
    .then((response) => {
      console.log(response.data.message)
      alert(response.data.message)
    });
    event.preventDefault();
  }
  const clicked=(userid)=>{
    localStorage.setItem("id",userid)
    navigate("/sched");
  }
  useEffect(()=>{
    fun2()
  },[])
  const fun2=(event)=>{
    axios
    .post('http://localhost:4000/user-api/allusers',{})
    .then((response) => {
      console.log(response.data.message)
      setEmployeedata(response.data.message)

    });
  }
  return (
    <>
   
 <div className="navigation   d-block" >
	<button className="button" data-toggle="modal" data-target="#form" href="" onClick={handleShow}>
  ADD USER 
	</button>
</div>
<div className="navigation   d-block" >
	<button className="button" data-toggle="modal" data-target="#form" href="" onClick={handleShow2}>
  ADD Details 
	</button>
</div>
<Modal show={show2} onHide={handleClose2}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
        <form class="login">
        <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" onChange={(e)=>setSname(e.target.value)} placeholder="space station name"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="number" class="login__input"  onChange={(e)=>setBeds(e.target.value)} placeholder="no.of beds"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="number" class="login__input"  onChange={(e)=>setAst(e.target.value)} placeholder="no of astronauts"/>
				</div>	
       
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="number" class="login__input"  onChange={(e)=>setDays2(e.target.value)} placeholder="no of days"/>
				</div>
        <div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input"  onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
				</div>
			</form>
        


        </Modal.Body>
        <Modal.Footer>
          <button class="button login__submit">
					<span onClick={create} class="button__text">SAVE DETAILS</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
        </Modal.Footer>
      </Modal>



<div className='container h-75  d-block'>
<h1 className="title">List of Astronauts</h1>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Age</th>
            {/* <th>Days</th>
            <th>Space station</th> */}
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({ id, name, age, days,spacename }) => (
            <tr key={id}               onClick={()=>clicked(id)}
            >
              <td> 
                  {id}
              </td>
              <td>
                  {name}
              </td>
              <td>
               {age}
                
              </td>
              {/* <td>
               {days}
                
              </td>
              <td>
               {spacename}
                
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
</div>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
        <form class="login">
        <div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" onChange={(e)=>setId(e.target.value)} placeholder="Userid"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input"  onChange={(e)=>setName(e.target.value)} placeholder="User name / Email"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="number" class="login__input"  onChange={(e)=>setAge(e.target.value)} placeholder="Age"/>
				</div>	
       
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="text" class="login__input"  onChange={(e)=>setSpacename(e.target.value)} placeholder="Space station name"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="number" class="login__input" onChange={(e)=>setDays(e.target.value)} placeholder="Days"/>
				</div>
			</form>
        


        </Modal.Body>
        <Modal.Footer>
          <button class="button login__submit">
					<span onClick={fun} class="button__text">ADD USER</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
