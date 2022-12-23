import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import styles from "./Home.module.css";

const Home = (props) => {
    return <>
        <div className={styles['home']}>
            <div className={styles['home-content']}>
                <h1>Welcome!</h1>
                <p>Blind75 is an app that aggregates Blind 75 questions and provides related resources for Data Structures and Algorithms for each question.</p>
                <p>
                    If you are unfamiliar with what the Blind 75 questions are, they are essentially a collection of LeetCode questions that cover
                    all of the major data structures and algorithms required to be able to tackle most LeetCode questions with confidence. They are designed
                    to test you and teach you fundamentals required to handle most DSA questions that you will encounter.
                </p>
                <div>
                    You can find all of the questions {<Link color='teal.500' isExternal href="https://gist.github.com/krishnadey30/88c4e2f601e96597974c00185e479532">here</Link>}
                </div>
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