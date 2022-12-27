import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const generateImage = (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: "A cute baby sea otter",
      n: 1,
      size: "512x512",
    });

    const imageUrl = response.data.data[0].url;

    res.status(200).json({
      success: true,
      image: imageUrl
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

module.exports = { generateImage };
