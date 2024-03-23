"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const deleteTask = async (formData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const id = formData.get("id");
  await prisma.task.delete({ where: { id } });
  revalidatePath("/tasks");
};

export const getSingleTask = async (id) => {
  return await prisma.task.findUnique({ where: { id } });
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      content: content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};

export const createTaskCustom = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const content = formData.get("content");

  // some validation here
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    Task.parse({
      content,
    });
    await prisma.task.create({
      data: {
        content,
      },
    });
    // revalidate path
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    // can't return error
    return { message: "error" };
  }
};
