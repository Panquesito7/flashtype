import React from 'react';
import './TypingChallengeContainer.css';
import ChallengeDetailsCards from './../ChallengeDetailsCards/ChallengeDetailsCards'
import TypingChallenge from '../TypingChallenge/TypingChallenge';

const TypingChallengeContainer = ({
        selectedParagraph, 
        words, 
        characters, 
        wpm, 
        timeRemaining, 
        timerStarted
    }) => {
    return(
        <div className="typing-challenge-container">
            {/*The details*/}
            <div className="details-container">
                {/*The words typed*/}
                <ChallengeDetailsCards cardName="words" cardValue={words} />
                {/*The characters typed*/}
                <ChallengeDetailsCards cardName="characters" cardValue={characters} />
                {/*The Speed*/}
                <ChallengeDetailsCards cardName="speed" cardValue={wpm} />
            </div>
            {/*The real challenge*/}
            <div className="typerwritter-container">
                <TypingChallenge 
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                selectedParagraph={selectedParagraph}/>
            </div>
        </div>
    );
}

export default TypingChallengeContainer;