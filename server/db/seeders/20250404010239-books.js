'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Classic',
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        genre: 'Self-help',
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'Science Fiction',
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: 'Educated',
        author: 'Tara Westover',
        genre: 'Memoir',
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt & David Thomas',
        genre: 'Technology',
        userId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
