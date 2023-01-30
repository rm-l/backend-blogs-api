'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      published: {
        type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW
      },
      updated: {
        type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blog_posts');
  }
};
