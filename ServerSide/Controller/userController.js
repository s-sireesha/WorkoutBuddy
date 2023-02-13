import { Workout } from "../Models/WorkoutModel.js";
import { res_failed, res_success ,res_catch} from "../Global/response.js";

//?Get entire records
export const allWorkoutData = async(req,res)=>{
    try{
        let user = await Workout.find().sort({createdAt:-1});
        res_success(res,"userdata", user);
    }catch(error){
        res_catch(res, error);
    }
} 

//? Get Single User
export const singleWorkoutData = async(req,res) =>{
    try{
        const id = req.params.id;
        const user = await Workout.findById({_id: id});
        res_success(res, user)
    }catch(error){
        res_catch(res, error);
    }
}

//? create user
export const createWorkout = async(req,res) =>{
    try{
        const createWorkout = await Workout.create(req.body);
        res_success(res,createWorkout);
    }catch(error){
        res_catch(res, error);
    }
}


//?Update User
export const updateWorkout = async(req,res) =>{
    try{
        const id = req.params.id;
        const user = await Workout.findByIdAndUpdate({_id : id}, req.body, {new:true});
        res_success(res,"user updated successfully",user);
    }catch(error){
        res_catch(res, error);
    }
}

//?Delete User
export const deleteWorkout = async (req, res)=>{
    try{
        const id = req.params.id;
        const user = await Workout.findByIdAndDelete({_id : id});
        res_success(res,"user deleted",user);
    }catch(error){
        res_catch(res, error);
    }
}