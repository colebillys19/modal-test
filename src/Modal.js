import React from 'react';
import MuiModal from '@material-ui/core/Modal';
import MuiBackdrop from '@material-ui/core/Backdrop';

import ModalContent from './ModalContent';

const Modal = ({ handleClose, open }) => (
  <MuiModal
    aria-describedby="simple-modal-description"
    aria-labelledby="simple-modal-title"
    BackdropComponent={MuiBackdrop}
    onClose={handleClose}
    open={open}
  >
    <ModalContent />
  </MuiModal>
);

export default Modal;
