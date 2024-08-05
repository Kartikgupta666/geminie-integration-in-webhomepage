const { GoogleGenerativeAI } = require("@google/generative-ai");


async function generate(prompt , apikey) {
    API_KEY = apikey
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(`${prompt}`);
    return(result.response.text());
}



module.exports = generate