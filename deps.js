import { execSync } from 'child_process';
import path from 'path';
const __dirname = path.resolve();
console.info(execSync('npm ci --ignore-scripts', { cwd: __dirname }).toString());