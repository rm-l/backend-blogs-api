
module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
      published: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      updated: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
      autoIncrement: true,
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'users',
      });
    };
  
    return BlogPost;
  };