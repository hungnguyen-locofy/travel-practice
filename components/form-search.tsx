import type { NextPage } from "next";
import { useState } from "react";
import {
  TextField,
  Icon,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const FormSearch: NextPage = () => {
  const [checkInDateValue, setCheckInDateValue] = useState<string | null>(null);
  const [checkOutDateValue, setCheckOutDateValue] = useState<string | null>(
    null
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch rounded-lg bg-gray overflow-hidden flex flex-row p-2.5 items-start justify-start md:self-stretch md:w-auto md:flex-col sm:pl-5 sm:pt-2.5 sm:pr-5 sm:box-border">
        <div className="self-stretch w-[1211.09px] flex flex-row flex-wrap items-center justify-center gap-[35.42px] lg:flex-1 lg:flex-col lg:gap-[0px] lg:items-center lg:justify-center md:self-stretch md:w-auto sm:self-stretch sm:w-auto sm:gap-[8px]">
          <input
            className="[border:none] font-helvetica text-[17.71px] bg-[transparent] w-[418.46px] flex flex-row py-[13.28434944152832px] px-[8.856232643127441px] box-border items-center justify-start lg:self-stretch lg:w-auto lg:gap-[8px] lg:pt-[13px] lg:box-border sm:self-stretch sm:w-auto"
            type="text"
            placeholder="Search destinations, hotels"
          />
          <div className="flex-1 lg:flex-[unset] lg:self-stretch">
            <DatePicker
              label="Check in"
              value={checkInDateValue}
              onChange={(newValue: any) => {
                setCheckInDateValue(newValue);
              }}
              slotProps={{
                textField: {
                  variant: "standard",
                  size: "medium",
                  color: "primary",
                },
              }}
            />
          </div>
          <div className="flex-1 lg:flex-[unset] lg:self-stretch">
            <DatePicker
              label="Check out"
              value={checkOutDateValue}
              onChange={(newValue: any) => {
                setCheckOutDateValue(newValue);
              }}
              slotProps={{
                textField: {
                  variant: "standard",
                  size: "medium",
                  color: "primary",
                },
              }}
            />
          </div>
          <FormControl
            className="flex-1 lg:flex-[unset] lg:self-stretch"
            variant="standard"
          >
            <InputLabel color="primary">Single room</InputLabel>
            <Select color="primary" size="medium" label="Single room">
              <MenuItem value="Single room">Single room</MenuItem>
              <MenuItem value="Double room">Double room</MenuItem>
              <MenuItem value="Triple room">Triple room</MenuItem>
              <MenuItem value="Quad room">Quad room</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <button className="cursor-pointer [border:none] py-3 px-8 bg-white flex-1 rounded-13xl flex flex-row items-center justify-center hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1] lg:flex-[unset] lg:self-stretch md:gap-[8px] sm:self-stretch sm:w-auto sm:gap-[8px] sm:rounded-13xl sm:pt-3 sm:pb-3 sm:box-border">
            <b className="relative text-[17.71px] font-helvetica text-royalblue text-center opacity-[0.7] md:flex-1 sm:flex-1">
              Search
            </b>
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default FormSearch;
