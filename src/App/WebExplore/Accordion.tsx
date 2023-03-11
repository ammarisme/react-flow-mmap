import React, { useState } from 'react';

const Accordion = ({ data }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const renderItem = (item, index) => {
    const isOpen = openItems.includes(index);

    return (
      <div key={index}>
        <button onClick={() => toggleItem(index)}>
          {isOpen ? '-' : '+'}
        </button>
        <span>{item.name}</span>
        {isOpen && (
          <div>
            {item.children && item.children.map((child, i) => renderItem(child, i))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {data.map((item, index) => renderItem(item, index))}
    </div>
  );
};

export default Accordion;
