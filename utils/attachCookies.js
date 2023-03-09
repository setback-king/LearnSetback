const attachCookies = ({ res, token }) => {
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + oneDay),
  });
};
export default attachCookies;
