import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { dataContext } from './contesxt/Contextprovider'

const Card = ({ data }) => {

    const {viewdata,setViewdata} = useContext(dataContext);
    // console.log(viewdata);

    const history = useNavigate()

    const opencard = (d)=>{
        setViewdata(d);

        setTimeout(()=>{
             history("/details")
        },2000)
       
    }

    return (
        <>
            {
                data.map((ele, k) => {
                    return (
                        <>
                            <div className="grid_card_one" onClick={()=>opencard(ele)}>
                                <img src={ele.imgdata} alt="" />
                                <p>{ele.rname}</p>
                            </div>
                        </>
                    )
                })
            }

        </>
    )
}

export default Card