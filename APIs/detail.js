const exp=require("express")
//const bcryptjs=require("bcryptjs")
const expressAsyncHandler = require("express-async-handler")
const detApi=exp.Router()
//const jwt=require("jsonwebtoken")
function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes;
  }
detApi.use(exp.json());
detApi.post("/create",expressAsyncHandler(async (req,res)=>{
    let userCollectionObject=req.app.get("userCollectionObj")
    let detCollectionObj=req.app.get("detCollectionObj")
    let shedCollectionObj=req.app.get("shedCollectionObj")

    let newUserObj=req.body;
    console.log(Date.now(),"current date");
    const d=new Date();
    let min=d.getMinutes()+d.getHours()*60;
    let milli=min*60000;
    let crr=Date.now()-milli;
    let userOfDB=await userCollectionObject.find().toArray();
    let ppp;
    for(let cday=1;cday<2;cday++){
        let cbeds=parseInt(newUserObj.beds);
        let sched=1;
        crr=crr+86400000;
        let objj={users:[]}
        for(let i=0;i<userOfDB.length;i++){
            let id=userOfDB[i].id;
            let obj={id:id,name:userOfDB[i].name,sleep:0,wakeup:0,water1:0,exce1:0,bf:0,water2:0,lunch:0,exce2:0,dinn:0,water3:0,bedno:cbeds}
            if(sched==1){
                obj.sleep=msToTime(crr);
                obj.wakeup=msToTime(crr+28800000);
                obj.water1=msToTime(crr+30600000);
                obj.exce1=msToTime(crr+31200000);
                obj.bf=msToTime(crr+35400000);
                obj.water2=msToTime(crr+46800000);
                obj.lunch=msToTime(crr+54000000);
                obj.exce2=msToTime(crr+64800000);
                obj.dinn=msToTime(crr+79200000);
                obj.water3=msToTime(crr+79200000+120000);
            }
            if(sched==2){
                obj.sleep=msToTime(crr+28800000);
                obj.wakeup=msToTime(crr+28800000+28800000);
                obj.water1=msToTime(crr+30600000+28800000);
                obj.exce1=msToTime(crr+31200000+28800000);
                obj.bf=msToTime(crr+35400000+28800000);
                obj.water2=msToTime(crr+46800000+28800000);
                obj.lunch=msToTime(crr+54000000+28800000);
                obj.exce2=msToTime(crr+64800000+28800000);
                obj.dinn=msToTime(crr+79200000+28800000);
                obj.water3=msToTime(crr+79200000+28800000);
            }
            if(sched==3){
                obj.sleep=msToTime(crr+28800000+28800000);
                obj.wakeup=msToTime(crr+28800000+28800000+28800000);
                obj.water1=msToTime(crr+30600000+28800000+28800000);
                obj.exce1=msToTime(crr+31200000+28800000+28800000);
                obj.bf=msToTime(crr+35400000+28800000+28800000);
                obj.water2=msToTime(crr+46800000+28800000+28800000);
                obj.lunch=msToTime(crr+54000000+28800000+28800000);
                obj.exce2=msToTime(crr+64800000+28800000+28800000);
                obj.dinn=msToTime(crr+79200000+28800000+28800000);
                obj.water3=msToTime(crr+79200000+28800000+28800000);
            }
            cbeds=cbeds-1;
            console.log(cbeds,"cbeds")
            if(cbeds==0){
                cbeds=newUserObj.beds;
                sched=sched+1;
            }
            console.log(sched,"sched")
            objj.users.push(obj);
        }
        ppp=objj;
    }
    console.log("jubhfsdzbvhy")
console.log(ppp.users,"ppp")
await shedCollectionObj.deleteMany();
for(let pp=0;pp<ppp.users.length;pp++){
    await shedCollectionObj.insertOne(ppp.users[pp])
}
    let user2=await detCollectionObj.findOne({name:newUserObj.name});
    if(user2===null){
        await detCollectionObj.insertOne(newUserObj)
    }
    else{
        await detCollectionObj.deleteOne({name:newUserObj.name});
        await detCollectionObj.insertOne(newUserObj)
    }
 
    // console.log("USER OF DB ",userOfDB)
     
         res.send({message:"updated"});
 }))

 detApi.post("/get-user",expressAsyncHandler(async (req,res)=>{
    let shedCollectionObj=req.app.get("shedCollectionObj");
    
    let newUserObj=req.body;
    let user = await shedCollectionObj.findOne({ id: newUserObj.id })
    if(user===null){
        
        res.send({message:"invalid"});

    }
    res.send({message:user})

 }
 ))

 detApi.post("/save",expressAsyncHandler(async (req,res)=>{
    let obj=req.body;
    const gTTS = require('gtts');
      
    var speech = 'hello its time for your'+obj.act;
    var gtts = new gTTS(speech, 'en');
      
    gtts.save('Voice.mp3', function (err, result){
        if(err) { throw new Error(err); }
        console.log("Text to speech converted!");
        res.send({message:"converted"})
    });
    var player = require('play-sound')(opts = {})
    player.play('Voice.mp3', function(err){
        if (err) console.log(err.message)
      })
 }
 ))

module.exports=detApi;