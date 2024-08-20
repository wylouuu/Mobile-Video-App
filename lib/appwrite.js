import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.wylouuu.aora",
  projectId: "66c465ea003722dca641",
  databaseId: "66c466f5001a1f6fc3d3",
  userCollectionId: "66c467050032e1952e5a",
  videoCollectionId: "66c4671d003838bdddef",
  storageId: "66c46801002b37bf7930",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
