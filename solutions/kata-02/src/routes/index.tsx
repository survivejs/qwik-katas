import { promises as fs } from "fs";
import { component$ } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import Inventory from "../components/inventory/inventory";

export const useLoadInventory = loader$(async () => {
  console.log("loading inventory");

  try {
    const inventory = JSON.parse(
      await fs.readFile("inventory.txt", { encoding: "utf8" })
    );

    console.log("loaded inventory", inventory);

    return inventory;
  } catch (error) {
    console.error("failed to load inventory", error);

    return {};
  }
});

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
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
