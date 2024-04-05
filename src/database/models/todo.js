import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class Todo extends Model {}

  Todo.init(
    {
      name: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      isComplete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      modelName: 'todo',
      sequelize,
    },
  );

  return Todo;
}
