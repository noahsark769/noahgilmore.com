---
name: remove-whitespace
description: Remove all whitespace including tabs, newlines, and extra spaces from user-provided text.
metadata:
  homepage: https://noahgilmore.com/edge-skills/remove-whitespace
---

# Remove Whitespace

This skill removes all whitespace characters (spaces, tabs, newlines, carriage returns) from text provided by the user.

## Examples

* "Remove all whitespace from this text: Hello   World"
* "Strip whitespace from: line one\nline two\ttabbed"
* "Clean up this text by removing all spaces and newlines"

## Instructions

Call the `run_js` tool with the following exact parameters:
- data: A JSON string with the following fields
  - text: the input text from which to remove all whitespace characters.

DO NOT use any other tool, DO NOT call `run_intent`.

Return the cleaned text result to the user.
