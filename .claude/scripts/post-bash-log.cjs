'use strict';
const fs = require('fs');
const path = require('path');

const LOG_PATH = path.join(process.cwd(), '.claude', 'logs', 'commands.log');

const chunks = [];
process.stdin.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
process.stdin.on('end', () => {
  let hookData = {};
  try {
    hookData = JSON.parse(Buffer.concat(chunks).toString('utf8').trim());
  } catch (e) {
    process.exit(0);
  }

  const command = hookData.tool_input?.command;
  if (!command) process.exit(0);

  const timestamp = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  const exitCode = hookData.tool_response?.exit_code ?? '-';
  const logLine = `[${timestamp}] (exit:${exitCode}) ${command}\n`;

  try {
    fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });
    fs.appendFileSync(LOG_PATH, logLine, 'utf8');
  } catch (e) {}

  process.exit(0);
});
