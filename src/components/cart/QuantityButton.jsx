import React from "react";

import {
  Minus,
  Plus,
} from "lucide-react";

const QuantityButton = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {

  return (

    <div className="flex items-center border rounded-2xl overflow-hidden w-fit">

      {/* DECREASE */}
      <button
        onClick={onDecrease}
        className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
      >

        <Minus size={18} />

      </button>

      {/* COUNT */}
      <div className="w-14 h-12 flex items-center justify-center font-bold text-lg">

        {quantity}

      </div>

      {/* INCREASE */}
      <button
        onClick={onIncrease}
        className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
      >

        <Plus size={18} />

      </button>

    </div>

  );
};

export default QuantityButton;