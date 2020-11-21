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
              value: "$20,152"
            },
            {
              month: "February, 2020",
              value: "$25,345"
            },
            {
              month: "March, 2020",
              value: "$30,576"
            }
          ]
        },
        {
          name: "Subscriptions",
          values: [
            {
              month: "January, 2020",
              value: "$180,745"
            },
            {
              month: "February, 2020",
              value: "$201,082"
            },
            {
              month: "March, 2020",
              value: "$205,567"
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
              value: "$10,405"
            },
            {
              month: "February, 2020",
              value: "$11,478"
            },
            {
              month: "March, 2020",
              value: "$11,900"
            }
          ]
        },
        {
          name: "Customer Support Expense",
          values: [
            {
              month: "January, 2020",
              value: "$20,304"
            },
            {
              month: "February, 2020",
              value: "$20,890"
            },
            {
              month: "March, 2020",
              value: "$22,836"
            }
          ]
        },
        {
          name: "Professional Support Expense",
          values: [
            {
              month: "January, 2020",
              value: "$25,875"
            },
            {
              month: "February, 2020",
              value: "$27,958"
            },
            {
              month: "March, 2020",
              value: "$28,123"
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
              value: "$40,874"
            },
            {
              month: "February, 2020",
              value: "$45,567"
            },
            {
              month: "March, 2020",
              value: "$48,946"
            }
          ]
        },
        {
          name: "Marketing Expense",
          values: [
            {
              month: "January, 2020",
              value: "$30,487"
            },
            {
              month: "February, 2020",
              value: "$32,476"
            },
            {
              month: "March, 2020",
              value: "$33,912"
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
