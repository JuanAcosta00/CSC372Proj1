// const mongoose = require('mongoose');
// try {
//   mongoose.connect(process.env.MONGODB_URI,  () => {
//     console.log('connected to cloud database')
//   });
// } catch {
//   mongoose.connect('mongodb://localhost/fetcher', () => { console.log('Connected to local MongoDB'); });
// }

// let postSchema = mongoose.Schema({
//   id: {type: Number, required: true},
//   question: {type: String},
//   answer: {type: String},
//   type: {type: String},
// });

// let Conch = mongoose.model('Conch', conchSchema);

// let save = (conchResponse) => {
//   console.log('loading question into database');
//     console.log('saving: ', conchResponse);
//     let conch = new Conch(conchResponse);
//     conch.save();
// }

// let getData = (callback) => {
//   let data = Conch.find({});
//   data.exec((err, data) => {
//     console.log(data);
//     callback(data);
//   })
// }

// module.exports.save = save;
// module.exports.getData = getData;