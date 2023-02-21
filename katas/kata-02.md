# Qwik Kata 2 - State management

The purpose of this kata is to get you acquainted with state management in Qwik. The kata assumes you have already completed [kata 1](kata-01.md).

## Learning aims

The idea here is to build up a data model of the application and cover the following:

* Manipulating local state in Qwik
* Lifting local state so it can be managed from outside
* Writing and loading the inventory data from the file system or another external source
* Understanding the Qwik difference when it comes to application behavior

## Task

Complete the following:

1. Add local state called `items` (an array of strings) to the `Inventory` component. The state can be empty initially.
2. Allow the user to add new items to the `Inventory` within the component
3. Allow the user to remove items from an `Inventory` within the component
4. Optional - Allow the user to modify items within an `Inventory` within the component
5. Lift the inventory state from `Inventory` to its parent so that the inventory data can be managed centrally
6. Read and write the state of each inventory to the file system. The basic requirement here is that the system should persist its state even if you restart the application. Hint: Look up Qwik actions and loaders.
7. Optional - make the data model of the application more robust by introducing unique ids for items. You will have to refactor from simple strings to something more complex.
8. Optional - connect the persisted state to a database (SQLite or something more complex)
9. Run the application in a production mode and observe the network tab of the browser inspector

## Notes

* It may be better to separate this as two katas as especially the loader/action portion is challenging.
