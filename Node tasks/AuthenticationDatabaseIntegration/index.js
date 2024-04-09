const express=require ('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const database = require('mysql');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const add = express();
add.use(cors({
    origin:['http://localhost:3000'],
    methods:['POST','GET','DELETE','PUT'],
    credentials:true
}));

add.use(bodyparser.json());

add.use(express.json());
add.use(express.static('public'));
add.use(cookieParser());


let a = database.createConnection(
    {
    host:"localhost",
    user:"root",
    password:"Root",
    database:"retrace"
    }
)

a.connect(function(error){
    if(error){
        console.log(error); 
    }
    else{
        console.log("DB connected");
    }
}
)

//api for employeer registration
add.post('/employeerRegistration',(request,response)=>{
    console.log(JSON.stringify(request.body))
        let {companyName,recruiterName,employerMail,employerPhone}=request.body;
        const sql='insert into employer_signup(company_name,empoyer_name,employer_mail,contact_number,employer_password,status,created_by,created_on,modified_by,modified_on,effective_from,effective_to)values(?,?,?,?,?,"A","admin",current_date(),"admin",current_timestamp,current_timestamp,"9999-02-12")';
        bcrypt.hash(request.body.employerPassword.toString(),salt,(error,hash)=>{
            if(error){
                return response.json({error:"error for hashing password"});
            }
        
        a.query(sql,[companyName,recruiterName,employerMail,employerPhone,hash],(error,result)=>{
        if(error){
            console.log(error);
            response.send({"status":"failed"})
        }else{
            response.send({"status":"success"})
        }
    })
        })
    })
    
add.post("/employerLogin",(req,res)=>{
    const sql = 'select * from employer_signup where employer_mail = ?';
    a.query(sql,[req.body.employerMail],(err,data)=>{
        if(err) return res.json({Error:"Login error in server"});
        if(data.length > 0) {
            bcrypt.compare(req.body.employerPassword.toString(), data[0].employer_password,(err,response)=>{
                console.log(response)
                console.log(data)
                if(err) return res.json({Error:"password compare error"});
                if(response) {                    
            const name = data[0].empoyer_name;
            const id = data[0].employer_id;
            const mailId= data[0].employer_mail
            const token = jwt.sign({name,id,mailId},"jwt-seceret-key",{expiresIn:'1d'});
            res.cookie('token',token);
                    return res.json({status:"success"})                
                }
                else{                
                    return res.json({Error:"password not matched"})
                }
            })
                }else{
                    return res.json({Error:"no email existed"})
                }
    })
    });
    






  //employer login  with user verification by cookies
  const verifyUser=(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.json({error:"you are not authenticated  Please login"});
            }else{
                jwt.verify(token,"jwt-seceret-key",(err,decoded)=>{
            if(err){
                return res.json({error:"Token is not ok"});
            }else{
                req.name= decoded.name;
                req.id= decoded.id;
                req.mailId=decoded.mailId
                next();
            }
            })
            }
          }
          //get the token and check for authenticated user or not and decode the employer name from the cookei and pass to the employer landing page
         add.get('/',verifyUser,(req,res)=>{
            return res.json({status:"success",name:req.name,id:req.id,mailId:req.mailId});
         }) 



add.listen(8000,()=>{
    
    console.log("server running in 8000 port"); 
})