let db=require("../../db.js");

exports.AddUser=(user_name,user_email,password,created_at,role) => {
    return new Promise((resolve,reject)=>{
        db.query("insert into user (user_name,user_email,password,created_at,role) values (?,?,?,?,?)",[user_name,user_email,password,created_at,role],(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve("User Added SuccessFully");
            }
        });
    })
}

exports.getuser=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from user",(err,result)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    })
}

exports.DeleteUser=(user_id)=>{
    return new Promise((resolve,reject)=>{
        db.query("delete from user where user_id=?",[user_id],(err,result)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("User Delete Successfully..."+result.affectedRows);
            }
        })
    })
}

