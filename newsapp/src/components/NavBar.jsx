import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <>
        <div className="h-14 w-full bg-gray-200">
          <div className="flex text-center">
            <div className="font-semibold">
              <p className="text-xl"> TV 9 </p>
              <p> Channel </p>
            </div>
            <ul className="text-xl font-semibold flex items-center gap-3 pl-8">
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
