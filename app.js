

const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = mongoose.Schema({

  name: {
    type: String,
    required: [true, "Please check your data entry, please sepecify name:  "]
  },
  rating: {
    type: Number,
    min: 1,
    max:10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 8.2,
  review: "Good"
});
const kiwi = new Fruit({
  name: "kiwi",
  rating: 8.2,
  review: "Good"
});const orange = new Fruit({
  name: "orange",
  rating: 8.2,
  review: "Good"
 });
// Fruit.insertMany([kiwi, orange], function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("successfully added: ");
//   }
// });
Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
      fruits.forEach(function(fruit) {
        console.log(fruit.name);
      });
  }
});
// Fruit.updateOne({id: "63e587988d9724db00cfb18d"}, {name: "banana"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfulyy updated: ");
//   }
// });
Fruit.deleteOne({name: "kiwi"}, function(err){
  if (err) {
    console.log(err);
  }
  else{
    console.log("successfully deleted");
  }
});
const personSchema = mongoose.Schema({
  name: String,
  age: Number,

});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "john",
  age: 36
});
person.save
//fruit.save();
