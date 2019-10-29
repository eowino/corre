#!/bin/bash

current_branch=$(git rev-parse --abbrev-ref HEAD)
restricted_branches=('master' 'develop' 'staging')

for branch in ${restricted_branches[@]}; do
  if [[ $current_branch == $branch ]]; then
    echo $'\n⚠️  Committing to a restricted branch ('$branch') is prohibited.'
    exit 1
  fi
done
