import React from "react";
import Card from "../Card/Card";
import ElectricKettle from "../Electronics/Image1";
import { NextBotton } from "../NextBotton";

const Kids = () => {
  return (
    <>
      <>
        <div className="electric-product">
          <h1>Kids Wear's</h1>
        </div>

        <div className="cards">
          {ElectricKettle.map((data) => {
            return (
              <>
                <Card
                  key={data.id}
                  imgsrc={data.image}
                  title={data.title}
                  quantity={data.quantity}
                  mainPrice={data.mainPrice}
                  discountPrice={data.discountPrice}
                  offer={data.offer}
                />
              </>
            );
          })}
        </div>

        <NextBotton />
      </>
    </>
  );
};

export default Kids;
