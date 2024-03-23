"use client";

import { createTaskCustom } from "@/utils/action";
import toast from "react-hot-toast";
import { useFormStatus, useFormState } from "react-dom";
import { useEffect } from "react";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn join-item btn-primary"
      disabled={pending}
    >
      {pending ? "please wait... " : "create task"}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message == "error") {
      toast.error("there was an error...");
      return;
    }
    if (state.message == "success") {
      toast.success("Task created... ");
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          type="text"
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};
export default TaskForm;
