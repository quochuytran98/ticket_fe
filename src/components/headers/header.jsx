// src/components/headers/Header.js
import React from 'react';
import { Input, Button, Dropdown, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';

const { Search } = Input;

const Header = () => {
  const languageMenu = (
    <Menu>
      <Menu.Item key="1">English</Menu.Item>
      <Menu.Item key="2">Français</Menu.Item>
      {/* Add other language options */}
    </Menu>
  );

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Logo"
          className="h-8 w-auto mr-4"
        />

        {/* Search Input */}
        <div className={`flex-1 ${isMobile ? '' : 'hidden md:flex'}`}>
          <Search
            placeholder="Search"
            className={isMobile ? 'border-gray-300 rounded-full w-full' : 'border-gray-300 rounded-full w-64'}
          />
        </div>

        {/* Language Dropdown and Create Event Button for Larger Screens */}
        <div className="hidden md:flex space-x-4">
          {/* Language Dropdown */}
          <Dropdown overlay={languageMenu} placement="bottomRight">
            <Button>
              <FontAwesomeIcon icon="globe" className="text-gray-500 mr-1" />
              Language
            </Button>
          </Dropdown>

          {/* Create Event Button */}
          <Button type="primary" className='create-event-btn'>
            <FontAwesomeIcon icon="plus" className="mr-1" />
            Create Event
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
