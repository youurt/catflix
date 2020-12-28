const selectionFilter = ({ series, films }) => {
  return {
    series: [
      {
        title: 'Crime',
        data: series.filter((item) => item.genre === 'crime'),
      },
      {
        title: 'Family',
        data: series.filter((item) => item.genre === 'family'),
      },
      {
        title: 'Comedy',
        data: series.filter((item) => item.genre === 'comedy'),
      },
      {
        title: 'Drama',
        data: series.filter((item) => item.genre === 'drama'),
      },
      {
        title: 'Action',
        data: series.filter((item) => item.genre === 'action'),
      },
    ],
    films: [
      {
        title: 'Action',
        data: films.filter((item) => item.genre === 'action'),
      },
      {
        title: 'Comedy',
        data: films.filter((item) => item.genre === 'comedy'),
      },
      {
        title: 'Drama',
        data: films.filter((item) => item.genre === 'drama'),
      },
      {
        title: 'Horror',
        data: films.filter((item) => item.genre === 'horror'),
      },
      {
        title: 'War',
        data: films.filter((item) => item.genre === 'war'),
      },
    ],
  };
};

export default selectionFilter;
