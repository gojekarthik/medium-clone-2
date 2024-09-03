import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import {
  createBlogInput,
  updateBlogInput,
} from "@medium-common-module/medium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: Number;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  console.log("authorizarion starts");
  try {
    const token = c.req.header("authorization");
    const user = await verify(token || "", c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id as number);
      console.log("command reaches authorization");
      await next();
    } else {
      c.status(403);
      return c.json({
        msg: "you are not logged in",
      });
    }
  } catch (e) {
    c.status(403);
    return c.json({
      msg: "you are not logged in",
    });
  }
});

blogRouter.post("/create", async (c) => {
  console.log("command starts the post route");
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      msg: "invalid inputs",
    });
  }
  const authorId = c.get("userId");
  console.log(authorId);
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  console.log("prisma client has been activated");
  const blog = await prisma.post.create({
    data: {
      title: body.title,
      context: body.context,
      authorId: Number(authorId),
    },
  });
  console.log("blog has been created");
  return c.json({
    id: blog.id,
  });
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blogs = await prisma.post.findMany({
      select: {
        context:true,
        title:true,
        id:true,
        published:true,
        author:{
          select:{
            name:true
          }
        }
      },
    });
    return c.json({
      blogs,
    });
  } catch (e) {
    console.log(e);
    return;
  }
});

blogRouter.get("/:id", async (c) => {
  console.log("command reaches params thingy");
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
      select:{
        id:true,
        title:true,
        context:true,
        author:{
          select:{
            name:true
          }
        }
      }
    });
    console.log("got the blog details");
    return c.json({
      blog,
    });
  } catch (e) {
    console.log(e);
    c.status(411);
    return c.text("error occured");
  }
});

blogRouter.put("/update", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  // if token id == post(author id) then update

  try {
    const body = await c.req.json();
    const authorId = c.get("userId");
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.json({
        msg: "invalid inputs",
      });
    }
    const updatedData = await prisma.post.update({
      data: {
        title: body.title,
        context: body.context,
      },
      where: {
        authorId: Number(authorId),
        id: Number(body.id),
      },
    });
    c.status(200);
    return c.json({
      msg: "updated successfully",
    });
  } catch (e) {
    c.status(403);
    return c.json({
      msg: "Some error while updating the blog post",
    });
  }
});
