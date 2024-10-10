import React from 'react'
import Logo from '../../assets/shopping-basket-pngrepo-com.png';
import {IoMdSearch} from 'react-icons/io';

const navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
    {/*In the code above, when we see the shadow-md, this words refers to the shadow applied to the box which contains all the navbar. The md words placed besides the word shadow refers to the intensity of the shadow, that is medium. Furthermore, the 'bg-white' refers to the background color of the entire navbar. And, when the page was set to a black or darker color, the navbar background will acquire this color and the text inside the navbar will have the white color. */}
    {/*Upper navbar*/}
    {/*When we set bg-primary/40, we are setting the background color of all the navbar to the code specified, with the height of the 'background color' with 2 points.*/}
    <div className='bg-primary/40 py-2'>
        {/*This className below indicates that container who contains some content will be standardize in a flex model, with the contents following the justify-between rule and the items will be placed in the center of the container. In this case, all the navbar will follow this rule.*/}
        <div className='container flex justify-between items-center '>
            <div>
                {/*In the line of code below of 'a href=#', we have a personalization of the text besides the logo, with a bold font, with a height of 2xl, according Tailwind, 3xl for small screens and a flex desing, with gap of 2 points from the logo.*/}
                <a href="#"
                className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={Logo} alt="Logo" 
                    className='w-10 uppercase'/>
                    Shopsy
                </a>
            </div>
            {/*Search Bar and Order Button will in this space*/}
            <div>
                {/*The className below menas that, in extrasmall screens, the search bar will disappear, and, for small screens, it will become a block. In large screens, it will remain with the same configuration that it is innate.  */}
                <div className='relative group hidden sm:block'>
                    {/*The meaning of the texts after the placeholder are: default width of 200px for the search bar. For small screen, 200px too and, when the user hover the search bar, its width will increase to 300px.
                    
                    To the second line of the Tailwind code, all the search bar will have a transition of 300ms when hovered, its borders will become rounded and its border will acquire the gray color, in a scale of 300.*/}
                    {/*This is the button*/}
                    <input type="text" placeholder='Search' 
                    className='w-[200px] sm:w-[200px] group-hover:w-[300px]
                    transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary '/>
                    {/*The text inside the IoMdSearch, after the className, are used to let the IoMdSearch icon inside the search bar, with a height of 50% compared to the height of the search more. Furthermore, the translate-y-1/2 sets the icon aligned verticallt and, the right-3, adjusts the icon to be on the right of the search bar.*/}
                    <IoMdSearch
                    className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                </div>
            </div>
            {/*Order Button
            
            The order button will follow the color settins begging in the primary and going to the secondary, with a total transition, with duration of 2ms, text in the white color, padding in the y with 1 point, paddinng in the x with 4 poins, full rounded design and following a flex standar, with items on the center and gap with 3 points. All this things are fit in the group caracteristics.*/}
            <button onClick={() => alert("Ordering not avaible yet")}
                className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                <span
                
                >
                    Order
                </span>
            </button>
        </div>
    </div>
    {/*Lower Navbar*/}
    <div></div>
    </div>
  );
};

export default navbar