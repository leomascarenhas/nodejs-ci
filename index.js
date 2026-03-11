const express = require("express");
const { add, divide } = require("./src/math");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
    const name = req.query.name;
    res.send(`Ola ${name}`);
});

app.get("/helloagain/:user", (req, res) => {
    const name = req.params.user;
    res.send(`Ola ${name}`);
});

app.get("/calculator", (req, res) => {
    const operation = req.query.operation;
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    console.log(operation, num1, num2);

    let result = 0;
    switch(operation) {
        case 'add':
            // old: result = num1 + num2;
            result = add(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            result = "Invalid operation"
    }

    res.send(`result : ${result}`);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

