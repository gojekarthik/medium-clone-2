import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import {signupInput , signinInput} from '@medium-common-module/medium-common'




const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const {success} =  signupInput.safeParse(body)
  if(!success){
    c.status(400)
    return c.json({
      msg:"invalid inputs"
    })
  }
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name:body.name
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token });
  } catch (e) {
    c.status(403);
    return c.json({ msg: "error while signingup" });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const {success} =  signinInput.safeParse(body)
  if(!success){
    c.status(400)
    return c.json({
      msg:"invalid inputs"
    })
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user) {
      c.status(400);
      return c.json({
        msg: "user doesnt exist",
      });
    }
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      msg: "signin successfull",
      token,
    });
  } catch (e) {
    c.status(403);
    return c.json({ msg: "error while signingup" });
  }
});

export default userRouter;
