const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    //connect to our db here
    const customers = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Jane', lastName: 'Doe' },
        { id: 3, firstName: 'Mary', lastName: 'Swanson' },

    ];

    res.json(customers);
});

//using 5000 so we don't interfere with port 3000
// which is the default for create-react-app
const port = 5000;


app.listen(port, () => console.log(`Server started on port ${port}`));