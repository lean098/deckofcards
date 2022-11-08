import React from "react";

import {
  Grid,
  Skeleton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

import useStyles from "../../pages/Dashboard/styles";

const CardSkeleton: React.FC = () => {
  const classes = useStyles();

  return (
    <ImageList className={classes.imageList}>
      {Array.from({ length: 5 }).map((_, index) => (
        <ImageListItem key={String(index)}>
          <Skeleton variant="rectangular" width={220} height={270} />
          <ImageListItemBar
            title={"..."}
            sx={{ width: 220 }}
            className={classes.itemBar}
            subtitle={
              <Grid container justifyContent="space-between">
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: 220, height: 30 }}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1rem", width: 220, height: 30 }}
                />
              </Grid>
            }
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default CardSkeleton;
