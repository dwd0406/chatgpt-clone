import React from "react";

function TextArea({ doStuff, setInput, input }) {
    return (
        <div className="formt">
            <textarea
                className="text-area"
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            >
            </textarea>
            <div className="btn">
                <button className="action-btn" onClick={doStuff}>
                    輸入
                </button>
            </div>
        </div>
    );
}

export default TextArea;