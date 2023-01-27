const core = require("@actions/core");
const github = require("@actions/github");

function run() {
  const whoToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${whoToGreet}`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  const payload = JSON.stringify(github.context.payload, null, 2);
  console.log(`event payload is ${payload}`);
}

run();
