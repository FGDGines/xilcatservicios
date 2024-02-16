import get  from "./get";
import  post  from './post'
import  erase  from './erase'
import  postImage  from './postImage'


type TBlogServices = {
    get: () => Promise<any[]>
    post: any
    postImage: any,
    erase: any

}

const blogs: TBlogServices = {
    get,
    post,
    postImage,
    erase
}

export default blogs