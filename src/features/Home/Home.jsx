import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import styles from "./Home.module.css";

const Home = (props) => {
    return <>
        <div className={styles['home']}>
            <div className={styles['home-content']}>
                <h1>Welcome!</h1>
                <p>Blind75 Randomizer is an app that randomizes Blind 75 questions and provides related resources for data structures and algorithms for each question.</p>
                <p>
                    If you are unfamiliar with what the Blind 75 questions are, they are essentially a collection of LeetCode questions that cover
                    all of the major data structures and algorithms required to be able to tackle most LeetCode questions with confidence. They are designed
                    to give you the foundational learning and fundamentals to be able to handle most DSA questions that you will encounter.
                </p>
                <div>
                    You can find all of the questions {<Link color='teal.500' isExternal href="https://gist.github.com/krishnadey30/88c4e2f601e96597974c00185e479532">here</Link>}
                </div>
                <h1>So what is this app for?</h1>
                <p>
                    The purpose of this app is simple - to help with learning data structures and algorithms. Whether you're wanting to stay sharp on your DSA skills
                    or you're preparing for interviews, this app is meant be another tool to aid you. I've created this because as someone who cares about staying sharp on my DSA skills,
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

export default Home;