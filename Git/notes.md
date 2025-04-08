# 🧠 Git Notes

## 📌 Normal Git Stuff

---

### 🔀 Branches

```bash
git branch                            # List local branches
git branch -a                         # List all (local + remote)
git checkout branch-name              # Switch to a branch
git checkout -b new-branch            # Create and switch to a new 
git push origin new-branch            # Push a new branch to GitHub
git branch -d branch-name             # Delete a local branch
git push origin --delete branch-name  # Delete a branch from GitHub
```

---

### 🔁 Sync with Remote

```bash
git fetch origin                   # Fetch latest changes (doesn’t change your files)
git pull                           # Pull changes (fetch + merge)
git status                         # Check sync status
git log origin/main..main          # See commits in local not in remote
git log main..origin/main          # See commits in remote not in local
```

---

### 🧬 Merge vs Rebase

```bash
git merge upstream/main            # Merge upstream into local
git rebase upstream/main           # Rebase local on top of upstream
```

---

### 🌲 Git Remotes

```bash
git remote -v                      # Show all remotes
git remote add upstream <url>     # Add upstream (main/original repo)
git fetch upstream                 # Fetch upstream changes
```

---

### 🛠 Forking & Contributing

```bash
git clone https://github.com/your-username/repo-name.git  # Clone your fork
git checkout -b my-feature                                # Create new feature branch
git push origin my-feature                                # Push changes to your fork
```

Open a **Pull Request** on GitHub to propose your changes.

---

### ⚙️ Extra Commands

```bash
git push origin main               # Push to remote
git checkout .                     # Discard changes in files
git stash                          # Temporarily stash changes
git stash pop                      # Reapply stashed changes
```

---

📁 *Keep updating this file as you learn more!*