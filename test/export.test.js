import test from 'ava'
import {
  exec as execCallback
} from 'child_process'
import {
  promisify
} from 'util'
import {
  promises as fs
} from 'fs'
import {
  join
} from 'path'

const exec = promisify(execCallback)

test('classExports', (t) => {
  return exec('jsdoc -c ./config.json', {
    cwd: join(__dirname, 'testfiles/class')
  }).then(() => {
    return fs.readFile('test/testfiles/class/README.md', 'utf8').then((content) => {
      return fs.readFile('test/testfiles/class/expected.md', 'utf8').then((expected) => t.is(expected, content))
    })
  })
})

test('functionExports', (t) => {
  return exec('jsdoc -c ./config.json', {
    cwd: join(__dirname, 'testfiles/function')
  }).then(() => {
    return fs.readFile('test/testfiles/function/README.md', 'utf8').then((content) => {
      return fs.readFile('test/testfiles/function/expected.md', 'utf8').then((expected) => t.is(expected, content))
    })
  })
})
