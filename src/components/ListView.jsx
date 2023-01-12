import React from 'react';
import './ListView.css';
import ShopItem from './ShopItem';
import ShopCard from './ShopCard';

function ListView({ items }) { 
  let indexItem = 0;

  return (
    <div className='listView'>
      {items.map((item) => (
        <ShopItem item={item} key={indexItem++} />
      ))}
    </div>
  );
}

export default ListView;
