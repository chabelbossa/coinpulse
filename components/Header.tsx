'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Link, usePathname } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

const Header = () => {
  const pathname = usePathname();
  const t = useTranslations('Header');

  return (
    <header>
      <div className="main-container inner">
        <Link href="/">
          <Image src="/logo.svg" alt="CoinPulse logo" width={132} height={40} />
        </Link>

        <nav>
          <Link
            href="/"
            className={cn('nav-link', {
              'is-active': pathname === '/',
              'is-home': true,
            })}
          >
            {t('home')}
          </Link>

          <p>{t('search')}</p>

          <Link
            href="/coins"
            className={cn('nav-link', {
              'is-active': pathname === '/coins',
            })}
          >
            {t('coins')}
          </Link>

          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
