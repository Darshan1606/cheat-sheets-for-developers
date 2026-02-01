import { Icon } from "./Icon";
import { useCopyWithAnalytics } from "../hooks/useCopyWithAnalytics";

const LinuxCheatSheet = () => {
  const { copiedCmd, copyToClipboard } = useCopyWithAnalytics("linux", "DevOps");

  const sections = [
    {
      title: "File Navigation",
      icon: "folder-open",
      color: "blue",
      commands: [
        { cmd: "pwd", desc: "Print working directory" },
        { cmd: "ls", desc: "List directory contents" },
        { cmd: "ls -la", desc: "List all with details" },
        { cmd: "ls -lh", desc: "List with human-readable sizes" },
        { cmd: "cd /path", desc: "Change directory" },
        { cmd: "cd ~", desc: "Go to home directory" },
        { cmd: "cd ..", desc: "Go up one level" },
        { cmd: "cd -", desc: "Go to previous directory" },
        { cmd: "tree", desc: "Show directory tree" },
        { cmd: "find . -name \"*.txt\"", desc: "Find files by name" },
        { cmd: "locate filename", desc: "Fast file search (indexed)" },
        { cmd: "which command", desc: "Show command path" },
      ],
    },
    {
      title: "File Operations",
      icon: "file-text",
      color: "green",
      commands: [
        { cmd: "touch file.txt", desc: "Create empty file" },
        { cmd: "mkdir dirname", desc: "Create directory" },
        { cmd: "mkdir -p path/to/dir", desc: "Create nested directories" },
        { cmd: "cp source dest", desc: "Copy file" },
        { cmd: "cp -r source dest", desc: "Copy directory recursively" },
        { cmd: "mv source dest", desc: "Move or rename" },
        { cmd: "rm file", desc: "Remove file" },
        { cmd: "rm -rf dir", desc: "Remove directory recursively" },
        { cmd: "rm -i file", desc: "Remove with confirmation" },
        { cmd: "ln -s target link", desc: "Create symbolic link" },
        { cmd: "ln target link", desc: "Create hard link" },
      ],
    },
    {
      title: "File Viewing & Editing",
      icon: "eye-off",
      color: "purple",
      commands: [
        { cmd: "cat file", desc: "Display file contents" },
        { cmd: "less file", desc: "View with pagination" },
        { cmd: "more file", desc: "View page by page" },
        { cmd: "head -n 10 file", desc: "First 10 lines" },
        { cmd: "tail -n 10 file", desc: "Last 10 lines" },
        { cmd: "tail -f file", desc: "Follow file updates (logs)" },
        { cmd: "nano file", desc: "Simple text editor" },
        { cmd: "vim file", desc: "Advanced text editor" },
        { cmd: "diff file1 file2", desc: "Compare files" },
        { cmd: "wc -l file", desc: "Count lines" },
        { cmd: "wc -w file", desc: "Count words" },
      ],
    },
    {
      title: "Text Processing",
      icon: "filter",
      color: "orange",
      commands: [
        { cmd: "grep \"pattern\" file", desc: "Search for pattern" },
        { cmd: "grep -r \"pattern\" dir", desc: "Recursive search" },
        { cmd: "grep -i \"pattern\" file", desc: "Case insensitive" },
        { cmd: "grep -v \"pattern\" file", desc: "Invert match (exclude)" },
        { cmd: "grep -n \"pattern\" file", desc: "Show line numbers" },
        { cmd: "sed 's/old/new/g' file", desc: "Replace text globally" },
        { cmd: "sed -i 's/old/new/g' file", desc: "Replace in-place" },
        { cmd: "awk '{print $1}' file", desc: "Print first column" },
        { cmd: "awk -F',' '{print $2}' file", desc: "Custom delimiter" },
        { cmd: "cut -d',' -f1 file", desc: "Cut by delimiter" },
        { cmd: "sort file", desc: "Sort lines alphabetically" },
        { cmd: "sort -n file", desc: "Sort numerically" },
        { cmd: "uniq", desc: "Remove adjacent duplicates" },
        { cmd: "tr 'a-z' 'A-Z'", desc: "Translate to uppercase" },
      ],
    },
    {
      title: "File Permissions",
      icon: "shield",
      color: "cyan",
      commands: [
        { cmd: "chmod 755 file", desc: "Set rwxr-xr-x permissions" },
        { cmd: "chmod 644 file", desc: "Set rw-r--r-- permissions" },
        { cmd: "chmod +x file", desc: "Add execute permission" },
        { cmd: "chmod -w file", desc: "Remove write permission" },
        { cmd: "chmod -R 755 dir", desc: "Recursive permissions" },
        { cmd: "chown user file", desc: "Change owner" },
        { cmd: "chown user:group file", desc: "Change owner and group" },
        { cmd: "chown -R user dir", desc: "Recursive ownership" },
        { cmd: "chgrp group file", desc: "Change group" },
        { cmd: "umask 022", desc: "Set default permissions" },
        { cmd: "stat file", desc: "Show file status & permissions" },
      ],
    },
    {
      title: "Process Management",
      icon: "activity",
      color: "yellow",
      commands: [
        { cmd: "ps aux", desc: "List all processes" },
        { cmd: "ps aux | grep name", desc: "Find process by name" },
        { cmd: "top", desc: "Real-time process monitor" },
        { cmd: "htop", desc: "Interactive process viewer" },
        { cmd: "kill PID", desc: "Kill process by ID" },
        { cmd: "kill -9 PID", desc: "Force kill (SIGKILL)" },
        { cmd: "killall name", desc: "Kill all by name" },
        { cmd: "pkill pattern", desc: "Kill by pattern" },
        { cmd: "bg", desc: "Resume job in background" },
        { cmd: "fg", desc: "Bring job to foreground" },
        { cmd: "jobs", desc: "List background jobs" },
        { cmd: "nohup command &", desc: "Run immune to hangups" },
        { cmd: "Ctrl+Z", desc: "Suspend current process" },
        { cmd: "Ctrl+C", desc: "Terminate current process" },
      ],
    },
    {
      title: "System Information",
      icon: "cpu",
      color: "red",
      commands: [
        { cmd: "uname -a", desc: "Full system information" },
        { cmd: "hostname", desc: "Show hostname" },
        { cmd: "uptime", desc: "System uptime & load" },
        { cmd: "whoami", desc: "Current username" },
        { cmd: "id", desc: "User ID and groups" },
        { cmd: "df -h", desc: "Disk space usage" },
        { cmd: "du -sh dir", desc: "Directory size" },
        { cmd: "du -h --max-depth=1", desc: "Size of subdirectories" },
        { cmd: "free -h", desc: "Memory usage" },
        { cmd: "lscpu", desc: "CPU information" },
        { cmd: "lsblk", desc: "List block devices" },
        { cmd: "cat /etc/os-release", desc: "OS version info" },
        { cmd: "dmesg | tail", desc: "Kernel messages" },
      ],
    },
    {
      title: "Networking",
      icon: "globe",
      color: "blue",
      commands: [
        { cmd: "ping host", desc: "Test connectivity" },
        { cmd: "ping -c 4 host", desc: "Ping 4 times only" },
        { cmd: "curl url", desc: "Fetch URL content" },
        { cmd: "curl -O url", desc: "Download file" },
        { cmd: "wget url", desc: "Download file" },
        { cmd: "wget -r url", desc: "Recursive download" },
        { cmd: "ssh user@host", desc: "SSH connection" },
        { cmd: "ssh -p 22 user@host", desc: "SSH with port" },
        { cmd: "scp file user@host:/path", desc: "Secure copy to remote" },
        { cmd: "scp user@host:/path file", desc: "Secure copy from remote" },
        { cmd: "rsync -av src dest", desc: "Sync files efficiently" },
        { cmd: "netstat -tulpn", desc: "Network connections" },
        { cmd: "ss -tulpn", desc: "Socket statistics" },
        { cmd: "ip addr", desc: "Show IP addresses" },
        { cmd: "dig domain", desc: "DNS query" },
      ],
    },
    {
      title: "Archive & Compression",
      icon: "archive",
      color: "green",
      commands: [
        { cmd: "tar -cvf archive.tar files", desc: "Create tar archive" },
        { cmd: "tar -xvf archive.tar", desc: "Extract tar archive" },
        { cmd: "tar -czvf archive.tar.gz files", desc: "Create gzipped tar" },
        { cmd: "tar -xzvf archive.tar.gz", desc: "Extract gzipped tar" },
        { cmd: "tar -cjvf archive.tar.bz2 files", desc: "Create bzip2 tar" },
        { cmd: "tar -xjvf archive.tar.bz2", desc: "Extract bzip2 tar" },
        { cmd: "tar -tvf archive.tar", desc: "List tar contents" },
        { cmd: "gzip file", desc: "Compress with gzip" },
        { cmd: "gunzip file.gz", desc: "Decompress gzip" },
        { cmd: "zip archive.zip files", desc: "Create zip archive" },
        { cmd: "unzip archive.zip", desc: "Extract zip archive" },
        { cmd: "unzip -l archive.zip", desc: "List zip contents" },
      ],
    },
    {
      title: "User Management",
      icon: "users",
      color: "purple",
      commands: [
        { cmd: "useradd username", desc: "Create user" },
        { cmd: "useradd -m -s /bin/bash user", desc: "Create with home & shell" },
        { cmd: "userdel username", desc: "Delete user" },
        { cmd: "userdel -r username", desc: "Delete user & home dir" },
        { cmd: "passwd username", desc: "Change password" },
        { cmd: "usermod -aG group user", desc: "Add user to group" },
        { cmd: "groupadd groupname", desc: "Create group" },
        { cmd: "groupdel groupname", desc: "Delete group" },
        { cmd: "groups username", desc: "Show user groups" },
        { cmd: "su - username", desc: "Switch user" },
        { cmd: "sudo command", desc: "Run as root" },
        { cmd: "sudo -u user command", desc: "Run as specific user" },
        { cmd: "visudo", desc: "Edit sudoers file safely" },
      ],
    },
    {
      title: "Bash Variables",
      icon: "code",
      color: "orange",
      commands: [
        { cmd: "name=\"value\"", desc: "Set variable (no spaces!)" },
        { cmd: "echo $name", desc: "Use variable" },
        { cmd: "echo \"${name}_suffix\"", desc: "Variable in string" },
        { cmd: "readonly VAR=\"value\"", desc: "Constant variable" },
        { cmd: "export VAR=\"value\"", desc: "Environment variable" },
        { cmd: "unset VAR", desc: "Delete variable" },
        { cmd: "$0", desc: "Script name" },
        { cmd: "$1, $2, $3...", desc: "Positional arguments" },
        { cmd: "$#", desc: "Number of arguments" },
        { cmd: "$@", desc: "All arguments as array" },
        { cmd: "$*", desc: "All arguments as string" },
        { cmd: "$?", desc: "Last command exit status" },
        { cmd: "$$", desc: "Current process ID" },
        { cmd: "$!", desc: "Last background process ID" },
      ],
    },
    {
      title: "Bash Control Flow",
      icon: "git-branch",
      color: "cyan",
      commands: [
        { cmd: "if [ condition ]; then ... fi", desc: "If statement" },
        { cmd: "if [ -f file ]; then", desc: "Check file exists" },
        { cmd: "if [ -d dir ]; then", desc: "Check directory exists" },
        { cmd: "if [ -z \"$var\" ]; then", desc: "Check variable is empty" },
        { cmd: "if [ -n \"$var\" ]; then", desc: "Check variable is not empty" },
        { cmd: "if [ \"$a\" = \"$b\" ]; then", desc: "String comparison" },
        { cmd: "if [ $a -eq $b ]; then", desc: "Numeric equals" },
        { cmd: "if [ $a -lt $b ]; then", desc: "Numeric less than" },
        { cmd: "for i in 1 2 3; do ... done", desc: "For loop with list" },
        { cmd: "for ((i=0; i<10; i++)); do", desc: "C-style for loop" },
        { cmd: "for f in *.txt; do ... done", desc: "Loop over files" },
        { cmd: "while [ condition ]; do ... done", desc: "While loop" },
        { cmd: "case $var in ... esac", desc: "Case/switch statement" },
      ],
    },
    {
      title: "Bash Functions & Arrays",
      icon: "layers",
      color: "yellow",
      commands: [
        { cmd: "function name() { ... }", desc: "Define function" },
        { cmd: "name() { ... }", desc: "Short function syntax" },
        { cmd: "return 0", desc: "Return exit code (0-255)" },
        { cmd: "local var=\"value\"", desc: "Local variable in function" },
        { cmd: "arr=(a b c)", desc: "Define array" },
        { cmd: "${arr[0]}", desc: "Access first element" },
        { cmd: "${arr[@]}", desc: "All elements" },
        { cmd: "${#arr[@]}", desc: "Array length" },
        { cmd: "arr+=(d)", desc: "Append to array" },
        { cmd: "unset arr[1]", desc: "Remove element" },
        { cmd: "${arr[@]:1:2}", desc: "Slice array (start:length)" },
        { cmd: "declare -A map", desc: "Declare associative array" },
        { cmd: "map[key]=\"value\"", desc: "Set associative value" },
      ],
    },
    {
      title: "Bash String Operations",
      icon: "file-text",
      color: "red",
      commands: [
        { cmd: "${#string}", desc: "String length" },
        { cmd: "${string:0:5}", desc: "Substring (start:length)" },
        { cmd: "${string#pattern}", desc: "Remove shortest prefix" },
        { cmd: "${string##pattern}", desc: "Remove longest prefix" },
        { cmd: "${string%pattern}", desc: "Remove shortest suffix" },
        { cmd: "${string%%pattern}", desc: "Remove longest suffix" },
        { cmd: "${string/old/new}", desc: "Replace first occurrence" },
        { cmd: "${string//old/new}", desc: "Replace all occurrences" },
        { cmd: "${string,,}", desc: "Convert to lowercase" },
        { cmd: "${string^^}", desc: "Convert to uppercase" },
        { cmd: "${var:-default}", desc: "Default if unset" },
        { cmd: "${var:=default}", desc: "Set default if unset" },
        { cmd: "${var:+alternate}", desc: "Alternate if set" },
        { cmd: "${var:?error}", desc: "Error if unset" },
      ],
    },
    {
      title: "I/O & Redirection",
      icon: "arrow-up-down",
      color: "purple",
      commands: [
        { cmd: "command > file", desc: "Redirect stdout to file" },
        { cmd: "command >> file", desc: "Append stdout to file" },
        { cmd: "command 2> file", desc: "Redirect stderr to file" },
        { cmd: "command 2>&1", desc: "Redirect stderr to stdout" },
        { cmd: "command &> file", desc: "Redirect all output to file" },
        { cmd: "command < file", desc: "Input from file" },
        { cmd: "command1 | command2", desc: "Pipe output to next command" },
        { cmd: "command | tee file", desc: "Output to file and stdout" },
        { cmd: "command | xargs cmd2", desc: "Build commands from stdin" },
        { cmd: "read -p \"Prompt: \" var", desc: "Read user input" },
        { cmd: "read -s var", desc: "Read silently (passwords)" },
        { cmd: "<<EOF ... EOF", desc: "Here document (multiline input)" },
      ],
    },
    {
      title: "Advanced Commands",
      icon: "zap",
      color: "gray",
      commands: [
        { cmd: "crontab -e", desc: "Edit cron jobs" },
        { cmd: "crontab -l", desc: "List cron jobs" },
        { cmd: "* * * * * command", desc: "Cron: min hr day mon dow" },
        { cmd: "at time", desc: "Schedule one-time task" },
        { cmd: "alias ll='ls -la'", desc: "Create command alias" },
        { cmd: "unalias ll", desc: "Remove alias" },
        { cmd: "history", desc: "Show command history" },
        { cmd: "!!", desc: "Repeat last command" },
        { cmd: "!$", desc: "Last argument of previous cmd" },
        { cmd: "!n", desc: "Run command number n" },
        { cmd: "Ctrl+R", desc: "Search command history" },
        { cmd: "screen -S name", desc: "Start named screen session" },
        { cmd: "tmux new -s name", desc: "Start named tmux session" },
        { cmd: "watch -n 1 command", desc: "Repeat command every 1s" },
        { cmd: "time command", desc: "Measure execution time" },
      ],
    },
  ];

  const quickRef = [
    { term: "|", desc: "Pipe output" },
    { term: ">", desc: "Redirect/overwrite" },
    { term: ">>", desc: "Append" },
    { term: "<", desc: "Input from file" },
    { term: "&", desc: "Run in background" },
    { term: "&&", desc: "AND (run if success)" },
    { term: "||", desc: "OR (run if fail)" },
    { term: "$()", desc: "Command substitution" },
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
    <div className="min-h-screen bg-bg-primary px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 pt-24 md:pt-28 print:p-4 print:pt-4">
      {/* Header */}
      <header className="max-w-[1800px] mx-auto mb-8 print:mb-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-cyan/20 blur-xl rounded-full" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-green/20 border border-border-default flex items-center justify-center print:w-10 print:h-10">
                <Icon
                  name="terminal"
                  className="w-7 h-7 text-accent-cyan print:w-5 print:h-5"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary print:text-xl tracking-tight">
                Linux / Bash Cheat Sheet
              </h1>
              <p className="text-sm text-text-secondary mt-0.5">
                Command line & shell scripting reference
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 print:hidden">
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
              Shell Operators
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
                      <code className="block text-xs font-mono text-accent-cyan break-all print:text-[8px] print:leading-tight leading-relaxed whitespace-pre-wrap">
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
            <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
              <Icon name="terminal" className="w-4 h-4 text-accent-cyan" />
            </div>
            <span className="text-text-secondary">Linux / Bash Cheat Sheet</span>
          </div>
          <div className="flex items-center gap-6 print:gap-3">
            <a
              href="https://www.gnu.org/software/bash/manual/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-secondary transition-colors"
            >
              <Icon name="book-open" className="w-4 h-4 print:w-3 print:h-3" />
              <span>Bash Manual</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LinuxCheatSheet;
