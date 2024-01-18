import express from "express";
import axios from "axios";

const app = express();
const port = 3004;

app.use(express.static('public'))


app.get("/", async(req,res)=>{
    try{
    const secretResponse= await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs",{
        secret:secretResponse.data.secret,
    user: secretResponse.data.username});
    }
    catch(error){
       console.log(error.response.data);
       res.send(500);
    }
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})

