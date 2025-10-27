import npmUser from "npm-user";

const userInfo = await npmUser("joshuakgoldberg");

console.log(userInfo.stdout);
