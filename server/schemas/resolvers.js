const { User, Book } = require('../models');

const resolvers = {
  Query: {
   
  },
  Mutation: {
    createUser: async(_, args) => {
        const user = await User.create(args);
    
        // if (!user) {
        //   return res.status(400).json({ message: 'Something is wrong!' });
        // }
        const token = signToken(user);
       return{user, token}
      },
  },
};

module.exports = resolvers;
