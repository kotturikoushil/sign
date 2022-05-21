var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb+srv://koushil:b3mYRtbAoctDha3g@cluster0.1cvqq.mongodb.net/notesDB",{useNewUrlParser:true}, {useUnifiedTopology:true})

const notesSchema = {
    title :String,
    content: String
}

const Note = mongoose.model("Note", notesSchema);



app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req,res){
    let newNote = new  Note({
        title:req.body.title,
        content:req.body.content
    });
    newNote.save();
    res.redirect("/");
})

app.listen(3000,function() {
    console.log("server is running on 300");
})