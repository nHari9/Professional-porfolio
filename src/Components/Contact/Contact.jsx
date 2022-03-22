import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import styles from "../Contact/Contact.module.css";
import React,{ useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail_1104",
        "template_7hcb7z4",
        form.current,
        "4ltWisEKKY9ClGcsZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  const newTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };


  return (
    <Container id="contact" maxWidth="xl" className={styles.main}>
      <Box className={styles.title}>
        <span>Contact Me</span>
      </Box>
      <Box className={styles.infoContainer}>
        <Box className={styles.linksBox}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<LinkedInIcon />}
            onClick={() =>
              newTab("https://www.linkedin.com/in/hari-reddy-b158b7228/")
            }
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<GitHubIcon />}
            onClick={() => newTab("https://github.com/nHari9")}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<EmailIcon />}
          >
            <a
              href="nharikishorereddy9@gmail.com"
              className={styles.dTag}
              download
            >
              Email
            </a>
          </Button>
        </Box>


        <Box className={styles.inputBox}>

        <form ref={form} onSubmit={sendEmail}>
            
            <input className="emailBox"  type="text" name="user_name" placeholder="Name"/><br />
            
            <input  className="emailBox" type="email" name="user_email" placeholder="Email" /><br />
            
            <textarea className="descrip" name="message" placeholder="Description"/><br />

            <input  className="submitButton" type="submit" value="Send" /><br />

            </form>

        </Box>
      </Box>
    </Container>
    
  );
};

export { Contact };


