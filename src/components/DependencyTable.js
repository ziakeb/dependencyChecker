import React from "react";
import useStyles from "./repoListStyles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

export default function DependencyTable({ packages }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Package Name</TableCell>
            <TableCell>Current</TableCell>
            <TableCell>Latest</TableCell>
            <TableCell>Outdated</TableCell>
            <TableCell>Vulnerable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {packages.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.packageName}</TableCell>
              <TableCell>{p.current}</TableCell>
              <TableCell>{p.latest}</TableCell>
              <TableCell>{p.outdated}</TableCell>
              <TableCell>{p.vulnerable}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
