import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnChange = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header_container">
      <div className="logo_container">
        <Image
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pixabay-logo.svg/1280px-Pixabay-logo.svg.png"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className="header_wrapper">
        <div className="header_left">
          <Link href="/">
            <div className="link">Photos</div>
          </Link>
          <Link href="/">
            <div className="link">Illustration</div>
          </Link>
          <Link href="/">
            <div className="link">Vector</div>
          </Link>
          <Link href="/">
            <div className="link">videos</div>
          </Link>
          <Link href="/">
            <div className="link">Music</div>
          </Link>
          <Link href="/">
            <div className="link">Sound Effects</div>
          </Link>
          <Link href="/">
            <div className="link">GIFs</div>
          </Link>
        </div>
        <div className="menu_wrapper">
          <button className="menu_btn" onClick={handleOnChange}>
            {menuOpen ? (
              <>
                <AiOutlineClose />
                <div className="toggle_menu">
                  <Link href="/">
                    <div className="link">Photos</div>
                  </Link>
                  <Link href="/">
                    <div className="link">Illustration</div>
                  </Link>
                  <Link href="/">
                    <div className="link">Vector</div>
                  </Link>
                  <Link href="/">
                    <div className="link">videos</div>
                  </Link>
                  <Link href="/">
                    <div className="link">Music</div>
                  </Link>
                  <Link href="/">
                    <div className="link">Sound Effects</div>
                  </Link>
                  <Link href="/">
                    <div className="link">GIFs</div>
                  </Link>
                </div>
              </>
            ) : (
              <AiOutlineMenu />
            )}
          </button>
        </div>
        <div className="header_right">
          <div className="dropdown link">
            <Link href="/">
              <div className="explore"> Explore</div>
            </Link>
            <div className="icon">
              <RiArrowDropDownLine />
            </div>
          </div>
          <div className="notification link icon">
            <IoMdNotifications />
          </div>
          <div className="upload link">
            <div className="icon">
              <BiUpload />
            </div>
            <Link href="/">
              <button className="upload_btn">Upload</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
