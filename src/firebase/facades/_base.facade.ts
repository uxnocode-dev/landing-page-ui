import { FirebaseError } from 'firebase/app'
import { FIREBASE_MESSAGES, FirebaseMessageCode } from '../messages'

export class FirebaseBaseFacade {
    public getErrorMessage(code: FirebaseMessageCode) {
        return FIREBASE_MESSAGES[code] || FIREBASE_MESSAGES.default
    }

    public getError(error: FirebaseError) {
        return {
            ...error,
            message: this.getErrorMessage(error.code as FirebaseMessageCode)
        }
    }
}
