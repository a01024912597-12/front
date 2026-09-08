import React from "react";

// 자식
const AlertButton = ({ message, children }) => {
  return (
    <div>
      <button className="p-4 bg-orange-300" onClick={() => alert(message)}>
        {children}
      </button>
    </div>
  );
};

const Button2 = () => {
  return (
    <div>
      <AlertButton message={"Playing!"}>Play Movie</AlertButton>
      <AlertButton message={"Uploading!"}>Upload Image</AlertButton>
    </div>
  );
};

export default Button2;
