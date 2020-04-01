import React from 'react';
import MuiModal from '@material-ui/core/Modal';

const modalStyles = {
  backgroundColor: 'white',
  borderRadius: '10px',
  margin: '25vh auto 0',
  outline: 'none',
  padding: '30px',
  textAlign: 'center',
  width: '200px',
};

const Modal = ({ handleClose, open }) => {
  const body = (
    <div style={modalStyles}>
      <p id="simple-modal-description">modal content</p>
      <Modal />
    </div>
  );

  return (
    <MuiModal
      aria-describedby="simple-modal-description"
      onClose={handleClose}
      open={open}
    >
      {body}
    </MuiModal>
  );
};

export default Modal;
