const path = require('path')
const fs = require('fs')

// https://github.com/sindresorhus/junk/blob/master/index.js
const junk = [
  // # All
  '^npm-debug\\.log$', // Error log for npm
  '^\\..*\\.swp$', // Swap file for vim state

  // # macOS
  '^\\.DS_Store$', // Stores custom folder attributes
  '^\\.AppleDouble$', // Stores additional file resources
  '^\\.LSOverride$', // Contains the absolute path to the app to be used
  '^Icon\\r$', // Custom Finder icon: http://superuser.com/questions/298785/icon-file-on-os-x-desktop
  '^\\._.*', // Thumbnail
  '^\\.Spotlight-V100(?:$|\\/)', // Directory that might appear on external disk
  '\\.Trashes', // File that might appear on external disk
  '^__MACOSX$', // Resource fork

  // # Linux
  '~$', // Backup file

  // # Windows
  '^Thumbs\\.db$', // Image file cache
  '^ehthumbs\\.db$', // Folder config file
  '^Desktop\\.ini$', // Stores custom folder attributes
  '@eaDir$', // Synology Diskstation "hidden" folder where the server stores thumbnails

  '.(png|jpg|svg|gif)', //don't open images
]

const isJunk = new RegExp(junk.join('|'))

const getFiles = function (dir) {
  let files = fs.readdirSync(dir)
  files = files.filter((file) => {
    return (
      isJunk.test(file) === false && fs.lstatSync(path.join(dir, file)).isFile()
    )
  })
  files = files.map((f) => dir + '/' + f)
  return files
}
module.exports = getFiles
