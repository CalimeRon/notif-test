"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web_push_1 = __importDefault(require("web-push"));
const publicVapidKey = 'BMrfFtMtL9IWl9vchDbbbYzJlbQwplyZ_fbv8Pei8gPNna_Dr1O-Ng7U7fy0LLqz5RKIxEytTIzyk6TLrcKbN30';
const privateVapidKey = 'E5gpbs9Y6r5TscHC64Ce9-hXojA9I1qQL0kuvX8Jz5Y';
exports.default = () => {
    web_push_1.default.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);
};
//# sourceMappingURL=webpush.js.map