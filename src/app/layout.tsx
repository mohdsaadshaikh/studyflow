import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/system/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/features/account";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Study Flow — BSCS exam prep",
  description:
    "Course-outline notes, flashcards, MCQs, fill-in-the-blanks, true/false and timed mock tests for BSCS mids and finals.",
  authors: [{ name: "Study Flow" }],
  openGraph: {
    type: "website",
    title: "Study Flow — BSCS exam prep",
    description:
      "Course-outline notes, flashcards, MCQs, fill-in-the-blanks, true/false and timed mock tests for BSCS mids and finals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Flow — BSCS exam prep",
    description:
      "Course-outline notes, flashcards, MCQs, fill-in-the-blanks, true/false and timed mock tests for BSCS mids and finals.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">
        <AuthProvider>
        <TooltipProvider delayDuration={350} skipDelayDuration={400}>
          {children}
          <Toaster />
        </TooltipProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
