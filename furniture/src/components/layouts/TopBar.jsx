import React from "react";
import Dropdown from "../dropdown/Dropdown";

function TopBar() {
  return (
    <div className="py-3 border-b">
      <div className="container_large">
        <div className="flex justify-end sm:justify-between items-center text-sm text-black">
          <div className="hidden sm:block">
            10% discount for registered users
          </div>
          <div className="flex gap-3 items-center">
            <Dropdown title="USD" options={["EUR", "USD", "GBP"]} />
            <Dropdown title="Eng" options={["English", "Spanish", "French"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
