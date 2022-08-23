import React, { useEffect, useState } from 'react'
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { CarouselImages } from './ImgData'
import "../styles/carousel.css"


const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const length = CarouselImages.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }

    useEffect(() => {
        setTimeout(() => {
            nextSlide()
        }, 10000)
    }, [current, nextSlide])

    if (!Array.isArray(CarouselImages) || CarouselImages.length <= 0) return null

    document.querySelector("slide")

    return (
        <section className="slider">
            {CarouselImages.map((slide, index) => { 
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === current && (<img src={slide.image} alt="Display Vehicles" className="img" />)}
                    </div>
                )
            })}

        </section>
    )
}

export default Carousel