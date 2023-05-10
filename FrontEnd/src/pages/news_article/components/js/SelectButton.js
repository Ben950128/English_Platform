import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ translator, setTranslator }) {
  const handleChange = (event) => {
    setTranslator(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Translator</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={translator}
          label="translator"
          onChange={handleChange}
        >
          <MenuItem value="news_tw">Traditional Chinese</MenuItem>
          <MenuItem value="toeic_500">TOEIC - 500</MenuItem>
          <MenuItem value="toeic_700">TOEIC - 700</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
