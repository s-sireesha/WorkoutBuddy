export const res_success=(res,message, user) =>{
    res.status(200).json({success:true, message:message, data: user});
};
export const res_failed = (res,message) =>{
    res.status(400).json({success:false, message:message});
};

export const res_catch = (res,error) =>{
    res.status(500).json({success:false,error:error.message, message:"500--failed",});
}