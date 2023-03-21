// count all markdown files in a directory recursively
// build a list of all markdown files not named README.md
// sort it in alphabetical order and then by size
// filter list to only include files with a size greater than 100 bytes
// log the list to the console with the size in bytes

const {readdir, stat} = require('fs').promises
const {resolve} = require('path')

showListOfWrittenPages()

async function showListOfWrittenPages() {
  const fileDescriptors = await getFileDescriptors('.md', 'README.md')

  fileDescriptors.sort((a, b) => a.name.localeCompare(b.name))
  fileDescriptors.sort((a, b) => b.size - a.size)

  const writtenPages = fileDescriptors.filter(fd => fd.size > 100)

  console.log(`Total number of written pages: ${writtenPages.length} (of ${fileDescriptors.length} planned)\n`)

  writtenPages.forEach(fd => console.log(`${fd.name} - ${fd.size} bytes`))
}

async function getFileDescriptors(extension, ignore) {
  const filePaths = await getFiles('.', ignore)
  const fileDescriptors = await Promise.all(filePaths.map(getFileDescriptor))

  return fileDescriptors.filter(fd => fd.name.endsWith(extension))
}

async function getFiles(dir, ignore) {
  const dirents = await readdir(dir, { withFileTypes: true })

  const filePaths = await Promise.all(dirents.map(dirent => {
    const filePath = resolve(dir, dirent.name)
    
    return dirent.isDirectory() ? getFiles(filePath, ignore) : filePath.endsWith(ignore) ? [] : filePath
  }))
  
  return Array.prototype.concat(...filePaths)
}

async function getFileDescriptor(filePath) {
  const stats = await stat(filePath)

  return {name: filePath.split(/\/|\\/).at(-1), size: stats.size}
}
