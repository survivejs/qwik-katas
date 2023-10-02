import { promises as fs } from "fs";
import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import Inventory, { type Items } from "../components/inventory/inventory";

export const useInventory = routeLoader$(async () => {
  try {
    const inventory = JSON.parse(
      await fs.readFile("inventory.txt", { encoding: "utf8" }),
    ) as string[];

    return inventory;
  } catch (error) {
    console.error("Failed to load inventory");
  }

  return [];
});

export const useSetInventory = routeAction$(async (items) => {
  console.log("write to fs now", items);

  try {
    await fs.writeFile("inventory.txt", JSON.stringify(items, null, 2), "utf8");
  } catch (error) {
    console.error("Failed to write inventory");

    return {
      success: false,
    };
  }

  return {
    success: true,
  };
});

export default component$(() => {
  const initialItems = useInventory();
  const setInventory = useSetInventory();

  return (
    <>
      <Inventory
        title="Socks"
        initialItems={initialItems.value}
        onItemsChanged={$((inventory: Items) => setInventory.submit(inventory))}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
