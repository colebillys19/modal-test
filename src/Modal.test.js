import React from 'react';
import { render } from '@testing-library/react';

import Modal from './Modal';

const handleClose = jest.fn();

const mockProps = { handleClose, open: true };

describe('<Modal />', () => {
  const { debug } = render(<Modal {...mockProps} />);
  debug();
});
