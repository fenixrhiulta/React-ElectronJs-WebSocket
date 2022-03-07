import sequelize from "../config/database";
import DataTypes from "sequelize/lib/data-types";

var admusuario = sequelize.define('admusuario', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    senha: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    funcao: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    caixa_login: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    caixa_senha: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    data_cadastro: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    nova_senha: {
      type: DataTypes.INTEGER(6),
      allowNull: true,
      defaultValue: '1'
    },
    oper: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    qr_senha: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    app_email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    app_senha: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    passwordResetExpires: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    passwordResetToken: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'admusuario'
  });

  export default admusuario;

