"use client";
import { useFormStatus } from "react-dom";
import { deleteTask } from "../utils/action";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-error btn-xs" disabled={pending}>
      {pending ? "pending..." : "delete"}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <div>
      <form action={deleteTask}>
        <input type="hidden" value={id} name="id"></input>
        <SubmitButton />
      </form>
    </div>
  );
};

export default DeleteForm;
