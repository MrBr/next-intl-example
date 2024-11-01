import { PropsWithChildren } from "react";
import { Badge } from "@/app/[locale]/_components/badge";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export default async function LocaleLayout({ children, params: {locale} }: PropsWithChildren & {params: {locale: string}}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return <NextIntlClientProvider messages={messages}>
    <div>
      <Badge/>
      {children}
    </div>
  </NextIntlClientProvider>;
}
