"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./config/database"));
const routes_1 = __importDefault(require("./routes"));
const webpush_1 = __importDefault(require("./config/webpush"));
const app = express_1.default();
const port = 8080; // default port to listen
app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
app.use(body_parser_1.default.json());
database_1.default();
routes_1.default(app);
webpush_1.default();
// start the Express server
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map