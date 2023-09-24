import "./globals.css";
import { Providers } from "./redux/provider";

export const metadata = {
  title: "Quadra Test App",
  description: "Test challenge posted by NovaDeveraUK on Upwork",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
