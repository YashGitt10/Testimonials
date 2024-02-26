import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [idx, setIdx] = useState(0);

    function leftShift() {
        if(idx-1 < 0) setIdx(reviews.length-1);
        else setIdx(idx-1);
    }
    function rightShift() {
        if(idx+1 >= reviews.length) setIdx(0);
        else setIdx(idx+1);
    }
    function surpriseHandler() {
        let rdm = Math.floor(Math.random() * reviews.length); 
        setIdx(rdm);
    }
    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card review = {reviews[idx]}></Card>

            <div className="flex text-3xl mt-7 gap-3 text-violet-400 font-bold mx-auto">
                <button onClick={leftShift} className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft></FiChevronLeft>
                </button>
                <button onClick={rightShift} className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight></FiChevronRight>
                </button>
            </div>

            <div className="mt-5">
                <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer rounded-md px-10 py-2 font-bold text-white text-lg">Surprise Me</button>
            </div>
        </div>
        
    )
}

export default Testimonials