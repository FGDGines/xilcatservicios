import { useMutation, useQuery, useQueryClient } from "react-query";
import blogs from "../services/blog";


const useBlog = ({ page = 1, category= 'ALL', limit = 10, showApproved = "false"}: TBlogParams) => {
    // const listOnlyApproved = useQuery(['blogApproved', page, category, limit], blogs.getApproved)
    const list = useQuery(['blog', page, category, limit, showApproved], blogs.get)
    const queryClient = useQueryClient()

    const post = useMutation<any, any, any>({
        mutationFn: blogs.post,
        onSuccess: () => {
            queryClient.invalidateQueries('blog')
            // queryClient.invalidateQueries({ queryKey: ['blog', page, category, limit, showApproved]})
        }
    })
    const update = useMutation<any, any, { data:any, id: number }>({
        mutationFn: blogs.update,
        onSuccess: () => {
            // queryClient.invalidateQueries({ queryKey: ['blog', page, category, limit, showApproved]})
            queryClient.invalidateQueries('blog')

        }
    })
    const postImage = useMutation<any, any,{ data:any, id: number }>({
        mutationFn: blogs.postImage,
        onSuccess: () => {
            queryClient.invalidateQueries('blog')
            // queryClient.invalidateQueries({ queryKey: ['blog', page, category, limit, showApproved]})
        }
    })

    const erase = useMutation<any, any, number>({
        mutationFn: blogs.erase,
        onSuccess: () => {
            queryClient.invalidateQueries('blog')
            // queryClient.invalidateQueries({ queryKey: ['blog', page, category, limit, showApproved]})
        }
    })

    return {
        list,
        post,
        postImage,
        erase,
        update
    }
}

export default useBlog;