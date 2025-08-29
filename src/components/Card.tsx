"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

export type BadgeVariant = "success" | "danger" | "warning";

export interface CardProps {
  title: string;
  subtitle?: string;
  colorInfo?: string;
  price?: number | string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  badge?: { label: string; variant?: BadgeVariant };
  className?: string;
}

const badgeVariantClass: Record<BadgeVariant, string> = {
  success: "bg-green/10 text-green",
  danger: "bg-red/10 text-red",
  warning: "bg-orange/10 text-orange",
};

export default function Card({
  title,
  subtitle,
  colorInfo,
  price,
  imageSrc,
  imageAlt = "",
  href = "#",
  badge,
  className = "",
}: CardProps) {
  return (
    <div className={`group overflow-hidden rounded-xl border border-light-300 bg-light-100 transition-shadow hover:shadow ${className}`}>
      <Link href={href} className="block relative">
        <div className="relative w-full aspect-[16/10] bg-light-200">
          {badge ? (
            <span
              className={`absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1 text-caption font-medium ${badgeVariantClass[badge.variant ?? "warning"]}`}
            >
              {badge.label}
            </span>
          ) : null}
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </Link>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="truncate text-dark-900 text-heading-3">{title}</h3>
          {price !== undefined ? (
            <div className="shrink-0 text-dark-900 text-body-medium">
              {typeof price === "number" ? `$${price.toFixed(2)}` : price}
            </div>
          ) : null}
        </div>
        {subtitle ? <p className="text-dark-700 text-body mt-2">{subtitle}</p> : null}
        {colorInfo ? <p className="text-dark-700 text-body mt-1">{colorInfo}</p> : null}
      </div>
    </div>
  );
}
