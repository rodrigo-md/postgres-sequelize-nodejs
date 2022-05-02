const axios = require('axios');
const Tech = require('../models/Tech');
const  User = require('../models/User');
const  Address = require('../models/Address');
const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const { createUser, createTech, associateTech, findUserByTech, clearDatabase } = require('./utils/database');
const { sleep } = require('./utils/helpers');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

describe('User and Tech relationship', () => {
    afterEach( () => {
        return clearDatabase();
    })

    test('Delete association between user and tech for a given user id and a tech name', async() => {
        const user = await createUser({ id: 99, name: 'test', email: 'test@glob.com' });
        const tech = await createTech( { name: 'tech'});
        await associateTech(user, tech);

        await axios.delete(`http://localhost:3000/users/${user.id}/techs`, { data: {name: 'tech'}});


        await sleep(1000);


        const searchedUser = await findUserByTech( { name: 'tech' });
        
        expect(searchedUser).toBe(null);

    });
})