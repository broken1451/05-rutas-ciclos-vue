const isAuthenticatedGuard = async (to, from, next) => {
  console.log({ to, from, next });

  return new Promise((resolve, reject) => {
    const random = Math.random() * 100;
    if (random > 50) {
      next();
      resolve(true);
      console.log("autenticado  isAuthenticatedGuard", random);
    } else {
      next({ name: "home-pokemon" });
      resolve(false);
      console.log("Bloqueado  isAuthenticatedGuard", random);
    }
  });
};

export default isAuthenticatedGuard;
