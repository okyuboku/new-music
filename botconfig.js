module.exports = {
  Admins: ["U389234960894001164serID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ODg0MzEyODUxMTAyMTg3NTQx.YTWqhQ.rJu-hPC_7-hgHPg9Ixoz07pzNGQ", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "884312851102187541", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "FZWsPH2jyHB46K9bRVXE_1zcpDFCHvdO", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "shinobu said moshi mosh", //A Secret like a password
  IconURL:
    "https://i.imgur.com/RmbZpro.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "6d1c22a6512748c5b12959f61b25ecc2", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "5c4a2d6a955c436fb7016e775de3e06c", //Spotify Client Secret
  },
};
