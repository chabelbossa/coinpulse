'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleValueChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select value={locale} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[70px] border-none focus:ring-0 focus:ring-offset-0 bg-transparent text-white font-medium">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent className="min-w-[70px] bg-dark-400 border-purple-100/10 text-white">
        <SelectItem value="en" className="focus:bg-purple-100/10 focus:text-white cursor-pointer">EN</SelectItem>
        <SelectItem value="fr" className="focus:bg-purple-100/10 focus:text-white cursor-pointer">FR</SelectItem>
      </SelectContent>
    </Select>
  );
}
