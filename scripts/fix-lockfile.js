import { execSync } from 'child_process';
import { unlinkSync, existsSync } from 'fs';
import { join } from 'path';

const lockfilePath = join(process.cwd(), 'package-lock.json');

if (existsSync(lockfilePath)) {
  console.log('Deleting existing package-lock.json...');
  unlinkSync(lockfilePath);
  console.log('Deleted package-lock.json');
} else {
  console.log('No package-lock.json found, will generate a fresh one.');
}

console.log('Running npm install to regenerate package-lock.json...');
execSync('npm install --package-lock-only', { stdio: 'inherit', cwd: process.cwd() });
console.log('Done! package-lock.json has been regenerated.');
