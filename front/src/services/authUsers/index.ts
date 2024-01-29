import get from './get'
import update from './update'
import post from './post'

type TAuthUserServices = {
    get: () => Promise<any[]>
    update: any
    post: any
}

const authUsers: TAuthUserServices = {
        get,
        update,
        post
}

export default authUsers