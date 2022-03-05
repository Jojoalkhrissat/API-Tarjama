const Sequelize = require('sequelize');
import { createClient } from 'redis';

const sequelize = new Sequelize('tarjama', 'postgres', 'postgresql', {
    host: 'localhost',
    dialect: 'postgres',
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
const client = createClient();
client.on('error', async function(error: any){
    console.error(error);
   });

export {
    sequelize,
    client
}
    
