import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/NavBar';
import AboutMeSection from '@/components/AboutMeSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/utilities/BackToTopButton';
import { Share_Tech_Mono, Share } from 'next/font/google';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Translation } from '@/helpers/translation';

const share = Share({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-share',
  display: 'swap',
});
const share_tech_mono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-share-tech-mono',
  display: 'swap',
});

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const [localeTransitionIndex, setLocaleTransitionIndex] = useState(locale == 'pt-BR' ? 'ptBR' : 'enUS');
  const handleToggleLocale = () => {
    const { pathname, asPath, query } = router;
    switch (locale) {
      case 'pt-BR':
        router.push({ pathname, query }, asPath, { locale: 'en-US' });
        setLocaleTransitionIndex('enUS');
        break;
      case 'en-US':
        router.push({ pathname, query }, asPath, { locale: 'pt-BR' });
        setLocaleTransitionIndex('ptBR');
        break;
    }
  };
  return (
    <>
      <Head>
        <title>{Translation[localeTransitionIndex].websiteTitle}</title>
        <meta name='description' content={Translation[localeTransitionIndex].websiteDescriptionContent} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`bg-aBitMoreDarkBlue ${share.variable} ${share_tech_mono.variable}`}>
        <NavBar localeTransitionIndex={localeTransitionIndex} handleToggleLocale={handleToggleLocale} />
        <HeroSection localeTransitionIndex={localeTransitionIndex} />
        <PortfolioSection localeTransitionIndex={localeTransitionIndex} />
        <AboutMeSection localeTransitionIndex={localeTransitionIndex} />
        <ContactSection localeTransitionIndex={localeTransitionIndex} />
        <Footer />
        <BackToTopButton localeTransitionIndex={localeTransitionIndex} />
      </main>
    </>
  );
}
