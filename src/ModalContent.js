import React, { forwardRef } from 'react';

const modalContentStyles = {
  backgroundColor: 'white',
  borderRadius: '10px',
  margin: '25vh auto 0',
  outline: 'none',
  padding: '30px',
  textAlign: 'center',
  width: '200px',
};

const ModalContent = forwardRef((props, ref) => (
  <div ref={ref} style={modalContentStyles}>modal content</div>
));

export default ModalContent;
