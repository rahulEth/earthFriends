import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Activity Type',
    selector: (row) => row.activitytype,
  },
  {
    name: 'File',
    selector: (row) => row.file,
  },
  {
    name: 'Earned Token',
    selector: (row) => row.earnedtoken,
  },
  {
    name: 'Tx Hash',
    selector: (row) => row.txhash,
  },
  {
    name: 'Date',
    selector: (row) => row.date,
  },
];

const data = [
  {
    id: 1,
    activitytype: 'Tree Planted',
    file: 'tree.png',
    earnedtoken: '100 EFRND',
    txhash: '',
    date: '01-11-2024',
  },
  {
    id: 2,
    activitytype: 'Garbage collection',
    file: 'garbage.png',
    earnedtoken: '25 EFRND',
    txhash: '',
    date: '01-10-2024',
  },
  {
    id: 3,
    activitytype: 'eco-friendly disposable',
    file: 'eco-friendly.png',
    earnedtoken: '150 	EFRND',
    txhash: '',
    date: '01-10-2024',
  },
  {
    id: 4,
    activitytype: 'environment campaign',
    file: 'env-campaing.png',
    earnedtoken: '200 FRND',
    txhash: '',
    date: '05-11-2024',
  },
  {
    id: 5,
    activitytype: 'beach clean-up',
    file: 'beach-clean.png',
    earnedtoken: '150 EFRND',
    txhash: '',
    date: '04-09-2024',
  },
  {
    id: 6,
    activitytype: 'eco-friendly farming',
    file: 'farming.png',
    earnedtoken: '250 EFRND',
    txhash: '',
    date: '11-08-2024',
  },
];

const UserData = ({}) => {
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
};

export { UserData };
