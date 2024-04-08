class BlockDTO {
  constructor (block) {
    this.description = block.description;
    this.subtitle = block.subtitle;
    this.image = block.image;
  }

  description
  subtitle
  image
}

class ArticleDTO {
  constructor (article) {
    this.date = article.date;
    this.locale = article.locale;
    this.slug = article.slug;
    this.thumbnail = article.thumbnail;
    this.title = article.title;
    this.id = article._id;
    this.blocks = article.blocks.map(block => new BlockDTO(block));
  }

  date
  locale
  slug
  thumbnail
  title
  id
  blocks
}

module.exports = {
  ArticleDTO,
};
