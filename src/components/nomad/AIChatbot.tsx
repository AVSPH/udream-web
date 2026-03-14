"use client";

import { useChat } from "@ai-sdk/react";
import { type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";
import { X, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

const NOMAD_AVATAR =
  "/assets/sticker/sticker-2.png";

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const isLoading = status !== "ready";

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mb-4 w-80 md:w-96 h-[500px] max-h-[80vh] bg-background rounded-2xl shadow-2xl border border-border flex flex-col"
            >
              {/* Header */}
              <div className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-border bg-card rounded-t-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-border">
                    <Image src={NOMAD_AVATAR} alt="Nomad AI" width={36} height={36} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px] text-foreground">Mary</h3>
                    <p className="text-[12px] leading-tight text-muted-foreground">Your nomad playbook guide</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4" data-lenis-prevent>
                {messages.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
                      <Image src={NOMAD_AVATAR} alt="Nomad AI" width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-sm font-medium text-foreground">Hey! I&apos;m Mary 👋</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Ask me anything about the playbook, destinations, income, visas, packing, and more.
                    </p>
                  </div>
                )}

                {messages.map((m: UIMessage) => (
                  <div
                    key={m.id}
                    className={`flex items-start gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-border">
                      {m.role === "user" ? (
                        <div className="w-full h-full flex items-center justify-center bg-muted">
                          <User className="w-4 h-4 text-muted-foreground" />
                        </div>
                      ) : (
                        <Image src={NOMAD_AVATAR} alt="Nomad AI" width={32} height={32} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed ${
                        m.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-sm"
                          : "bg-card border border-border text-foreground rounded-tl-sm"
                      }`}
                    >
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          a: (props) => (
                            <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
                          ),
                          p: (props) => <p className="mb-2 last:mb-0" {...props} />,
                          ul: (props) => <ul className="list-disc pl-4 mb-2" {...props} />,
                          ol: (props) => <ol className="list-decimal pl-4 mb-2" {...props} />,
                          li: (props) => <li className="mb-1" {...props} />,
                        }}
                      >
                        {m.parts
                          ? m.parts
                              .filter((p: any) => p.type === "text")
                              .map((p: any) => p.text)
                              .join("")
                          : (m as any).content || ""}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}

                {(status === "submitted" || status === "streaming") && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-border">
                      <Image src={NOMAD_AVATAR} alt="Nomad AI" width={32} height={32} className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="shrink-0 p-4 border-t border-border bg-card rounded-b-2xl">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (input.trim()) {
                      sendMessage({ text: input });
                      setInput("");
                    }
                  }}
                  className="relative flex items-center"
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about the nomad journey..."
                    disabled={isLoading}
                    className="w-full pl-4 pr-12 py-3 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAB toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full overflow-hidden shadow-lg hover:scale-105 active:scale-95 transition-transform border-2 border-border ring-2 ring-primary/20"
        >
          {isOpen ? (
            <div className="w-full h-full flex items-center justify-center bg-background">
              <X className="w-6 h-6 text-foreground" />
            </div>
          ) : (
            <Image src={NOMAD_AVATAR} alt="Chat with Nomad AI" width={56} height={56} className="w-full h-full object-cover" />
          )}
        </button>
      </div>
    </>
  );
}
