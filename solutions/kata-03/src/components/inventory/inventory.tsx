import { component$, useSignal, useTask$, $, type QRL } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";

export type Items = string[];

export default component$(
  ({
    title,
    initialItems,
    onItemsChanged,
  }: {
    title: string;
    initialItems: Items;
    onItemsChanged: QRL<(items: Items) => unknown>;
  }) => {
    const items = useSignal<string[]>(initialItems);
    const inputRef = useSignal<HTMLInputElement>();
    const amountOfItems = useSignal<number>(initialItems.length);

    // Expose changes to items through a callback
    useTask$(({ track }) => {
      track(() => items.value);

      if (!isServer) {
        amountOfItems.value = items.value.length;

        onItemsChanged(items.value);
      }
    });

    return (
      <div>
        <div>
          {title} (items: {amountOfItems})
        </div>
        <div>{items}</div>
        <div>
          <label>Add a new item</label>
          <input type="text" ref={inputRef}></input>
          <button
            type="submit"
            onClick$={() => {
              const $input = inputRef.value;

              if (!$input) {
                return;
              }

              const newItem = $input.value;

              if (newItem) {
                items.value = items.value.concat(newItem);

                // This won't work because it's a proxy underneath
                // (reference does not change)
                // items.value.push(newItem);

                // Reset input value
                $input.value = "";
              }
            }}
          >
            Add item
          </button>
        </div>
      </div>
    );
  },
);
