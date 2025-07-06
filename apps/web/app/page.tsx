import { prisma } from "@repo/db/client";

export default async function Home() {
  const user = await prisma.user.findFirst();

  return (
    <div>
      <div>id :  {user?.id}</div>
      <div>name : {user?.name}</div>
    </div>
  );
}
