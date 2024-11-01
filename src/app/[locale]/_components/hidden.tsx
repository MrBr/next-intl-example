import { useTranslations } from "next-intl";

export const Hidden = () => {
  const t = useTranslations('Hidden');
  return <div>{t('label')}</div>
}
