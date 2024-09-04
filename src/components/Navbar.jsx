import React from "react"
import "./navbar.css"

import { FaHeart } from "react-icons/fa"
import { IoSearchSharp } from "react-icons/io5"
import { HiDotsVertical } from "react-icons/hi"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
      className="navBox"
    >
      <div>
        <GiHamburgerMenu />
      </div>
      <div>Heading</div>
      <div>
        <div>
          <FaHeart />
        </div>
        <div>
          <IoSearchSharp />
        </div>
        <div>
          <HiDotsVertical />
        </div>
      </div>
    </div>
  )
}

export default Navbar
