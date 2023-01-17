import ChatMessage from './ChatMessage';

function ChatHistory({ conversation }) {
    return (
        <div className="chat-history">
            <div className="chat-log">
                {conversation.map((message) => (
                    <ChatMessage
                        key={message.id}
                        text={message.text}
                        source={message.source}
                    />
                ))}
            </div>
        </div>
    );
}

export default ChatHistory;