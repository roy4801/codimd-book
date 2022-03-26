function isCodiMD(url) {
  const parsedURL = new URL(url)

  return ['md', 'hackmd', 'codimd'].reduce((result, value) => result || parsedURL.hostname.includes(value), false)
}

module.exports = {
  isCodiMD
}
