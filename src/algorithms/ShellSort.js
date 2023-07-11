import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  createRange,
  createKey
} from './helpers';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const cppCodeSnippet = `
#include <iostream>
using namespace std;

void shellSort(int arr[], int size) {
    // Start with a large gap and reduce it over iterations
    for (int gap = size / 2; gap > 0; gap /= 2) {
        // Perform insertion sort within the current gap
        for (int i = gap; i < size; i++) {
            int temp = arr[i];
            int j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
}
`;

const ShellSort = (nums) => {
  const trace = newTrace(nums);

  for (
    let gap = Math.floor(nums.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let j = gap; j < nums.length; j++) {
      for (let i = j - gap; i >= 0; i -= gap) {
        addToTrace(trace, nums, [], [i, i + gap]);
        if (nums[i + gap] < nums[i]) {
          addToTrace(trace, nums, [], [], [i, i + gap]);
          swap(nums, i, i + gap);
          addToTrace(trace, nums, [], [], [i, i + gap]);
        } else {
          break;
        }
      }
    }
  }

  addToTrace(trace, nums, createRange(0, nums.length));
  return trace;
};

export const ShellSortKey = createKey('Comparing', 'Swapping');

export const ShellSortDesc = {
  title: 'Shell Sort',
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Shellsort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shell Sort
        </a>
        , also know as Shell's method is a generalization of insertion
        sort where elements <em>gap</em> distance apart are compared
        rather than adjacent elements. The method starts by sorting
        pairs of elements far apart from each other, then progressively
        reducing the gap between elements to be compared. Starting with
        far apart elements, it can move some out-of-place elements into
        position faster than a simple nearest neighbor exchange. The
        running time of Shellsort is heavily dependent on the gap
        sequence it uses. For many practical variants, determining their
        time complexity remains an open problem. It is in-place sorting
        algorithm that is not stable.
      </p>
      <p><b>CODE</b></p>
      <SyntaxHighlighter language="cpp" style={oneDark}>
            {cppCodeSnippet}
        </SyntaxHighlighter>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em>
      <sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>
      <sup>3/2</sup>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: <span>O(1)</span>
};

export default ShellSort;
