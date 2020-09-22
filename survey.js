const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {};

rl.question("What's your name? ", (name) => {
  rl.question("What's your activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              answers["name"] = name;
              answers["activity"] = activity;
              answers["music"] = music;
              answers["meal"] = meal;
              answers["food"] = food;
              answers["sport"] = sport;
              answers["superpower"] = superpower;
              console.log(`${answers.name} loves listening to ${answers.music} while doing ${answers.activity} and playing ${answers.sport}. Their favourite thing to eat for ${answers.meal} is ${answers.food} and superpower is ${answers.superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
