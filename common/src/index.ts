import z from 'zod';

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name:z.string().min(8)
})


export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})



export const createBlogInput = z.object({
    title: z.string(),
    context: z.string()
})


export const updateBlogInput = z.object({
    title: z.string(),
    context: z.string(),
    id: z.number()
})

export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogPost = z.infer<typeof updateBlogInput>
export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
