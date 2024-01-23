import { useMutation, useQuery, useQueryClient } from "react-query";
import blogs from "../services/blog";

const useBlog = () => {
    const list = useQuery('blog', blogs.get)
    const queryClient = useQueryClient()

    const post = useMutation<any, any, any>({
        mutationFn: blogs.post,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blog']})
        }
    })
    const postImage = useMutation<any, any,{ data:any, id: number }>({
        mutationFn: blogs.postImage,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blog']})
        }
    })

    return {
        list,
        post,
        postImage
    }
}

export default useBlog;