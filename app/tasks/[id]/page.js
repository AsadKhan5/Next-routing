import EditTask from "@/components/EditTask";
import { getSingleTask } from "@/utils/action";
import Link from "next/link";
const TaskPage = async ({ params }) => {
  const task = await getSingleTask(params.id);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          Back to Tasks
        </Link>
      </div>
      <EditTask task={task} />
    </>
  );
};
export default TaskPage;
