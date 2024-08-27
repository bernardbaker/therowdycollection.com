import serverContext from "server-only-context";

export const [getLoadingBackgroundColor, setLoadingBackgroundColor] =
  serverContext("");
export const [getLoadingImageFilter, setLoadingImageFilter] = serverContext("");
export const [getLoadingTextColor, setLoadingTextColor] = serverContext("");
