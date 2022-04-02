import { createResource } from "solid-js";

export const ItemData = () => createResource(async () => {
    return await (await fetch(`/api/full/${Object.values(history.state).join('')}`)).json();
  });
