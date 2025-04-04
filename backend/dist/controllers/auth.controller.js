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
exports.login = exports.register = void 0;
const db_1 = __importDefault(require("../config/db"));
const hash_1 = require("../utils/hash");
const jwt_1 = require("../utils/jwt");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = yield (0, hash_1.hashPassword)(password);
        const user = yield db_1.default.user.create({
            data: { name, email, password: hashedPassword },
        });
        res.json({ user, token: (0, jwt_1.generateToken)(user.id) }); // ✅ Return response correctly
    }
    catch (error) {
        res.status(500).json({ message: "Register Error", error }); // ✅ Ensure no `return res.json(...)`
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield db_1.default.user.findUnique({ where: { email } });
        if (!user || !(yield (0, hash_1.comparePassword)(password, user.password))) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        res.json({ user, token: (0, jwt_1.generateToken)(user.id) }); // ✅ Return response correctly
    }
    catch (error) {
        res.status(500).json({ message: "Login Error", error });
    }
});
exports.login = login;
