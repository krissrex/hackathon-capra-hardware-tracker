import {Sequelize,DataTypes, UUIDV4, Model} from "sequelize";

const sequelize = new Sequelize('postgres://admin:password@localhost:5432/product');


export class Product extends Model {}

Product.init( {
  uuid: {type: DataTypes.UUID, defaultValue: UUIDV4},
  data: {type: DataTypes.JSONB}
}, {sequelize})

export class Admin extends Model {}

Admin.init({
  uuid: {type: DataTypes.UUID, defaultValue: UUIDV4},
  email: {type: DataTypes.STRING}
}, {sequelize})


export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  await Product.sync()
  await Admin.sync()
}
