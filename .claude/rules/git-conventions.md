---
description: Branching, commit message, and pull request conventions for this repository
---
# Git Conventions

## Branching — REQUIRED

**Never commit directly to `main`.** Every change — features, fixes, docs, chores — must be developed on a dedicated branch and merged via a pull request.

### Branch Naming

```
feature/add-job-filter-sidebar         # New features
fix/employer-route-redirect-loop       # Bug fixes
docs/update-readme                     # Documentation only
chore/upgrade-dependencies             # Maintenance, tooling
refactor/simplify-auth-context         # Code refactoring
style/mobile-job-card-spacing          # Visual/style changes
```

### Workflow

1. `git checkout -b <type>/<short-description>` from an up-to-date `main`
2. Immediately push the branch to remote: `git push -u origin <type>/<short-description>`
3. Make commits on the branch
4. Push and open a PR targeting `main`
5. Merge only after review; delete the branch after merging

## Commit Messages

Follow **Conventional Commits**:

```
feat: add saved jobs count to navbar
fix: correct role guard on employer routes
docs: update README with localStorage keys
chore: upgrade react-router to v7.8
refactor: extract job card into reusable component
style: fix spacing on mobile job list
```

- Use present tense, lowercase, no period at the end
- Keep the subject line under 72 characters
- Add a body for non-obvious changes

## Pull Requests — REQUIRED

**All changes to `main` must go through a PR.** Direct pushes to `main` are not allowed.

- PR title must match the commit message format
- Include a summary and test plan in the PR description
- Target `main` as the base branch
- Keep PRs focused — one feature or fix per PR
