import get from './get'
import update from './update'
import post from './post'
import erase from './erase'

type TAuthUserServices = {
    get: () => Promise<any[]>
    update: any
    post: any
    erase: any
}

const authUsers: TAuthUserServices = {
        get,
        update,
        post,
        erase
}

export default authUsers