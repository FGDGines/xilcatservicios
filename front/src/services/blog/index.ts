import get  from "./get";
import  post  from './post'
import  postImage  from './postImage'


type TBlogServices = {
    get: () => Promise<any[]>
    post: any
    postImage: any

}

const blogs: TBlogServices = {
    get,
    post,
    postImage
}

export default blogs