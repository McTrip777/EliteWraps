import React, { useState } from 'react'
import { Images } from './ImgData'
import "../styles/gallery.css"
import BackToTop from './BackToTop'

const Gallery = () => {

    const [type, setType] = useState('All')

    const setToAll = () => setType("All")
    const setToCommercial = () => setType("Commercial")
    const setToWall = () => setType("Wall")
    const setToColor = () => setType("Color")

    let val = false

    return (
        <div className="galleryContainer">
          <BackToTop/>
            <div className="gallerySort">
                <section className={type === 'All' ? "buttonSelect active" : "buttonSelect"} onClick={setToAll}>
                    <button className="allText">All</button>
                    {type === "All" ? <i class="fas fa-circle"></i> : <i className="far fa-circle"></i>}
                </section>
                <section className={type === 'Commercial' ? "buttonSelect active" : "buttonSelect"} onClick={setToCommercial}>
                    <button className="commercialText">Commercial</button>
                    {type === "Commercial" ? <i class="fas fa-circle"></i> : <i className="far fa-circle"></i>}
                </section>
                <section className={type === 'Wall' ? "buttonSelect active" : "buttonSelect"} onClick={setToWall}>
                    <button className="wallText">Wall</button>
                    {type === "Wall" ? <i class="fas fa-circle"></i> : <i className="far fa-circle"></i>}
                </section>
                <section className={type === 'Color' ? "buttonSelect active" : "buttonSelect"} onClick={setToColor}>
                    <button className="colorText">Color</button>
                    {type === "Color" ? <i class="fas fa-circle"></i> : <i className="far fa-circle"></i>}
                </section>
            </div>

            {Images.map((img, index) => {
                if (type === Images[index].type || type === "All") val = true
                if (val === false && index === Images.length - 1) {
                    return <h4>No Images at this time.</h4>
                }
                return (
                    <div className={type === Images[index].type || type === "All" ? "galleryImg active" : "galleryImg"} key={index}>
                        {type === "All" && <img src={img.img} alt="vehicles" className="img" />}
                        {type === Images[index].type && (<img src={img.img} alt={img.alt} className="img" />)}
                    </div>
                )
            })}

            {/* I'm Sorry, this page is down right now. <br/><br/>Check back later. */}
        </div>
    )
}

export default Gallery