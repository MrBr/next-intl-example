'use client';

import { useTranslations } from "next-intl";

export const Badge = () => {
  const t = useTranslations('Common');
  return <span>{t('badge')}</span>
}
