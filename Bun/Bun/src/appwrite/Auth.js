import config from '../Config/config'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account

    constructor() {
        this.client
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProject)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            // create account ho hi jaaye to login bhi kara dijiye
            if (userAccount) {
                return this.login({ email, password })
            }
            else {
                return userAccount
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
        }
    }

    async login({ email, password }) {
        // eslint-disable-next-line no-useless-catch
        try {
            return this.account.createEmailSession(email, password)
        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
        }
    }

    async getCurrentUser() {
        // eslint-disable-next-line no-useless-catch
        try {
            return this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }

    async logout() {
        // eslint-disable-next-line no-useless-catch
        try {
            return this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }

}

const authService = new AuthService()

export default authService;