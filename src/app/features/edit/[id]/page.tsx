import PageHeader from "@/app/components/PageHeader";
import EditTodo from "@/app/features/edit/EditTodo";
import { getTodo } from "@/utils/supabaseFunctions";
import Box from "@mui/material/Box";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "TODOを編集",
};

export const revalidate = 0;

const page = React.memo(async function Page(params: {
  params: { id: string };
}) {
  const { id } = params.params;
  const { data: getTodoData } = await getTodo(Number(id));
  if (!getTodoData) {
    notFound();
  }
  return (
    <Box>
      <PageHeader>TODOを編集</PageHeader>
      <EditTodo editTodoData={getTodoData} />
    </Box>
  );
});
export default page;
