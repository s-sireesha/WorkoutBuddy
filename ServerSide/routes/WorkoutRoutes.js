import express from "express";
import { allWorkoutData,
    singleWorkoutData,
    createWorkout,
    updateWorkout,
    deleteWorkout} from "../Controller/userController.js";

const workoutRouter = express.Router();

//Get all records
workoutRouter.get("/", allWorkoutData);

//Get Single Record
workoutRouter.get("/:id", singleWorkoutData)

//Create Record
workoutRouter.post("/", createWorkout );

//Update Record
workoutRouter.patch("/:id",updateWorkout);

//Delete Record
workoutRouter.delete("/:id",deleteWorkout);
export default workoutRouter;
