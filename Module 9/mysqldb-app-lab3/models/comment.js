const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
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
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "posts",
        key: "id",
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Comment;

// content: { type: String, trim: true, required: true },
//   author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
//   post: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
