import React, {useEffect, useState} from 'react'
import './Slider.css'

import dataSlider from './dataSlider'
import Arrow from "./Arrow";

const Slider = () => {

    const [slideId, setSlideId] = useState(1)


    useEffect(() => {
        const interval = setInterval(() => {
            setSlideId(slideId === dataSlider.length ? 1 : slideId + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [slideId]);


    const nextSlide = () => {
        if(slideId !== dataSlider.length){
            setSlideId(slideId + 1)
        } 
        else if (slideId === dataSlider.length){
            setSlideId(1)
        }
    }

    const prevSlide = () => {
        if(slideId !== 1){
            setSlideId(slideId - 1)
        }
        else if (slideId === 1){
            setSlideId(dataSlider.length)
        }
    }

    const moveDot = Id => {
        setSlideId(Id)
    }

    return (
        <div className="container_slider">
            {dataSlider.map((obj, id) => {
                return (
                    <>
                        <div
                            key={obj.id}
                            className={slideId === id + 1 ? "slide active_slide" : "slide"}
                        >
                            <img  className="slider_pic" src={obj.pic}  alt="pic"/>

                            <div className="slider_text">
                                <h2 className="slider_title">{obj.title}</h2>
                                <h3 className="slider_subTitle">{obj.subTitle}</h3>
                            </div>

                            <button className="slider_button">
                                <h2 className="slider_button_h2"> {obj.button_h2} </h2>
                            </button>

                        </div>
                    </>

                )
            })}

            <div className="container_arrow">
                <Arrow
                    right_arrow={nextSlide}
                    left_arrow={prevSlide}
                />

            </div>


            <div className="container_dots">
                {Array.from({length: 5}).map((item, Id) => (
                    <div 
                    onClick={() => moveDot(Id + 1)}
                    className={slideId === Id + 1 ? "dot active" : "dot"}
                    > </div>
                ))}
            </div>
        </div>
    )
}

export default Slider;
