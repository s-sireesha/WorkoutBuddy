import  express  from "express";
import cors from "cors";
const app = express();

//@ Database connection and Port
import { DBconnection } from "./DB/Connection.js";
DBconnection();

// port
let port = process.env.PORT || 8080;

//require routes
import   workoutRouter  from "./routes/WorkoutRoutes.js"

//middleware
app.use(express.json())
app.use(cors());


app.get("/",(req,res)=>{
    res.send("hello");
})

//routes
app.use("/api/workoutes", workoutRouter )

app.listen(port, () => {
    console.log(`Server is running on port ${port}` );
  });
