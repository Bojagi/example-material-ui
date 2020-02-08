import React from 'react';
import Button from './ContainedButton'

export const buttonPrimary = () => 
  <Button color="primary">
    Primary
  </Button>

export const buttonSecondary = () =>
  <Button color="secondary">
    Secondary
  </Button>


export const multipleButtons = () => 
  <div>
    <Button color="primary">
      Primary
    </Button>
    <Button color="secondary">
      Secondary
    </Button> 
  </div>