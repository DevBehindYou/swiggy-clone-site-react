import React, {useState, useEffect} from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from './Card';
import { supabase } from "../servers/supabaseClient";// adjust path as needed

function TopRestaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const [slide, SetSlide] = useState(0)


    const rightArrow1 = () => {
        if(slide > restaurants.length - 4) false
        else SetSlide(slide + 1)
    }

    const leftArrow1 = ( ) => {
        if(slide >= 0 ) SetSlide(slide - 1)
        
    }

    const fetchRestaurants = async () => {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*');

      if (error) {
        console.error('Error fetching restaurants:', error);
      } else {
        setRestaurants(data);
        console.log(data)
      }
    };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="mt-5 max-w-[1100px] mx-auto mb-5 px-3">
      <div className="items-center flex justify-between">
        <div className="text-xl md:text-2xl font-semibold text-gray-700 ">Top Restaurants in Agra</div>
        <div className="flex justify-between w-[65px]">
          <div className="cursor-pointer w-[25px] h-[25px] bg-gray-300 text-gray-600 rounded-full flex justify-center items-center" onClick={leftArrow1}>
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer w-[25px] h-[25px] bg-gray-300 text-gray-600 rounded-full flex justify-center items-center " onClick={rightArrow1}>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="overflow-hidden mt-3.5">
          <div
            className="flex gap-5 transition-transform duration-500"
            style={{ transform: `translateX(-${slide * 260}px)` }} // 260px is card width
          >
          {restaurants.map((data, i) => (
            <Card width=" w-full md:w-[260px]" {...data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopRestaurants;
