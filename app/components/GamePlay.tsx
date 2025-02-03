import {KoreanKeyboard} from "~/components/KoreanKeyboard";
import {ChangeEvent, useState} from "react";
import {mapLatinToHangeul, oneBlockWords, pickRandomWord} from "~/.client/gameUtils";

enum GameState {
    NOT_STARTED,
    TYPING_WORD,
    CORRECT_WORD_SUBMITTED,
    FINISHED
}

export const GamePlay = () => {
    const wordsToFinish = 5;
    const [wordsFinished, setWordsFinished] = useState(0);
    const [gameState, setGameState] = useState<GameState>(GameState.NOT_STARTED);
    const [words, setWords] = useState<string[]>(oneBlockWords)
    const [currentWord, setCurrentWord] = useState<string | undefined>();
    const [typedWord, setTypedWord] = useState("");
    const [showKoreanKeyboardLayout, setShowKoreanKeyboardLayout] = useState(true);

    const pickNewWord = () => {
        const [randomWord, remainingWords] = pickRandomWord(words);
        setCurrentWord(randomWord);
        setWords(remainingWords);
        setGameState(GameState.TYPING_WORD)
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const typed = e.currentTarget.value
        setTypedWord(typed);
        if (typed == currentWord) {
            setTypedWord("");
            const wordsNowFinished = wordsFinished + 1;
            setWordsFinished(wordsNowFinished);
            if (wordsNowFinished === wordsToFinish) {
                setGameState(GameState.FINISHED)
            } else {
                setGameState(GameState.CORRECT_WORD_SUBMITTED);
            }
        }
    }

    return (
        <div className="mt-8 container md:max-w-xl mx-auto flex flex-col place-content-center text-center">
            {wordsFinished > 0 &&
                <div>
                    {wordsFinished} words out of {wordsToFinish} finished!
                </div>
            }
            {gameState === GameState.NOT_STARTED &&
                <div>
                    <button className="btn" onClick={() => pickNewWord()}>Start game</button>
                </div>
            }
            {gameState === GameState.TYPING_WORD &&
                <div>
                    <h3 className="text-gray-800">Word to type:</h3>
                    <div className="mt-6 mb-6 text-6xl">{currentWord}</div>
                    <input autoFocus value={typedWord} onChange={handleInput}/>
                </div>
            }
            {gameState === GameState.CORRECT_WORD_SUBMITTED &&
                <div>
                    <h3>Correct!</h3>
                    <button className="btn" onClick={() => pickNewWord()}>New word</button>
                </div>
            }
            {gameState === GameState.FINISHED &&
                <div>
                    <h3>Finished!</h3>
                </div>
            }
            <div className="mt-12">
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value={showKoreanKeyboardLayout ? "" : undefined} className="sr-only peer"
                           onChange={() => setShowKoreanKeyboardLayout(!showKoreanKeyboardLayout)}/>
                    <div
                        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Hangeul keyboard layout</span>
                </label>
                {showKoreanKeyboardLayout &&
                    <KoreanKeyboard/>
                }
            </div>
        </div>
    )
}
