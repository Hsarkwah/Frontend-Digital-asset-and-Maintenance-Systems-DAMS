# Contributing Guide

## Table of Contents
1. [Commit Message Guidelines](#commit-message-guidelines)
2. [Code Style Guidelines](#code-style-guidelines)
3. [Commenting Guidelines](#commenting-guidelines)
4. [Pull Request Process](#pull-request-process)

## Commit Message Guidelines
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally
- **Type**: Use types such as `feat` (feature), `fix` (bug fix), `docs` (documentation), `style` (formatting, missing semicolons, etc.), `refactor`, `test`, `chore`.
- **Subject**: The subject contains a short description of the change.
- **Body**: The body provides additional details about the change. It's optional but recommended for complex changes.
- **Footer**: The footer is used for referencing issues or breaking changes.

Examples:
```
feat: add user authentication

Added JWT-based authentication to the user login endpoint.
This ensures that users can securely log in and maintain sessions.

BREAKING CHANGE: Updated the login endpoint to require JWT.
```

```
fix: resolve null pointer exception in user service

Fixed a bug causing a null pointer exception when fetching user details.
```

```
docs: update README with setup instructions

Added detailed setup instructions to the README file to help new developers get started quickly.
```


## Code Style Guidelines

### General Guidelines
- **Indentation**: Use 2 spaces for indentation.
- **Quotes**: Use single quotes for strings.
- **Line Length**: Limit lines to 80 characters.
- **Naming**: Use camelCase for variables and functions, PascalCase for classes and React components.

### Example Code

```javascript
// Good example
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Bad example
const fetch_data = async function() {
  try {
    let response = await fetch('/api/data')
    let data = await response.json()
    return data
  } catch (error) {
    console.log('Error fetching data:', error)
  }
}
```


## Commenting Guidelines

- Use JSDoc for documenting functions and classes.
- Write comments in complete sentences.
- Keep comments up-to-date with code changes.

### JSDoc Example

```javascript
/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}

// Fetch user data from the API
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error if the fetch fails
    console.error('Error fetching user data:', error);
  }
};
```



### 4. Pull Request Process

**File: `CONTRIBUTING.md`**

```markdown
## Pull Request Process

1. **Ensure Tests Pass**: Make sure all tests pass before submitting a pull request.
2. **Update Documentation**: If applicable, update the README and other documentation files with details of the changes.
3. **Descriptive Title and Description**: Use a descriptive title and provide a detailed description of the changes.
4. **Link to Issues**: Reference related issues using `#issue_number`.
5. **Request Review**: Request a review from at least one other team member.

### Example Pull Request Description

Description
This PR adds a new feature for user authentication using JWT. The login endpoint now accepts email and password, and returns a JWT token upon successful authentication.

Changes
Added JWT authentication to the login endpoint
Updated user model to include password hashing
Updated tests for the login endpoint
Related Issues
Closes #45

Checklist
 All tests are passing
 Documentation has been updated
 A reviewer has been assigned
```
