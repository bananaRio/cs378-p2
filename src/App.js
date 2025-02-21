import './App.css';
import MenuItem from './components/MenuItem';
import Ocumpus_image from './components/Ocumpus_image';
import myMenuItem from './components/myMenuItem';
import TitleSentence_small from './components/TitleSentence_small';
import TitleSentence_large from './components/TitleSentence_large';
import Show_total_price from './components/Show_total_price';
import Single_menu from './components/Single_menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Pork Tacos',
    imageName: 'Taco-Plate-370x370.jpg',
    description: '2 crispy corn tostadas, served with jalapeno, onion, chilantro',
    price: '18.00',
  },
  {
    id: 2,
    title: 'Classic Hamburger',
    imageName: 'humbargar-370x370.jpg',
    description: 'Ground beef, french fries, tomato chutney',
    price: '25.00',
  },
  {
    id: 3, 
    title: 'Cuban Hot Sandwich',
    imageName: 'sandwitch-370x370.jpg',
    description: 'oven-roasted turkey, Black Forest ham, veggies and mayo',
    price: '12.00',
  },
  {
    id: 4, 
    title: 'Mediterranean Sald',
    imageName: 'Mediterranean-Salad-370x370.jpg',
    description: 'mozzarella cheese, and garlic together in a bowl',
    price: '40.00',
  },
  {
    id: 5,
    title: 'ocampus_logo',
    imageName: 'ocampuscafeLogo.png',
    description: '',
    price: '',
  }
]


// const menuItems = [
//   {
//     id: 1,
//     title: 'Gyoza',
//     description: 'Japanese dumplings',
//     imageName: 'gyoza.png',
//     price: 5.99,
//   },
//   {
//     id: 2,
//     title: 'Sushi',
//     description: 'Japanese rice rolls',
//     imageName: 'sushi.png',
//     price: 6.99,
//   },
//   {
//     id: 3,
//     title: 'Ramen',
//     description: 'Japanese noodle soup',
//     imageName: 'ramen.png',
//     price: 7.99,
//   },
//   {
//     id: 4,
//     title: 'Matcha Cake',
//     description: 'Japanese green tea cake',
//     imageName: 'matcha-cake.png',
//     price: 4.99,
//   },
//   {
//     id: 5,
//     title: 'Mochi',
//     description: 'Japanese rice cake',
//     imageName: 'mochi.png',
//     price: 3.99,
//   },
//   {
//     id: 6,
//     title: 'Yakitori',
//     description: 'Japanese skewered chicken',
//     imageName: 'yakitori.png',
//     price: 2.99,
//   },
//   {
//     id: 7,
//     title: 'Takoyaki',
//     description: 'Japanese octopus balls',
//     imageName: 'takoyaki.png',
//     price: 5.99,
//   },
//   {
//     id: 8,
//     title: 'Sashimi',
//     description: 'Japanese raw fish',
//     imageName: 'sashimi.png',
//     price: 8.99,
//   },
//   {
//     id: 9,
//     title: 'Okonomiyaki',
//     description: 'Japanese savory pancake',
//     imageName: 'okonomiyaki.png',
//     price: 6.99,
//   },
//   {
//     id: 10,
//     title: 'Katsu Curry',
//     description: 'Japanese curry with fried pork',
//     imageName: 'katsu-curry.png',
//     price: 9.99,
//   }
// ];



function App() {
  const menuItem_components = [];
  const [items, set_items] = useState(menuItems);
  const [counts, set_counts] = useState([0,0,0,0]);
  const [show_popup, set_show_popup] = useState(false);
  const [popup_message, set_popup_message] = useState("");
  for (let i = 0; i < 4; i++) {
    menuItem_components.push(
      <div key={i}>
        <div className = "menu_item_setting">
          <Single_menu item={items[i]} count={counts[i]}
                        set_count = {(new_count) => {
                          const new_counts = [...counts];
                          new_counts[i] = new_count;
                          set_counts(new_counts);
                        }}/>
        </div>
        <div className='padding_bottom'>
        </div>
      </div>
    );
  }
  const calculate_total = () => {
    let total = 0;
    for (let i = 0; i < 4; i++) {
      total += parseFloat(items[i].price) * counts[i];
    }
    return total;
  };
  function reset_price() {
    set_counts([0,0,0,0])
  };
  function pop_up_order() {
    const total_items = counts.reduce((acc, curr) => acc + curr, 0);
    if (total_items === 0) {
      set_popup_message("No items in cart");
    }
    else {
      let message = "Order placed!\n\n";
      for (let i = 0; i < 4; i++) {
        if (counts[i] > 0) {
          message += `${items[i].title}: ${counts[i]}\n`;
        }
        set_popup_message(message);
      }

      set_show_popup(true);
    }
  };
  return (
    <div>
      <div>
        <Ocumpus_image imageName = {items[4].imageName}/>
      </div>
      <div className='padding_between'>
        <TitleSentence_small />
      </div>
      <div> 
        <TitleSentence_large />
      </div>
      <div className='padding_bottom_large'>
      </div>
      {menuItem_components}
      <div>
        <Show_total_price total_price={calculate_total()}
                          reset_price={reset_price} 
                          pop_up_order = {pop_up_order}/>
      </div>
      {show_popup && 
        (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}> 
            <div style = {{backgroundColor: 'white', borderRadius: '5px', 
                          padding: '20px', textAlign: 'center',
                          border: '2px solid #000', width: '80%', minHeight: '100px'}}>
              <p style={{ whiteSpace: 'pre-wrap' }}>{popup_message}</p>
              <button onClick={() => {set_show_popup(false); reset_price();}}>
                OK
              </button>
            </div>
          </div>

        )}
    </div>
    
  );
}

export default App;
