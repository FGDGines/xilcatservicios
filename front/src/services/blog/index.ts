import get  from "./get";
import  post  from './post'
import  update  from './update'
import  erase  from './erase'
import  postImage  from './postImage'


type TBlogServices = {
    get: ({ queryKey }: {queryKey: any[]}) => Promise<any[]>
    post: any
    postImage: any,
    erase: any,
    update: any

}

const blogs: TBlogServices = {
    get,
    post,
    postImage,
    erase,
    update
}

export default blogs