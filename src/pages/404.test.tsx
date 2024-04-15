import React from 'react';
import { render } from '@testing-library/react';
import NoFoundPage from './404';
import { IntlProvider } from '@@/exports';

describe('NoFoundPage component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <IntlProvider locale="en-US">
        <NoFoundPage />
      </IntlProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
