# Bug Reports

## BUG-001 Task title is not updated after editing

**Severity:** Major

**Priority:** High

### Preconditions
Application is opened.

### Steps
1. Select existing task.
2. Click Edit.
3. Change task title.
4. Click Save.

### Actual Result
Task title remains unchanged.

### Expected Result
Task title should be updated with entered value.

---

## BUG-002 Task remains in edit mode after changing completion status

**Severity:** Minor

**Priority:** Medium

### Preconditions
Application is opened.

### Steps
1. Click Edit on any task.
2. Without saving changes click task checkbox.

### Actual Result
Task changes status but remains in edit mode.

### Expected Result
Application should either:
- Exit edit mode automatically, or
- Prevent status modification while editing.