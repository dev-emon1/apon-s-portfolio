import React, { useState } from "react";
import Data from "./Data";
import DefaultLoad from "./DefaultLoad";

const Navigation = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleActive = (i) => {
    setActiveBox(i);
  };
  return (
    <div className="container">
      <div className="flex items-center justify-between pb-10 gap-x-6">
        {Data?.map((item, i) => (
          <div
            key={i}
            onClick={() => handleActive(i)}
            className={
              activeBox === i
                ? "bg-orange-600 w-1/4 cursor-pointer transition-all p-4 rounded-md text-white font-bold"
                : "w-1/4 hover:bg-orange-600 cursor-pointer transition-all p-4 rounded-md hover:text-white font-bold bg-white"
            }
          >
            <h4 className="text-center">{item.name}</h4>
          </div>
        ))}
      </div>
      <div className="bg-white pb-4">
        {activeBox === null && <DefaultLoad />}
        {activeBox === 0 && (
          <div>
            <h4>Hellow word</h4>
          </div>
        )}
        {activeBox === 1 && (
          <div>
            <h4>Travelling world</h4>
          </div>
        )}
        {activeBox === 2 && (
          <div>
            <h4>Blog post</h4>
          </div>
        )}
        {activeBox === 3 && (
          <div>
            <h4>Contact information</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
