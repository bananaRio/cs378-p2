import React from 'react';


const Ocumpus_image = ({ imageName }) => {
  return (
    <>
        <img className = "ocampus_image_title" src = {"/images/" + imageName}/>
    </>
  );
}

export default Ocumpus_image;