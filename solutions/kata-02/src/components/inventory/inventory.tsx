import { component$, useStore } from "@builder.io/qwik";

export default component$(({ title }: { title: string }) => {
  const store = useStore<{ itemToAdd: string; items: string[] }>({
    itemToAdd: "",
    items: [],
  });

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
          }}
        >
          Add item
        </button>
      </div>
    </div>
  );
});
