import { promises as fs } from "fs";
import { loader$ } from "@builder.io/qwik-city";

export const useLoadInventory = loader$(async (event) => {
  const id = event.params.id;

  console.log("loading inventories");

  try {
    const inventories = JSON.parse(
      await fs.readFile("inventory.txt", { encoding: "utf8" })
    );

    console.log("loaded inventories", inventories);

    // TODO: It feels like loading specific inventories should be separated
    // from all and that would be a good refactoring to do.
    if (id) {
      return inventories[id] ? { id, items: inventories[id] } : [];
    }

    return inventories;
  } catch (error) {
    console.error("failed to load inventories", error);

    return {};
  }
});
