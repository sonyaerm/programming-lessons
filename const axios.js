const axios = require('axios');
const fs = require('fs');


const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/todos', (request, response) => {
        console.log(makeGetRequest());
        response.json(makeGetRequest());
    });
    async function makeGetRequest() {

        let res = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const data = res.data;
        fs.writeFileSync("read.txt", JSON.stringify(data));
        fs.writeFileSync("read.json", JSON.stringify(data));
        let user = data.find(item => item.id == 1);
        return (user);
    }
    const json = fs.readFileSync("read.txt", "utf8");
}


module.exports = router;