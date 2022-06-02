"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 6000;
const VERSION = process.env.VERSION || '1.0.0';
app.get('/', (req, res) => {
    res.send({ version: VERSION });
});
app.get('/new_page', (req, res) => {
    res.send({ text: "It's new page!" });
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
//# sourceMappingURL=index.js.map