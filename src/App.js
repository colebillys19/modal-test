import React, { Fragment, useState } from 'react';

import Modal from './Modal';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <button onClick={handleOpen} style={{ margin: '20px' }}>click me</button>
      <Modal handleClose={handleClose} open={open} />
    </Fragment>
  );
};

export default App;
