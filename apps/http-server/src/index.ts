import express from "express"
import {prisma} from "@repo/db/client"
const app = express()
app.use(express.json())
app.get("/", (req, res)=>{
    res.send({
        success : true,
        message : "You are hitting GET endPoint"
    })
})


app.post("/signup" , async(req, res)=>{
    const {name , password} = req.body
    console.log(req.body)

    try {
        const result =  await prisma.user.create({
            data : {
                name : name,
                password : password
            }
        })

        res.send({
            success : true,
            message : "Sign up succesfully",
            data : result
        })
    }
    catch(err) {
        console.log(err);
        res.send("Error happen")
    }
})
app.listen(3003)
