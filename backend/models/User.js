const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    }
  },
  { timestamps: true }
);

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, saltRounds, function(error, hash) {
    if (error) {
      return next(error);
    } else  {
      user.password = hash;
      next();
    }

    // Store hash in your password DB.
  });
});

// Compare the given password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
  console.log('password: ', password)
  console.log('this.password: ', this.password)
  const compareResult = bcrypt.compare(password, this.password);
  console.log('compareResult: ', compareResult)
  return compareResult;
};

const User = mongoose.model('User', userSchema);

module.exports = User;