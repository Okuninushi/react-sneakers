import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between border-b-[1px] border-[#eaeaea] pb-[44px] mb-[44px]">
      <div className="flex items-center">
        <img
          className="mr-4"
          width={40}
          height={40}
          src="/img/logo.svg"
          alt=""
        />
        <div className="headerInfo">
          <h2 className="text-logo-fz font-bold">REACT SNEAKERS</h2>
          <p className="text-[#9D9D9D] text-text-logo-fz">
            Магазин лучших кроссовок
          </p>
        </div>
      </div>

      <ul className="flex items-center">
        <li className="flex items-center mr-[30px]">
          <img
            className="mr-[10px]"
            src="/img/cart.svg"
            width={18}
            height={18}
            alt=""
          />
          <span className="text-text-logo-fz font-semibold text-[#5C5C5C]">
            1205 руб.
          </span>
        </li>
        <li className="mr-[30px] ">
          <img src="/img/favorite.svg" width={20} height={20} alt="" />
        </li>
        <li>
          <img src="/img/profile.svg" width={20} height={20} alt="" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
