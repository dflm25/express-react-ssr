/**
 * Footer component
 */
import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

// Styles
import styles from './style';

const perPageOption = [5, 10, 20, 25];

function Datatable ({ handlePerRowsChange, loading, data, columns, paginationTotalRows:total, handlePageChange }) {

  return (
    <DataTable
      columns={columns}
      theme="solarized"
      data={data}
      pagination
      paginationServer
      paginationTotalRows={total}
      onChangeRowsPerPage={handlePerRowsChange}
      paginationRowsPerPageOptions={perPageOption}
      customStyles={styles}
      onChangePage={handlePageChange}
    />
  );
}

export default Datatable