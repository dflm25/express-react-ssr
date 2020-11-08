/**
 * Site index component
 */

import React, { useEffect, useState } from 'react';
import Admin from '../../layouts/Admin';
import Datatable from '../../components/datatable';
import { sizeColumns } from '../../data/index.json';
import { getSizeData } from '../../services/size';

const loadDatatable = async (data, setData) => {
  const response = await getSizeData(data);
  setData(response.rows);
}

const Index = () => {
  const [data, setData] = useState(false);
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage(page + limit);
  }

  const previousPage = () => {
    setPage(page - limit);
  }

  useEffect(() => {

    const response = loadDatatable({ limit, page }, setData);
  }, [page, limit]);

  return (
    <Admin title="Size administrator">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4><a onClick="" className="btn btn-info">Create a size</a></h4>
            </div>
            <div className="card-body">

              <Datatable 
                columns={sizeColumns}
                data={data}
                actions={{
                  nextPage,
                  previousPage
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Admin>
  );
}

export default Index;