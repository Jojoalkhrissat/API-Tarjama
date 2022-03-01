const {Sequelize} = require('sequelize');
const redis = require('redis');

const sequelize = new Sequelize('tarjama', 'postgres', 'postgresql', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases:false,
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
const client = redis.createClient(6379);
client.on('error', async function(error: any){
    console.error(error);
   });

export {
    sequelize,
    client
}
    
