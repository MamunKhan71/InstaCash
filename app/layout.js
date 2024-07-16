import "./globals.css";
import AuthProvider from "./services/AuthProvider";


export const metadata = {
  title: "InstaCash",
  description: "Go cashless - anytime | anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
