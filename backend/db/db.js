import mongoose from "mongoose";


function connect() {
    mongoose.connect("mongodb+srv://deepanshumodi611:WvHEEGPKjmUgkurk@cluster0.hfp3pes.mongodb.net/NewAI?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch(err => {
            console.log(err);
        })
}

export default connect;
