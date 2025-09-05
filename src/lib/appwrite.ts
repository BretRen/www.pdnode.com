import { Account, Avatars, Client } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://sfo.cloud.appwrite.io/v1")
  .setProject("68b79936001e3e38e295"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
export const avatars = new Avatars(client);
