import conf from '../Config/conf'
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
    client = new Client();
    Databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectID)
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {

        try {
            return await this.Databases.createDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug, { title, content, featuredImage, status, userId })
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updateDocument(slug, { title, content, featuredImage, status }) {
        try {
            return await this.Databases.updateDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID,
                slug, {
                title, content, featuredImage, status
            })
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deleteDocument(slug) {
        try {
            await this.Databases.updateDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug)
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.Databases.getDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug)
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {   // vo vale sare posts dedo jo active hai. neeche vali line ka mtlb.
            return await this.Databases.listDocuments(conf.appwriteDatabaseID, conf.appwriteCollectionID, queries)
        }
        catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false
        }
    }

    // File upload and delete services

    async fileUpload(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketID, ID.unique(), file)
        } catch (error) {
            console.log("Appwrite service :: fileUpload :: error", error);
            return false
        }
    }

    async fileDelete(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketID, fileId)
            return true
        } catch (error) {
            console.log("Appwrite service :: fileDelete :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(conf.appwriteBucket, fileId)
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error", error);
        }
    }
}
const storageService = new Storage()
export default storageService
