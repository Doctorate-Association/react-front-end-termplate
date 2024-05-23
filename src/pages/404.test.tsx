import React from 'react';
import { render } from '@testing-library/react';
import NoFoundPage from './404';
import { RawIntlProvider } from '@@/exports';
import { createIntl, localeInfo } from '@@/plugin-locale/localeExports';

describe('NoFoundPage component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <RawIntlProvider value={createIntl(localeInfo['en-US'])}>
        <NoFoundPage />
      </RawIntlProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
