import { useState } from "react";

function Carousel({images}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideStyles = {
        width: '100%',
        height: '70%',
        borderRadius: '10px',
        backgroudPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage:`url(${images[currentIndex].url})`,
        boxShadow: '1px 2px 9px #949494   ',
        padding: '1em',
     };

     const sliderStyle ={
        height: '100%',
        borderRadius: '100%',
        position: 'relative',
     }

     const leftArrowStyle = {
        position: 'absolute',
        top: '40%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        cursor: 'pointer',
     };


     const rightArrowStyle = {
        position: 'absolute',
        top: '40%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        cursor: 'pointer',
     };

     const dotsContainerStyles ={
        display: 'flex',
        justifyContent: 'center'
     }

     const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px',
     }

     const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
     }

     const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
     }

     const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
     }

    return(
       <div style={sliderStyle}>
            <div style={leftArrowStyle} onClick={goToPrevious}>{"\u003c"}</div>
            <div style={rightArrowStyle} onClick={goToNext}>{"\u003e"}</div>
            <div style={slideStyles}></div>
            <div style={dotsContainerStyles}>
                {images.map((slide, slideIndex)=>(
                    <div 
                        style={dotStyles} 
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        {"\u2022"}
                    </div>
                ))}
            </div>
            <div className="text-md p-4 mx-auto flex justify-center md:text-lg "> {images[currentIndex].notes} </div>
       </div>
    )

}

export default Carousel;