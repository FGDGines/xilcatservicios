import get from "./get";
import getCount from "./getCount";
import post from './post'
import postGuest from './postGuest'
import update from './update'
import erase from './erase'
import postImage from './postImage'
import { TArticle } from "../../pages/Blog/types";


type TBlogServices = {
    get: ({ queryKey }: { queryKey: any[] }) => Promise<TArticle[]>
    getCount: () => Promise<number>
    post: any
    postGuest: any
    postImage: any,
    erase: any,
    update: any

}

const blogs: TBlogServices = {
    get,
    getCount,
    post,
    postGuest,
    postImage,
    erase,
    update
}

export default blogs