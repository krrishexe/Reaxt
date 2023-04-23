
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {

  return (
    <li
      style={{ backgroundColor: (isSelected ? 'green' : 'red') }}
      onClick={() => { onClickHandler(index) }}           // use of callback function
    >
      {text}
    </li>
  );
};


WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.number,             // default proptype was string then changed it to number
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(null);   
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}    // isSelected prop was given the value 'isSelected only' which is then set to 
          key={index}       // to provide a unique value to each list item
        />
      ))}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(         // array to arrayOf and shapeOf to shape
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })).isRequired,
};

WrappedListComponent.defaultProps = {
  items: [{                         // default props were set to null , so we need to pass an array of objects with key value=> "text"
    text: "Hello"
  },
  {
    text: "World"
  },
  {
    text: "Welcome"
  },
  {
    text: "to React"
  }
  ]
};

const List = memo(WrappedListComponent);

export default List;