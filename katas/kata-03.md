# Qwik Kata 3 - Actions and loaders

The purpose of this kata is to get you acquainted with actions and loaders in Qwik. The kata assumes you have already completed [kata 2](kata-02.md).

## Learning aims

The idea here is to serialize our data model to the file system to demonstrate full stack capabilities of Qwik:

* Lifting local state so it can be managed from outside
* Writing and loading the inventory data from the file system or another external source

## Task

Complete the following:

1. Lift the inventory state from `Inventory` to its parent so that the inventory data can be managed centrally. Hint: To keep this simple, focus on only a single inventory at first as supporting multiple will add complexity.
2. Derive the amount of inventory items dynamically at [useTask](https://qwik.builder.io/docs/components/lifecycle/#usetask) and show it in the user interface. In this case you could avoid the calculation but it is good to understand how to derive data as this will come up with more complex use cases where you want to retain a single source of truth.
3. Read and write the state of each inventory to the file system. The basic requirement here is that the system should persist its state even if you restart the application. The implementation should use Qwik [actions](https://qwik.builder.io/docs/action/) and [loaders](https://qwik.builder.io/docs/route-loader/). If you go with route actions and route loaders, you have to keep both at the **route level** as otherwise it won't work! Consider using a task for tracking the side effect that occurs when inventory items change. Hint: Most likely you will need to use the [QRL type](https://qwik.builder.io/docs/advanced/dollar/) at the implementation to allow Qwik Optimizer to split up your code.
4. Optional - Try using [Form](https://qwik.builder.io/qwikcity/action/#using-actions-with-form) for sending data related to modifications.
5. Optional - Try using [zod](https://qwik.builder.io/qwikcity/action/#zod-validation) for data validation. Can you see the benefit?
6. Optional - Make the data model of the application more robust by introducing unique ids for items. You will have to refactor from simple strings to something more complex.
7. Optional - Connect the persisted state to a database (SQLite or something more complex)
8. Optional - Generalize the system to work with multiple inventories. Hint: Likely for this to work, you have to come up with a way to tell the inventories apart.

## References

* [Why useEffect May Not Be the Best Abstraction](https://www.builder.io/blog/useeffect-not-the-best-abstraction)

## Navigation

* [Previous kata](./kata-02.md)
* [Next kata](./kata-04.md)
