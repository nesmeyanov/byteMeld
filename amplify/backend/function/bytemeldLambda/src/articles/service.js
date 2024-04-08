const { ArticleDTO } = require('./dto/article.dto');

class ArticlesService {
  collectionName = 'articles';

  constructor (db) {
    this.db = db;
  }

  async getArticles({ limit, offset, locale }) {
    const filters = {};
    if (locale) filters.locale = locale;

    const [articles, totalItems] = await Promise.all([
      this.db.find(this.collectionName, {
        limit,
        offset,
        filters,
        sort: {
          date: -1
        }
      }),
      this.db.count(this.collectionName, { filters })
    ]);

    return {
      articles: articles.map(article => new ArticleDTO(article)),
      totalItems,
    }
  }

  async getOneArticle({ locale }, { slug }) {
    const filters = { slug, locale };

    const article = await this.db.findOne(this.collectionName, {
      filters
    });

    return article ? new ArticleDTO(article) : null;
  }
}

module.exports = ArticlesService;
