import React from 'react'
import Logo from "../../assets/icons.svg"
function Nav() {
    return (
        <div className='px-[20px] py-[6px] flex flex-row border-b shadow-xl items-center justify-between'>
            <div className='  flex flex-row items-center justify-start gap-[10px]' >
                <img src={Logo} alt="LOGO" width={"40px"} height={"40px"} />
                <span className='font-[800] text-[#333] text-20px]'>Chat</span>
            </div>
            <div>
                <a href="/login" className="text-[#333] font-[600] px-4 py-2 text-20px]">Login</a>
                <a href="/login" className="bg-[#16A64A] text-white px-4 py-2 rounded text-20px]">Sign Up</a>
            </div>
        </div>
    )
}

export default Nav
