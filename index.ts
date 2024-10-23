import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port = process.env.PORT || 3000;

import db from './models';

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import userRoutes from './routes/userRoutes';
import todoRoutes from './routes/todoRoutes';


app.use('/api', userRoutes);
app.use('/api', todoRoutes);


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    })
})