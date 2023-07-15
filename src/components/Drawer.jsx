import React from "react";

const Drawer = () => {
  return (
    <div
      style={{ display: "none" }}
      className="overlay absolute left-0 top-0 w-full h-full bg-overlay z-50"
    >
      <div className="drawer flex flex-col justify-between p-[30px] absolute w-[420px] h-full right-0 bg-[#ffffff] shadow-drawer-shadow">
        <div className="flex justify-between">
          <h1 className="mb-[30px] text-drawer-title font-bold">Корзина</h1>
          <button className=" border-[1px] p-[10px] rounded-lg border-[#F2F2F2] w-8 h-8">
            <img
              className="rotate-45"
              width={11}
              height={11}
              src="/img/plus.svg"
              alt=""
            />
          </button>
        </div>

        <div className="h-full overflow-auto mb-[40px]">
          <div className="card mb-[20px] ">
            <div className="flex items-center hover:shadow-card-shadow transition-shadow duration-300 ease-in-out w-full h-[120px] rounded-[20px] border-[1px] border-[#f3f3f3] p-[20px] ">
              <div className="flex items-center justify-between w-full">
                <div className="flex ">
                  <img
                    className="mr-[21px]"
                    width={70}
                    height={70}
                    src="/img/sneakers/1.jpg"
                    alt="Sneaker-1"
                  />
                  <div className="flex justify-center flex-col mr-[12px]">
                    <p className="text-text-logo-fz w-[150px] mb-2">
                      Мужские Кроссовки Nike Blazer Mid Suede
                    </p>
                    <h3 className="text-text-logo-fz font-bold">12 999 руб.</h3>
                  </div>
                </div>
                <button className=" border-[1px] p-[10px] rounded-lg border-[#F2F2F2] w-8 h-8">
                  <img width={11} height={11} src="/img/plus.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mb-[24px]">
            <div className="flex justify-between items-center mb-[19px]">
              <h2>Итого:</h2>
              <div className="relative mx-[8px] flex flex-1 items-end border-b border-dashed border-[#DFDFDF]  "></div>
              <h2 className="font-semibold text-[16px] leading-[19px]">
                21 498 руб.
              </h2>
            </div>
            <div className="flex justify-between">
              <h2 className="flex items-end">Налог 5%:</h2>
              <div className="relative bottom-[5px] mx-[8px] flex flex-1 items-end border-b border-dashed border-[#DFDFDF]  "></div>
              <h2 className="flex items-end font-semibold text-[16px] leading-[19px]">
                1074 руб.
              </h2>
            </div>
          </div>
          <button className="group w-full relative flex justify-center items-center rounded-[18px] bg-light-green py-[18px]  ">
            <h1 className="text-bg-default">Оформить заказ</h1>
            <img
              className="absolute right-[33px] group-hover:translate-x-1 transition-transform ease-in-out duration-300"
              width={14}
              height={12}
              src="/img/arrow.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
