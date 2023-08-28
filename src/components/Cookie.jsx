import React, { useState, useEffect } from "react";

function Cookie({ cookieMessage, handelCallback }) {
  //console.log(props);
  return (
    <div className="text-white cook mt-auto py-3 bg-dark">
      <div className="container">
        <span className="text-light">{cookieMessage}</span>
        <button type="button" className="btn btn-info" onClick={handelCallback}>
          Ok
        </button>
      </div>
    </div>
  );
}

export default Cookie;
