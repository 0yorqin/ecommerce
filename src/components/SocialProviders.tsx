"use client";

import React from "react";
import Image from "next/image";

type Props = {
  onGoogle?: () => void;
  onApple?: () => void;
};

export default function SocialProviders({ onGoogle, onApple }: Props) {
  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={onGoogle}
        className="w-full inline-flex items-center justify-center gap-3 rounded-xl border border-light-300 px-4 py-3 text-body hover:bg-light-200 focus:outline-none focus:ring-2 focus:ring-dark-900/50"
        aria-label="Continue with Google"
      >
        <Image src="/icons/google.svg" alt="" width={18} height={18} />
        <span>Continue with Google</span>
      </button>

      <button
        type="button"
        onClick={onApple}
        className="w-full inline-flex items-center justify-center gap-3 rounded-xl border border-light-300 px-4 py-3 text-body hover:bg-light-200 focus:outline-none focus:ring-2 focus:ring-dark-900/50"
        aria-label="Continue with Apple"
      >
        <Image src="/icons/apple.svg" alt="" width={18} height={18} />
        <span>Continue with Apple</span>
      </button>
    </div>
  );
}
