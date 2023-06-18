import { execSync } from 'child_process';
console.info(execSync('npm ci --ignore-scripts', { cwd: __dirname }).toString());