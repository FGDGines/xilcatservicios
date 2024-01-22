import get from './get'
import update from './update'

type TAuthUserServices = {
    get: () => Promise<any[]>
    update: any
}

const authUsers: TAuthUserServices = {
        get,
        update,
}

export default authUsers