import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import styles from "./About.module.css";

const About = (props) => {
    return <>
        <div className={styles['about']}>
            <div className={styles['about-content']}>
                <h1>So what is this app for?</h1>
                <p>
                    The purpose of this app is simple - to aid in practicing DSA focused around the Blind 75. Whether you're wanting to stay sharp on your DSA skills
                    or you're preparing for interviews, this app is meant be another tool to assist you.
                </p>
                <p>
                    I've created this because as someone who cares about staying sharp on my DSA skills,
                    I found myself often working on Blind 75 questions as I knew that they were curated and covered the bases that were important. However, I also noticed 
                    that I would often go back to the same questions over and over again, doing myself a diservice. I would target the low hanging fruit questions instead of challenge myself with others.
                    I thought it would be helpful to have some sort of randomization involved so that I wasn't always going after the same questions. Additionally, I thought it would be nice
                    to keep track of learning resources for each question in case I needed to brush up on certain topics.
                </p>
                <p>
                    Each question you'll encounter here is part of the Blind 75 list and will be fed to you in random order. There is a mix of easy, medium, and hard questions, but it is all self paced.
                    If you get stuck, there are resources for each question. Good luck and have fun!
                </p>
                <div>
                    <RouterLink to='/questions'>
                        <Button colorScheme='teal' size='sm' >Get Started!</Button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </>
}

export default About;