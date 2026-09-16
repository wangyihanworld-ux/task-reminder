const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', '任务提醒.html'), 'utf8');

test('JSON import is bounded and normalized before persistence', () => {
  assert.match(source, /MAX_IMPORT_BYTES/);
  assert.match(source, /MAX_IMPORT_TASKS/);
  assert.match(source, /normalizeImportedTask\(t,ids\)/);
  assert.doesNotMatch(source, /\.\.\.t\}/);
});

test('imported dates and enum fields are validated', () => {
  assert.match(source, /Date\.parse\(parsedTime\)/);
  assert.match(source, /priorities\.has\(raw\.prio\)/);
  assert.match(source, /repeats\.has\(raw\.repeat\)/);
});
