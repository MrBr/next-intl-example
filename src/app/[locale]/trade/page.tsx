'use client';

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { Hidden } from "@/app/[locale]/_components/hidden";

export default function TradePage() {
  const t = useTranslations('TradePage');
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/bots">{t('bots')}</Link>
      {!isVisible && <button onClick={() => setIsVisible(true)}>Show</button>}
      {isVisible && <Hidden/>}
    </div>
  )
}
