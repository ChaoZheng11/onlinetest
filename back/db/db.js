var mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/maxdb',{ useNewUrlParser: true },{ 
    useUnifiedTopology: true } )

const conn=mongoose.connection

conn.on('connected',()=>{
    console.log('db connects successfully!')
})

//contacts
const addContact= mongoose.Schema({
    id:{type:String,require:true},
    first:{type:String,required:true},
    last:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
})

const ContactModel = mongoose.model('contact',addContact)

exports.ContactModel=ContactModel