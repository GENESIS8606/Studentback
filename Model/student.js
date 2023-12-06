const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://lenac:lenac@cluster0.d73dys4.mongodb.net/college?retryWrites=true&w=majority")
.then(()=>{console.log("db connected");
})
.catch(err=>console.log(err));

const studentschema =new mongoose.Schema(
    {
        Admno:Number,
        Name:String,
        Age:Number,
        Course:String
    }
)
var studentmodel =mongoose.model("student",studentschema)
module.exports=studentmodel;

