"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const App_1 = require("./App");
const app = (0, express_1.default)();
// GET http://localhost:8000/veiculo
app.listen(8000, () => {
    console.log('Server listening on port 8000');
});
// Imprimindo no Insomnia os dados de App.ts
app.get('/veiculo', (req, res) => {
    const app = new App_1.Aplicacao();
    app.main();
    res.send(app);
});
