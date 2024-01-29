"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exec_sh_1 = __importDefault(require("exec-sh"));
const sourcePath = 'src/emails';
const destinationPath = 'build/src';
// Build the command to copy the folder
const command = `cp -R ${sourcePath} ${destinationPath}`;
// Use exec() to run the command
(0, exec_sh_1.default)(command, { stdio: 'inherit' }, (err) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    console.log('Folder copied successfully!');
});
//# sourceMappingURL=copyAssets.js.map