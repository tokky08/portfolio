import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TagSelect(props) {

  const handleChange = (event) => {
    props.setTag(event.target.value)
  };

  return (
    <Box>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.tag}
          onChange={handleChange}
        >
          <MenuItem value={"ALL"}>ALL</MenuItem>
          <MenuItem value={"技術"}>技術</MenuItem>
          <MenuItem value={"趣味"}>趣味</MenuItem>
          <MenuItem value={"お気持ち"}>お気持ち</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
