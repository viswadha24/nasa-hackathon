import React,{useState,useEffect} from 'react';
import axios from "axios";

import './shed.css'
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}
function msToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  // 👇️ if seconds are greater than 30, round minutes up (optional)
  minutes = seconds >= 30 ? minutes + 1 : minutes;

  minutes = minutes % 60;

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  hours = hours % 24;

  return `${padTo2Digits(hours+3)}:${padTo2Digits(minutes)}`;
}
function Schedule() {
   const [data,setData]=useState([]);
  function create(){
    const user={id:localStorage.getItem("id")}
    console.log(user)
    axios
    .post('http://localhost:4000/det-api/get-user', user)
    .then((response) => {
      let p=response.data.message
      fun1(p)
      setData(p)
    });
  }
  const fun1=(data)=>{
    const timer = setTimeout(() => {
      const curr=msToTime(Date.now());
      console.log(curr+"**")
      console.log(data,curr)
      if(curr==data.sleep){
        axios
        .post('http://localhost:4000/det-api/save', {act:"sleep"})
        .then((response) => {

          console.log(response.data.message)
        });
      }
      if(curr==data.wakeup){
        axios
        .post('http://localhost:4000/det-api/save', {act:"wakeup"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.exce1){
        axios
        .post('http://localhost:4000/det-api/save', {act:"excercise"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.exce2){
        axios
        .post('http://localhost:4000/det-api/save', {act:"excercise"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.water1){
        axios
        .post('http://localhost:4000/det-api/save', {act:"water"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.water2){
        axios
        .post('http://localhost:4000/det-api/save', {act:"water"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.water3){
        axios
        .post('http://localhost:4000/det-api/save', {act:"water"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.dinn){
        axios
        .post('http://localhost:4000/det-api/save', {act:"dinner"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.lunch){
        axios
        .post('http://localhost:4000/det-api/save', {act:"lunch"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.bf){
        axios
        .post('http://localhost:4000/det-api/save', {act:"breakfast"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
fun2(data);
}, 10000);  
}

  const fun2=(data)=>{
    const timer = setTimeout(() => {
      const curr=msToTime(Date.now());
      console.log(curr)
      if(curr==data.sleep){
        axios
        .post('http://localhost:4000/det-api/save', {act:"sleep"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.wakeup){
        axios
        .post('http://localhost:4000/det-api/save', {act:"wakeup"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.exce1){
        axios
        .post('http://localhost:4000/det-api/save', {act:"excercise"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.exce2){
        axios
        .post('http://localhost:4000/det-api/save', {act:"excercise"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.water1){
        axios
        .post('http://localhost:4000/det-api/save', {act:"water"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.water2){
        axios
        .post('http://localhost:4000/det-api/save', {act:"water"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.water3){
        axios
        .post('http://localhost:4000/det-api/save', {act:"water"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.dinn){
        axios
        .post('http://localhost:4000/det-api/save', {act:"dinner"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.lunch){
        axios
        .post('http://localhost:4000/det-api/save', {act:"lunch"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      if(curr==data.bf){
        axios
        .post('http://localhost:4000/det-api/save', {act:"breakfast"})
        .then((response) => {
          console.log(response.data.message)
        });
      }
      fun1(data)
    }, 10000);  }

  useEffect(()=>{
    const user={id:localStorage.getItem("id")}

    axios
    .post('http://localhost:4000/det-api/get-user', user)
    .then((response) => {
      let p=response.data.message
      setData((p)=>{return p;})
      console.log(p,data)
    });
    create();
  },[])
    return(
<body>
  <div class="drop ">
    <div class="drop__container mt-2 " style={{backgroundColor:'#ece8eb'}}>
      <header>
        <h1>SCHEDULE of {data.name}</h1>
      </header>
      <div class="drop__list" id="drop-items">
        <div class="drop__card sle" style={{backgroundImage:"https://th.bing.com/th/id/R.f005ac6c32f06f747bed887df2a2c0c9?rik=9JXwuCVF3qbt%2fQ&riu=http%3a%2f%2fthumb7.shutterstock.com%2fdisplay_pic_with_logo%2f1968629%2f345051599%2fstock-vector-sleep-dream-baby-seamless-pattern-cartoon-sun-moon-crescent-and-stars-hand-drawn-doodles-345051599.jpg&ehk=m7TQl07aJslYctfj5I87bjyX3Z5zrlH8bkzAiuSrxEU%3d&risl=&pid=ImgRaw&r=0"}}>
          <div class="drop__data">
            <div>
              <h1 class="drop__name ">SLEEP</h1>
              <span class="drop__name">{data.sleep}</span>
            </div>
          </div>

        </div>
        <div class="drop__card sle">
          <div class="drop__data">
            <div>
              <h1 class="drop__name">WAKEUP</h1>
              <span class="drop__name">{data.wakeup}</span>
            </div>
          </div>

        </div>
        <div class="drop__card wat">
          <div class="drop__data">
            <div>
              <h1 class="drop__name">WATER</h1>
              <span class="drop__name">{data.water1}</span>
            </div>
          </div>

        </div>
        <div class="drop__card exe">
          <div class="drop__data">
            <div>
              <h1 class="drop__name">EXCERCISE</h1>
              <span class="drop__name">{data.exce1}</span>
            </div>
          </div>

        </div>
        
        <div class="drop__card eat">
          <div class="drop__data">
            <div>
              <h1 class="drop__name">BREAKFAST</h1>
              <span class="drop__name">{data.bf}</span>
            </div>
          </div>

        </div>

        <div class="drop__card wat">
          <div class="drop__data">
            <div>
              <h1 class="drop__name">WATER</h1>
              <span class="drop__name">{data.water2}</span>
            </div>
          </div>

        </div>

        <div class="drop__card eat">
          <div class="drop__data">
            <div>
              <h1 class="drop__name">LUNCH</h1>
              <span class="drop__name">{data.lunch}</span>
            </div>
          </div>

        </div>

        <div class="drop__card exe">
          <div class="drop__data">
            <div>
              <h1 class="drop__name">EXCERCISE</h1>
              <span class="drop__name">{data.exce2}</span>
            </div>
          </div>

        </div>
        <div class="drop__card eat">
          <div class="drop__data">
            <div>
              <h1 class="drop__name ">DINNER</h1>
              <span class="drop__name">{data.dinn}</span>
            </div>
          </div>

        </div>
        <div class="drop__card wat">
          <div class="drop__data ">
            <div>
              <h1 class="drop__name">WATER</h1>
              <span class="drop__name">{data.water3}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</body>
    );
  }
  
  export default Schedule;