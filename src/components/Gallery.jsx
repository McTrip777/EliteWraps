import React, { useState } from 'react'
import { Images } from './ImgData'
import "../styles/gallery.css"
import BackToTop from './BackToTop'
import {Helmet} from "react-helmet"

const Gallery = () => {

    const [type, setType] = useState('All')

    const setToAll = () => setType("All")
    const setToCommercial = () => setType("Commercial")
    const setToWall = () => setType("Wall")
    const setToColor = () => setType("Color")

    let val = false

    return (
        <div className="galleryContainer">
            <Helmet>
                <title>Browse through all kinds of vehicle wraps.</title>
                <meta 
                    name='description'
                    content='This is our work gallery where all the vehicles we have wrapped go, take a look around and reach out if you have questions.'
                />
            </Helmet>
          <BackToTop/>
            <div className="gallerySort">
                <section className={type === 'All' ? "buttonSelect active" : "buttonSelect"} onClick={setToAll}>
                    <button className="allText typeSelected">All</button>
                    {/* {type === "All" ? <button className="allText typeSelected">All</button> : <button className="allText">All</button>} */}
                </section>
                <section className={type === 'Commercial' ? "buttonSelect active" : "buttonSelect"} onClick={setToCommercial}>
                <button className="commercialText typeSelected">Commercial</button>
                    {/* {type === "Commercial" ? <button className="commercialText typeSelected">Commercial</button> : <button className="commercialText">Commercial</button>} */}
                </section>
                <section className={type === 'Wall' ? "buttonSelect active" : "buttonSelect"} onClick={setToWall}>
                    <button className="wallText typeSelected">Wall</button>
                    {/* {type === "Wall" ? <button className="wallText typeSelected">Wall</button> : <button className="wallText">Wall</button>} */}
                </section>
                <section className={type === 'Color' ? "buttonSelect active" : "buttonSelect"} onClick={setToColor}>
                    <button className="colorText typeSelected">Personal</button>
                    {/* {type === "Color" ? <button className="colorText typeSelected">Personal</button> : <button className="colorText">Personal</button>} */}
                </section>
            </div>
            <div className='imgContainer'>
                {Images.map((img, index) => {
                    if (type === Images[index].type || type === "All") val = true
                    if (val === false && index === Images.length - 1) {
                        return <h4>No Images at this time.</h4>
                    }
                    return (
                        <div className={type === Images[index].type || type === "All" ? "activegalleryImg" : "galleryImg"} key={index}>
                            {type === "All" && <img src={img.img} alt="vehicles" className="img" />}
                            {type === Images[index].type && (<img src={img.img} alt={img.alt} className="img" />)}
                        </div>
                    )
                })}
            </div>
            {/* I'm Sorry, this page is down right now. <br/><br/>Check back later. */}
        </div>
    )
}

export default Gallery