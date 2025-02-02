import prisma from "@/utils/db";

const prismaHandlers = async () => {
  // create task automatically ..

  // await prisma.task.create({
  //   data: {
  //     content: "I already wake up!",
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
};

const Prisma = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length === 0)
    return <h2 className="mt-8 font-medium text-lg">No tasks to show</h2>;

  return (
    <div>
      <h1 className="text-3xl font-medium mb-4">Prisma Example </h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            😬 {task.content}
          </h2>
        );
      })}
    </div>
  );
};
export default Prisma;
