"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AccordionContextType {
  value: string | null;
  onValueChange: (value: string | null) => void;
  type: "single" | "multiple";
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

interface AccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: ReactNode;
}

export function Accordion({
  type = "single",
  collapsible = false,
  className = "",
  children,
}: AccordionProps) {
  const [value, setValue] = useState<string | null>(null);

  const onValueChange = (newValue: string | null) => {
    if (type === "single") {
      if (value === newValue && collapsible) {
        setValue(null);
      } else {
        setValue(newValue);
      }
    }
  };

  return (
    <AccordionContext.Provider value={{ value, onValueChange, type }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: ReactNode;
}

const AccordionItemContext = createContext<string>("");

export function AccordionItem({
  value,
  className = "",
  children,
}: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={className}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  className?: string;
  children: ReactNode;
}

export function AccordionTrigger({
  className = "",
  children,
}: AccordionTriggerProps) {
  const accordionContext = useContext(AccordionContext);
  const itemValue = useContext(AccordionItemContext);

  if (!accordionContext) {
    throw new Error("AccordionTrigger must be used within Accordion");
  }

  const { value, onValueChange } = accordionContext;
  const isOpen = value === itemValue;

  return (
    <button
      type="button"
      className={`flex justify-between items-center w-full ${className}`}
      onClick={() => {
        onValueChange(isOpen ? null : itemValue);
      }}
    >
      <span>{children}</span>
      <span className="ml-4 text-2xl">{isOpen ? "−" : "+"}</span>
    </button>
  );
}

interface AccordionContentProps {
  className?: string;
  children: ReactNode;
}

export function AccordionContent({
  className = "",
  children,
}: AccordionContentProps) {
  const accordionContext = useContext(AccordionContext);
  const itemValue = useContext(AccordionItemContext);

  if (!accordionContext) {
    throw new Error("AccordionContent must be used within Accordion");
  }

  const { value } = accordionContext;
  const isOpen = value === itemValue;

  if (!isOpen) return null;

  return <div className={className}>{children}</div>;
}

