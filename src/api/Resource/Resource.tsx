import { Component, createResource, For } from "solid-js";
import { BarItems } from "../../components/BarItems/BarItems";
import { Item } from "../../components/BarItems/Item/Item";

interface Pizza {
  readonly id: number;
  readonly title: string;
  readonly recipe: string;
  readonly src: string;
  readonly price: number;
}

type Props = "title" | "href";

export const Resource: Component<{ [k in Props]: string }> = ({
  title,
  href,
}) => {
  const [data] = createResource<Pizza[]>(async () => {
    return await (await fetch(`/api/${href}`)).json();
  });

  return (
    <BarItems title={title}>
      <For each={data()} fallback={<div>LOADING</div>}>
        {(item) => <Item {...item} />}
      </For>
    </BarItems>
  );
};
