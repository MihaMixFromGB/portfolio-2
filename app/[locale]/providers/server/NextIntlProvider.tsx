import { PropsWithChildren } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

type NextIntlProviderProps = PropsWithChildren;

export const NextIntlProvider: React.FC<NextIntlProviderProps> = async ({
  children,
}) => {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};
