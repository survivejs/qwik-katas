import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Inventory from "../../../components/inventory/inventory";
import { useLoadInventory } from "../../../loaders/use-load-inventory";

export { useLoadInventory };

export default component$(() => {
  const signal = useLoadInventory();

  // TODO: Likely inventory titles should be tracked in the data model as well
  return (
    <div>
      {signal.value?.id ? (
        <Inventory
          id={signal.value.id}
          title={signal.value.id}
          items={signal.value.items}
        />
      ) : (
        "No inventory was found"
      )}
    </div>
  );
});

// TODO: It would be good to derive this data from an inventory if it was found
export const head: DocumentHead = {
  title: "Inventory",
  meta: [
    {
      name: "description",
      content: "Some inventory",
    },
  ],
};
