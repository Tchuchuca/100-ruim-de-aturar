import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class Usuario extends Model {
  public id!: number;
  public nome!: string;
  public nascimento!: string;
  public usuario!: string;
  public senha!: string;
}

Usuario.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    usuario: { type: DataTypes.STRING, allowNull: false },
    senha: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: true,
  }
);

export default Usuario;
