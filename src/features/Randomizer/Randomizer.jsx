import React from "react";
import { 
    Box,
    Button, 
    ButtonGroup, 
    Badge, 
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Link,
    Tag } from '@chakra-ui/react'
import styles from "./Randomizer.module.css";
import questions from "../../data/questions";

const Randomizer = (props) => {
    const [question, setQuestion] = React.useState(getRandomQuestion());

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getRandomQuestion() {
        return questions[getRandomInt(questions.length)];
    }

    function handleNewQuestion() {
        setQuestion(getRandomQuestion());
    }

    function getDifficultyBadge() {
        let difficulty = question.difficulty.toLowerCase();

        if(difficulty === "easy") {
            return <Badge colorScheme={'green'}>Easy</Badge>
        }
        else if(difficulty === "medium") {
            return <Badge colorScheme={'yellow'}>Medium</Badge>
        }

        return <Badge colorScheme={'red'}>Hard</Badge>
    }

    function renderQuestionResources() {
        if(!question.resources || !question.resources.length) return null;

        return <>
             <div className={styles['randomizer-question-resources']}>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Need help or want to learn more?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Check out these resources!

                            {
                                question.resources.map((resource) => {
                                    return <div className={styles['randomizer-question-resource']}>
                                        <Link color='teal.500' href={resource.link}>
                                            {resource.title}
                                        </Link>
                                    </div>
                                })
                            }
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    }

    return <>
        <div className={styles['randomizer']}>
            <div className={styles['randomizer-content']}>
                <div className={styles['randomizer-header']}>
                    <div>
                        <h1 className={styles['randomizer-question-title']}>
                            {question.title}{}
                        </h1>
                        <Tag>{question.category}</Tag>
                    </div>
                    <div className={styles['randomizer-question-difficulty']}>
                        {getDifficultyBadge()}
                    </div>
                </div>
                <div className={styles['randomizer-description']}>
                    {question.description}
                </div>
                <div className={styles['randomizer-link']}>
                    <p>Try it out! </p>
                    <Link color='teal.500' href={question.link}>
                        {question.link}
                    </Link>
                </div>
                {renderQuestionResources()}
                <div className={styles['randomizer-navigation']}>
                    <ButtonGroup>
                        <Button colorScheme='teal' size='sm' onClick={handleNewQuestion}>
                            Pick a new question!
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
            
        </div>
    </>
}

export default Randomizer;