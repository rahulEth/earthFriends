// components/DropdownInput.js
import React, { useState } from 'react';

interface DropdownProps{

  options: string[]

}

const DropdownInput: React.FC<DropdownProps> = ( {options} ): React.JSX.Element => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false); // Close the dropdown when an item is selected
  };

  return (
    <div className="relative w-72">
      <button
        onClick={toggleDropdown}
        className="w-full p-3 border border-gray-300 rounded-md text-left flex items-center justify-between bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {selectedItem || 'Select an option'}
        <span className="ml-2 ">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelectItem(option)}
              className="p-2 cursor-pointer hover:bg-indigo-500 hover:text-white"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default DropdownInput;