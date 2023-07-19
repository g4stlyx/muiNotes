import { Stack, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"

function LessonTable() {

  // mui.com'da sorting ve pagination de içeren daha  
  // advanced bir örnek var incele işine kesin yarar
  
  const rows = [
    { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 40,
      protein: 6.0,
    },
    { name: 'Eclair', calories: 262, fat: 5.0, carbs: 50, protein: 3.0 },
    { name: 'Cupcake', calories: 305, fat: 4.0, carbs: 44, protein: 5.0 },
    { name: 'Gingerbread', calories: 356, fat: 6.0, carbs: 14, protein: 6.0 },
  ];
  
  return (
    <Stack>
        <Table>
            <TableHead>
              <TableRow>
                  <TableCell>Dessert</TableCell>
                  <TableCell>Calories</TableCell>
                  <TableCell>Fat</TableCell>
                  <TableCell>Carbs</TableCell>
                  <TableCell>Protein</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
              rows.map((row)=>(
                  <TableRow key={row.name}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                  </TableRow>
              ))
              }
            </TableBody>
        </Table>
    </Stack>
  )
}

export default LessonTable