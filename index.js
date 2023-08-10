import './src/db.js'
import express from 'express'
import cors from "cors"
import router_user from './src/e_user.js'
import router_candidate from './src/e_candidate.js'
import router_candidatestatus from './src/e_candidatestatus.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user',router_user);
app.use('/candidate',router_candidate);
app.use('/candidatestatus',router_candidatestatus);


app.listen(1000,()=>{
    console.log("Server is running on port 1000")
}
)