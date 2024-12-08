import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageHeader: FC<Props> = React.memo(function PageHeader(props) {
  const { children } = props;
  return (
    <Box component="header" sx={{ p: 4 }}>
      <Typography variant="h1" fontSize={50} fontWeight={700}>
        {children}
      </Typography>
    </Box>
  );
});

export default PageHeader;
