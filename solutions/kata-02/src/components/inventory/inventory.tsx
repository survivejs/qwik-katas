import { component$, useSignal } from "@builder.io/qwik";

export default component$(({ title }: { title: string }) => {
  const items = useSignal<string[]>([]);
  const inputRef = useSignal<HTMLInputElement>();

  return (
    <div>
      <div>{title}</div>
      <ul>
        {items.value.map((item, i) => (
          <li>
            {item}
            <span> </span>
            <button
              onClick$={() => {
                items.value = items.value
                  .slice(0, i)
                  .concat(items.value.slice(i + 1));
              }}
            >
              &#10006;
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" ref={inputRef} />
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
});
