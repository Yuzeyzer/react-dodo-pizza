import React from 'react';

const Categories = ({ items }) => {
  const [itemActive, setItemActive] = React.useState(0);
  const handleClickActive = (index) => setItemActive(index);
  return (
    <div className='categories'>
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => handleClickActive(index)}
            className={itemActive === index ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
