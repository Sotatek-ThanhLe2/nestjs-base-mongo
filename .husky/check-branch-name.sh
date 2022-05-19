#!/usr/bin/env bash
local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

develop_branch='develop'
develop_message="Denied commit and push to develop branch. Please use check out and create merge request"
if [[ $local_branch_name =~ $develop_branch ]]; then
  echo "*****************************"
  echo "$develop_message"
  echo "*****************************"
  exit 1
fi


master_branch='master'
master_message="Denied commit and push to master branch. Please use check out and create merge request"
if [[ $local_branch_name =~ $master_branch ]]; then
  echo "*****************************"
  echo "$master_message"
  echo "*****************************"
  exit 1
fi


production_branch='production'
production_message="Denied commit and push to production branch. Please use check out and create merge request"
if [[ $local_branch_name =~ $production_branch ]]; then
  echo "*****************************"
  echo "$production_message"
  echo "*****************************"
  exit 1
fi

exit 0
