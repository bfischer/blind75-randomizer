import React from "react";
import { 
    Box,
    Button, 
    ButtonGroup, 
    Badge, 
    Checkbox,
    CheckboxGroup,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Link,
    Stack,
    Tag } from '@chakra-ui/react'
import styles from "./Randomizer.module.css";
import questions from "../../data/questions";

const initialFilterState = {
    easy: true,
    medium: true,
    hard: true
}

const Randomizer = (props) => {
    const [question, setQuestion] = React.useState(null);
    const [filters, setFilters] = React.useState(initialFilterState);

    React.useEffect(() => {
        setQuestion(getRandomQuestion());
    }, [getRandomQuestion])

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getRandomQuestion() {
        let currentFilters = Object.keys(filters).filter(key => filters[key]);
        let filteredQuestions = questions.filter(q => currentFilters.includes(q.difficulty.toLowerCase()));

        return filteredQuestions[getRandomInt(filteredQuestions.length)];
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

    function handleFilterChange(filter) {
        let newFilters = {...filters};
        newFilters[filter] = !filters[filter];

        //C heck if every filter is set to false,
        // if so, don't allow it. 
        // We want to prevent the user from unchecking all filters.
        let enabledFilters = Object.keys(newFilters).filter(key => newFilters[key]);

        if(!enabledFilters || !enabledFilters.length) return;

        setFilters(newFilters);
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
                                question.resources.map((resource, index) => {
                                    return <div key={`${index} + ${resource.link}`}className={styles['randomizer-question-resource']}>
                                        <Link color='teal.500' href={resource.link} isExternal>
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

    if(!question) return null;

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
                    <Link color='teal.500' href={question.link} isExternal>
                        {question.link}
                    </Link>
                </div>
                {renderQuestionResources()}
                <div className={styles['randomizer-navigation']}>
                    <CheckboxGroup>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox size='md' isChecked={filters.easy} onChange={() => handleFilterChange("easy")}>
                                Easy
                            </Checkbox>
                            <Checkbox size='md'isChecked={filters.medium} onChange={() => handleFilterChange("medium")}>
                                Medium
                            </Checkbox>
                            <Checkbox size='md' isChecked={filters.hard} onChange={() => handleFilterChange("hard")}>
                                Hard
                            </Checkbox>
                        </Stack>
                    </CheckboxGroup>
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