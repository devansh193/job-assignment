import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().email({

    message:"Invalid email"
  }),
  password: z.string().min(2,{
    message:"Password required"
  }),
});

