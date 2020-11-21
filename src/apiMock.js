export const getIncomeStatement = () => {
  const financials = [
    {
      name: "Revenue",
      quarterly_total: "663467",
      subCategories: [
        {
          name: "Services",
          values: [
            {
              month: "January, 2020",
              value: "20152"
            },
            {
              month: "February, 2020",
              value: "25345"
            },
            {
              month: "March, 2020",
              value: "30576"
            }
          ]
        },
        {
          name: "Subscriptions",
          values: [
            {
              month: "January, 2020",
              value: "180745"
            },
            {
              month: "February, 2020",
              value: "201082"
            },
            {
              month: "March, 2020",
              value: "205567"
            }
          ]
        },
      ],
    },
    {
      name: "Costs of Revenue",
      quarterly_total: "176769",
      subCategories: [
        {
          name: "Cloud Hosting Expense",
          values: [
            {
              month: "January, 2020",
              value: "10405"
            },
            {
              month: "February, 2020",
              value: "11478"
            },
            {
              month: "March, 2020",
              value: "11900"
            }
          ]
        },
        {
          name: "Customer Support Expense",
          values: [
            {
              month: "January, 2020",
              value: "20304"
            },
            {
              month: "February, 2020",
              value: "20890"
            },
            {
              month: "March, 2020",
              value: "22836"
            }
          ]
        },
        {
          name: "Professional Support Expense",
          values: [
            {
              month: "January, 2020",
              value: "25875"
            },
            {
              month: "February, 2020",
              value: "27958"
            },
            {
              month: "March, 2020",
              value: "28123"
            }
          ]
        },
      ]
    },
    {
      name: "Sales and Marketing",
      quarterly_total: "254445",
      subCategories: [
        {
          name: "Total Sales",
          values: [
            {
              month: "January, 2020",
              value: "40874"
            },
            {
              month: "February, 2020",
              value: "45567"
            },
            {
              month: "March, 2020",
              value: "48946"
            }
          ]
        },
        {
          name: "Marketing Expense",
          values: [
            {
              month: "January, 2020",
              value: "30487"
            },
            {
              month: "February, 2020",
              value: "32476"
            },
            {
              month: "March, 2020",
              value: "33912"
            }
          ]
        }
      ]
    }
  ];

  const periods = [
      "January, 2020",
      "February, 2020",
      "March, 2020"
  ];

  const data = {financials, periods}

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(data);
    });
  }, 1000);
};
