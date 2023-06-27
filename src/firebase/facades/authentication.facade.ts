import { FirebaseError } from 'firebase/app'
import { FirebaseBaseFacade } from './_base.facade'
import { firebaseAuth } from '@/config/firebase/initialize.config'
import {
    ICredential,
    ILoginResponse
} from '@/interfaces/authentication.interface'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth'

export class AuthenticationFacade extends FirebaseBaseFacade {
    constructor() {
        super()
    }

    public async singUp(credential: ICredential) {
        try {
            const response = await createUserWithEmailAndPassword(
                firebaseAuth,
                credential.email,
                credential.password
            )

            return response
        } catch (error) {
            throw this.getError(error as FirebaseError)
        }
    }

    public async login(credential: ICredential): Promise<ILoginResponse> {
        try {
            const { user } = await signInWithEmailAndPassword(
                firebaseAuth,
                credential.email,
                credential.password
            )

            return {
                uid: user.uid,
                email: user.email,
                photoURL: user.photoURL,
                phoneNumber: user.phoneNumber,
                displayName: user.displayName,
                refreshToken: user.refreshToken,
                emailVerified: user.emailVerified
            }
        } catch (error) {
            throw this.getError(error as FirebaseError)
        }
    }
}
