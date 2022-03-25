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
        <span>Contact</span>
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
            onClick={() => newTab("https://mail.google.com/mail/u/0/?fs=1&to=nharikishorereddy9@gmail.com&tf=cm")}
          >
            
            Email</Button>
          
          <Button
            variant="contained"
            color="secondary"
            
            onClick={() =>
              newTab("https://www.google.com/maps/place/Kurnool,+Andhra+Pradesh/@15.8118414,78.0047825,13z/data=!3m1!4b1!4m5!3m4!1s0x3bb5ddf506b7c6c9:0x19a7ac74f858d6f2!8m2!3d15.8281257!4d78.0372792")
            }
          >
            Address
          </Button>
        </Box>


        <Box className={styles.inputBox}>

        <form ref={form} onSubmit={sendEmail}>
            
            <input  className={styles.name} type="text" name="user_name" placeholder="Name"/><br />
            
            <input className={styles.email}  type="email" name="user_email" placeholder="Email" /><br />
            
            <textarea  className={styles.desc} name="message" placeholder="Description"/><br />

            <input className={styles.submit} type="submit" value="Send" /><br />

            </form>

        </Box>
      </Box>
    </Container>
    
  );
};

export { Contact };


