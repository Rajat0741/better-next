"use client";

import { ConfirmDialogProvider } from "./confirm-provider";
import { ThemeProvider } from "./theme-provider";

export {
  ConfirmDialogProvider,
  ConfirmProvider,
  useConfirm,
} from "./confirm-provider";
export { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
      <ConfirmDialogProvider>{children}</ConfirmDialogProvider>
    </ThemeProvider>
  );
}
