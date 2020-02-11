// @component
import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export default function BasicPagination(props) {
  return <Pagination count={10} {...props} />;
}
