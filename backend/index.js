import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import connectDB from "./lib/connectDB.js";
import {clerkMiddleware, requireAuth} from "@clerk/express";
import cors from "cors";

const app = express();

app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter);
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*app.get("/protect",(req,res)=>{
  const {userId} = req.auth;
  if(!userId){
    return res.status(401).json("Not authenticated!");
  }
  res.status(200).json({
    message:"You are authenticated!",
    userId,
  });
});
*/
app.get("/auth-state", (req, res) => {
  res.json(req.auth);
});
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);



app.use((error,req,res,next)=>{
  
  res.status(error.status || 500);
  
  res.json({
    message:error.message || "SOmething went wrong!",
    status: error.status,
    stack: error.stack,
  });
});
app.listen(3000,()=>{
  connectDB();
  console.log("Server is running!");
});