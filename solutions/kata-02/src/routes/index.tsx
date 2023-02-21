import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Inventory from "../components/inventory/inventory";

export default component$(() => {
  return (
    <div>
      <Inventory title="living room" />
      <Inventory title="kitchen" />
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
