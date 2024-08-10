import React, { memo } from 'react';
import GridItem from './GridItem';
import AddItem from './AddItem';

const WardrobeGrid = () => {
  return (
    <>
      <GridItem />
      <AddItem />
    </>
  );
}

export default memo(WardrobeGrid);
