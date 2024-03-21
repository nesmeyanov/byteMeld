class ArticlesService {
  constructor (db) {
    this.db = db;
  }

  async getArticles() {
    const articles = await this.db.find();

    return articles;
  }
}

module.exports = ArticlesService;
