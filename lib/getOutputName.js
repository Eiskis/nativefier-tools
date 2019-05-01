const upperCaseFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = (name, platform, arch, appVersion, suffix) => {
  // return `${config.name} ${upperCaseFirst(nativefierConfig.platform)}${arch !== 'x64' ? ' ' + arch : ''} ${appVersion}${filenameSuffix ? ' ' + filenameSuffix : ''}`
  return `${name} ${upperCaseFirst(platform)}${arch !== 'x64' ? ' ' + arch : ''} ${appVersion}${suffix ? ' ' + suffix : ''}`
}
