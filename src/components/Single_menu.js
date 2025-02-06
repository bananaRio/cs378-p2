import React from 'react'

const Single_menu = ({item}) => {
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
          <div className = "col-8">
            <p>${price}</p>
          </div>
          <div className = "button col-3">
            Add
          </div>
        </div>
      </div>
    </div>
  );
};
export default Single_menu;