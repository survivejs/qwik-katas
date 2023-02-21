# Qwik Kata 3 - Actions and loaders

The purpose of this kata is to get you acquainted with actions and loaders in Qwik. The kata assumes you have already completed [kata 2](kata-02.md).

## Learning aims

The idea here is to serialize our data model to the file system to demonstrate full stack capabilities of Qwik:

* Lifting local state so it can be managed from outside
* Writing and loading the inventory data from the file system or another external source

## Task

Complete the following:

1. Lift the inventory state from `Inventory` to its parent so that the inventory data can be managed centrally
2. Read and write the state of each inventory to the file system. The basic requirement here is that the system should persist its state even if you restart the application. Hint: Look up Qwik actions and loaders.
3. Optional - make the data model of the application more robust by introducing unique ids for items. You will have to refactor from simple strings to something more complex.
4. Optional - connect the persisted state to a database (SQLite or something more complex)
