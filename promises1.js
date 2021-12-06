const decirHola = new Promise(resolve => resolve(console.log("Hola")));
const decirAdios = () =>
  new Promise((resolve, reject) => reject(console.log("Nope")));
const onError = () => console.error("Que sad, borra eso");
decirHola.then(decirAdios).catch(onError);