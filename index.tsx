import { useTranslation } from "next-i18next";

const useLocale = (
  namespace: Parameters<typeof useTranslation>[0] = "common"
) => useTranslation(namespace);

const { t } = useLocale();
//      ^?

const value = t("what_needs_to_be_done");
//    ^?

export const elements = [
  <input placeholder={value} />,
  <input placeholder={t("what_needs_to_be_done")} />,
];
