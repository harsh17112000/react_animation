import React, { useEffect, useState,useContext } from 'react'
import Fooddata from './productsdata'
import Card from './Card'
import Details from './Details'
import { dataContext } from './contesxt/Contextprovider'
import "./home.css"

const Home = () => {

  const [test, setTest] = useState("0px");
  const [test2, setTest2] = useState("0px");

  const [clientX,setClientX] = useState();
  const [clientY,setClientY] = useState();
  console.log(clientY);

  const extrastyle = {}

  if((clientX > 0 && clientX <= 400) && (clientY > 0 && clientY <= 349) ){
    console.log("left me hain");
    extrastyle.top = 0
    extrastyle.left = 0
  }else if((clientX >= 501 && clientX <= 1208) && (clientY > 0 && clientY <= 350)){
    console.log("middle main hain");
    extrastyle.top = 0
    extrastyle.right = 0
  }else if((clientY >= 351 && clientX <= 450)){
    extrastyle.bottom = 0
    extrastyle.left = 0
    console.log("bottom left hain");
  }else if((clientY>=351 && clientY <= 550)  &&  (clientX >= 401 && clientX <= 1208)){
    extrastyle.bottom = 0
    extrastyle.right = 0
    console.log("bottom right hain");
  }else{
    extrastyle.top = 0
    extrastyle.left = 50
    console.log("center");
  }

  const {viewdata,setViewdata} = useContext(dataContext);

  let gridStartPoint = -200
  let gridRange = 900

  // horizontaly 
  let mouseXStartPoint = 0

  let mouseXEndPoint = window.innerWidth;
  let currentXPosition = 0;
  let fracXvalue = 0;

 
  let mouseXRange = mouseXEndPoint - mouseXStartPoint

  // vertically
  let mouseYStartPoint = 0
  let mouseYEndPoint = window.innerHeight; // gives thi screen width thi 300px less,left thi -300px
  let currentYPosition = 0;
  let fracYvalue = 0;


  const setdetails = (event) => {

    currentXPosition = event.clientX - mouseXStartPoint;
    currentYPosition = event.clientY - mouseYStartPoint;
      
    fracXvalue = currentXPosition / mouseXRange;
    fracYvalue = currentYPosition / mouseYEndPoint;
    // console.log(fracXvalue);

    let pupilsXCurrentpositoin = gridStartPoint +  fracXvalue * gridRange;
    let pupilsYCurrentpositoin = gridStartPoint +  fracYvalue * gridRange;

    const width = pupilsXCurrentpositoin
    const width2 = pupilsYCurrentpositoin

    setTest(width)
    setTest2(width2)
    setClientX(event.clientX)
    setClientY(event.clientY)
    // console.log(event);
  }



  window.addEventListener("mousemove", setdetails)
  const windowResize = (event)=>{
    mouseXEndPoint = window.innerWidth;
    mouseXRange = mouseXEndPoint - mouseXStartPoint 
    mouseYEndPoint = window.innerHeight;
}


window.addEventListener("resize",windowResize)


  return (
    <>
      <section>
        <div className="container">
          <div className="grid_container" style={{ transform: `translate(${-test}px,${-test2}px)` }}>
            <Card data={Fooddata} />
          </div>
          <div className={viewdata ? 'zoom' :"popup"} style={extrastyle}>
            <img src={viewdata.imgdata} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home