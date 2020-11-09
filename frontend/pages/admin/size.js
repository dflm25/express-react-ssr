/**
 * Site index component
 */

import React, { useEffect, useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Datatable from '../../components/datatable';

import Admin from '../../layouts/Admin';
import { sizeColumns } from '../../data/index.json';
import { getSizeData } from '../../services/size';

const loadDatatable = async (data, action) => {
  const response = await getSizeData(data);
  action.setData(response.rows);
  action.setTotal(response.count);
  action.setLoading(false);
}

const Index = () => {
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(10);

  useEffect(() => {
    setLoading(true);
    const response = loadDatatable({ limit, page }, {
      setData,
      setTotal,
      setPage,
      setLimit,
      setLoading
    });
  }, [page, limit]);

  const openModalForm = () => {

  }

  const handlePerRowsChange = (perPage, page) => {
    setLimit(perPage);
  }

  const handlePageChange = page => {
    setPage(page -1);
  }

  return (
    <Admin title="Size administrator">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4><a onClick={openModalForm} className="btn btn-info">Create a size</a></h4>
            </div>
            <div className="card-body">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="username" />
              </InputGroup>

              <Datatable
                columns={sizeColumns}
                data={data}
                loading={loading}
                paginationTotalRows={total}
                handlePerRowsChange={handlePerRowsChange}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </Admin>
  );
}

export default Index;