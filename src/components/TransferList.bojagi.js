import React from 'react'
import TransferList from './TransferList'

export default {
  title: 'Transfer List',
};

const left = ['item 1', 'item 2', 'item 3', 'item 4']
const right = ['item 5', 'item 6', 'item 7']

export const simple = () => <TransferList initialLeft={left} initialRight={right}/>

export const enhanced = () => <TransferList  initialLeft={left} initialRight={right} enhanced={true}></TransferList>
