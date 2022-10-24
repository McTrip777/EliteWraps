import React from 'react'
import arrowRight from "../images/arrowRight.png"
import arrowLeft from "../images/arrowLeft.png"
import "../styles/modal.css"

const Modal = ({clickedImg,setClickedImg, handleRotateRight}) => {
  
    const handleClick = (e) => {
        if(e.target.classList.contains("dismiss")){
            setClickedImg(null)
        }
    }

  return (<>
    <div className='overlay dismiss' onClick={handleClick}>
        <img src={clickedImg} alt="" className='imageStyle'/>
        {/* <div>
            <div>
                <img src={arrowRight} alt="" onClick={handleRotateRight} className="rotationArrow right"/>
                <img src={arrowLeft} alt="" onClick={handleRotateRight} className="rotationArrow left"/>
            </div>
        </div> */}
    </div>
  </>
  )
}

export default Modal