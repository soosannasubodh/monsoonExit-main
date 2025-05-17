const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://soosannasubodh:susu2005@cluster0.xcbjonc.mongodb.net/marian?retryWrites=true&w=majority&appName=Cluster0")
.then(() =>{
     console.log("Connected!")
})
.catch((err) => {
    console.log(err);
})