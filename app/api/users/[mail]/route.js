import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  if (!params.mail) {
    return new Response(JSON.stringify({ message: "id is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: params.mail,
      },
    });

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("user error", error.message);
    return new Response(
      JSON.stringify({
        message: "Failed to fetch user",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function PUT(request, { params }) {
  if (!params.id) {
    return new Response(JSON.stringify({ message: "id is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, email, password } = await request.json();

  try {
    const user = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: {
        name,
        email,
        password,
      },
    });

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("user error", error.message);
    return new Response(
      JSON.stringify({
        message: "Failed to update user",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
