import { test, expect } from '@playwright/test';
import { TodoPage } from './Pages/TodoPage';

test.describe('Angular Todo App', () => {

  test('should load task list', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.open();

    await expect(todoPage.taskItems.first()).toBeVisible();
  });

  test('should add new task', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.open();

    const title = `Task ${Date.now()}`;

    await todoPage.addTask(title);

    await todoPage.expectTaskVisible(title);
  });

});