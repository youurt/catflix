import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../../components';

describe('<Footer/>', () => {
  it('should render the <Footer/> with populated data', () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Questions? Contact Us!</Footer.Title>
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Ways to watch</Footer.Link>
            <Footer.Link href="#">Coporate Information</Footer.Link>
            <Footer.Link href="#">Classicflix Originals</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Help Center</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href="#">Media Center</Footer.Link>
            <Footer.Link href="#">Buy Gift Card</Footer.Link>
            <Footer.Link href="#">Cookie Preferences</Footer.Link>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>Ugur Tigu</Footer.Text>
      </Footer>
    );

    expect(getByText('Questions? Contact Us!')).toBeTruthy();
    expect(getByText('FAQ')).toBeTruthy();
    expect(getByText('Ways to watch')).toBeTruthy();
    expect(getByText('Coporate Information')).toBeTruthy();
    expect(getByText('Classicflix Originals')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
