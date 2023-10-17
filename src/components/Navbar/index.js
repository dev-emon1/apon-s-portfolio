import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="navbar bg-transparent">
          <div className="navbar-start">
            <a className="normal-case text-xl" href="/">
              uKnow Me
            </a>
          </div>

          <div className="navbar-end">
            <a className="btn bg-orange-600 text-white w-44" href="/">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
