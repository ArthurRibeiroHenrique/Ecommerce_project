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
                <div>
                    <input type="text" placeholder='Type here' />
                </div>
            </div>
        </div>
    </div>
    {/*Lower Navbar*/}
    <div></div>
    </div>;

}

export default navbar