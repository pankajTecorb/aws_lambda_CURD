"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.p = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const user_1 = __importDefault(require("../controllers/user"));
// Constants
const router = express_1.Router();
const { CREATED, OK } = http_status_codes_1.default;
// Paths
exports.p = {
    register: '/add',
    update: '/:id/edit',
    list: '/list',
    catDetail: '/detail/:id',
    delete: '/delete/:id',
    status: '/status/:id'
};
/****  Add****/
router.post(exports.p.register, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_1.default.registerUser(req.body);
    return res.status(CREATED).send({ data, code: CREATED });
}));
//**** Edit****/
router.put(exports.p.update, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_1.default.editUser(req.body, req.params.id);
    return res.status(OK).send({ data, code: OK });
}));
//****List****/
router.get(exports.p.list, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_1.default.getUser(req.query);
    return res.status(OK).send({ data, code: OK });
}));
//***** Detail**** */
router.get(exports.p.catDetail, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_1.default.userProfile(req.params.id);
    return res.status(OK).send({ data, code: OK });
}));
//******** delete********* */
router.delete(exports.p.delete, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_1.default.deleteUser(req.params.id);
    return res.status(OK).send({ data, code: OK });
}));
//********  Status change**** */
router.put(exports.p.status, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_1.default.statusUser(req.body, req.params.id);
    return res.status(OK).send({ data, code: OK });
}));
// Export default
exports.default = router;
