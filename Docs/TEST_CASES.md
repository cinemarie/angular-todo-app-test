# Test Cases

## TC-001 Add new task

**Preconditions:** Application is opened

**Steps:**
1. Enter "New task" into the input field
2. Click Add

**Expected Result:**
- New task appears at the top of the list
- Task is displayed as Active

---

## TC-002 Add task using Enter key

**Preconditions:** Application is opened

**Steps:**
1. Enter task title
2. Press Enter

**Expected Result:**
- Task is created successfully

---

## TC-003 Prevent creation of empty task

**Preconditions:** Application is opened

**Steps:**
1. Leave input empty
2. Click Add

**Expected Result:**
- Task is not created

---

## TC-004 Complete task

**Preconditions:** Existing active task

**Steps:**
1. Click task checkbox

**Expected Result:**
- Task is marked as completed
- Text becomes crossed out

---

## TC-005 Edit task

**Preconditions:** Existing task

**Steps:**
1. Click Edit
2. Change task title
3. Click Save

**Expected Result:**
- Updated title is displayed

---

## TC-006 Delete task

**Preconditions:** Existing task

**Steps:**
1. Click Delete

**Expected Result:**
- Task disappears from the list

---

## TC-007 Filter Active tasks

**Preconditions:** List contains active and completed tasks

**Steps:**
1. Click Active filter

**Expected Result:**
- Only active tasks are displayed

---

## TC-008 Filter Completed tasks

**Preconditions:** List contains active and completed tasks

**Steps:**
1. Click Completed filter

**Expected Result:**
- Only completed tasks are displayed

---

## TC-009 Verify generated task ID

**Preconditions:** Application is opened

**Steps:**
1. Create new task

**Expected Result:**
- Task is returned with generated server ID

---

## TC-010 Verify persistence after page refresh

**Preconditions:** New task was created

**Steps:**
1. Create task
2. Refresh page

**Expected Result:**
- Created task disappears because JSONPlaceholder does not persist changes