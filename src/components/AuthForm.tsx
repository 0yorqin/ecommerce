"use client";

import React, { useState } from "react";

type Props = {
  mode: "signin" | "signup";
  title: string;
  subtitle?: string;
  submitLabel: string;
  switchHint?: React.ReactNode;
};

export default function AuthForm({
  mode,
  title,
  subtitle,
  submitLabel,
  switchHint,
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="text-center">
        {switchHint}
        <h2 className="mt-2 text-heading-3">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-dark-700">{subtitle}</p>
        ) : null}
      </div>

      <div className="mt-6">
        <div className="h-px bg-light-300" />
      </div>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {mode === "signup" && (
          <div className="space-y-1">
            <label htmlFor="name" className="text-caption text-dark-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-light-300 px-4 py-3 outline-none focus:ring-2 focus:ring-dark-900/50 bg-light-100"
            />
          </div>
        )}

        <div className="space-y-1">
          <label htmlFor="email" className="text-caption text-dark-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="johndoe@gmail.com"
            className="w-full rounded-xl border border-light-300 px-4 py-3 outline-none focus:ring-2 focus:ring-dark-900/50 bg-light-100"
            required
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="text-caption text-dark-700">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={show ? "text" : "password"}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              placeholder="minimum 8 characters"
              className="w-full rounded-xl border border-light-300 px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-dark-900/50 bg-light-100"
              required
              minLength={8}
              aria-describedby="password-help"
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              aria-label={show ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-700"
            >
              {show ? "🙈" : "👁️"}
            </button>
          </div>
          <p id="password-help" className="text-footnote text-dark-700">
            Use 8 or more characters.
          </p>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-dark-900 text-light-100 py-3 text-body-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-dark-900/50"
        >
          {submitLabel}
        </button>
      </form>

      {mode === "signup" && (
        <p className="mt-4 text-center text-footnote text-dark-700">
          By signing up, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      )}
    </div>
  );
}
