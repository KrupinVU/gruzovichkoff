import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from './component-styles'

export const MyWonderfulComponent = ({id, options, count, children}) => {
  const styles = useStyles();
  console.log(styles.title);
  const [summ, setSumm] = useState(count);
  useEffect(() => {
    if (id && options?.params?.fields?.isDynamic) {
        setSumm((prev) => prev + 1);
    }
  }, [id, options.params.fields.isDynamic]);
  console.log(summ);
  return (
    <>
      <h1 className={styles.title}>Hello, World!</h1>
      <Grid container>
          <Grid container item xs={12}>
              <h1>{children}</h1>
          </Grid>
      </Grid>
    </>
  );
}