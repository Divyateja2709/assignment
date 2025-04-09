import { rankWith, uiTypeIs } from '@jsonforms/core';

export const isCustomInput = rankWith(10, uischema => uischema?.options?.custom === 'custom-input');
