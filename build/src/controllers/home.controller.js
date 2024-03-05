"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = exports.welcome = void 0;
function welcome(req, res) {
    console.log("Welcome to Tap-tests application.");
    return res.json({ message: "Welcome to Tap-tests application." });
}
exports.welcome = welcome;
function login(req, res) {
    console.log("Login to Tap-tests application.");
    return res.json({ message: "Login to Tap-tests application." });
}
exports.login = login;
function register(req, res) {
    return res.json({ message: "Register to Tap-tests application." });
}
exports.register = register;
