import { Account, Client, TablesDB } from "appwrite";

export const client = new Client();

client
    .setEndpoint("https://sfo.cloud.appwrite.io/v1")
    .setProject("68d37234003c6f9deac7"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
export const tablesDB = new TablesDB(client);
