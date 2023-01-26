module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
      displayName: DataTypes.STRING, allowNull: false,
      email: DataTypes.STRING, allowNull: false,
      password: DataTypes.STRING, allowNull: false,
      image: DataTypes.STRING, allowNull: false,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });
  
    return User;
  };