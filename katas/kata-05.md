# Qwik Kata 5 - Lifecycle

The purpose of this kata is to get you going with lifecycle of Qwik and understand how they behave in browser and server environments since Qwik covers both. The kata assumes you have already completed [kata 4](kata-04.md).

## Learning aims

The idea here is to understand the following:

* When and why to use Qwik lifecycle
* Learn how Qwik lifecycle is triggered on the server and the client
* How to derive state and why that is preferable when possible

## Task

Complete the following:

1. Handle changes made to the `Inventory` store as a side effect with `useTask$`
2. Optional - Instead of using a loader for initial state, try loading at `useTask$` on the server. Consider why you would use one or the other.
3. Derive the amount of inventory items dynamically at `useTask$` and show it in the user interface. In this case you could avoid the calculation but it is good to understand how to derive data as this will come up with more complex use cases where you want to retain a single source of truth.
