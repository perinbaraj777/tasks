
const fs =require("fs");
function createUpdateTextFile(){
    //creating the new text file and adding content
fs.writeFileSync('StudentInfo.txt',"hiii iam");

//modifying the created text file
fs.appendFileSync('StudentInfo.txt',"surya iam adeveloper");
}
createUpdateTextFile();
         
//reading the created file
const data=fs.readFileSync("./StudentInfo.txt","utf-8"); 
console.log(data);

//reading the created file
fs.readFile('./package.json','utf-8',(err,data)=>{
    if(err==null){
        console.log(data)
    }
})














