module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true  },
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
        tableName: 'categories',
        underscored: true,
        timestamps: false,
    });
  
    return Category;
  };