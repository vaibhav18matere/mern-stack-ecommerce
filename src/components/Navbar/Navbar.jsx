import React from "react";
import "./Navbar.css";
import "./../../index.css";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar d-evenly shadow">
        <section id="left" className="d-around">
          <img
            className="pointer"
            src={require("./../../assets/images/myntra_logo.png")}
            alt="myntra_logo"
          />
          <section id="men" className="pointer">
            <Link to="#!">MEN</Link>
          </section>
          <section id="women" className="pointer">
            <Link to="#!">WOMEN</Link>
          </section>
          <section id="kids" className="pointer">
            <Link to="#!">KIDS</Link>
          </section>
          <section id="homeLiving" className="pointer">
            <Link to="#!">HOME & LIVING</Link>
          </section>
          <section id="studio" className="pointer">
            <Link to="#!">OFFERS</Link>
          </section>
        </section>

        <section id="right" className="d-center">
          <div className="search-box d-center">
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
          </div>
          <div className="rightSideIcons d-center pointer">
            <CgProfile />
            <label htmlFor="profile">Profile</label>
          </div>
          <div className="rightSideIcons d-center pointer">
            <AiOutlineHeart />
            <label htmlFor="wishlist">Wishlist</label>
          </div>
          <div className="rightSideIcons d-center pointer bag">
            <HiOutlineShoppingBag />
            <label htmlFor="bag">Bag</label>
          </div>
        </section>
      </div>
    </>
  );
};
