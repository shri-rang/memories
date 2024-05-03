import express from  'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes  from './routes/posts.js'

 const app = express();


 app.use('/posts', postRoutes);
 app.use(bodyParser.json({ limit : "30 mb", extended : true}));
 app.use(bodyParser.urlencoded({ limit : "30 mb", extended : true}));
 app.use(cors());


const CONNECTION_URL =  'mongodb+srv://desairajendra529:xzEjOogJkZQmJS84@shrirangcluster.9npvvlr.mongodb.net/mycontacts-backend?retryWrites=true&w=majority&appName=shrirangCluster';


const PORT =  process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,).then( () =>

 app.listen(PORT, ()=>  console.log(`server running on port ${PORT}`)  )
).catch( (error)=> console.log(error.message));

// mongoose.set('useFindAndModify', false );
