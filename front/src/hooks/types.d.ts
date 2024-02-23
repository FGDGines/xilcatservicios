import { ArticleCategory } from "../pages/Blog/types"

export type TBlogParams = {
    page?: number,
    limit?: number,
    category?: ArticleCategory,
    showApproved?: string
}