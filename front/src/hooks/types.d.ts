type TBlogParams = {
    page?: number,
    limit?: number,
    category?: 'SELLING' | 'RENT' | 'COMMUNITY' | 'NEWS' | 'ALL',
    showApproved?: string
}