import { PrismaClient } from "@prisma/client";

import { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "../../../lib/users";

const prisma = new PrismaClient();

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;

  if (method == "GET") {
    const users = await getUsers();
    return response.status(200).json({
      data: users,
    });
  } else if (method == "POST") {
    const { name } = request.body;

    const user = await prisma.user.create({
      data: {
        name,
      },
    });

    return response.status(201).json({ data: user });
  }

  return response.status(204).json({ message: "Route not found." });
}
