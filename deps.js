import { execSync } from 'child_process';
import path from 'path';
import fs from 'node:fs'
const __dirname = path.resolve();
const files = execSync('ls')
console.error("HEREHERHEHRE: ", files)
console.info(execSync('npm ci --ignore-scripts', { cwd: __dirname }).toString());