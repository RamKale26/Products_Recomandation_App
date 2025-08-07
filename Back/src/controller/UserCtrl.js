let UserModel=require("../models/UserModel.js")


exports.AddUser=(req,res)=>{
    let{user_name,user_email,password,created_at, role}=req.body;
    UserModel.AddUser(user_name,user_email,password,created_at, role)
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    })
}

exports.getuser=(req,res)=>{
    UserModel.getuser()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    });
}

exports.deleteUser=(req,res)=>{
    let{user_id}=req.body;
    

     if (!user_id) {
        return res.status(400).send("user_id is required");
    }

    UserModel.DeleteUser(user_id)
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.send(err);
    })
}


