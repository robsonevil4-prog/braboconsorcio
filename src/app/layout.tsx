import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brabo Consórcios | Realize seu sonho com quem entende de consórcios",
  description:
    "Especialistas em consórcios de automóveis, motos, imóveis e investimentos inteligentes. Mais de R$60 milhões comercializados. Simule agora!",
  keywords:
    "consórcio, consórcio de carros, consórcio de motos, consórcio de imóveis, Brabo Consórcios, financiamento",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Brabo Consórcios | Realize seu sonho com quem entende",
    description:
      "Especialistas em automóveis, motos, imóveis e investimentos inteligentes.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${poppins.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brabo Consórcios",
              url: "https://braboconsorcios.com.br",
              logo: "https://braboconsorcios.com.br/logo.png",
              description:
                "Especialistas em consórcios de automóveis, motos, imóveis e investimentos inteligentes.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-XX-XXXXX-XXXX",
                contactType: "sales",
              },
              sameAs: [
                "https://www.instagram.com/brabo.consorcios/",
                "https://api.whatsapp.com/message/JAZA6LV6DKJYC1",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
