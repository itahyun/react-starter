'use strict';
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chunks = [];
process.stdin.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
process.stdin.on('end', () => {
  let hookData = {};
  try {
    hookData = JSON.parse(Buffer.concat(chunks).toString('utf8').trim());
  } catch (e) {
    process.exit(0);
  }

  const filePath = hookData.tool_input?.file_path;
  if (!filePath) process.exit(0);

  const ext = path.extname(filePath).toLowerCase();
  if (!['.ts', '.tsx'].includes(ext)) process.exit(0);

  const tscEntry = path.join(process.cwd(), 'node_modules', 'typescript', 'bin', 'tsc');
  if (!fs.existsSync(tscEntry)) process.exit(0);

  try {
    execSync(`node "${tscEntry}" --noEmit`, {
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'pipe'],
    });
  } catch (e) {
    // 타입 오류 → stdout으로 Claude에게 전달해 자동 수정 유도
    const out = e.stdout?.toString('utf8');
    if (out) process.stdout.write(`[TypeCheck]\n${out}`);
  }

  process.exit(0);
});
