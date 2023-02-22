import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Inventory from "../../components/inventory/inventory";
import { useLoadInventory } from "../../loaders/use-load-inventory";

export { useLoadInventory };

export default component$(() => {
  const signal = useLoadInventory();

  return (
    <div>
      <Inventory
        id="livingRoom"
        title="living room"
        items={signal.value?.livingRoom || []}
      />
      <Inventory
        id="kitchen"
        title="kitchen"
        items={signal.value?.kitchen || []}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Inventories",
  meta: [
    {
      name: "description",
      content: "All my inventories",
    },
  ],
};
