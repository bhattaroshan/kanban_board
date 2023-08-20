import {Client, Account, ID, Databases, Storage} from 'appwrite';


const client = new Client().setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    // .setProject('64e0a0084000656d0f39');

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

 export {client,account,databases,storage,ID};