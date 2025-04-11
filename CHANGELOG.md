# 📋 Changelog

## [v1.0.0] - 2025-04-11

### ✨ Added

-   Implemented full CRUD for `books` module:
    -   Create, Read (all & detail), Update, Delete
-   Added DTOs for input validation
-   Slug generation with uniqueness handling
-   Pagination and search query on get all books
-   Custom error handler integration
-   Standardized API response format

### 🔧 Changed

-   Service layer now includes ID/slug existence checking before update/delete
-   Controller responses now wrapped with `handleResponse` and `handleError`

### 🛡 Security

-   CORS middleware (Hono-style) added
-   Added custom headers for basic HTTP security

---
