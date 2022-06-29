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
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
let { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME_PRO, DB_NAME_DEV } = process.env;
const DB = (NODE_ENV === "test") ? DB_NAME_DEV : DB_NAME_PRO;
class PostgreSql {
    constructor() {
        this.host = (DB_HOST) ? DB_HOST : "";
        this.port = (DB_PORT) ? DB_PORT : "";
        this.db_name = (DB) ? DB : "";
        this.user = (DB_USER) ? DB_USER : "";
        this.pass = (DB_PASS) ? DB_PASS : "";
        this.config = {
            host: this.host,
            port: this.port,
            database: this.db_name,
            user: this.user,
            password: this.pass
        };
        this.pool = new pg_1.Pool(this.config);
    }
    setHost(host_) {
        this.host = host_;
    }
    setPort(port_) {
        this.port = port_;
    }
    setDBame(db_name_) {
        this.db_name = db_name_;
    }
    setUser(user_) {
        this.user = user_;
    }
    setPass(pass_) {
        this.pass = pass_;
    }
    conectar() {
        return __awaiter(this, void 0, void 0, function* () {
            let cliente = yield this.pool.connect();
            return cliente;
        });
    }
    query(cliente, SQL, datos) {
        return __awaiter(this, void 0, void 0, function* () {
            if (datos) {
                let result = yield cliente.query(SQL, datos);
                return result;
            }
            else {
                let result = yield cliente.query(SQL);
                return result;
            }
        });
    }
    cerrarConexion(cliente) {
        return __awaiter(this, void 0, void 0, function* () {
            cliente.release();
            this.pool.end();
        });
    }
}
exports.default = PostgreSql;
