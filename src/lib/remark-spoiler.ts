import { visit } from 'unist-util-visit';
import type { Root, Text, Parent } from 'mdast';
import type { Plugin } from 'unified';

interface SpoilerNode extends Parent {
  type: 'spoiler';
  children: Array<Text>;
  data?: {
    hName?: string;
    hProperties?: Record<string, string | string[]>;
  };
}

/**
 * Remark plugin to parse Discord-style spoiler tags (||text||)
 * and convert them to interactive HTML elements
 */
const remarkSpoiler: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || index === null || index === undefined) {
        return;
      }

      const value = node.value;
      const spoilerRegex = /\|\|(.+?)\|\|/g;

      if (!spoilerRegex.test(value)) {
        return;
      }

      // Reset regex
      spoilerRegex.lastIndex = 0;

      const newNodes: Array<Text | SpoilerNode> = [];
      let lastIndex = 0;
      let match;

      while ((match = spoilerRegex.exec(value)) !== null) {
        // Add text before spoiler
        if (match.index > lastIndex) {
          newNodes.push({
            type: 'text',
            value: value.slice(lastIndex, match.index),
          });
        }

        // Add spoiler node
        const spoilerNode: SpoilerNode = {
          type: 'spoiler',
          children: [
            {
              type: 'text',
              value: match[1],
            },
          ],
          data: {
            hName: 'span',
            hProperties: {
              className: ['spoiler'],
            },
          },
        };

        newNodes.push(spoilerNode);
        lastIndex = spoilerRegex.lastIndex;
      }

      // Add remaining text
      if (lastIndex < value.length) {
        newNodes.push({
          type: 'text',
          value: value.slice(lastIndex),
        });
      }

      // Replace the original node with new nodes
      (parent.children as Array<Text | SpoilerNode>).splice(index, 1, ...newNodes);
      return index + newNodes.length;
    });
  };
};

export default remarkSpoiler;
