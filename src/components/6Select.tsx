import { Box, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";

function LessonSelect() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  return (
    <Box width="250px">
      <Stack spacing={2.5}>
        
        {/* Select */}
        <TextField
          label="Choose a Country"
          select
          fullWidth
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        >
          <MenuItem value="TR">Turkey</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="FR">France</MenuItem>
        </TextField>

        {/* Multi Select */}
        <TextField
          label="Choose Country/Countries"
          select
          fullWidth
          onChange={(e) =>
            setCountries(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            )
          }
          value={countries}
          SelectProps={{ multiple: true }}
        >
          <MenuItem value="TR">Turkey</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="FR">France</MenuItem>
        </TextField>
      </Stack>
    </Box>
  );
}

export default LessonSelect;
