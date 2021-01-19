import React from 'react';
import classNames from 'classnames';

const Types = ({ types }) => {
  const [activeItem, setActiveItem] = React.useState(types[0]);
  const typesItems = ['Тонкое', 'Традиционное'];
  const handleClickActive = (index) => setActiveItem(index);
  return (
    <ul>
      {typesItems.map((item, index) => (
        <li
          onClick={() => handleClickActive(index)}
          key={item}
          className={classNames({
            active: activeItem === index,
            disable: !types.includes(index),
          })}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Types;
