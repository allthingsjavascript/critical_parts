
const createGreeting = function(term, name, fn) {
  let greeting = `${term} ${name}`;
  if (typeof fn === 'function') {
    return fn(greeting);
  }
  return greeting;
}

const greeting = createGreeting('Good Morning', 'Annika', (greet) => `${greet}!!!!`);