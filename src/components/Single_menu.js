// import React from 'react'
import React, { useState } from 'react';

function Single_menu ({item, count, set_count}) {
  const {imageName, title, price, description} = item;
  return (
    <div className = "single_menu_padding row">
      <div className = "col-4">
        <img className = "menu_image" src={`${process.env.PUBLIC_URL}/images/${imageName}`}/>
      </div>
      <div className = "col-8 ps-0">
        <div className = "padding_bottom_1 row">
          <p className = "menu_title"> 
            {title}
          </p>
        </div>
        <div className = "row">
          <div className = "menu_description">
              {description}
          </div>
        </div>
        {/* <div className = "padrow row"> */}

        {/* </div> */}
        <div className = "row">
          <div className = "col-6 ">
            <p>${price}</p>
          </div>
          <div className = "col-2 updated_button_minus">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-dash-circle" 
                style={{cursor: "pointer"}} onClick = {() => set_count(count > 0 ? count - 1 : 0)}>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
              </svg>
          </div>
          <div className="col-1 show_menu_item_num">
             {count}
          </div>
          <div className = "col-2 updated_button_plus">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" 
                style = {{cursor : "pointer"}}  onClick = {() => set_count(count + 1)}>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
              </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Single_menu;