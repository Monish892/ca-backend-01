const express=require('express')
const port=3000;
const app=express()

app.use(express.json())


app.listen(port,()=>{

    console.log(`server is running on the port ${port}`);
    
})



const users={
    john:{name:'john doe',age:30,email:'john@gmail.com'},
    jane:{name:'jane smith',age:25,email:'jane@gmail.com'},
    peter:{name:'peter jones',age:35,email:'peter@gmail.com'}
}


app.get('/user',(req,res)=>{
    const username=req.query.users;

    if(!username){
        return res.status(400).json({message:"user parameter cannot be empty"})

    }


    const userdata=users[username];

    if(userdata){
        res.json({message:"user found",userDetails:userdata})
    } else{
        res.status(404).json({message:"user not found"})
    }
})