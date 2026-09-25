"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Event name recorded in Vercel Analytics, e.g. "whatsapp_click". */
  event: string;
  /** Which instance of the CTA was used, e.g. "hero" or "contact". */
  where: string;
  children: ReactNode;
};

/** An anchor that reports its click as a custom Analytics event. */
export default function TrackedLink({ event, where, children, ...anchorProps }: Props) {
  return (
    <a {...anchorProps} onClick={() => track(event, { where })}>
      {children}
    </a>
  );
}
