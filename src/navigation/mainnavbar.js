import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'

export default function MainNavbar(){
    return(
        <div class="grid grid-rows-1 grid-cols-3 p-6">
            <div className="Logo" class="flex flex-row flex-nowrap flex-initial w-40 h-10">
                <img src="https://htmldemo.net/flone/flone/assets/img/logo/logo.png"></img>
            </div>

            <div className="grid grid-rows-1 grid-cols-6 gap-x-6 flex flex-row flex-nowrap flex-initial font-medium pb-0 pt-4 font-serif text-xl">

                <div style={{display:'flex'}}><a href="#" class="text-black no-underline"><Link to='/' class="text-black no-underline">Home</Link></a> <KeyboardArrowDownIcon/> </div>
                <div><a href="#" class="text-black no-underline">Order</a></div>
                <div><a href="#" class="text-black no-underline">About</a></div>
                <div><a href="#" class="text-black no-underline">Contact</a></div>
                <div><Link to='/login' class="text-black no-underline"><a href="#" class="text-black no-underline">Login</a> </Link></div>
                <div><a href="#" class="text-black no-underline"><Link to='/signup' class="text-black no-underline">SignUp</Link></a> </div>

            </div>

            <div className="Search" class="flex flex-row flex-nowrap flex-initial pb-0 pt-4 font-serif text-s px-40 font-black">
                <div class="text-xl"><AccountCircleIcon/> <ShoppingCartIcon/></div>
            </div>
        </div>
    )
}
