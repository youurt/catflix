import React from 'react';
import { render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature/>', () => {
  it('should render the <Feature/> with with populated data', () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel any time.</Feature.SubTitle>
      </Feature>
    );

    expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel any time.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the <Feature/> with just a title', () => {
    const { container, queryByText, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
      </Feature>
    );

    expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
    expect(queryByText('Watch anywhere. Cancel at any time.')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
