#!/usr/bin/env bash
# Usage: upsert-pr-comment.sh <pr-number> <markdown-file>
# Creates the logo preview comment, or edits it if one already exists, so
# new pushes to the PR update a single comment instead of piling up.
set -euo pipefail
pr="$1"
file="$2"
marker="<!-- svgl-logo-preview -->"
body="$(printf '%s\n%s' "$marker" "$(cat "$file")")"

id=$(gh api "repos/$GITHUB_REPOSITORY/issues/$pr/comments" --paginate \
  --jq ".[] | select(.body | startswith(\"$marker\")) | .id" | head -n1)

if [ -n "$id" ]; then
  gh api -X PATCH "repos/$GITHUB_REPOSITORY/issues/comments/$id" -f body="$body" >/dev/null
else
  gh api -X POST "repos/$GITHUB_REPOSITORY/issues/$pr/comments" -f body="$body" >/dev/null
fi
