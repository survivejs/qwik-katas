# Qwik Kata 3 - Lifecycle

The purpose of this kata is to get you going with lifecycle of Qwik and understand how they behave in browser and server environments since Qwik covers both. The kata assumes you have already completed [kata 2](kata-02.md) so make sure you have done that already.

## Learning aims

The idea here is to understand the following:

* When and why to use Qwik lifecycle
* How to derive state and why that is preferable when possible
* Trigger lifecycle events when the user sees the component and understand the potential of the approach

## Task

Complete the following:

1. To make the client more robust against network errors, serialize the application state to `localStorage` using the suitable lifecycle method
2. Restore the application state from `localStorage` using the suitable lifecycle method if the network is not available
3. Optional - Add the concept of version to data to understand if it's out of date. Conversely, allow syncing of user-only data to the backend if it's newer than what's in the backend and consider the implications of doing this
4. Add optional images to the inventory items and render them only when they are visible to the user. You are **not** allowed to use the `lazy` attribute of the `img` tag for this task and instead you have to leverage Qwik features since we're training to use Qwik here.
