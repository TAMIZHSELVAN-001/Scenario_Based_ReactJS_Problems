
import { useState, useRef, useEffect } from "react";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!" },
    { id: 2, text: "How are you?" }
  ]);

  const [input, setInput] = useState("");

  // Create refs
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Focus the input when the component first opens
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);

  function sendMessage(e) {
    e.preventDefault();

    if (input.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: Date.now(),
        text: input.trim()
      }
    ]);

    setInput("");
  }

  return (
    <div>
      <h2>Chat Window</h2>

      <div
        style={{
          height: "200px",
          overflowY: "auto",
          border: "1px solid gray",
          padding: "10px"
        }}
      >
        {messages.map((message) => (
          <p key={message.id}>{message.text}</p>
        ))}

        {/* Element used as the scroll target */}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={sendMessage}>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
