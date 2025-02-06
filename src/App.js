import './App.css';
import MenuItem from './components/MenuItem';
import Ocumpus_image from './components/Ocumpus_image';
import myMenuItem from './components/myMenuItem';
import TitleSentence_small from './components/TitleSentence_small';
import TitleSentence_large from './components/TitleSentence_large';
import Single_menu from './components/Single_menu';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  for (let i = 0; i < 4; i++) {
    menuItem_components.push(
      <div>
        <div key={i} className = "menu_item_setting">
          <Single_menu item={menuItems[i]}/>
        </div>
        <div className='padding_bottom'>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Ocumpus_image imageName = {menuItems[4].imageName}/>
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
      {/* <div className = "menu_item_setting">
        <Single_menu item = {menuItems[0]} />
      </div> */}
    </div>
    
    // <div>
    //   <h1>Menu</h1>
    //   <div className="menu">
    //     {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
    //     <MenuItem title={menuItems[0].title} /> {/* Example for how to use a component */}
    //   </div>
    // </div>
  );
}

export default App;
