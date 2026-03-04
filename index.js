const { default: makeWASocket, useSingleFileAuthState, fetchLatestBaileysVersion } = require("@adiwajshing/baileys");
const P = require("pino");
const { getReply } = require("./replies");
const { state, saveState } = useSingleFileAuthState("./session.json");

async function startBot() {
  const { version } = await fetchLatestBaileysVersion();
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    logger: P({ level: "silent" }),
    version
  });

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      if ((lastDisconnect?.error)?.output?.statusCode !== 401) {
        startBot(); // reconnect
      }
    }
  });

  sock.ev.on("messages.upsert", async (msg) => {
    try {
      const message = msg.messages[0];
      if (!message.message?.conversation) return;

      const text = message.message.conversation;
      const reply = getReply(text);

      await sock.sendMessage(message.key.remoteJid, { text: reply });
    } catch (err) {
      console.log(err);
    }
  });

  sock.ev.on("creds.update", saveState);
}

startBot();
