const fs = require('fs')
const resolveDirname = require('path').dirname
const resolvePath = require('path').resolve
const nativefier = require('nativefier').default

const getUserAgentString = require('./getUserAgentString')
const upperCaseFirst = require('./upperCaseFirst')

module.exports = {

  // Main build method
  build (nativefierConfig) {
    const appVersion = nativefierConfig.appVersion || '1.0.0'
    const arch = nativefierConfig.arch || 'x64'
    const filenameSuffix = nativefierConfig.filenameSuffix
    const out = nativefierConfig.out || './dist'

    if (!nativefierConfig.platform) {
      console.log('Enter the target platform to go ahead with the build')

    } else {
      console.log(`Building ${nativefierConfig.platform} (${appVersion})...`)

      // Compose final build config
      const config = {
        ...nativefierConfig,
        arch,

        // `mas` will break
        // https://github.com/jiahaog/nativefier/issues/801
        userAgent: getUserAgentString(nativefierConfig.platform, appVersion)
      }

      if (out) {
        config.out = out
      }

      nativefier(config, (error, appPath) => {
        if (error) {
          console.error(error)
        } else {

          // Compose desired output folder name
          const currentPath = resolvePath(appPath)
          const newPath = resolvePath(
            resolveDirname(appPath),
            `${config.name} ${upperCaseFirst(nativefierConfig.platform)}${arch !== 'x64' ? ' ' + arch : ''}${appStore ? ' App Store' : ''} ${appVersion}${filenameSuffix ? ' ' + filenameSuffix : ''}`
          )

          // Rename output folder
          fs.rename(currentPath, newPath, (renameError) => {

            // File name operation failed
            if (renameError) {
              console.error('Error when renaming:', renameError);
            } else {

              // Final success message
              console.log('App has been nativefied to', newPath)
            }
          })

        }

      })

    }

  }

}
