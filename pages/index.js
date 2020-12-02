import React, { useState, useEffect } from "react";
import {MyWonderfulComponent} from "../components/my-wonderful-component";
// import { Grid } from "@material-ui/core";

export default function Page() {
  const hello = "Hello from SSR";
  const options = {
    params: {
      fields: {
        isDynamic: true
      }
    }
  }
  console.log(hello);
  return (
    <MyWonderfulComponent
      id={0}
      options={options}
      count={0}
    >
      {hello}
    </MyWonderfulComponent>
  );
}
