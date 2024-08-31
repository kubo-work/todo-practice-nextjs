"use client";
import React, { FC } from "react";
import { SordIdStatusType } from "../types/SordIdStatusType";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { statusLabelsObject } from "@/utils/statusLabels";
import { useFilterTodos } from "../hooks/useFilterTodos";

const sortIdLabel: SordIdStatusType = {
  asc: "昇順",
  desc: "降順",
};

const SortSelector: FC<Record<string, never>> = React.memo(
  function SortSelector() {
    const { handleChangeSordIdSelect, handleChangeFilterStatus, conditions } =
      useFilterTodos();

    return (
      <Box>
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography variant="h2" fontSize={30} fontWeight={700}>
              ID
            </Typography>
            <Select
              value={conditions.sortId}
              onChange={handleChangeSordIdSelect}
              sx={{ width: 200 }}
            >
              {Object.entries(sortIdLabel).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography variant="h2" fontSize={30} fontWeight={700}>
              ステータス
            </Typography>
            <Select
              value={conditions.filterStatus}
              onChange={handleChangeFilterStatus}
              sx={{ width: 200 }}
            >
              {Object.entries(statusLabelsObject).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                  {value.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </Box>
    );
  }
);

export default SortSelector;
