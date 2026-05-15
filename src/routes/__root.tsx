import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { I18nProvider } from "../i18n/context";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-7xl mb-4 animate-bounce">🍕</div>
        <h1 className="font-display text-8xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Strona nie istnieje</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Wygląda na to, że ta pizza została już zjedzona. Strona, której szukasz, nie istnieje.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-7xl mb-4 animate-pulse">🍕</div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-primary">Ups!</h1>
        <h2 className="mt-4 text-xl font-semibold">Coś się przypaliło w piecu</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Nie udało się załadować tej strony. Spróbuj ponownie — pizza zaraz będzie gotowa.
        </p>
        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
          >
            Spróbuj ponownie
          </button>
          <Link to="/" className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
            Strona główna
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NA WAŁKU — Neapolitan Pizza Wałbrzych" },
      { name: "description", content: "Prawdziwa neapolitańska pizza w Wałbrzychu. Hetmańska 1C. Ocena 4,8 ★ (1988 opinii). Rezerwacje: 513 718 011." },
      { name: "author", content: "NA WAŁKU" },
      { property: "og:title", content: "NA WAŁKU — Neapolitan Pizza Wałbrzych" },
      { property: "og:description", content: "Prawdziwa neapolitańska pizza w Wałbrzychu. Hetmańska 1C. Ocena 4,8 ★ (1988 opinii). Rezerwacje: 513 718 011." },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NA WAŁKU — Neapolitan Pizza Wałbrzych" },
      { name: "twitter:description", content: "Prawdziwa neapolitańska pizza w Wałbrzychu. Hetmańska 1C. Ocena 4,8 ★ (1988 opinii). Rezerwacje: 513 718 011." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9c5b96a1-cf7c-43aa-a649-7befa371a31d" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9c5b96a1-cf7c-43aa-a649-7befa371a31d" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Header />
        <main className="min-h-screen pt-20">
          <Outlet />
        </main>
        <Footer />
      </I18nProvider>
    </QueryClientProvider>
  );
}
