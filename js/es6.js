/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  },
  {
    name: 'ian',
    email: 'ian.mcconihay@gmail.com',
    languages: ['html', 'css', 'javascript']
  }
];

// : fill in your name and email and add some programming languages you know
// to the languages array
// : replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'your_name_here';
const email = '';
const languages = ['html', 'css', 'javascript'];

// : rewrite the object literal using object property shorthand
users.push({
  name: name,
  email: email,
  languages: languages
});
users.push({
  name,
  email,
  languages
})
// : replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// : rewrite the following using arrow functions
users.forEach(function(user) {
  return emails.push(user.email);
});

users.forEach(user => names.push(user.name));

// : replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // : rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;
const {name, email, languages} = user;
  // : rewrite the assignment below to use template strings
  developers.push(${name}'\s email is ' ${email + name + ' knows ' + languages.join(', ')});
});
let text = developers.push(${name} '\'s email is ' ${email + name + ' knows ' + languages.join(', ')});
// : Use `let` for the following variable
let list = '<ul>';

// : rewrite the following loop to use a for..of loop
for(let developer of developers) {

  // TODO: rewrite the assignment below to use template strings
  list += '<li>${developer}</li>';
};

list += '</ul>';
