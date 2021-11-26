const { AuthenticationError } = require('apollo-server-express');
const { User, Trip, Waypoint, Landmark } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    Users: async () => {
      return User.find();
    },

    User: async (parent, { UserId }) => {
      return User.findOne({ _id: UserId });
    },
   books: async () => {
      return Trip.find();
    },

   book: async (parent, { tripId }) => {
      return trip.findOne({ _id: tripId });
    },  

  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const User = await User.create({ name, email, password });
      const token = signToken(User);

      return { token, User };
    },
    login: async (parent, { email, password }) => {
      const User = await User.findOne({ email });

      if (!User) {
        throw new AuthenticationError('No User with this email found!');
      }

      const correctPw = await User.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(User);
      return { token, User };
    },

    addBook: async (parent, {bookid }) => {
      const book = await Book.create({author, description,bookId,Image,link,title});

      await Book.findOneAndUpdate(
        { _id: bookId },
        {
          $addToSet: { book: book._id },
        },
      );
      return Book;
    },     

    removeUser: async (parent, { UserId }) => {
      return User.findOneAndDelete({ _id: UserId });
    },
    removeBook: async (parent, { bookId }) => {
      return addBook.findOneAndDelete(
        { _id: bookId });
    },
  },
}

module.exports = resolvers;
