import React, { useState } from 'react';

function Show_total_price ({total_price, reset_price}) {
  return (
    <div className = "row total_setting">
      <div className = "col-5 subtotal_setting">
        Subtotal: ${total_price}
      </div>
      <div className = "col-2 left_button" >
        Order
      </div>
      <div className = "col-2 button_for_total" style={{marginLeft: '20px' , cursor: 'pointer'}}
          onClick = {reset_price}>
        Clear all
      </div>
    </div>
  );
};

export default Show_total_price;