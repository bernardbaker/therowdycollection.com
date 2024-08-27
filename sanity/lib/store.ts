import * as queryStore from "@sanity/react-loader";

import { client } from "../lib/client";
import { readToken as token } from "../env";

queryStore.setServerClient(client.withConfig({ token }));

export const { loadQuery } = queryStore;
