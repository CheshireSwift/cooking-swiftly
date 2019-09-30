import React from 'react';
import Markdown from 'react-markdown';

const recipe = `
# Delicious Hippo Cheekies

## Ingredients

Test
`;

export const RecipeViewer = ({ recipeId }: { recipeId: number }) => (
  <article>
    <Markdown source={recipe} />
  </article>
);
export default RecipeViewer;
