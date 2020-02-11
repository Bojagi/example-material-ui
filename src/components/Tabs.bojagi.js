import React from 'react';
import Tabs from './Tabs'

const items = [{
  label: 'first',
  content: 'Once there was a time...'
}, {
  label: 'second',
  content: 'Soon after the sun set...'
}, {
  label: 'third',
  content: 'And they lived...'
}]

export const simple = () => <Tabs items={items} />
