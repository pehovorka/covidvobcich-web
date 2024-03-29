import React, { useState, useEffect } from "react";
import ReactMarkdown from "markdown-to-jsx";

import { Container, Box, Grid } from "@mui/material";

import { AppBar, Footer } from "../../components/layout";
import { BackToHomeLink, Version } from "../../components/other";
import { options } from "./InfoPage.style";
import infoContent from "../../assets/infoContent.md";
import { Seo } from "../../utils/Seo";

export default function InfoPage() {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch(infoContent)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <Seo title="O webu" />
      <AppBar />
      <Container component="main">
        <Box py={6}>
          <ReactMarkdown options={options}>{markdown}</ReactMarkdown>
          <Box mt={6}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <BackToHomeLink />
              </Grid>
              <Grid item>
                <Version />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
