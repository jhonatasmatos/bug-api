"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var BugsController_1 = __importDefault(require("./controllers/BugsController"));
var routes = express_1.default.Router();
var bugsController = new BugsController_1.default();
routes.get('/bugs', bugsController.index);
routes.post('/bugs', bugsController.create);
exports.default = routes;
