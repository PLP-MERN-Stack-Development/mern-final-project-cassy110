import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ChatPanel = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Dr. Sarah Mitchell",
      senderType: "provider",
      content: "Hello! I\'ve reviewed your pre-consultation questionnaire. Let\'s discuss your symptoms in detail.",
      timestamp: new Date(Date.now() - 300000),
      read: true
    },
    {
      id: 2,
      sender: "You",
      senderType: "patient",
      content: "Thank you, Doctor. I've been experiencing persistent headaches for the past week.",
      timestamp: new Date(Date.now() - 240000),
      read: true
    },
    {
      id: 3,
      sender: "Dr. Sarah Mitchell",
      senderType: "provider",
      content: "I understand. Can you describe the intensity and frequency? Are they accompanied by any other symptoms?",
      timestamp: new Date(Date.now() - 180000),
      read: true
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (newMessage?.trim()) {
      const message = {
        id: messages?.length + 1,
        sender: "You",
        senderType: "patient",
        content: newMessage,
        timestamp: new Date(),
        read: false
      };
      setMessages([...messages, message]);
      setNewMessage('');
      
      // Simulate provider typing
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    }
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-16 bottom-0 w-96 bg-background border-l border-border shadow-strong z-30 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="MessageSquare" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Consultation Chat</h3>
            <p className="text-xs text-muted-foreground">End-to-end encrypted</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Close chat"
        >
          <Icon name="X" size={20} />
        </button>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages?.map((message) => (
          <div
            key={message?.id}
            className={`flex ${message?.senderType === 'patient' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${message?.senderType === 'patient' ? 'order-2' : 'order-1'}`}>
              <div className={`rounded-2xl px-4 py-3 ${
                message?.senderType === 'patient' ?'bg-primary text-primary-foreground' :'bg-muted text-foreground'
              }`}>
                <p className="text-sm leading-relaxed">{message?.content}</p>
              </div>
              <div className={`flex items-center gap-2 mt-1 px-2 ${
                message?.senderType === 'patient' ? 'justify-end' : 'justify-start'
              }`}>
                <span className="text-xs text-muted-foreground">{formatTime(message?.timestamp)}</span>
                {message?.senderType === 'patient' && (
                  <Icon 
                    name={message?.read ? 'CheckCheck' : 'Check'} 
                    size={14} 
                    color={message?.read ? 'var(--color-primary)' : 'var(--color-muted-foreground)'} 
                  />
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-card">
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e?.target?.value)}
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            variant="default"
            size="icon"
            disabled={!newMessage?.trim()}
            iconName="Send"
          >
            Send
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
          <Icon name="Lock" size={12} />
          Messages are HIPAA-compliant and encrypted
        </p>
      </form>
    </div>
  );
};

export default ChatPanel;