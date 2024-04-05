export const up = (queryInterface, Sequelize) => queryInterface.createTable('todos', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING(250),
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING(500),
  },
  author: {
    allowNull: false,
    type: Sequelize.STRING(150),
  },
  isComplete: {
    allowNull: false,
    type: Sequelize.BOOLEAN,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  deletedAt: {
    allowNull: true,
    type: Sequelize.DATE,
  },
});

export const down = (queryInterface) => queryInterface.dropTable('todos');
