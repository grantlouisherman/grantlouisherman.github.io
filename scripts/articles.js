


const articleList = () => {
  const articles = [
    "https://www.simplysafedividends.com/intelligent-income/posts/3-high-yield-dividend-stocks",
    "https://v8.dev/blog/scanner",
    "https://craftinginterpreters.com/contents.html",
    "https://www.99boulders.com/beginner-hangboard-training"
  ]
  const unorderedList = document.createElement('ul')
  articles.forEach(article => {
    const listItem = document.createElement('li')
    listItem.innerText = article
    unorderedList.append(listItem)
  })
  return unorderedList
}

const createArticleListComponent = () => {
  const articles = document.getElementById('articles')
  articles.setAttribute('class', 'column')
  const header = document.createElement('h3')
  header.innerText = "Articles Im Reading"
  articles.append(header)
  articles.append(articleList())
  return articles
}

createArticleListComponent()
