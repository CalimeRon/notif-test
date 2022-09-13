"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscriptionController_1 = require("./controllers/subscriptionController");
const initializeRoutes = (app) => {
    app.post('/subscription', subscriptionController_1.post);
    app.delete('/subscription', subscriptionController_1.remove);
    app.get('/broadcast', subscriptionController_1.broadcast);
};
exports.default = initializeRoutes;
//# sourceMappingURL=routes.js.map