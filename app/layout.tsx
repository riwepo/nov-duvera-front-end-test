import "./globals.css";
import { StoreProvider } from "./redux/StoreProvider";

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
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
