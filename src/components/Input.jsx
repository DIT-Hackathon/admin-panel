import React from "react";

function InputBox({ placeholder }) {
  return <div>
    
    <input className="border-2 rounded-sm border-solid hover:shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.8)] cursor-pointer" type="text" placeholder={placeholder} />
    </div>
}

export default InputBox;
