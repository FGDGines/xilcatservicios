const truncateText = (text: string, limit: number = 20) => {
    if (text.length < limit) return text;
    return text.slice(0, limit) + '...'
}

export default truncateText