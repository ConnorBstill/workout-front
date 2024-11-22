import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface Header {
  label: string;
  key: string;
}

const Table = ({ headers, data }: { headers: Header[]; data: any[] }) => {
  const renderHeaders = () => {
    return headers.map((header, index) => <TableCell key={index}>{header.label}</TableCell>);
  };

  const renderDataRows = () => {
    return data.map((row, rowIndex) => (
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={rowIndex}>
        {headers.map((header, colIndex) => (
          <TableCell key={colIndex}>{row[header.key] !== undefined ? row[header.key] : '-'}</TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow sx={{ '.MuiTableCell-head': { fontWeight: 600 } }}>{renderHeaders()}</TableRow>
        </TableHead>

        <TableBody>{renderDataRows()}</TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export { Table };
