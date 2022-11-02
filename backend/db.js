const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/keendata";

// module.exports.connect = () =>{
//     mongoose.connect(url,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true

//     }).then(() => {
//         console.log("mongodb connected successfully")
//     }).catch((error) => {
//         console.log('Error:',error )
//     });
// }

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log("mongodb connected successfully")
}).catch((error) => {
    console.log('Error:',error )
});

module.exports = mongoose;