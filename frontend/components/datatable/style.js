/**
 * Component style
 */
const styles = {
  rows: {
    style: {
      minHeight: '62px', // override the row height
    }
  },
  headCells: {
    style: {
      paddingLeft: '2px', // override the cell padding for head cells
      paddingRight: '2px',
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      fontSize: '1em',
      color: '#666',
      fontWeight: 'bold'
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

export default styles;