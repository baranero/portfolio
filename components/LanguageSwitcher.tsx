import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const getLocaleLabel = (locale: string) => {
    switch (locale) {
      case "en":
        return "ENG";
      case "pl":
        return "PL";
      default:
        return "ENG";
    }
  };

  return (
    <div className="flex h-[42px] w-96 items-center gap-x-5 bg-white/10 backdrop-blur-sm py-2 px-3 mx-5 rounded-full">
      {locales?.slice(1).map((locale) => {
        const isActive =
          locale === activeLocale ||
          (activeLocale === "default" && locale === "en");

        return (
          <span key={"locale-" + locale}>
            {isActive ? (
              <div className="text-accent">{getLocaleLabel(locale)}</div>
            ) : (
              <Link
                className="hover:cursor-pointer hover:text-accent transition-all duration-300"
                href={router.pathname}
                locale={locale}
              >
                <div>{getLocaleLabel(locale)}</div>
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
