import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  CalendarPicker,
  PickersDay,
  PickersDayProps,
  pickersDayClasses,
  DatePicker,
} from "@mui/x-date-pickers";
import Image from "next/image";
import header from "../../../public/images/Maldives.jpg";

const Calendar = () => {
  const renderWeekPickerDay = (
    date: Date,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>
  ) => {
    return (
      <PickersDay
        {...pickersDayProps}
        sx={{
          [`&&.${pickersDayClasses.selected}`]: {
            backgroundColor: "green",
          },
        }}
      />
    );
  };
  const [date, setDate] = React.useState<Dayjs| null>(dayjs("2022-04-07"));
  const [value, setValue] = React.useState("$345");
  return (
    <Box
      sx={{
        bgcolor: "white",
      }}
    >
      <Container>
        <Typography
          sx={{
            textAlign: "left",
            fontFamily: "Chonburi",
            color: "#1B0B7D",

            p: 2,

            fontSize: { md: "1.7rem", xs: "1rem", sm: "1.5rem" },
          }}
        >
          Find Your Create Deal
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CalendarPicker
              // @ts-ignore
                date={date}
                onChange={(newDate) => {
                  //@ts-ignore
                  setDate(newDate);
                }}
                renderDay={renderWeekPickerDay}
                // onClick={() => setValue(value)}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={4} spacing={2}>
            <Image
              className="img1"
              src="/images/mal.jpg"
              alt="header"
              height="295"
              width="345"
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <Image
              className="img1"
              src="/images/sigiriya.jpg"
              alt="header"
              height="295"
              width="345"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Calendar;
