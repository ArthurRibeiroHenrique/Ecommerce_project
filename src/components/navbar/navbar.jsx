import React from 'react'
import Logo from '../../assets/shopping-basket-pngrepo-com.png'

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
                <div className='group'>
                    {/*The meaning of the texts after the placeholder are: default width of 200px for the search bar. For small screen, 200px too and, when the user hover the search bar, its width will increase to 300px.
                    
                    To the second line of the Tailwind code, all the search bar will have a transition of 300ms when hovered, its borders will become rounded and its border will acquire the gray color, in a scale of 300.*/}
                    {/*This is the button*/}
                    <input type="text" placeholder='Search' 
                    className='w-[200px] sm:w-[200px] group-hover:w-[300px] sm:group-hover:w-[200]
                    transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary '/>
                </div>
            </div>
        </div>
    </div>
    {/*Lower Navbar*/}
    <div></div>
    </div>
  );
};

export default navbar