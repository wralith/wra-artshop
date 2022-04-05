import React from "react";
import styled from "styled-components";
import { CartButton } from "./CartButton";

const HeaderImageContainer = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 12rem;
  z-index: 0;
  overflow: hidden;

  & img {
    width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(2deg) translateY(-4rem) translateX(-1rem);
  }
`;

const Header = () => {
  return (
    <>
      <header className="z-50 flex justify-around bg-gray-700 p-3  text-white shadow-md">
        <h3 className="text-xl hover:text-gray-300">
          <a href="#">Wrart Shop</a>
        </h3>
        <div className="flex gap-2 rounded-md bg-gray-800 p-1 hover:bg-gray-600">
          <label htmlFor="search">🔍</label>
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>
        <button>ChartButton</button>
      </header>
      <HeaderImageContainer>
        <img
          src="https://apod.nasa.gov/apod/image/0803/lh95_hst_big.jpg"
          alt="header-img"
        />
      </HeaderImageContainer>
    </>
  );
};

export default Header;
