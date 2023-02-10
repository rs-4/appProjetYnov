const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2
  },
  lastName: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2
  },  
  addres: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2
  },  
  city: {
    type: String,
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2
  },  
  zipcode: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    maxLength: 15,
    minLength: 2
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    length: 50,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  statusAccount:{
    type: String,
    required:true
  },
  password: {
    type: String,
    required: true
  },
  
  }
)

userSchema.pre('save', function (next) {
  
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    this.password = hashedPassword
    next();
  });

})

module.exports = mongoose.model('User', userSchema);
