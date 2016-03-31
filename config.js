var config = {}

config.host = process.env.HOST || "https://tlexpertises.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "1IjwzmSe7gBgmZzHGtavai34DFiRT9ZbsXJZlNw4yCyKA6VYTZZxRRkvhxI1jvA0fxBrWxFUKD9dVeNAoO3yDA==";
config.databaseId = "test";
config.collectionId = "test";

module.exports = config;