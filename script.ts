import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // await prisma.userPreference.deleteMany();
  // await prisma.user.deleteMany();
  //   const user = await prisma.user.findMany({
  //     where: { name: { notIn: ["Rawi Daniel", "Rawera Daniel"] } },
  //     // distinct: ["name", "age"],
  //     // take: 2,
  //     // skip: 1,
  //     // orderBy: { age: "desc" },
  //   });
  //   console.log(user.length);
await prisma.userPreference.deleteMany()
  const preference = await prisma.userPreference.create({
    data: {
      updateEmail: true,
    },
  });

}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
