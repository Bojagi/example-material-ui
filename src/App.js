import React from 'react'
import Button from '@material-ui/core/Button';
import * as TransferListStates from './components/TransferList.bojagi'
import * as Tabs from './components/Tabs.bojagi'

export default function(props) {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      {TransferListStates.enhanced()}
      {Tabs.simple()}
    </div>
  )
}