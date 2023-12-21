// src/components/navigation/NavigationBar.jsx
import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwipeableViews from 'react-swipeable-views';
import { useMediaQuery } from 'react-responsive';

const categories = [
  { id: 1, name: 'Music', icon: <FontAwesomeIcon icon="music" className="mr-2" /> },
  { id: 2, name: 'Sports', icon: <FontAwesomeIcon icon="football-ball" className="mr-2" /> },
  { id: 3, name: 'Film', icon: <FontAwesomeIcon icon="film" className="mr-2" /> },
  { id: 4, name: 'Coffee', icon: <FontAwesomeIcon icon="coffee" className="mr-2" /> },
  // Add more categories as needed
];

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  const renderMenuItems = (string) => {
    return categories.map((category, index) => (
      <Menu.Item key={category.id} icon={category.icon}>
        <Link to={`/category/${category.id}`}>
          {isMobile ? (
            <div>
              {category.icon}
              <span>{category.name} {string}</span>
            </div>
          ) : (
            <span>{category.name}</span>
          )}
        </Link>
      </Menu.Item>
    ));
  };

  return (
    <div>
      {isMobile ? (
        // Mobile View - Swipeable
        <SwipeableViews
          index={selectedIndex}
          onChangeIndex={handleIndexChange}
          enableMouseEvents
          resistance
        >
          {categories.map((category, index) => (
            <div key={index}>
              <Menu theme="white" mode="horizontal" defaultSelectedKeys={['1']} selectedKeys={[String(selectedIndex)]}>
                {renderMenuItems("2")}
              </Menu>
            </div>
          ))}
        </SwipeableViews>
      ) : (
        // Desktop View
        <Menu theme="white" mode="inline" defaultSelectedKeys={['1']}>
          {renderMenuItems()}
        </Menu>
      )}
    </div>
  );
};

export default Navigation;
