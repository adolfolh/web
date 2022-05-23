import React from "react";

export default function Box({children, type, bg}) {
  return (
    <div className={`flex-grow flex flex-col`}>
        <div className={`in-container ${bg} flex-grow`}>
          <div className={`${type}`}>
            {children}
          </div>
        </div>
    </div>
  )
}