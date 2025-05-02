// src/app/layout.tsx
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
  title: 'Portfolio Matías Araya',
  description: 'Mi portafolio con modo claro/oscuro y multi-idioma',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
