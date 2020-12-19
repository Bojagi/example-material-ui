import React from 'react';
import Pagination from './Pagination';

export default {
  title: 'Pagination',
};

export const paginationDefault = () => <Pagination/>

export const paginationPrimary = () => <Pagination color="primary" />

export const paginationSecondary = () => <Pagination color="secondary"/>

export const paginationDisabled = () => <Pagination disabled />


