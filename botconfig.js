module.exports = {
  prefix: "!",
  status: {
    name: "Rocky Stairs",
    type: "watching"
  },
  ExpressServer: true, //If you wanted to make the website run or not
  Port: 3000, //Which port website gonna be hosted
  emojis: {
    giveaway: "❤️",
    special: "870914038933098517",
    general: "💸"
  },
  ticketembed: {
    title: "Tickets",
    description: "To create a ticket, click one of the buttons below!\n\n Please select the correct ticket otherwise it may be closed!",
    footer: " By aybeecee"
  },
  token: process.env.TOKEN || "MTAxNTc3NDYxNDgxMjYyNjk4NQ.G_oYi7.JmicTqwINSsUgiiSUTHTMtcQs0HvYrPH9xAAPo",
  mongo: process.env.MONGO || "mongodb+srv://Frostyy21K:chillaxfrost42@saturnbot.g2lra.mongodb.net/test"
};