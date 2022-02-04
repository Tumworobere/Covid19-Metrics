const countries = () => Promise.resolve({
  data: [
    {
      code: 'UG',
      name: 'Uganda',
      latest_data: {
        recovered: 123527,
      },
    },
    {
      code: 'SA',
      name: 'South.Africa',
      latest_data: {
        recovered: 204553,
      },
    },
  ],
});

export default countries;
