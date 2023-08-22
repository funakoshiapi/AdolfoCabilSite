import { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function Carousel({images}){
    const [currentIndex, setCurrentIndex] = useState(0);

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
      
       <div>
            
            <div className=" flex justify-center items-center">
               <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  mx-auto flex items-center rounded-md hover:scale-110 duration-300" onClick={goToPrevious}>{"\u003c"}</button>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300" onClick={goToNext}>{"\u003e"}</button>
         
            </div>
            
            <div className=" flex flex-col justify-center items-center ">
               <div className="text-md p-4 mx-auto flex md:text-lg"> {images[currentIndex].notes} </div>
               <img src={images[currentIndex].url} className=" h-1/2" />
            </div>
                    
       </div>
    )

}

export default Carousel;