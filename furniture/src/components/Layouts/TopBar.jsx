import React from "react";
import Dropdown from "../Dropdown/Dropdown";

function TopBar() {
  return (
    <div className="py-3 border-b">
      <div className="container_large">
        <div className="flex justify-end sm:justify-between items-center text-sm text-black">
          <div className="hidden sm:block">
            10% discount for registered users
          </div>
          <div className="flex gap-3 items-center">
            <Dropdown title="USD" />
            <Dropdown title="English" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;