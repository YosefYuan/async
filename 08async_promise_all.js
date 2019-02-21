// wait 
let result = await Promise.all([
  fetch(url1),
  fetch(url2),
  // ...
]); 