import express from 'express'
import connectToMongoDB from './db/connectToMongoDB.js';
import dotenv from "dotenv";
import cors from "cors";
import  router from "./routes/routes.js";
import path from 'path'
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();
//console.log("this is the dir ",__dirname);
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL Body Parser

app.use(
  cors({
    origin: "*",
    // credentials: true,
  })
);


app.use(router);



/*if(process.env.NODE_ENV=== "production"){
app.use(express.static(path.join(__dirname,"../Keeper-App-frontend/dist")));
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"../Keeper-App-frontend","dist","index.html"));
});
}*/

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
  }
  );