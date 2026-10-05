import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import 'colors'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import connectDB from './config/db.js'

dotenv.config();
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Routes
app.use('/api/v1/test', authRoutes)

// listening
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log("Server started succesfully on port 3000".bgYellow.black)
})