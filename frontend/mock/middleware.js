module.exports = function (req, res, next) {
  if (req.method === 'POST') {
      req.method = 'GET' // GETに偽装
      req.url += '_post' // アクセス先をPOST用に変更
  }

  if (req.url === '/search?type=thanks_comment') {
    req.url = '/search_thanks'
  }
  
  next()
}