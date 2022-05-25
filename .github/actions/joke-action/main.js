import getJoke from "./joke.js";

// import { setOutput } from "@actions/core";

async function run() {
  console.log("running main.js")
  const joke = await getJoke();
  console.log(joke);
//  setOutput("joke-output", joke);
}

run();