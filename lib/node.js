import path from 'path'
import fs from 'fs'

export const Node = {
  fileExists: function (filename) {
    return fs.existsSync(filename)
  },
  getFullPath: function (folderPath) {
    return fs.readdirSync(folderPath).map(fn => path.join(folderPath, fn))
  },
  getFiles: function (dir) {
    let results = []
    const list = fs.readdirSync(dir)
    list.forEach(function (file) {
      file = dir + '/' + file
      const stat = fs.statSync(file)
      if (stat && stat.isDirectory()) {
        /* Recurse into a subdirectory */
        results = results.concat(Node.getFiles(file))
      } else {
        /* Is a file */
        results.push(file)
      }
    })
    return results.filter(f => f.endsWith('.md'))
  },
  readFileSync: function (fullPath) {
    return fs.readFileSync(fullPath, 'utf8')
  },

  getMarkdownFolder: function () {
    return path.join(process.cwd(), 'posts')
  }
}
