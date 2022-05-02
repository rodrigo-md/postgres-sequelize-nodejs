const  User = require('../../models/User');
const  Tech = require('../../models/Tech');


function createUser( {id, name, email}) {
    return User.create({
        id,
        name,
        email
    });
}

function createTech( { name }) {
    return Tech.create( { name });
}


function associateTech(user, tech) {
    return user.addTech(tech);
}

function findUserByTech({ name }) {
   return User.findOne({ include: [{ model: Tech, where: {name}, as: 'techs'}]});
}

async function clearDatabase() {
    await User.destroy({ cascade: true, truncate: true});
    await Tech.destroy({ cascade: true, truncate: true });
}


module.exports = {
    createUser,
    createTech,
    associateTech,
    findUserByTech,
    clearDatabase
}