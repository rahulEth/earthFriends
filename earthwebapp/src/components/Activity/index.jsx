import React, { useState } from 'react';
import './activity.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ['one', 'two', 'three'];

const Activity = ({}) => {
  const [filename, setFilename] = useState('Upload file');
  const defaultOption = options[0];
  const updateFile = (e) => {
    if(!e.target.files[0].name) {
        return;
    }
    let filename = e.target.files[0].name;
    if (filename?.length > 15) {
      filename =
        filename.substring(0, 8) +
        '...' +
        filename.substring(filename?.length - 5, filename?.length);
    }
    setFilename(filename);
  };
  return (
    <div className='activity'>
      <div className='activityheader'>Upload the proof of activity to earn the EFRND token</div>
      <div className='fileselect'>
        <span>{filename}</span>
        <label htmlFor='fileUpload'>Select File</label>
        <input
          id='fileUpload'
          type='file'
          accept='image/*'
          onChange={updateFile}
        />
      </div>
      <div className='activityselect'>
        <Dropdown
          options={options}
          onChange={() => {}}
          value={defaultOption}
          placeholder='Select an option'
        />
        <button>Upload Files</button>
      </div>
    </div>
  );
};

export { Activity };
