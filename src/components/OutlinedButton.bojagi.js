import React from 'react';
import Button from './OutlinedButton'

export default {
  title: 'Outlined Button',
};

export const buttonDefault = () => 
  <Button>
    Default
  </Button>

export const buttonPrimary = () => 
  <Button color="primary">
    Primary
  </Button>

export const buttonSecondary = () =>
  <Button color="secondary">
    Secondary
  </Button>

export const buttonDisabled = () => 
<Button disabled>
  Disabled
</Button>

