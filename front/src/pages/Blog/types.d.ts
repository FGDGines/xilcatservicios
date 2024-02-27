export type ArticleKeys = 'id' | 'en_title' | 'es_title' | 'ca_title' | 'en_content' | 'es_content' | 'ca_content' | 'imagePath' | 'contact' | 'name'
export type ArticleRecord = Record<ArticleKeys, string | number>
export type ArticleCategory = 'SELLING' | 'RENT' | 'COMMUNITY' | 'NEWS' | 'ALL' | 'FORMATION'
export type ArticleAuth = {
  auth: {
    username: string,
    created_at: string
  }
}
export type TArticle = ArticleRecord
  & ArticleAuth
  & { category: ArticleCategory, isApproved: boolean, [idx: string]: string }