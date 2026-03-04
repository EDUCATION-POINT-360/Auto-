const { matricLink, intermediateLink, officialLinks, greeting } = require("./config");

module.exports = {
  getReply: (message) => {
    const text = message.toLowerCase();

    // Greeting
    if (text.includes("salam")) return greeting;

    // Group Links
    if (text.includes("matric") || text.includes("9th") || text.includes("10th") || text.includes("ssc")) {
      return `Bilkul 👍\nYe raha Matric students ke liye official WhatsApp group link:\n${matricLink}`;
    }

    if (text.includes("intermediate") || text.includes("1st year") || text.includes("2nd year") || text.includes("fsc") || text.includes("ics") || text.includes("fa") || text.includes("hssc")) {
      return `Great 👍\nYe raha Intermediate students ke liye official WhatsApp group link:\n${intermediateLink}`;
    }

    if (text.includes("group link")) {
      return "Ji bilkul 😊\nAap Matric ka group chahte ho ya Intermediate ka? Bata dein main foran link send kar deta hoon 👍";
    }

    // Official Links
    if (text.includes("links") || text.includes("platform")) {
      return `Yeh rahe hamare official platforms jahan aap connect reh sakte ho 😊👇
Instagram: ${officialLinks.instagram}
Facebook: ${officialLinks.facebook}
WhatsApp Number: ${officialLinks.whatsappNumber}
WhatsApp Channel: ${officialLinks.whatsappChannel}
YouTube: ${officialLinks.youtube}
Website: ${officialLinks.website}
App: ${officialLinks.app}
Email: ${officialLinks.email}
NUR نور Website: ${officialLinks.nurWebsite}`;
    }

    // Personal/Private Questions
    if (text.includes("tabiyat") || text.includes("health") || text.includes("personal")) {
      return "Is type ke personal sawalat ka reply karne ke liye Rizwan ne mujhe limited instructions di hui hain 😊\nJab woh online honge to aap directly unse confirm kar sakte ho 👍";
    }

    // Default reply
    return "Bilkul 😊\nAap kis class mein ho? Main aap ko proper guide kar deta hoon. Education Point par Matric aur Intermediate dono ke liye proper material available hai 👍";
  }
};
