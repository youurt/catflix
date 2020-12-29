import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card, Player } from '../../components';

const category = 'series';
const slideRows = [
  {
    title: 'Comedy',
    data: [
      {
        genre: 'family',
        maturity: 'PG',
        slug: 'the-jeffersons',
        description:
          'A nouveau riche, African-American family who move into a luxury apartment building develop close, if occasionally fractious, relationships with other tenants.',
        id: '7d2dc83c-c84e-4c27-8d74-5bf6c5469a98',
        title: 'The Jeffersons',
        docId: '2MRuYGPUAtABzj9DZNyU',
      },
    ],
  },
  {
    title: 'Drama',
    data: [
      {
        title: 'Dallas',
        genre: 'drama',
        description:
          'J.R. Ewing, a Texas oil baron, uses manipulation and blackmail to achieve his ambitions, both business and personal. He often comes into conflict with his brother Bobby, his arch-enemy Cliff Barnes and his long-suffering wife Sue Ellen.',
        maturity: '12',
        id: 'cc6696ff-6f35-4216-83fb-d750367c167a',
        slug: 'dallas',
        docId: '3J7BvroMoNOapDOFDePX',
      },
    ],
  },
];

describe('<Card />', () => {
  it('should render the <Card/> with populated data', () => {
    const { container, getByText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(getByText('Comedy')).toBeTruthy();
    expect(getByText('The Jeffersons')).toBeTruthy();
    expect(
      getByText(
        'A nouveau riche, African-American family who move into a luxury apartment building develop close, if occasionally fractious, relationships with other tenants.'
      )
    ).toBeTruthy();

    expect(getByText('Drama')).toBeTruthy();
    expect(getByText('Dallas')).toBeTruthy();
    expect(
      getByText(
        'J.R. Ewing, a Texas oil baron, uses manipulation and blackmail to achieve his ambitions, both business and personal. He often comes into conflict with his brother Bobby, his arch-enemy Cliff Barnes and his long-suffering wife Sue Ellen.'
      )
    ).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the <Card/> and toggles the card feature', () => {
    const { container, queryByText, getByTestId, getByAltText } = render(
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item
                  key={item.docId}
                  item={item}
                  data-testid={`${item.slug}-item-feature`}
                >
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    );

    expect(queryByText('PG')).toBeFalsy();
    fireEvent.click(getByTestId('the-jeffersons-item-feature'));
    expect(queryByText('PG')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('PG')).toBeFalsy();

    expect(queryByText('12')).toBeFalsy();
    fireEvent.click(getByTestId('dallas-item-feature'));
    expect(queryByText('12')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('12')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
