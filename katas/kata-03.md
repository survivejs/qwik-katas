# Qwik Kata 3 - Actions and loaders

The purpose of this kata is to get you acquainted with actions and loaders in Qwik. The kata assumes you have already completed [kata 2](kata-02.md).

## Learning aims

The idea here is to serialize our data model to the file system to demonstrate full stack capabilities of Qwik:

* Lifting local state so it can be managed from outside
* Writing and loading the inventory data from the file system or another external source

## Task

Complete the following:

1. Lift the inventory state from `Inventory` to its parent so that the inventory data can be managed centrally. Hint: To keep this simple, focus on only a single inventory at first as supporting multiple will add complexity.
2. Read and write the state of each inventory to the file system. The basic requirement here is that the system should persist its state even if you restart the application. The implementation should use Qwik [actions](https://qwik.builder.io/docs/action/) and [loaders](https://qwik.builder.io/docs/route-loader/).
3. Optional - Try doing the same using [useTask](https://qwik.builder.io/docs/components/lifecycle/#usetask).
4. Optional - Try using [Form](https://qwik.builder.io/qwikcity/action/#using-actions-with-form) for sending data related to modifications.
5. Optional - Try using [zod](https://qwik.builder.io/qwikcity/action/#zod-validation) for data validation. Can you see the benefit?
6. Optional - Make the data model of the application more robust by introducing unique ids for items. You will have to refactor from simple strings to something more complex.
7. Optional - Connect the persisted state to a database (SQLite or something more complex)

## Navigation

* [Previous kata](./kata-02.md)
* [Next kata](./kata-04.md)
