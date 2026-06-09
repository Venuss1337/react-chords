const fs = require('node:fs')
const path = require('node:path')

const root = path.join(__dirname, '..')

fs.mkdirSync(path.join(root, 'dist', 'esm'), { recursive: true })
fs.mkdirSync(path.join(root, 'dist', 'cjs'), { recursive: true })

fs.writeFileSync(
  path.join(root, 'dist', 'esm', 'package.json'),
  `${JSON.stringify({ type: 'module' }, null, 2)}\n`
)

fs.writeFileSync(
  path.join(root, 'dist', 'cjs', 'package.json'),
  `${JSON.stringify({ type: 'commonjs' }, null, 2)}\n`
)
