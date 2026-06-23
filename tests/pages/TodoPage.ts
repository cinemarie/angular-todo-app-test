import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly taskInput: Locator;
  readonly addButton: Locator;
  readonly allFilter: Locator;
  readonly activeFilter: Locator;
  readonly completedFilter: Locator;
  readonly taskItems: Locator;

  constructor(page: Page) {
    this.page = page;

    this.taskInput = page.getByPlaceholder('What needs to be done?');
    this.addButton = page.getByRole('button', { name: 'Add' });

    this.allFilter = page.getByRole('button', { name: 'All' });
    this.activeFilter = page.getByRole('button', { name: 'Active' });
    this.completedFilter = page.getByRole('button', { name: 'Completed' });

    this.taskItems = page.locator('.task-item');
  }

  async open() {
    await this.page.goto('/');
  }

  async addTask(title: string) {
    await this.taskInput.fill(title);
    await this.addButton.click();
  }

  async expectTaskVisible(title: string) {
    await expect(this.page.getByText(title)).toBeVisible();
  }
}