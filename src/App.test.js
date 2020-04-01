import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('has backdrop element', () => {
    const { container } = render(<App />);
    const backdrop = container.querySelector('.MuiBackdrop-root');
    expect(backdrop.tagName).toEqual('div');
  });
});

/*

container:
<body style="padding-right: 0px; overflow: hidden;">
  <div aria-hidden="true">
    <div>
      <button type="button">click me</button>
    </div>
  </div>
  <div aria-describedby="simple-modal-description" aria-labelledby="simple-modal-title" role="presentation" style="position: fixed; z-index: 1300; right: 0px; bottom: 0px; top: 0px; left: 0px;">
    <div aria-hidden="true" class="MuiBackdrop-root" style="opacity: 1; webkit-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;" />
    <div data-test="sentinelStart" tabindex="0" />
    <div style="background-color: white; border-radius: 10px; margin: 25vh auto 0px; outline: none; padding: 30px; text-align: center; width: 200px;" tabindex="-1">modal content</div>
    <div data-test="sentinelEnd" tabindex="0" />
  </div>
</body>

*/
