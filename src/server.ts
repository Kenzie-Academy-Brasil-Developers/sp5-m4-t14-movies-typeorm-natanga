
import { string } from 'pg-format';
import app from './app';
import { AppDataSource } from './data-source';


AppDataSource.initialize().then(() => {
    console.log('Database connected!')
    app.listen(3000, () => {
        console.log('Server is running!')
    })
}).catch(
    (err: string) => {
        console.log(err)
    })