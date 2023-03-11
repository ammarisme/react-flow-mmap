import React, { useState } from 'react';

const Accordion = ({ data} : any) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index:never) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const renderItem = (item:any, index:never) => {
    const isOpen = openItems.includes(index);

    return (
      <div key={index}>
        <button onClick={() => toggleItem(index)}>
          {isOpen ? '-' : '+'}
        </button>
        <span>{item.name}</span>
        {isOpen && (
          <div>
            {item.children && item.children.map((child:any, i:never) => renderItem(child, i))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {data.map((item:any, index:never) => renderItem(item, index))}
    </div>
  );
};

export default Accordion;
