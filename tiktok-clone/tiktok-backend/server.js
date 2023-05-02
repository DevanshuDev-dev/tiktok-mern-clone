import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Videos from './dbModel.js'

const app = express()
const port = process.env.PORT || 8000
const connection_url = 'mongodb+srv://pass:pass@cluster0.ms2wjfy.mongodb.net/tiktokDB?retryWrites=true&w=majority'

app.use(express.json())
app.use(Cors())

mongoose.connect(connection_url, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
})
app.get("/", (req, res) => res.status(200).send("TheWebDev"))

app.post('/v2/posts', (req,res) => {
    const data= new Videos(req.body)
    data.save().then(() => {
        res.status(201).send(data)
    })
        .catch(e=>{
        res.status(500).send(e)
    })
})

app.get("/v2/posts", (req,res) => {
    Videos.find({}).then(posts=>res.send(posts))
                   .catch(e=> res.status(500).send(e))
})
        
app.listen(port, () => console.log(`Server listening on ${port}`))
