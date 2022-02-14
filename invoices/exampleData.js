const exampleData = {
  Number: 14999,
  Issued: Date.parse('2020-10-12') / 1000,
  Due: Date.parse('2020-11-12') / 1000,

  Invoicer: {
    Name: 'HeRa Finance',
    Street1: 'Nieuwstraat 21',
    Street2: null,
    City: 'Vroomshoop',
    State: 'Overijssel',
    Zip: '7681EP',
    Email: 'info@herafinance.nl',
    Phone: '+31 0546 646026',
    Website: 'herafinance.nl',
  },

  Client: {
    Name: 'Monkeys Juggling',
    Street1: '100 Banana St',
    City: 'Bananaberg',
    State: 'NJ',
    Zip: '07048',
  },

  Items: [
    {
      Description: 'Wolf Whistle',
      Price: 35,
      Quantity: 3,
      Total: 105,
    },
    {
      Description: 'Bravo',
      Price: 30,
      Quantity: 17,
      Total: 510,
    },
  ],

  Subtotal: 615,
  Deduction: null,
  Taxes: null,
  Total: 615,
};
