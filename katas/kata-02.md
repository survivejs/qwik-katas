# Qwik Kata 2 - State management

The purpose of this kata is to get you acquainted with state management in Qwik. The kata assumes you have already completed [kata 1](kata-01.md).

## Learning aims

The idea here is to build up a data model of the application and cover the following:

* Manipulating local state in Qwik
* Understanding the Qwik difference when it comes to application behavior

## Task

Complete the following:

1. Add local state called `items` (an array of strings) to the `Inventory` component. The state can be empty initially.
2. Allow the user to add new items to the `Inventory` within the component. Hint: You can [use a signal](https://qwik.builder.io/docs/components/overview/#getting-hold-of-dom-element) for storing a reference to the input. Another way would be to track the item to be added using `onInput$` though going through a reference is neater in this case.
3. Optional - After adding a new item, reset the related input that contained the value to add
4. Allow the user to remove items from an `Inventory` within the component
5. Optional - Allow the user to modify items within an `Inventory` within the component
6. Optional - Try implementing [slots](https://qwik.builder.io/docs/components/projection/) for the `Inventory` component to allow the consumer to inject the component styling. This type of API design can lead to headless components that are flexible to use.
7. Run the application in a production mode and observe the network tab of the browser inspector

## Navigation

* [Previous kata](./kata-01.md)
* [Next kata](./kata-03.md)
