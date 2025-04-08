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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var QRCode = require("qrcode"); // ✅ FIXED
var promises_1 = require("readline/promises");
var fs = require("fs");
var process_1 = require("process");
var rl = (0, promises_1.createInterface)({ input: process_1.stdin, output: process_1.stdout });
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var fileName, url, format, safeName, filePath, svg, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("🔁 QR Code Generator Started (Press Ctrl + C to stop)\n");
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 12];
                    return [4 /*yield*/, rl.question("📝 Enter file name (without extension): ")];
                case 2:
                    fileName = _a.sent();
                    return [4 /*yield*/, rl.question("🔗 Enter the URL or text to encode: ")];
                case 3:
                    url = _a.sent();
                    return [4 /*yield*/, rl.question("🖼️ Enter format (svg or png): ")];
                case 4:
                    format = _a.sent();
                    safeName = fileName.trim().replace(/\s+/g, "_");
                    filePath = "./".concat(safeName, ".").concat(format === "svg" ? "svg" : "png");
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 10, , 11]);
                    if (!(format === "svg")) return [3 /*break*/, 7];
                    return [4 /*yield*/, QRCode.toString(url, { type: "svg" })];
                case 6:
                    svg = _a.sent();
                    fs.writeFileSync(filePath, svg);
                    console.log("\u2705 QR code saved as SVG \u2192 ".concat(filePath, "\n"));
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, QRCode.toFile(filePath, url)];
                case 8:
                    _a.sent(); // ✅ this now works
                    console.log("\u2705 QR code saved as PNG \u2192 ".concat(filePath, "\n"));
                    _a.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    err_1 = _a.sent();
                    console.error("❌ Error generating QR code:", err_1);
                    return [3 /*break*/, 11];
                case 11: return [3 /*break*/, 1];
                case 12: return [2 /*return*/];
            }
        });
    });
}
main().catch(console.error);
