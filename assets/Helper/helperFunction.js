export const passwordConfirmed = async (password, confirmPassword) => {
  //   console.log(await password, await confirmPassword);
  if ((await password) === (await confirmPassword)) {
    return true;
  } else {
    return false;
  }
};
