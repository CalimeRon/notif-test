"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.broadcast = exports.remove = exports.post = void 0;
const subscriptionRepository = __importStar(require("../repositories/subscriptionRepository"));
const web_push_1 = __importDefault(require("web-push"));
exports.post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subscription = req.body;
        const newSubscription = yield subscriptionRepository.create(subscription);
        // Send 201 - resource created
        res.status(201).json(newSubscription);
    }
    catch (e) {
        next(e);
    }
});
exports.remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const endpoint = (_a = req.query.endpoint) === null || _a === void 0 ? void 0 : _a.toString();
        if (!endpoint) {
            res.sendStatus(400);
            return;
        }
        const successful = yield subscriptionRepository.deleteByEndpoint(endpoint);
        if (successful) {
            res.sendStatus(200);
        }
        else {
            res.sendStatus(500);
        }
    }
    catch (e) {
        next(e);
    }
});
exports.broadcast = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notification = { title: 'Hey, this is a push notification!' };
        const subscriptions = yield subscriptionRepository.getAll();
        const notifications = [];
        subscriptions.forEach((subscription) => {
            notifications.push(web_push_1.default.sendNotification(subscription, JSON.stringify(notification)));
        });
        yield Promise.all(notifications);
        res.sendStatus(200);
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=subscriptionController.js.map