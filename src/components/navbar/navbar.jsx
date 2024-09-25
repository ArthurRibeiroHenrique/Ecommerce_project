import React from 'react'
import Logo from '../../assets/shopping-basket-pngrepo-com.png'

const navbar = () => {
  return <div>
    {/*Upper navbar*/}
    <div>
        <div>
            <div>
                <a href="">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            {/*Search Bar and Order Button will in this space*/}
            <div>
                <div className='group'>
                    {/*The meaning of the texts after the placeholder are: default width of 200px for the search bar. For small screen, 200px too and, when the user hover the search bar, its width will increase to 300px.
                    
                    To the second line of the Tailwind code, all the search bar will have a transition of 300ms when hovered, its borders will become rounded and its border will acquire the gray color, in a scale of 300.*/}
                    {/*This is the button*/}
                    <input type="text" placeholder='Search' 
                    className='w-[200px] sm:w-[200px] group-hover:w-[300px] 
                    transition-all duration-300 rounded-full border border-gray-300'/>
                </div>
            </div>
        </div>
    </div>
    {/*Lower Navbar*/}
    <div></div>
    </div>;

}

export default navbar