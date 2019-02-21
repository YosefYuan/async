
//A. The async keyword before a function has two effects.

// 1.Makes it always return a promise.
// 2.Allows to user await in it.

// =========================================

// B. The await keyword before a promise makes Javascript wait until that promise settles, and then:

// 1. If it's an error, the exception is generated, same as if throw error were called at that very place.
// 2.Otherwise, it returns the result,so we can assign it to a value.

// =========================================

// Together they provide a great framework to write asynchronous code that is easy bot to read and write.

// With async/await we rarely need to write promise.then/catch, but we still shouldn't forget that they are based on promise, because sometimes (e.g. in the outermost scope) we have to use these methods.Also Promise.all is a nice thing to wait for many tasks simultaneously.

