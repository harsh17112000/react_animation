import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dataContext } from './contesxt/Contextprovider'
import ReactPlayer from 'react-player'
import "./details.css"

const Details = () => {

  const { viewdata, setViewdata } = useContext(dataContext);
  console.log(viewdata.vid);

  const [start, setStart] = useState(false);

  const history = useNavigate();

  const vidplay = () => {
    setStart(true)
  }

  return (
    <>
      <div className="details">
        <img src={viewdata.imgdata} alt="img"
          onClick={() => {
            history("/")
            setViewdata(false)
            }}
          className={start ? "back" : ""} />
        <footer>
          <button onClick={() => setStart(!start)}
            onClick={vidplay}
            className={start ? "buttonhide" : ""}
          >Play</button>
        </footer>
        <div onClick={() => setStart(!start)}>
          <ReactPlayer url="./template.mp4"
            width="90%"
            height="90vh"
            className="ok" playing={start} controls={false} />
        </div>

      </div>
    </>
  )
}

export default Details


// 'https://www.youtube.com/watch?v=ysz5S6PUM-U'