import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User not found"); 
  }

  const profile = await db.profile.findUnique({
    where: {
      userId,
    },
  });

  return profile; 
};
