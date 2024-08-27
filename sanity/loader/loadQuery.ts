import "server-only";

import * as queryStore from "@sanity/react-loader";
import { draftMode } from "next/headers";

import { client } from "../lib/client";
import {
  footerQuery,
  faqsQuery,
  metadataQuery,
  navigationQuery,
  pageQuery,
} from "../lib/queries";
import { token } from "../lib/token";
import { Faqs, Footer, Navigation, Page, PageMetadata } from "@/sanity/types";

const serverClient = client.withConfig({
  token,
  // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
  stega: process.env.VERCEL_ENV === "preview",
});

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient);

const usingCdn = serverClient.config().useCdn;
// Automatically handle draft mode
export const loadQuery = ((query: any, params = {}, options = {}) => {
  const {
    perspective = draftMode().isEnabled ? "previewDrafts" : "published",
  } = options;
  // Don't cache by default
  let revalidate: NextFetchRequestConfig["revalidate"] = 0;
  // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false;
  } else if (usingCdn) {
    revalidate = 60;
  }
  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
    perspective,
    // Enable stega if in Draft Mode, to enable overlays when outside Sanity Studio
    stega: draftMode().isEnabled,
  });
}) satisfies typeof queryStore.loadQuery;

/**
 * Loaders that are used in more than one place are declared here, otherwise they're colocated with the component
 */
export function loadPageMetadata(
  slug: string
): Promise<queryStore.QueryResponseInitial<ArrayLike<PageMetadata> | null>> {
  return loadQuery<PageMetadata | null>(
    metadataQuery,
    {
      slug,
    },
    { next: { tags: [`metadata-${slug}`] } }
  );
}

export function loadNavigation(): Promise<
  queryStore.QueryResponseInitial<ArrayLike<Navigation> | null>
> {
  return loadQuery<Navigation | null>(
    navigationQuery,
    {},
    { next: { tags: ["navigation"], revalidate: 60 } }
  );
}

export function loadPage(
  slug: string
): Promise<queryStore.QueryResponseInitial<Page | null>> {
  return loadQuery<Page | null>(
    pageQuery,
    {
      slug,
    },
    { next: { tags: [`page-data-for-${slug}-route`], revalidate: 60 } }
  );
}

export function loadFaqs(
  slug: string
): Promise<queryStore.QueryResponseInitial<Faqs[] | null>> {
  return loadQuery<Faqs[] | null>(
    faqsQuery,
    {
      slug,
    },
    { next: { tags: [`faqs-for-${slug}-route`], revalidate: 60 } }
  );
}

export function loadFooter(): Promise<
  queryStore.QueryResponseInitial<ArrayLike<Footer> | null>
> {
  return loadQuery<Footer | null>(
    footerQuery,
    {},
    { next: { tags: ["footer"], revalidate: 60 } }
  );
}
