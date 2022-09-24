const exp=require("express")
//const bcryptjs=require("bcryptjs")
const expressAsyncHandler = require("express-async-handler")
const userApi=exp.Router()
//const jwt=require("jsonwebtoken")


userApi.use(exp.json());

console.log("::::::::::::::::::::::::")


//create route to create user

userApi.post("/create-user",expressAsyncHandler(async (req,res)=>{
   

 let newUserObj=req.body

 console.log("😶😐😐🎈",newUserObj)

   let userCollectionObject=req.app.get("userCollectionObj")
  
   let userOfDB=await userCollectionObject.findOne({name:newUserObj.name})

   console.log("USER OF DB ",userOfDB)
   if(userOfDB!==null)
   {
       res.send({message:"Username already exists"})
   }
   if(userOfDB===null){
       
        await userCollectionObject.insertOne(newUserObj);
    
        res.send({message:"new user created!"});
   }
}))


userApi.post("/allusers",expressAsyncHandler(async (req,res)=>{
   

 
 
    let userCollectionObject=req.app.get("userCollectionObj")
   
    let userOfDB=await userCollectionObject.find().toArray();
 
    console.log("USER OF DB ",userOfDB)
     
         res.send({message:userOfDB});
 }))

 userApi.post('/login', expressAsyncHandler(async (req, res, next) => {

    let userCollectionObject = req.app.get("userCollectionObj")

    let credentials = req.body;
    
    //console.log("user collection obg in api",credentials)

    let user = await userCollectionObject.findOne({ id: credentials.id })

    console.log("Users==",user)

    //if user is not existed
    if (user === null) {
        res.send({ message: "Invalid username" })
    }
    //if user is existed
    else {
          if(credentials.password=="password")
          {
            res.send({
                message: "login-success",userObj: user
            })
          }
           else
           {
            res.send({ message: "Invalid password" })
           }
        }
    
}))




module.exports=userApi 