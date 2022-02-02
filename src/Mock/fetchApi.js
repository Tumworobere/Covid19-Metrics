const countries = () => Promise.resolve({
  data: [
    {
      code: 'UG',
      name: 'Uganda',
      latest_data: {
        recovered: 623527,
      },
    },
    {
      code: 'SA',
      name: 'South Africa',
      latest_data: {
        recovered: 224553,
      },
    },
  ],
});

export default countries;
