import React from 'react'
import { useEffect, useState } from 'react'
import "../styles/backToTop.css"

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    },[]);
    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return (
    <div className='buttonContainer'>
        {backToTop && (<button className='backToTop'
            // style={{
            //     position:"fixed", 
            //     bottom:"50px",
            //     right:"50px",
            // }} 
            onClick={scrollUp}>^</button>
        )}
    </div>
  )
}

export default BackToTop