import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import TextArea from "./components/TextArea";
import { QA } from "./AI";
import { useState } from "react";
import ChatHistory from './components/ChatHistory';

const apiKey = 'your-api-key';
const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);

function Main() {

    const [conversation, setConversation] = useState([]);
    const [option, setOption] = useState({});
    const [result, setResult] = useState("");
    const [input, setInput] = useState("");

    const selectOption = (option) => {
        setOption(option);
    };
    const doStuff = async (e) => {
        let object = { ...option, prompt: input };
        const response = await openai.createCompletion(object);
        setResult(response.data.choices[0].text);
        e.preventDefault();
        setConversation([
            ...conversation,
            { id: Math.floor(Math.random() * 100), text: input, source: 'user' },
            { id: Math.floor(Math.random() * 100), text: response.data.choices[0].text, source: 'chatgpt' }
        ]);
        setInput('');
    };

    return (
        <div className="App">
            {Object.values(option).length === 0 ? (
                <OptionSelection QA={QA} selectOption={selectOption} />
            ) : (
                <>
                    <TextArea doStuff={doStuff} setInput={setInput} result={result} input={input} />
                    <ChatHistory conversation={conversation} />
                </>
            )}
        </div>
    )
}
export default Main;
