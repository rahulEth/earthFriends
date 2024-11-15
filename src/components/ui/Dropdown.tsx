import React from 'react'

import DropdownInput from '../shared/DropdownComponent';

const Dropdown = (): React.JSX.Element => {
    const options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (

    <div className="flex justify-center items-center bg-gray-100">

      <DropdownInput 
      options={options} 
      />


    </div>
  )



}

export default Dropdown