/**
 * Home page
 */
import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from 'react-data-table-component';
import { getSizeData } from '../../services/size';

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];

const Size = () => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const countPerPage = 3;

  useEffect(()=> {
    console.log('component did mount');
    
    const getData = async () => {
       const response = await getSizeData();
      setData(response);
    }

    getData();
  }, []);
  
  return (
    <div>
      <DataTable
        title="Arnold Movies"
        columns={columns}
        theme="solarized"
      />
    </div>
  );
}

export default Size;