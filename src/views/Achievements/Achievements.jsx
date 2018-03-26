import React from "react";
import { Avatar, Grid, withStyles } from "material-ui";

import { RegularCard, ItemGrid } from "components";

const styles = {
  row: {
    display: "flex",
    flexWrap: "wrap",
  },
  avatar: {
    margin: 10,
    width: '100px',
    height: '100px',
  }
}

function TableList({ ...props }) {
  const { classes } = props;
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard cardTitle="Achievements"
        content={
          <div className={classes.row}>
            <Avatar className={classes.avatar}>H</Avatar>
            <Avatar className={classes.avatar}>N</Avatar>
            <Avatar className={classes.avatar}>OP</Avatar>
            <Avatar className={classes.avatar}>FR</Avatar>
            <Avatar className={classes.avatar}>KN</Avatar>
            <Avatar className={classes.avatar}>HT</Avatar>
            <Avatar className={classes.avatar}>U</Avatar>
            <Avatar className={classes.avatar}>P</Avatar>
            <Avatar className={classes.avatar}>FL</Avatar>
            <Avatar className={classes.avatar}>EW</Avatar>
            <Avatar className={classes.avatar}>EU</Avatar>
            <Avatar className={classes.avatar}>XP</Avatar>
            <Avatar className={classes.avatar}>L</Avatar>
          </div>
        } />
      </ItemGrid>
    </Grid>
  );
}

export default withStyles(styles)(TableList);
