import { useState } from "react";
import { Icon } from "./Icon";

const GitCheatSheet = () => {
  const [copiedCmd, setCopiedCmd] = useState(null);

  const copyToClipboard = (cmd) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const sections = [
    {
      title: "Setup",
      icon: "settings",
      color: "purple",
      commands: [
        {
          cmd: 'git config --global user.name "[name]"',
          desc: "Set name attached to commits",
        },
        {
          cmd: 'git config --global user.email "[email]"',
          desc: "Set email attached to commits",
        },
        {
          cmd: "git config --global color.ui auto",
          desc: "Enable colorized output",
        },
        { cmd: "git config --list", desc: "List all configuration" },
      ],
    },
    {
      title: "Setup & Init",
      icon: "folder-plus",
      color: "blue",
      commands: [
        { cmd: "git init", desc: "Initialize a new local repository" },
        {
          cmd: "git init [project-name]",
          desc: "Create new local repo with name",
        },
        { cmd: "git clone [url]", desc: "Clone a repository from remote" },
        { cmd: "git clone [url] [folder]", desc: "Clone into specific folder" },
      ],
    },
    {
      title: "Stage & Snapshot",
      icon: "camera",
      color: "green",
      commands: [
        { cmd: "git status", desc: "Show modified files in working directory" },
        { cmd: "git add [file]", desc: "Stage a file for next commit" },
        { cmd: "git add .", desc: "Stage all changes in directory" },
        { cmd: "git add -p", desc: "Stage changes interactively" },
        { cmd: "git reset [file]", desc: "Unstage file, keep changes" },
        { cmd: "git reset --hard", desc: "Discard all local changes" },
        { cmd: "git diff", desc: "Show unstaged changes" },
        { cmd: "git diff --staged", desc: "Show staged changes" },
        { cmd: 'git commit -m "[message]"', desc: "Commit staged content" },
        { cmd: 'git commit -am "[msg]"', desc: "Stage all & commit" },
        { cmd: "git commit --amend", desc: "Modify the last commit" },
      ],
    },
    {
      title: "Branch & Merge",
      icon: "git-branch",
      color: "orange",
      commands: [
        { cmd: "git branch", desc: "List all local branches" },
        { cmd: "git branch -a", desc: "List all branches (local + remote)" },
        { cmd: "git branch [name]", desc: "Create new branch" },
        { cmd: "git branch -d [name]", desc: "Delete a branch" },
        { cmd: "git branch -m [old] [new]", desc: "Rename a branch" },
        { cmd: "git checkout [branch]", desc: "Switch to branch" },
        { cmd: "git checkout -b [name]", desc: "Create & switch to branch" },
        { cmd: "git switch [branch]", desc: "Switch to branch (modern)" },
        { cmd: "git switch -c [name]", desc: "Create & switch (modern)" },
        { cmd: "git merge [branch]", desc: "Merge branch into current" },
        { cmd: "git merge --no-ff [branch]", desc: "Merge with commit" },
        { cmd: "git rebase [branch]", desc: "Rebase current onto branch" },
      ],
    },
    {
      title: "Inspect & Compare",
      icon: "search",
      color: "cyan",
      commands: [
        { cmd: "git log", desc: "Show commit history" },
        { cmd: "git log --oneline", desc: "Compact commit history" },
        { cmd: "git log --graph --all", desc: "Visual branch history" },
        { cmd: "git log -p [file]", desc: "Show changes over time for file" },
        { cmd: "git log --stat", desc: "Show commit statistics" },
        { cmd: "git show [commit]", desc: "Show commit details" },
        { cmd: "git diff [branchA] [branchB]", desc: "Compare two branches" },
        { cmd: "git blame [file]", desc: "Show who changed each line" },
        { cmd: "git reflog", desc: "Show reference log (recovery)" },
      ],
    },
    {
      title: "Share & Update",
      icon: "cloud",
      color: "blue",
      commands: [
        { cmd: "git remote -v", desc: "List remote connections" },
        { cmd: "git remote add [name] [url]", desc: "Add a remote repository" },
        { cmd: "git remote remove [name]", desc: "Remove a remote" },
        { cmd: "git fetch [remote]", desc: "Download remote changes" },
        { cmd: "git fetch --all", desc: "Fetch from all remotes" },
        { cmd: "git pull", desc: "Fetch and merge remote changes" },
        { cmd: "git pull --rebase", desc: "Fetch and rebase" },
        { cmd: "git push [remote] [branch]", desc: "Push commits to remote" },
        { cmd: "git push -u origin [branch]", desc: "Push & set upstream" },
        { cmd: "git push --force", desc: "Force push (use carefully!)" },
        { cmd: "git push --tags", desc: "Push all tags to remote" },
      ],
    },
    {
      title: "Tracking Changes",
      icon: "file-text",
      color: "yellow",
      commands: [
        { cmd: "git rm [file]", desc: "Remove file & stage deletion" },
        { cmd: "git rm --cached [file]", desc: "Untrack file, keep locally" },
        { cmd: "git mv [old] [new]", desc: "Move or rename file" },
        { cmd: "git restore [file]", desc: "Discard changes in file" },
        { cmd: "git restore --staged [file]", desc: "Unstage file" },
        { cmd: "git clean -fd", desc: "Remove untracked files" },
      ],
    },
    {
      title: "Stash",
      icon: "archive",
      color: "purple",
      commands: [
        { cmd: "git stash", desc: "Stash current changes" },
        { cmd: 'git stash save "[message]"', desc: "Stash with description" },
        { cmd: "git stash list", desc: "List all stashes" },
        { cmd: "git stash pop", desc: "Apply & remove latest stash" },
        { cmd: "git stash apply", desc: "Apply stash, keep in list" },
        { cmd: "git stash drop", desc: "Remove latest stash" },
        { cmd: "git stash clear", desc: "Remove all stashes" },
      ],
    },
    {
      title: "Rewrite History",
      icon: "rotate-ccw",
      color: "red",
      commands: [
        { cmd: "git reset --soft HEAD~1", desc: "Undo commit, keep staged" },
        { cmd: "git reset --mixed HEAD~1", desc: "Undo commit, unstage" },
        { cmd: "git reset --hard HEAD~1", desc: "Undo commit, discard all" },
        { cmd: "git revert [commit]", desc: "Create undo commit" },
        { cmd: "git rebase -i HEAD~[n]", desc: "Interactive rebase" },
        { cmd: "git cherry-pick [commit]", desc: "Apply specific commit" },
      ],
    },
    {
      title: "Tags",
      icon: "tag",
      color: "green",
      commands: [
        { cmd: "git tag", desc: "List all tags" },
        { cmd: "git tag [name]", desc: "Create lightweight tag" },
        { cmd: 'git tag -a [name] -m "[msg]"', desc: "Create annotated tag" },
        { cmd: "git tag -d [name]", desc: "Delete a tag" },
        { cmd: "git push origin [tag]", desc: "Push tag to remote" },
        { cmd: "git checkout [tag]", desc: "Checkout a tag" },
      ],
    },
    {
      title: "Advanced",
      icon: "zap",
      color: "orange",
      commands: [
        { cmd: "git bisect start", desc: "Start binary search for bug" },
        { cmd: "git bisect good/bad", desc: "Mark commit as good/bad" },
        { cmd: "git submodule add [url]", desc: "Add a submodule" },
        { cmd: "git submodule update --init", desc: "Initialize submodules" },
        {
          cmd: "git worktree add [path] [branch]",
          desc: "Add linked worktree",
        },
        {
          cmd: "git archive --format=zip HEAD",
          desc: "Create archive of HEAD",
        },
      ],
    },
    {
      title: ".gitignore Patterns",
      icon: "eye-off",
      color: "gray",
      commands: [
        { cmd: "*.log", desc: "Ignore all .log files" },
        { cmd: "node_modules/", desc: "Ignore entire directory" },
        { cmd: "!important.log", desc: "Don't ignore this file" },
        { cmd: "**/temp", desc: "Ignore temp in any directory" },
        { cmd: "*.py[cod]", desc: "Ignore .pyc, .pyo, .pyd files" },
        { cmd: ".env*", desc: "Ignore all .env files" },
      ],
    },
  ];

  const quickRef = [
    { term: "HEAD", desc: "Current branch/commit pointer" },
    { term: "HEAD~1", desc: "One commit before HEAD" },
    { term: "HEAD^", desc: "Parent of HEAD" },
    { term: "origin", desc: "Default remote name" },
    { term: "main/master", desc: "Primary branch" },
    { term: "@{u}", desc: "Upstream branch" },
    { term: "SHA-1", desc: "40-char commit hash" },
    { term: "HEAD@{n}", desc: "nth prior HEAD position" },
  ];

  const colorClasses = {
    purple: {
      badge: "bg-purple-subtle text-purple",
      header: "text-purple",
      border: "border-purple/20",
    },
    blue: {
      badge: "bg-blue-subtle text-blue",
      header: "text-blue",
      border: "border-blue/20",
    },
    green: {
      badge: "bg-green-subtle text-green",
      header: "text-green",
      border: "border-green/20",
    },
    orange: {
      badge: "bg-orange-subtle text-orange",
      header: "text-orange",
      border: "border-orange/20",
    },
    cyan: {
      badge: "bg-cyan-subtle text-cyan",
      header: "text-cyan",
      border: "border-cyan/20",
    },
    yellow: {
      badge: "bg-yellow-subtle text-yellow",
      header: "text-yellow",
      border: "border-yellow/20",
    },
    red: {
      badge: "bg-red-subtle text-red",
      header: "text-red",
      border: "border-red/20",
    },
    gray: {
      badge: "bg-gray-subtle text-gray",
      header: "text-gray",
      border: "border-gray/20",
    },
  };

  return (
    <div className="min-h-screen bg-bg-primary px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 pt-28 md:pt-32 print:p-4 print:pt-4">
      {/* Header */}
      <header className="max-w-[1800px] mx-auto mb-8 print:mb-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-coral/20 blur-xl rounded-full" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-coral/20 to-accent-cyan/20 border border-border-default flex items-center justify-center print:w-10 print:h-10">
                <Icon
                  name="git-branch"
                  className="w-7 h-7 text-accent-coral print:w-5 print:h-5"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary print:text-xl tracking-tight">
                Git Cheat Sheet
              </h1>
              <p className="text-sm text-text-secondary mt-0.5">
                Complete reference for Git commands
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 print:hidden">
            <a
              href="https://git-scm.com/doc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors px-4 py-2 rounded-lg bg-bg-secondary border border-border-default hover:border-border-default/50"
            >
              <Icon name="book-open" className="w-4 h-4" />
              <span>Docs</span>
            </a>
            <div className="text-xs text-text-muted px-4 py-2 bg-bg-secondary rounded-lg border border-border-default">
              Press{" "}
              <kbd className="mx-1 px-1.5 py-0.5 bg-bg-tertiary rounded text-text-secondary">
                Ctrl
              </kbd>
              +
              <kbd className="px-1.5 py-0.5 bg-bg-tertiary rounded text-text-secondary">
                P
              </kbd>{" "}
              to print
            </div>
          </div>
        </div>
      </header>

      {/* Quick Reference Bar */}
      <div className="max-w-[1800px] mx-auto mb-8 print:mb-4">
        <div className="bg-bg-secondary/50 backdrop-blur-sm border border-border-default rounded-2xl p-5 print:p-3 print:rounded-lg">
          <div className="flex items-center gap-2 mb-4 print:mb-2">
            <Icon name="terminal" className="w-4 h-4 text-accent-cyan" />
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider print:text-[10px]">
              Quick Reference
            </h3>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 print:gap-x-4 print:gap-y-1">
            {quickRef.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm print:text-[10px]"
              >
                <code className="px-2 py-1 bg-bg-tertiary/80 rounded-md text-accent-cyan font-mono text-xs print:text-[9px] print:px-1 border border-border-subtle">
                  {item.term}
                </code>
                <span className="text-text-secondary">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <main className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 print:grid-cols-4 print:gap-3">
          {sections.map((section, idx) => (
            <section
              key={idx}
              className={`bg-bg-secondary/50 backdrop-blur-sm border border-border-default rounded-2xl overflow-hidden print:rounded-lg print:break-inside-avoid hover:border-border-default/80 transition-all duration-300 ${colorClasses[section.color].border}`}
            >
              {/* Section Header */}
              <div className="px-4 py-3 border-b border-border-subtle flex items-center gap-3 print:px-3 print:py-2">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center print:w-5 print:h-5 ${colorClasses[section.color].badge}`}
                >
                  <Icon
                    name={section.icon}
                    className="w-4 h-4 print:w-3 print:h-3"
                  />
                </div>
                <h2
                  className={`font-semibold text-sm print:text-[10px] ${colorClasses[section.color].header}`}
                >
                  {section.title}
                </h2>
              </div>

              {/* Commands */}
              <div className="divide-y divide-border-subtle">
                {section.commands.map((item, i) => (
                  <div
                    key={i}
                    className="group px-4 py-2.5 hover:bg-bg-tertiary/30 transition-colors print:px-3 print:py-1.5 cursor-pointer"
                    onClick={() => copyToClipboard(item.cmd)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <code className="block text-xs font-mono text-accent-coral break-all print:text-[8px] print:leading-tight leading-relaxed">
                        {item.cmd}
                      </code>
                      <button
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-bg-elevated rounded print:hidden flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(item.cmd);
                        }}
                        title="Copy command"
                      >
                        <Icon
                          name={copiedCmd === item.cmd ? "check" : "copy"}
                          className={`w-3.5 h-3.5 ${copiedCmd === item.cmd ? "text-green" : "text-text-muted"}`}
                        />
                      </button>
                    </div>
                    <p className="text-[11px] text-text-muted leading-snug mt-1 print:text-[7px] print:leading-tight print:mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[1800px] mx-auto mt-10 pt-6 border-t border-border-default print:mt-4 print:pt-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted print:text-[8px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent-coral/10 flex items-center justify-center">
              <Icon name="git-branch" className="w-4 h-4 text-accent-coral" />
            </div>
            <span className="text-text-secondary">Git Cheat Sheet</span>
          </div>
          <div className="flex items-center gap-6 print:gap-3">
            <a
              href="https://git-scm.com/doc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-secondary transition-colors"
            >
              <Icon name="book-open" className="w-4 h-4 print:w-3 print:h-3" />
              <span>git-scm.com/doc</span>
            </a>
            <a
              href="https://docs.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-secondary transition-colors"
            >
              <Icon name="github" className="w-4 h-4 print:w-3 print:h-3" />
              <span>GitHub Docs</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GitCheatSheet;
