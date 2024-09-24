// const apiKey="";

// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Access your API key as an environment variable.
// const genAI = new GoogleGenerativeAI("");

// async function run() {
//   // Choose a model that's appropriate for your use case.
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

//   const prompt = "Generate a ten-question quiz in mcq format each question with new linw about the history of flight for beginners, using multiple-choice questions, focusing on the Wright Brothers and early aircraft designs."

//   const result = await model.generateContent(prompt);
//   const response = result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt+"Generate 10 MCQ questions on it");
  console.log(result.response.text());
  return response.text();
}

export default run;
