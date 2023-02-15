const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
  Query: {
   
    user: async (_, __, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new Error('You need to be logged in!');
    },
   
  },


  Mutation: {
    createUser: async (_, args) => {
      const user = await User.create(args);

      if (!user) {
        throw new Error('Not valid info');      }
      const token = signToken(user);
      return { user, token };
    },
    login: async (_, { password, username }) => {
      const usernameActive = await User.findOne({ username });

      if (!usernameActive) {
        throw new Error('No username doesnt exist');
      }

      const passActive = await User.isCorrectPassword(password);

      if (!passActive) {
        throw new Error('Incorrect password!');
      }


      const token = signToken(User);
      return { token, User };
    },
  


    addBook: async (_, args, context) => {

      if(context.user){
        return User.findOneAndUpdate(
          {_id: context.user._id},
          {
            $addToSet: { savedBooks: args},
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBook: async (parent, {bookId}, {user}) => {
      if (user) {
        return User.findOneAndUpdate(
          { _id: user._id },
          { $pull: { savedBooks: {bookId}} },
          { new: true }
        );
      }
  
      throw new Error('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
