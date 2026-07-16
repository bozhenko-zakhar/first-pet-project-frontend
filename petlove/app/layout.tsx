import "./globals.css";
import css from "./layout.module.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={css.container}>{children}</body>
    </html>
  );
}
