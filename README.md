# Recruitment Task

I used the `mande` library, a simple and lightweight wrapper around fetch. `mande` reduce boilerplate code while improving maintainability and readability.

## Error Handling Approach

In this case, error handling is straightforward. I implemented a wrapper for toast notifications and introduced a store that manages all toasts. The store handles adding and removing notifications. `ToastContainer` component is responsible for rendering notifications. This approach keeps the error-handling logic decoupled from individual API calls.
