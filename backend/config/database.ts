import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
);

export const conectarBD = async () => {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado ao banco de dados!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error);
  }
};
