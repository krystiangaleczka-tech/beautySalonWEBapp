"use client";

import type { ReactNode } from "react";
import { AuthProvider } from "@/contexts";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
