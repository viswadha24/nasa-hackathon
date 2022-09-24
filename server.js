const exp=require('express')
const expressAsyncHandler = require('express-async-handler')
const mclient=require("mongodb").MongoClient

const app=exp()
const port=process.env.port||8080;
app.listen(port,()=>console.log(`server listening on post 3000..`))
const path=require("path")
//app.use(exp.static(path.join(__dirname,'./build')))

app.use(exp.json())
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

require("dotenv").config()

const DBurl="mongodb://agnes:Vanellope.3@littlebox-shard-00-00.u6gxv.mongodb.net:27017,littlebox-shard-00-01.u6gxv.mongodb.net:27017,littlebox-shard-00-02.u6gxv.mongodb.net:27017/App_Database?ssl=true&replicaSet=atlas-vn3g55-shard-0&authSource=admin&retryWrites=true&w=majority"

mclient.connect(DBurl)
.then((client)=>{
    let dbObj=client.db("Nasa")
    let userCollectionObj=dbObj.collection("users")
    let detCollectionObj=dbObj.collection("details")
    let shedCollectionObj=dbObj.collection("shedule")

    //let userCartCollection=dbObj.collection("userArtsCollection")
 
    app.set("shedCollectionObj",shedCollectionObj)
    app.set("userCollectionObj",userCollectionObj)
    app.set("detCollectionObj",detCollectionObj)

    //app.set("userCartCollection",userCartCollection)
    
    
   



    console.log("DB CONNECTION success🙃......")

})
.catch(err=>console.log("error in Db Connection",err))


app.use(exp.static(path.join(__dirname, './build')))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

const userApi=require("./APIs/userApi")
const detApi=require("./APIs/detail")

app.use("/det-api",detApi)
app.use("/user-api",userApi)

//app.use("/getusers",expressAsyncHandler())


 app.use((req,res,next)=>{
     res.send({message:"Invalid path @@@@@@@",reason:`this path is    ${req.url}    invalid path`})
  })
 
 
 app.use((error,req,res,next)=>{
    res.send({message:"Error occurred",
 reason:`44${error.message}`})
    
 })






