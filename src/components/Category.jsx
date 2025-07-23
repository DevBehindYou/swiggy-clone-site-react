import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { supabase } from "../servers/supabaseClient"; // adjust path as needed

function Category(){
    const [slidePosition, SetSlidePosition] = useState(0)

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const { data, error } = await supabase.from('category').select('*');

        if (error) {
            console.error('Error fetching categories:', error);
        } else {
            setCategories(data);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const rightArrow = () => {
        if(slidePosition > categories.length - 8) false
        else SetSlidePosition(slidePosition + 3)
    }

    const leftArrow = ( ) => {
        if(slidePosition >= 0 ) SetSlidePosition(slidePosition - 3)
        
    }


    return (
    <>
    <div className="mt-5 max-w-[1100px] mx-auto px-3">
        <div className="items-center flex justify-between">
            <div className="text-xl md:text-2xl font-semibold text-gray-700">What's in your mind?</div>
            <div className="flex justify-between w-[65px]">
                <div className="cursor-pointer w-[25px] h-[25px] bg-gray-300 text-gray-600 rounded-full flex justify-center items-center" onClick={leftArrow}><FaArrowLeft/></div>
                <div className="cursor-pointer w-[25px] h-[25px] bg-gray-300 text-gray-600 rounded-full flex justify-center items-center" onClick={rightArrow}><FaArrowRight/></div>
            </div>
        </div>
        <div className="flex gap-4 mt-3 overflow-hidden">
        {
            categories.map((cat, index) => (
                <div style={{ transform: `translateX(-${slidePosition * 100}%)` }} key={index} className="flex grow-1 shrink-0 w-[135px] duration-500">
                    <img
                        src={`/images/${cat.image}`}
                        alt={cat.path}
                        className="w-full object-cover"
                        onError={(e) => (e.target.style.display = "none")}
                    />
                </div>
            ))}
        </div>
        <hr className="my-6 border-[1px] text-gray-300"/>
    </div>
    </>
)}


export default Category;