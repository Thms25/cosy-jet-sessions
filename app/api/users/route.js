const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export const revalidate = 60 * 60 * 24 * 7; // 1 week

export async function GET(request) {
  try {
    const users = await prisma.user.findMany();

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "failed to fetch users",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// export async function POST(request) {
//   const { name, email, password } = await request.json();

//   try {
//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password,
//       },
//     });

//     return new Response(JSON.stringify(user), { status: 201 });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         message: "failed to create user",
//         error: error.message,
//       }),
//       { status: 500, headers: { "Content-Type": "application/json" } }
//     );
//   }
// }
