import React from "react";
import Card from "../Card/Card";
import ElectricKettle from "./Image1";
import { NextBotton } from "../NextBotton";

const Electronics = () => {
  return (
    <>
      <div className="electric-product">
        <h1>Electric Product</h1>
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
  );
};

export default Electronics;
