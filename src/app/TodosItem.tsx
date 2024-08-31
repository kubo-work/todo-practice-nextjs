import React, { FC } from "react";
import { TodoType } from "@/app/types/TodoType";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import PrimaryButton from "@/app/components/PrimaryButton";
import { green } from "@mui/material/colors";
import { useTableRow } from "./hooks/useTableRow";

type Props = {
  todo: TodoType;
};

const TodosItem: FC<Props> = React.memo(function TodosItem(props) {
  const { todo } = props;
  const { replaceDateObject, getRowColor, getStatusLabel } = useTableRow();

  const { dateTime: createdDateTime, labelTime: createdLabelTime } =
    replaceDateObject(todo.created_date);
  const { dateTime: endDateTime, labelTime: endLabelTime } = replaceDateObject(
    todo.end_date
  );

  return (
    <TableRow sx={{ background: getRowColor(todo.status) }}>
      <TableCell>{todo.id}</TableCell>
      <TableCell>{todo.title}</TableCell>
      <TableCell>{getStatusLabel(todo.status)}</TableCell>
      <TableCell>
        <time dateTime={createdDateTime}>{createdLabelTime}</time>
      </TableCell>
      <TableCell>
        <time dateTime={endDateTime}>{endLabelTime}</time>
      </TableCell>
      <TableCell>
        <Link href={`features/edit/${todo.id}`} as={`features/edit/${todo.id}`}>
          <PrimaryButton bg={green[400]}>編集</PrimaryButton>
        </Link>
      </TableCell>
    </TableRow>
  );
});

export default TodosItem;
