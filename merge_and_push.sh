#!/bin/bash

# Define variables
MAIN_BRANCH="main"
FEATURE_BRANCH="$1"  # Get the feature branch name from the first script argument

# Ensure a feature branch name is provided
if [ -z "$FEATURE_BRANCH" ]; then
  echo "Usage: ./merge_and_push.sh <feature-branch>"
  exit 1
fi

# Fetch the latest changes from remote
echo "Fetching latest changes..."
git fetch origin

# Switch to main branch
echo "Switching to $MAIN_BRANCH..."
git checkout $MAIN_BRANCH

# Pull latest changes from main
echo "Updating $MAIN_BRANCH with latest changes..."
git pull origin $MAIN_BRANCH

# Merge the feature branch into main
echo "Merging $FEATURE_BRANCH into $MAIN_BRANCH..."
git merge $FEATURE_BRANCH --no-ff

# Push the merged changes to remote main
echo "Pushing changes to remote $MAIN_BRANCH..."
git push origin $MAIN_BRANCH

echo "Merge and push completed successfully!"
