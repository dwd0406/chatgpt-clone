const ChatMessage = ({ text, source }) => {
    const isUser = source === 'user';
    return (
        <div className="chat-history">
            <div className="chat-log">
                <div className="chat-message">
                    <div className={`${isUser ? "chat-message-center" : "chat-message-center chatgpt"}`}>
                        <div className={`${isUser ? "userAva" : "gptAva"}`} >
                            <p>
                                {isUser ? 'ME' : 'AI'}
                            </p>
                        </div>
                        <div className="message">
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;