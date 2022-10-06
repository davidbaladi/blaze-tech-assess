const supertest = require('supertest');
const server = require('../server/server');

describe('/api', () => {

    let request

    before(() => {
        const app = server();
        request = supertest.agent(app);
    })

    it('should return 200 status code', () => {
        return request.get('/api').expect(200);
    })

})