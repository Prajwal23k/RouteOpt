import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Leaf } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

type Props = {
  carbonSaved?: string;
};

const AIChatbot = ({ carbonSaved = "0" }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Hi! 🌿 You’ve saved ${carbonSaved} kg of CO₂ so far. How can I help you today?`,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: input,
        sender: "user",
        timestamp: new Date(),
      },
      {
        id: (Date.now() + 1).toString(),
        text: `🌍 You’ve saved ${carbonSaved} kg CO₂. Keep carpooling!`,
        sender: "bot",
        timestamp: new Date(),
      },
    ]);

    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full btn-primary flex items-center justify-center z-50"
      >
        <MessageCircle />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-card rounded-xl shadow-lg border border-border flex flex-col">
          <div className="p-4 flex justify-between items-center border-b">
            <div className="flex items-center gap-2">
              <Leaf />
              <span className="font-semibold">RouteOpt AI</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>

          <div className="p-4 flex-1 overflow-y-auto">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`mb-2 text-sm ${
                  m.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 flex gap-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded px-2"
              placeholder="Ask me anything..."
            />
            <button onClick={handleSend}>
              <Send />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
