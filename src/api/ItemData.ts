import { createResource } from "solid-js";

export const ItemData = ({ pathname }: { pathname: string }) => {
  const [data] = createResource(async () => {
    return await (await fetch(`/api${pathname}`)).json();
  });

  return data;
};
