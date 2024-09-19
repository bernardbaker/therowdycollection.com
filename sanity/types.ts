interface Logos {
  light: string;
  dark: string;
}

export interface PageMetadata extends ArrayLike<PageMetadata> {
  title: string;
  description: string;
}

export interface Navigation extends ArrayLike<Navigation> {
  logos: Logos;
  links: Array<{
    label: string;
    bookmark: boolean;
    internal: boolean;
    url: string;
    active: boolean;
  }>;
  cta: Array<{
    label: string;
    internal: boolean;
    url: string;
    active: boolean;
  }>;
}

export interface Page {
  cta: Array<{
    label: string;
    internal: boolean;
    url: string;
    active: boolean;
  }>;
  content: Array<Record<string, any>>;
}

export interface Footer_ extends ArrayLike<Footer_> {
  copyrightMessage: string;
  copyrightName: string;
  logos: Logos;
  links: Array<{
    label: string;
    internal: boolean;
    url: string;
    active: boolean;
    bookmark: boolean;
  }>;
}

export interface Faqs {
  question: string;
  answer: Record<string, string>;
  schemaMarkup: any;
}

// NEW TYPES
export interface Header extends ArrayLike<Header> {
  title: string;
  established: string;
  linksInTheCenter: Array<{
    label: string;
    internal: boolean;
    link: string;
    active: boolean;
  }>;
  linksOnTheRight: Array<{
    label: string;
    internal: boolean;
    link: string;
    active: boolean;
  }>;
}

export interface Footer extends ArrayLike<Footer> {
  text: string[];
}

export interface Strapline extends ArrayLike<Strapline> {
  title: string;
  flip: string[];
}
