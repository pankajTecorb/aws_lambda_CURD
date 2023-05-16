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
const user_1 = __importDefault(require("../models/user"));
const errors_1 = require("../utils/errors");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const constants_1 = require("../constants");
/**
 *  Register User
 *
 * @param body
 * @returns
 */
function registerUser(body) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield user_1.default.findOne({ email: body.email, isDelete: false });
            if (data) {
                reject(new errors_1.CustomError(constants_1.errors.en.Exists, http_status_codes_1.default.BAD_REQUEST));
            }
            else {
                const response = yield user_1.default.create(body);
                resolve(response);
            }
        }
        catch (err) {
            console.log(err);
            if (err.code == 11000) {
                reject(new errors_1.CustomError(constants_1.errors.en.somethingwrong, http_status_codes_1.default.BAD_REQUEST));
            }
            reject(err);
        }
    }));
}
//***********Edit *********/
function editUser(body, userId) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const userData = yield user_1.default.findOne({ _id: userId });
            if (userData) {
                const userObj = yield user_1.default.updateOne({ _id: userData._id }, body, { new: true });
                resolve(userObj);
            }
            else {
                reject(new errors_1.CustomError(constants_1.errors.en.noDatafound, http_status_codes_1.default.BAD_REQUEST));
            }
        }
        catch (err) {
            reject(err);
        }
    }));
}
//**** List****/
function getUser(body) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { page = 1, pageSize = 10, search, fromDate, toDate } = body;
            let condition = {
                isDelete: false
            };
            if (search && search != '' && fromDate && toDate) {
                condition = Object.assign(Object.assign({}, condition), { email: { $regex: search, $options: 'i' }, name: { $regex: search, $options: 'i' }, phoneNumber: { $regex: search, $options: 'i' }, createdAt: { $gte: fromDate, $lte: toDate } });
            }
            else if (fromDate && toDate) {
                condition = Object.assign(Object.assign({}, condition), { createdAt: { $gte: fromDate, $lte: toDate } });
            }
            if (search && search != '') {
                condition = Object.assign(Object.assign({}, condition), { email: { $regex: search, $options: 'i' }, name: { $regex: search, $options: 'i' }, phoneNumber: { $regex: search, $options: 'i' } });
            }
            const response = yield user_1.default.find(condition).skip(Number(page - 1) * Number(pageSize))
                .limit(Number(pageSize)).sort({ createdAt: -1 });
            const Total = yield user_1.default.count(condition);
            if (!response) {
                reject(new errors_1.CustomError(constants_1.errors.en.noDatafound, http_status_codes_1.default.BAD_REQUEST));
            }
            else {
                resolve({ response, Total });
            }
        }
        catch (err) {
            reject(err);
        }
    }));
}
//**** Detail By Id*****/
function userProfile(userId) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield user_1.default.findOne({ "_id": userId });
            if (!response) {
                reject(new errors_1.CustomError(constants_1.errors.en.noDatafound, http_status_codes_1.default.BAD_REQUEST));
            }
            else {
                resolve(response);
            }
        }
        catch (err) {
            reject(err);
        }
    }));
}
//***** Delete *****/
function deleteUser(userId) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const userData = yield user_1.default.findOne({ _id: userId });
            if (!userData) {
                reject(new errors_1.CustomError(constants_1.errors.en.noDatafound, http_status_codes_1.default.BAD_REQUEST));
            }
            else {
                const editdata = {
                    isDelete: true
                };
                const userObj = yield user_1.default.updateOne({ _id: userId }, editdata, { new: true });
                resolve(userObj);
            }
        }
        catch (err) {
            reject(err);
        }
    }));
}
//********* Status Change****** */
function statusUser(body, userId) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { isActive } = body;
            const userData = yield user_1.default.findOne({ _id: userId });
            if (!userData) {
                reject(new errors_1.CustomError(constants_1.errors.en.noDatafound, http_status_codes_1.default.BAD_REQUEST));
            }
            else {
                const editdata = Object.assign(Object.assign({}, body), { isActive: isActive });
                const userObj = yield user_1.default.updateOne({ _id: userId }, editdata, { new: true });
                resolve(userObj);
            }
        }
        catch (err) {
            reject(err);
        }
    }));
}
// Export default
exports.default = {
    registerUser,
    editUser,
    getUser,
    userProfile,
    deleteUser,
    statusUser
};
