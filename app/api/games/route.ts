import prisma from "@/prisma/prisma-client";

const GET = async() => {
  const games = await prisma.game.findMany({take: 10});
  return Response.json({games}, {status: 200});
}

export {GET}
