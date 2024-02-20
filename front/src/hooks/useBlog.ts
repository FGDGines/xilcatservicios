import { useMutation, useQuery, useQueryClient } from "react-query";
import blogs from "../services/blog";


const useBlog = ({ page = 1, category= 'ALL', limit = 10, showApproved = "false"}: TBlogParams) => {
    // const listOnlyApproved = useQuery(['blogApproved', page, category, limit], blogs.getApproved)
    const list = useQuery(['blog', page, category, limit, showApproved], blogs.get)
    const getBlogCount = () => useQuery(['blog', 'count'], blogs.getCount)
    const queryClient = useQueryClient()

    const post = useMutation<any, any, any>({
        mutationFn: blogs.post,
        onSuccess: () => {
            queryClient.invalidateQueries('blog')
        }
    })
    const update = useMutation<any, any, { data:any, id: number }>({
        mutationFn: blogs.update,
        onSuccess: () => {
            queryClient.invalidateQueries('blog')

        }
    })
    const postImage = useMutation<any, any,{ data:any, id: number }>({
        mutationFn: blogs.postImage,
        onSuccess: () => {
            queryClient.invalidateQueries('blog')
        }
    })

    const erase = useMutation<any, any, number>({
        mutationFn: blogs.erase,
        onSuccess: () => {
            queryClient.invalidateQueries('blog')
        }
    })

    return {
        list,
        getBlogCount,
        post,
        postImage,
        erase,
        update
    }
}

export default useBlog;