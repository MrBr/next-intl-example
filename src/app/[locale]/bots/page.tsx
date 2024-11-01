'use client'

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Bots() {
  const t = useTranslations('BotsPage')
  const [counter, setCounter] = useState(0)
  const router = useRouter()

  useEffect(() => {
    console.log('TEST')
  }, [t]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <h1>{t('title')}</h1>
      <Link href="/trade">{t('trade')}</Link>
      <div>
        <button onClick={() => router.replace('/de/bots')}>Switch lang</button>
      </div>
    </div>
  )
}

