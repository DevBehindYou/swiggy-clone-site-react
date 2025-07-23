import  React, { useState, useEffect, useRef, useCallback } from "react";
import { IoSearch, IoClose } from "react-icons/io5";

export function SearchPanel({
  isOpen,
  data = [],          // [{id, title, subtitle}] or any shape you choose
  onSelect = () => {}, // (row) => {}
  onClose = () => {},  // optional close
  placeholder = "Search restaurants, cuisine, location..."
}) {
  const [q, setQ] = useState("");
  const [iActive, setIActive] = useState(-1); // keyboard highlight
  const inputRef = useRef(null);

  // Focus input when drawer opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Filter (case-insensitive)
  const results = q.trim()
    ? data.filter((row) =>
        [row.title, row.subtitle]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase())
      )
    : data.slice(0, 20); // show top picks when no query

  // Keyboard nav
  const onKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (results.length === 0) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setIActive((v) => (v + 1) % results.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setIActive((v) => (v - 1 + results.length) % results.length);
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const row = results[iActive >= 0 ? iActive : 0];
        if (row) {
          onSelect(row);
          onClose();
        }
      }
    },
    [isOpen, results, iActive, onClose, onSelect]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  const clear = () => {
    setQ("");
    setIActive(-1);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="p-4 h-full flex flex-col">
      {/* Search input */}
      <div className="relative mb-4">
        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          ref={inputRef}
          type="text"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setIActive(-1);
          }}
          placeholder={placeholder}
          className="w-full pl-9 pr-8 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#d86900]/40 focus:border-[#d86900] outline-none text-sm"
        />
        {q ? (
          <button
            type="button"
            onClick={clear}
            aria-label="Clear"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <IoClose size={18} />
          </button>
        ) : null}
      </div>

      {/* Results */}
      <ul className="flex-1 overflow-y-auto divide-y divide-gray-200 text-sm">
        {results.map((row, idx) => (
          <li
            key={row.id ?? idx}
            onClick={() => {
              onSelect(row);
              onClose();
            }}
            className={[
              "p-3 cursor-pointer",
              idx === iActive ? "bg-[#ffe8d1]" : "hover:bg-gray-100",
            ].join(" ")}
          >
            <div className="font-medium text-gray-800">{row.title}</div>
            {row.subtitle ? (
              <div className="text-gray-500 text-xs mt-0.5">{row.subtitle}</div>
            ) : null}
          </li>
        ))}
        {results.length === 0 ? (
          <li className="p-3 text-gray-500 text-center">No matches</li>
        ) : null}
      </ul>
    </div>
  );
}