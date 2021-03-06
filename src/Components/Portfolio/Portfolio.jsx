import React from 'react'
import styles from "../Portfolio/Portfolio.module.css"
import Typewriter from "typewriter-effect";
import profilepic from "../Images/download.png"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Portfolio = () => {
    return (
        <>
        <Container id="home" maxWidth="xl" className={styles.contain}>
            <div className={styles.badge}>
                <img style={{width: "250px", height: "250px", borderRadius: "50%"}} alt="Hari Kishore Reddy" src={profilepic}/>
            </div>
            <div className={styles.name}>
                <h2>Hari Kishore</h2>
            </div>
            <Box className={styles.typebox}>
                <h2>
                <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter, options)=> {

                            typewriter
                            
                            .typeString("Full Stack Web Developer")
                            .pauseFor(3000)
                            .deleteAll()
                            .start();
                        }}
                    />
                </h2>
            </Box>
            <Box className={styles.desc}>
                <p>Full Stack Developer with a passion for development and excited to be at the deployment phase of my 
                    career as a web developer. Proficient in Frontend technology as well as in backend technology.
                </p>
            </Box>
        </Container>
        </>
    )
}

export {Portfolio}
