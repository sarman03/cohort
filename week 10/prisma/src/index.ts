import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
  const user = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName
    }
  });
  console.log(user);
}

insertUser("test@gmail", "1234", "test", "test");