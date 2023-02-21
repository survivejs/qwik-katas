import { promises as fs } from "fs";
import { component$, useStore } from "@builder.io/qwik";
import { action$ } from "@builder.io/qwik-city";

export const useSetInventory = action$(async ({ id, items }) => {
  console.log("starting to set inventory", id, items);

  try {
    let fullInventory = {};

    // If there is existing inventory, read it first
    try {
      const inventory = JSON.parse(
        await fs.readFile("inventory.txt", { encoding: "utf8" })
      );

      fullInventory = inventory;
    } catch (error) {}

    console.log("existing inventory", fullInventory);
    console.log("writing inventory");

    await fs.writeFile(
      "inventory.txt",
      // TODO: Is there a better way to type the id?
      JSON.stringify({ ...fullInventory, [id as string]: items }, null, 2),
      "utf8"
    );

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
});

export default component$(
  ({ id, title, items }: { id: string; title: string; items: string[] }) => {
    const store = useStore<{ itemToAdd: string; items: string[] }>({
      itemToAdd: "",
      items,
    });
    const action = useSetInventory();

    // TODO: How to type onInput$ correctly?
    return (
      <div>
        <div>{title}</div>
        <ul>
          {store.items.map((item, i) => (
            <li>
              {item}
              <span> </span>
              <button
                onClick$={() => {
                  store.items = store.items
                    .slice(0, i)
                    .concat(store.items.slice(i + 1));
                  action.run({ id, items: store.items });
                }}
              >
                &#10006;
              </button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            onInput$={(e) => (store.itemToAdd = e.target?.value)}
          />
          <button
            onClick$={() => {
              store.items = store.items.concat(store.itemToAdd);
              action.run({ id, items: store.items });
            }}
          >
            Add item
          </button>
        </div>
      </div>
    );
  }
);
