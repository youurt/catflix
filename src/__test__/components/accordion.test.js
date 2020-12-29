import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import faqData from '../../fixtures/faqs.json';
import { Accordion } from '../../components';

describe('<Accordion/>', () => {
  it('should render the <Accordiotn/> with populated data', () => {
    const { container, getByText } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );

    expect(getByText('Frequently Asked Questions')).toBeTruthy();
    expect(getByText('What is Classicflix?')).toBeTruthy();
    expect(getByText('How much does Classicflix cost?')).toBeTruthy();
    expect(getByText('Where can I watch?')).toBeTruthy();
    expect(getByText('How do I cancel?')).toBeTruthy();
    expect(getByText('What can I watch on Classicflix?')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should open and close the <Accordion/> component', () => {
    const { container, queryByText, getByTestId } = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header data-testid="toggle_header">
                {item.header}
              </Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion.Frame>
      </Accordion>
    );
    const whatIsClassicflixBodyText =
      'Watch Classicflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from 5.99 € a month. No extra costs or contracts.';

    expect(queryByText('How much does Classicflix cost?')).toBeInTheDocument();
    fireEvent.click(queryByText('How much does Classicflix cost?'));
    // expect(queryByText(whatIsClassicflixBodyText)).toHaveClass('open');

    // expect(queryByText(whatIsClassicflixBodyText)).toBeTruthy();
    // fireEvent.click(queryByText('How much does Classicflix cost?'));
    // expect(queryByText(whatIsClassicflixBodyText)).toBeFalsy();

    // fireEvent.click(queryByText('How much does Classicflix cost?'));
    // expect(queryByText(whatIsClassicflixBodyText)).toBeFalsy();
    // expect(container.firstChild).toMatchSnapshot();
  });
});
