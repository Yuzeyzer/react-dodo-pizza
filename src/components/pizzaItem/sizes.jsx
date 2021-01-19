import React from 'react';
import classNames from 'classnames';

const Sizes = ({ sizes }) => {
  const [activeItem, setActiveItem] = React.useState(0);
  const sizesItems = [26, 30, 40];
  const handleClickActive = (index) => setActiveItem(index);
  return (
    <ul>
      {sizesItems.map((item, index) => (
        <li
          onClick={() => handleClickActive(index)}
          key={item}
          className={classNames({
            active: index === activeItem && sizes.includes(item),
            disable: !sizes.includes(item),
          })}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Sizes;
