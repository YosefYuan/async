// test1
async function f() {
  return 1;
}

f().then(console.log);

// test2
async function f(){
  return Promise.resolve(1);
}
f().then(console.log);