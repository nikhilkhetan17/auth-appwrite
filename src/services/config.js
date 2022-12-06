import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("638acfb63c8ae1561b61"); // Your project ID

export const account = new Account(client);

// Database
export const databases = new Databases(client, "638ed9c28adce19a108d");
