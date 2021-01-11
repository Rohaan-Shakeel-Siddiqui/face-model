const getStateOf = (branch: string) => {
  const { user } = JSON.parse(localStorage.getItem("state") as string);

  switch (branch) {
    case "user":
      return user as object;
    case "auth":
      return user.auth as boolean;
    case "data":
      return user.data as object;
    default:
      return null;
  }
};

export default getStateOf;
