import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TagSelect(props) {

  const handleChange = (event) => {
    props.setTag(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">タグ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.tag}
          label="タグ"
          onChange={handleChange}
        >
          <MenuItem value={"ALL"}>ALL</MenuItem>
          <MenuItem value={"技術"}>技術</MenuItem>
          <MenuItem value={"お気持ち"}>お気持ち</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
