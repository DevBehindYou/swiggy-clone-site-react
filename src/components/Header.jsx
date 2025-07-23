import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { LuHandHelping } from "react-icons/lu";
import { PiSignIn } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { SearchPanel } from "./SearchPanel"; // adjust path

// Example data (use your restaurants, locations, whatever)


function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const [toggle, setToggle] = useState(false);

    const searchData = [
    { id: 1,  title: "Crust & Fire",             subtitle: "Pizza · Downtown" },
    { id: 2,  title: "Sweet Haven",              subtitle: "Desserts · Main Street" },
    { id: 3,  title: "Bowl & Spice",             subtitle: "Indian · Sunset Blvd" },
    { id: 4,  title: "Thali House",              subtitle: "Indian Platters · Market District" },
    { id: 5,  title: "Creamline & Co.",          subtitle: "Ice Cream · West End" },
    { id: 6,  title: "Frost Lab",                subtitle: "Gourmet Scoops · Maple Avenue" },
    { id: 7,  title: "South Spoon",              subtitle: "South Indian · Oakwood" },
    { id: 8,  title: "Meal Street Kitchen",      subtitle: "Combo Meals · Riverdale" },
    { id: 9,  title: "McDonald's",               subtitle: "Burgers · Central Plaza" },
    { id: 10, title: "Whisked Wonders",          subtitle: "Cakes & Bakery · Elm Street" },

    // extra variety
    { id: 11, title: "Urban Dumpling",           subtitle: "Asian Street Eats · Midtown" },
    { id: 12, title: "Sushi Harbor",             subtitle: "Sushi & Rolls · Waterfront" },
    { id: 13, title: "Taco Street",              subtitle: "Mexican · East Quarter" },
    { id: 14, title: "Noodle Craft",             subtitle: "Ramen & Stir Fry · College Row" },
    { id: 15, title: "Burger Forge",             subtitle: "Grill · Industrial Park" },
    { id: 16, title: "Curry Junction",           subtitle: "Indian Curry Bowls · Transit Hub" },
    { id: 17, title: "Green Chop Salad Co.",     subtitle: "Salads & Bowls · Tech Park" },
    { id: 18, title: "Mediterraneo Grill",       subtitle: "Mediterranean · Lakeside" },
    { id: 19, title: "BBQ Yard",                 subtitle: "Smokehouse · Fairgrounds" },
    { id: 20, title: "Pho Express",              subtitle: "Vietnamese Noodles · Chinatown" },

    { id: 21, title: "Seoul Kitchen",            subtitle: "Korean BBQ · Uptown" },
    { id: 22, title: "Poke District",            subtitle: "Poke Bowls · Harbor Market" },
    { id: 23, title: "Bagel & Bean",             subtitle: "Breakfast · Financial Center" },
    { id: 24, title: "Wrap Works",               subtitle: "Healthy Wraps · Fitness Plaza" },
    { id: 25, title: "Tikka Flame",              subtitle: "Indian Grill · Cedar Square" },
    { id: 26, title: "Garden Vegan Table",       subtitle: "Plant‑Based · Greenway" },
    { id: 27, title: "Street Wok",               subtitle: "Chinese Fast Casual · Junction Road" },
    { id: 28, title: "Ramen Republic",           subtitle: "Japanese Broths · Art District" },
    { id: 29, title: "Loaded Fries Co.",         subtitle: "Snacks · Sports Arena" },
    { id: 30, title: "Bento Box Daily",          subtitle: "Japanese Lunch · Office Park" },

    { id: 31, title: "Grain & Grill",            subtitle: "Healthy Bowls · Medical Campus" },
    { id: 32, title: "Firewing Stop",            subtitle: "Wings · Stadium Drive" },
    { id: 33, title: "Dosateria",                subtitle: "South Indian Crepes · Little India" },
    { id: 34, title: "Paneer Point",             subtitle: "Vegetarian Indian · University Ave" },
    { id: 35, title: "Chaat Cart",               subtitle: "Indian Street Snacks · Farmers Market" },
    { id: 36, title: "Pasta Porch",              subtitle: "Italian · Old Town" },
    { id: 37, title: "Falafel Factory",          subtitle: "Middle Eastern · Civic Center" },
    { id: 38, title: "Tandoor & Tikka",          subtitle: "North Indian · Valley Crossing" },
    { id: 39, title: "Crunchy Katsu",            subtitle: "Japanese Cutlets · Metro Mall" },
    { id: 40, title: "Breakfast Box",            subtitle: "All‑Day Breakfast · Airport Road" }
    ];


      const handleSelect = (row) => {
            console.log("Selected:", row);
            // route? set location? filter restaurants? your call
        };

    const showSideManu = () =>{
        setToggle(true)
    }

    const hideSideManu = () =>{
        setToggle(false)
    }

    const links=[
        {
        icon:<IoSearch />,
        text:"Serach",
        },
        {
        icon:<MdOutlineLocalOffer />,
        text:"Offers",
        sup:"New"
        },
        {
        icon:<LuHandHelping />,
        text:"Help",
        },
        {
        icon:<PiSignIn />,
        text:"SignIn",
        },
        {
        icon:<IoCartOutline />,
        text:"Cart",
        sup:"(2)"
        }
    ]

    return (
    <>
        <div className="black-overlay fixed inset-0 z-40 transition-all duration-300" style={{opacity: toggle ? 1:0, visibility: toggle ? "visible":"hidden"}} onClick={hideSideManu}>
            <div className="w-[400px] h-full bg-white absolute left-0 top-0 duration-400" style={{left : toggle ? '0%' : '-50%'}} onClick={(e)=>e.stopPropagation()}>
            <SearchPanel
            isOpen={isOpen}
            data={searchData}
            onSelect={handleSelect}
            onClose={close}
          />
            </div>
        </div>
        
        <header className="sticky top-0 z-10 bg-white p-3 mr-10 ml-10 mt-3.5 shadow-xl text-[#818181] rounded-2xl">
            <div className="max-w-[1100px] mx-auto flex items-center">
                <div className="w-[30px]">
                    <img src="/swiggy-logo.svg" className="w-full" alt="" />
                </div>
                <div className="ml-3.5 text-[14px]">
                    <span className="font-bold border-b-3 text-[16px] border-black text-black mr-0.5">Agra,</span> Uttar Pradesh, India <RxCaretDown fontSize={23} className="font-bold inline text-[#d86900] cursor-pointer" onClick={showSideManu} />
                </div>
                <nav className="hidden md:flex list-none gap-7 ml-auto font-semibold">
                    {
                    links.map((links, index) => {
                            return (
                                    <li key={index} className="flex items-center gap-1 cursor-pointer hover:text-[17px] hover:text-[#e66f00] transition-all duration-200">
                                        {links.icon}
                                        {links.text}
                                        <sup className=" text-[#e66f00]">{links.sup}</sup>
                                    </li>
                                    )
                            }
                        )
                    }
                </nav>
            </div>
        </header>
    </>
)}

export default Header;