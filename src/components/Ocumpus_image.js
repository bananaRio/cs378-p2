import React from 'react';


const Ocumpus_image = ({ imageName }) => {
  return (
    <div className = "ocampus_image_div">
        <img className = "ocampus_image_title" src = {"/images/" + imageName}/>
    </div>
  );
}

export default Ocumpus_image;