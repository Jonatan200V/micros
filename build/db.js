"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres://postgres:43486277@localhost:5432/micro', {
    logging: false,
});
exports.default = sequelize;
