import React, { useState } from "react";

const Card = ({id, title, price }) => {
  const [isAdded, setIsAdded] = useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
    if(isAdded){

    }
    console.log("Clicked plus!")
  }
  const onFavorite = () => {
    console.log("Clicked favorite!")
  }
  return (
    <div className="card mr-[40px] mb-[40px] ">
      <div className="hover:shadow-card-shadow hover:-translate-y-[5px] transition-transform duration-300 duration-300 ease-in-out transition-shadow duration-300 ease-in-out w-[210px] h-[260px] rounded-[40px] border-[1px] border-[#f3f3f3] pl-[30px] pr-[28px]  pt-[20px] pb-[34px] ">
        <div className="mb-[14px]">
          <img
            className="absolute cursor-pointer"
            width={32}
            height={32}
            src="/img/liked.svg"
            alt="Liked"
            onClick={onFavorite}
          />
          <img
            className="mb-[14px]"
            width={133}
            height={112}
            src={`/img/sneakers/${id}.jpg`}
            alt="Sneaker-1"
          />
          <p className="text-text-logo-fz">
            {title}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[11px] font-medium leading-[13px]">
              ЦЕНА:
            </span>
            <h3 className="text-text-logo-fz font-bold">{price} руб.</h3>
          </div>
          <button onClick={onClickPlus} className=" border-[1px] p-[10px] rounded-lg border-[#F2F2F2] w-8 h-8">
            <img width={11} height={11} src="/img/plus.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
