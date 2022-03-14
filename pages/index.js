import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [options, setOptions] = useState([]);
  const [chosenPeople, setChosenPeople] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setOptions([
        {
          id: 100,
          name: "user 1",
        },
        {
          id: 101,
          name: "user 2",
        },
        {
          id: 102,
          name: "user 3",
        },
        {
          id: 103,
          name: "user 4",
        },
      ]);
    }, 500);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log("Chosen people")
    console.log(chosenPeople)
  }, [chosenPeople]);

  return (
    <Container maxWidth="md">
      <Head>
        <title>Autocomplete example</title>
        <meta name="description" content="An example of autocomplete" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        display="flex"
        flexDirection="column"
        margin={2}
        padding={4}
        alignItems="center"
        sx={{
          bgcolor: "#fff",
          height: "calc(100vh - 2rem)",
          boxShadow: "1px 1px 3px 1px #dfdfdf",
          borderRadius: "5px",
        }}
      >
        <h1>Autocomplete Example</h1>
        {options.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <>
            <Autocomplete
              multiple
              limitTags={2}
              id="people-selection"
              options={options}
              getOptionLabel={(option) => option.name.toUpperCase()}
              value={chosenPeople}
              onChange={(event,values)=> setChosenPeople(values)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select the people"
                  placeholder="Select the chosen people"
                />
              )}
              sx={{ width: "500px" }}
            />
            <Button
              variant="outlined"
              sx={{ marginTop: "1rem" }}
              onClick={(e) => handleSubmit()}
            >
              Submit
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
}
