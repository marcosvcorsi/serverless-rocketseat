const articleRepository = require('./repository/article')

const createArticle = async event => {
  const article = JSON.parse(event.body)

  const result = articleRepository.create(article)

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}

const getArticle = async event => {
  const { id } = JSON.parse(event.pathParameters)

  const result = articleRepository.get(id)

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}

module.exports = {
  createArticle,
  getArticle,
}
