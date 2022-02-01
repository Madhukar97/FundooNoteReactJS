import React, { Component } from "react";
import menuicon from "../../assets/menu-icon.png";
import "../dashboard/Header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <a class="menu-button">
          <img src={menuicon} alt="menu icon" height={"21px"}></img>
        </a>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo"
					height={"40px"}
        />
        <h4>Fundo</h4>
        <input
          className="searchbar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn0 btn-search" type="submit">
          Search
        </button>
        <a href="/login" className="logout-link">
          <button className="btn0 logout">Logout</button>
        </a>
      </div>
			<hr />
    </>
  );
}

export default Header;
