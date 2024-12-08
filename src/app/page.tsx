import TodosList from "./TodosList";
import Box from "@mui/material/Box";
import PageHeader from "./components/PageHeader";
import Link from "next/link";
import PrimaryButton from "./components/PrimaryButton";
import { green } from "@mui/material/colors";
import SortSelector from "./components/SortSelector";
import { TodoProviders } from "./providers/TodosListContextType";
import { getAllTodos } from "@/utils/supabaseFunctions";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "TODO一覧",
};

export default async function Home() {
  const { data: loadTodos } = await getAllTodos();
  return (
    <TodoProviders>
      <Box>
        <PageHeader>TODO一覧</PageHeader>
        <Box sx={{ padding: 2 }}>
          <Link href={`/features/edit`} as={`/features/edit`}>
            <PrimaryButton bg={green[400]}>新規作成</PrimaryButton>
          </Link>
        </Box>
        <SortSelector />
        <TodosList loadTodos={loadTodos} />
      </Box>
    </TodoProviders>
  );
}
