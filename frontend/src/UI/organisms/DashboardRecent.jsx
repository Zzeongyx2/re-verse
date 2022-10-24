import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function DashboardRecent() {
  return (
    <Box sx={{ border: 5, borderColor: "#B7C6E7", borderRadius: "24px", m: 1, p: 5 }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography>최근 방문한 아카이브</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>3일전</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Zl존윤sun의 메인 아카이브</Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "end", alignSelf: "end" }}>
          <Link to="login">바로가기</Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardRecent;
