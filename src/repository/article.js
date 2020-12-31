const AWS = require('aws-sdk')
const { v4: uuid } = require('uuid')

const dynamoDb = new AWS.DynamoDB.DocumentClient()
const ARTICLES_TABLE = 'articles'

const create = async article => {
  const articleId = uuid()

  const newArticle = {
    ...article,
    articleId,
  }

  const params = {
    TableName: ARTICLES_TABLE,
    Item: newArticle,
  }

  await dynamoDb.put(params).promise()

  return newArticle
}

const get = async articleId => {
  const params = {
    TableName: ARTICLES_TABLE,
    Key: {
      articleId,
    },
  }

  const response = await dynamoDb.get(params).promise()

  return response.Item
}

module.exports = {
  create,
  get,
}
