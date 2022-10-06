const server = require('./server');
const port = 3001;

const app = server();

app.listen(port, () => {
    console.log(`Server started... listening on port ${port}`);
})