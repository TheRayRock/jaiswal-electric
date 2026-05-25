import "./globals.css";

export const metadata = {
  title: "Jaiswal Electric | Electrical Repair Shop in Munger",
  description: "Best electrical repair and motor rewinding shop in Munger.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
