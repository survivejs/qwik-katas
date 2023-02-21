import { component$ } from "@builder.io/qwik";

export default component$(({ title }: { title: string }) => {
  return <div>{title}</div>;
});
