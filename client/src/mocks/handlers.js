import { rest } from "msw";

export const handlers = [
  rest.get(
    `https://localhost:5000/login?username"simon"&password="password"`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ token: "1234" }));
    }
  ),
];
