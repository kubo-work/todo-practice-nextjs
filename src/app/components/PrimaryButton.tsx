"use client";

import Button from "@mui/material/Button";
import React, { FC, ReactNode } from "react";

type Props = {
  bg: string;
  onClick?: () => void;
  children: ReactNode;
};

const PrimaryButton: FC<Props> = React.memo(function PrimaryButton(props) {
  const { bg, onClick, children } = props;
  return (
    <Button
      sx={{ background: bg, color: "white" }}
      color="success"
      onClick={onClick}
    >
      {children}
    </Button>
  );
});

export default PrimaryButton;
