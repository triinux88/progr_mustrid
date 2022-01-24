import { createConnection, ConnectionOptions } from 'typeorm';

export async function openDatabaseConnection(){
    // await closeDatabaseConnection();

    const options: ConnectionOptions = 
        {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'tere123',
    database: 'blog'
    };

    const conn = await createConnection(options);
    if (!conn.isConnected)  {
        throw new Error('Connection to database failed');
    }
    return conn;
};

openDatabaseConnection()