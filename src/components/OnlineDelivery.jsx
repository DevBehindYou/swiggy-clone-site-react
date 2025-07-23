import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../servers/supabaseClient";
import Card from './Card';

function OnlineDelivery() {
  const [restaurants, setRestaurants] = useState([]);
  const [isAtTop, setIsAtTop] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchRestaurants = async () => {
    const { data, error } = await supabase.from("restaurants").select("*");
    if (error) {
      console.error("Error fetching restaurants:", error);
    } else {
      setRestaurants(data);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="mt-5 max-w-[1100px] mx-auto mb-5 px-3" ref={componentRef}>
      <div className="items-center flex justify-between">
        <div className="text-xl md:text-2xl font-semibold text-gray-700">
          Restaurants with Online Delivery in Agra
        </div>
      </div>

      <div className={isAtTop ? "p-4 md:p-2 md:mt-3 shadow-xl text-[#818181] rounded-2xl fixed top-0 left-0 w-full z-30 bg-white transition-all duration-200" : ""}>
        <div className="flex max-w-[1100px] mx-auto">
          <div className="p-2 rounded-md shadow flex justify-center items-center">Filter</div>
        </div>
      </div>

      <div className="grid  grid-cols-2 md:grid-cols-4 gap-3 mt-3.5">
        {restaurants.map((data, indx) => {
          return <Card with key={indx} {...data} />;
        })}
      </div>
    </div>
  );
}

export default OnlineDelivery;
