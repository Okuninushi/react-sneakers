import React from "react";

const Input = () => {
  return (
    <div className="border-[1px] border-[#F3F3F3] rounded-[10px] flex items-center px-[18px] py-[15px]">
      <img className="mr-[14px]" src="/img/magnifying-glass.svg" alt="" />
      <input className="outline-none" type="text" placeholder="Поиск..." />
    </div>
  );
};

export default Input;
