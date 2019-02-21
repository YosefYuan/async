async function f(){
  try {
    let response = await fetch('xxxx');
  } catch(err){
    alert(err);
  }
}

f();