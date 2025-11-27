const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Post;

// title: { type: String, trim: true, required: true },
//   description: { type: String, trim: true, required: true },
//   image_url: { type: String, trim: true, required: true },
//   author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
