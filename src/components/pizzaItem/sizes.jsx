import React from 'react';

const Sizes = ({ sizes }) => {
	const [activeItem, setActiveItem] = React.useState(0);
	
	const handleClickActive = (index) => setActiveItem(index);
  return (
    <ul>
      {sizes.map((item, index) => (
        <li onClick={() => handleClickActive(index)} className={activeItem === index ? 'active' : ''}>{item}</li>
      ))}
    </ul>
  );
};

export default Sizes;
