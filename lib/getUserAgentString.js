// Custom user agent string
// FIXME: not cool to have to hardcode these strings and Chrome version
// Would much rather append to the default UA string
// https://github.com/jiahaog/nativefier/blob/master/src/infer/inferUserAgent.js
module.exports = (platform, appVersion) => {
  const chromeVersion = '73.0.3683.103'
  const customUaSuffix = ' ElectronPlatform/' + platform + ' ElectronAppVersion/' + appVersion

  if (platform === 'mac') {
    return `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36 ${customUaSuffix}`

  } else if (platform === 'windows') {
    return `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36 ${customUaSuffix}`

  } else if (platform === 'linux') {
    return `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${chromeVersion} Safari/537.36 ${customUaSuffix}`
  }

  return null
}
