import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode } from "react";

type Props = {
  header: string;
  children: ReactNode;
};

const BoxItem: FC<Props> = React.memo(function BoxItemInputText(props) {
  const { header, children } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h2" fontSize={30} textAlign="center">
        {header}
      </Typography>
      {children}
    </Box>
  );
});

export default BoxItem;
