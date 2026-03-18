'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type ChatMessage = { role: 'user' | 'assistant'; content: string };

const SUGGESTED_PROMPTS = [
  { label: "What's your experience?", icon: '💼' },
  { label: 'What skills do you have?', icon: '⌨️' },
  { label: 'What have you built?', icon: '📦' },
  { label: 'Who are you?', icon: '👤' },
];

type Props = {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  systemContext: string;
};

export default function AIChatPanel({ isOpen, onClose, name, systemContext }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [usedPrompts, setUsedPrompts] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({ role: m.role, content: m.content })),
          systemContext,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');

      const assistantMessage: ChatMessage = { role: 'assistant', content: data.message };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestedClick = (label: string) => {
    setUsedPrompts((prev) => (prev.includes(label) ? prev : [...prev, label]));
    sendMessage(label);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50"
        aria-hidden
      />
      <motion.div
        key="panel"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.25 }}
        className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[#1a1a1a] text-white shadow-2xl flex flex-col border-l border-[#292929]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#292929] shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#292929] transition-colors"
            aria-label="Close chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-lg font-semibold">Chat with {name.split(' ')[0]}</h2>
          <button
            type="button"
            onClick={() => {
              setMessages([]);
              setUsedPrompts([]);
            }}
            className="p-2 rounded-lg hover:bg-[#292929] transition-colors"
            aria-label="New conversation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-track-[#292929] scrollbar-thumb-[#f7ab0a]/60">
          {messages.length === 0 ? (
            <>
              <p className="text-base font-medium text-gray-200">
                Hi! I&apos;m {name}. Ask me anything about my work, experience, or projects.
              </p>
              <div className="flex flex-col gap-2">
                {SUGGESTED_PROMPTS.map(({ label, icon }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleSuggestedClick(label)}
                    disabled={loading}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#292929] hover:bg-[#333] border border-[#333] hover:border-[#f7ab0a]/40 text-left transition-colors disabled:opacity-50"
                  >
                    <span>{icon}</span>
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-2 ${
                      msg.role === 'user'
                        ? 'bg-[#f7ab0a]/20 text-white border border-[#f7ab0a]/40'
                        : 'bg-[#292929] text-gray-200 border border-[#333]'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#292929] rounded-lg px-4 py-2 border border-[#333]">
                    <span className="text-gray-400 text-sm">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />

              {!loading && (
                <div className="mt-3 space-y-2">
                  <p className="text-xs text-gray-400">Ask another quick question:</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_PROMPTS.filter(({ label }) => !usedPrompts.includes(label)).map(
                      ({ label, icon }) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => handleSuggestedClick(label)}
                          className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#292929] hover:bg-[#333] border border-[#333] hover:border-[#f7ab0a]/40 text-xs transition-colors"
                        >
                          <span>{icon}</span>
                          <span>{label}</span>
                        </button>
                      )
                    )}
                    {SUGGESTED_PROMPTS.filter(({ label }) => !usedPrompts.includes(label)).length ===
                      0 && (
                      <button
                        type="button"
                        onClick={() => setUsedPrompts([])}
                        className="px-3 py-2 rounded-full bg-[#292929] hover:bg-[#333] border border-[#333] hover:border-[#f7ab0a]/40 text-xs text-gray-300 transition-colors"
                      >
                        See questions again
                      </button>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Input + disclaimer */}
        <div className="p-4 border-t border-[#292929] shrink-0 space-y-2">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message the AI"
              disabled={loading}
              className="flex-1 rounded-lg bg-[#292929] border border-[#333] px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#f7ab0a]/40"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-lg bg-[#f7ab0a]/80 hover:bg-[#f7ab0a] px-4 py-3 text-sm font-medium text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
          <p className="text-xs text-gray-500">
            Disclaimer: This is my AI-powered twin. It may not be 100% accurate and should be verified
            for accuracy.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

