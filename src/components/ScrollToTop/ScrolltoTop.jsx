import React, { useState, useEffect } from "react";

import { AiOutlineArrowUp } from "react-icons/ai";

function ScrolltoTop() {
  const [showButton, setShowButton] = useState(false);

  const ScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const backtoTop = () => {
    if (window.pageYOffset > 700) {
      setShowButton(true);
    } else setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", backtoTop);
    return () => {
      window.removeEventListener("scroll", backtoTop);
    };
  }, []);
  return (
    <button
      className={"btn-scroll-top " + (showButton ? "btn-scroll-top-show" : "")}
      onClick={ScrolltoTop}
    >
      <AiOutlineArrowUp className="btn-scroll-top-icon" size={20} />
    </button>
  );
}

export default ScrolltoTop;
