import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>IP address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "$:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.first_name}</TableCell>
              <TableCell>{item.last_name}</TableCell>
              <TableCell align="center">{item.email}</TableCell>
              <TableCell>{item.gender}</TableCell>
              <TableCell>{item.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Dyane",
    last_name: "Cloney",
    email: "dcloney0@deviantart.com",
    gender: "Female",
    ip_address: "215.37.137.21",
  },
  {
    id: 2,
    first_name: "Alfonse",
    last_name: "Sancias",
    email: "asancias1@youtu.be",
    gender: "Male",
    ip_address: "93.190.152.172",
  },
  {
    id: 3,
    first_name: "Blondie",
    last_name: "Mathie",
    email: "bmathie2@live.com",
    gender: "Female",
    ip_address: "150.99.41.123",
  },
  {
    id: 4,
    first_name: "Lowell",
    last_name: "Graser",
    email: "lgraser3@hibu.com",
    gender: "Male",
    ip_address: "43.33.151.211",
  },
  {
    id: 5,
    first_name: "Pauly",
    last_name: "Durkin",
    email: "pdurkin4@uiuc.edu",
    gender: "Male",
    ip_address: "133.152.215.70",
  },
  {
    id: 6,
    first_name: "Vinny",
    last_name: "Brauninger",
    email: "vbrauninger5@utexas.edu",
    gender: "Female",
    ip_address: "97.67.151.102",
  },
  {
    id: 7,
    first_name: "Lauree",
    last_name: "Ryley",
    email: "lryley6@dailymail.co.uk",
    gender: "Female",
    ip_address: "145.91.6.209",
  },
  {
    id: 8,
    first_name: "Valdemar",
    last_name: "Rew",
    email: "vrew7@smh.com.au",
    gender: "Male",
    ip_address: "223.103.113.108",
  },
  {
    id: 9,
    first_name: "Lyn",
    last_name: "Karle",
    email: "lkarle8@unblog.fr",
    gender: "Male",
    ip_address: "240.141.23.219",
  },
  {
    id: 10,
    first_name: "Garrik",
    last_name: "Hunday",
    email: "ghunday9@mediafire.com",
    gender: "Male",
    ip_address: "100.191.185.95",
  },
];
