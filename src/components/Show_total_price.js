
function Show_total_price ({total_price, reset_price, pop_up_order}) {
  return (
    <div className = "row total_setting">
      <div className = "col-5 subtotal_setting">
        Subtotal: ${total_price}
      </div>
      <div className = "col-2 left_button" style = {{cursor: 'pointer'}}
      onClick = {pop_up_order}>
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