import React, { useState } from 'react';

import Modal from './Modal';

const App = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        click me
      </button>
      <Modal handleClose={handleClose} open={open} />
    </div>
  );
};

export default App;
