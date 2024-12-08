import React from "react";
import Box from "@mui/material/Box";
import PageHeader from "../../components/PageHeader";
import EditTodo from "./EditTodo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "新規TODOを作成",
};

const page = React.memo(function Page() {
  return (
    <Box>
      <PageHeader>新規TODOを作成</PageHeader>
      <EditTodo />
    </Box>
  );
});

export default page;
