async function f1(){
  await Promise.reject(new Error('Whoops!'));
}

// …Is the same as this:
async function f2(){
  throw new Error('Whoop!');
}

f1().catch(err => {
  alert(err)
})