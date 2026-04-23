export const metadata = {
  title: "Flowmotion",
  description: "Pôle Performance TT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
