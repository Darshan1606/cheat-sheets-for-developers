import { Icon } from "./Icon";
import { useCopyWithAnalytics } from "@hooks/useCopyWithAnalytics";

interface Command {
  cmd: string;
  desc: string;
}

interface Section {
  title: string;
  icon: string;
  color: string;
  commands: Command[];
}

interface QuickRefItem {
  term: string;
  desc: string;
}

interface ColorClass {
  badge: string;
  header: string;
  border: string;
}

const DSACheatSheet = () => {
  const { copiedCmd, copyToClipboard } = useCopyWithAnalytics("dsa", "CS Fundamentals");

  const sections: Section[] = [
    {
      title: "Arrays",
      icon: "list",
      color: "blue",
      commands: [
        { cmd: "arr[i]", desc: "Access element at index i - O(1)" },
        { cmd: "arr.push(x)", desc: "Add to end - O(1) amortized" },
        { cmd: "arr.pop()", desc: "Remove from end - O(1)" },
        { cmd: "arr.unshift(x)", desc: "Add to beginning - O(n)" },
        { cmd: "arr.shift()", desc: "Remove from beginning - O(n)" },
        { cmd: "arr.splice(i, 1)", desc: "Remove at index - O(n)" },
        { cmd: "arr.slice(start, end)", desc: "Copy subarray - O(n)" },
        { cmd: "arr.indexOf(x)", desc: "Find index of element - O(n)" },
        { cmd: "arr.includes(x)", desc: "Check if exists - O(n)" },
        { cmd: "arr.reverse()", desc: "Reverse in place - O(n)" },
        { cmd: "arr.sort((a,b) => a-b)", desc: "Sort ascending - O(n log n)" },
        { cmd: "[...arr]", desc: "Shallow copy array - O(n)" },
      ],
    },
    {
      title: "Strings",
      icon: "file-text",
      color: "green",
      commands: [
        { cmd: "str.charAt(i) or str[i]", desc: "Access character - O(1)" },
        { cmd: "str.length", desc: "Get length - O(1)" },
        { cmd: "str.substring(start, end)", desc: "Extract substring - O(n)" },
        { cmd: "str.split(delimiter)", desc: "Split to array - O(n)" },
        { cmd: "str.join(delimiter)", desc: "Join array to string - O(n)" },
        { cmd: "str.toLowerCase()", desc: "Convert to lowercase - O(n)" },
        { cmd: "str.toUpperCase()", desc: "Convert to uppercase - O(n)" },
        { cmd: "str.trim()", desc: "Remove whitespace - O(n)" },
        { cmd: "str.replace(old, new)", desc: "Replace first occurrence - O(n)" },
        { cmd: "str.includes(substr)", desc: "Check if contains - O(n)" },
        { cmd: "str.startsWith(prefix)", desc: "Check prefix - O(n)" },
        { cmd: "str.charCodeAt(i)", desc: "Get ASCII code - O(1)" },
      ],
    },
    {
      title: "Linked Lists",
      icon: "link",
      color: "purple",
      commands: [
        { cmd: "head.next = newNode", desc: "Insert at head - O(1)" },
        { cmd: "node.next = node.next.next", desc: "Delete next node - O(1)" },
        { cmd: "slow = slow.next; fast = fast.next.next", desc: "Floyd's cycle detection" },
        { cmd: "while(curr) curr = curr.next", desc: "Traverse list - O(n)" },
        { cmd: "prev = null; curr.next = prev", desc: "Reverse list pattern" },
        { cmd: "dummy = new Node(0); dummy.next = head", desc: "Dummy node pattern" },
        { cmd: "merge(l1, l2)", desc: "Merge two sorted lists - O(n+m)" },
        { cmd: "findMiddle(head)", desc: "Find middle using slow/fast - O(n)" },
        { cmd: "hasCycle(head)", desc: "Detect cycle - O(n)" },
        { cmd: "removeNthFromEnd(head, n)", desc: "Two pointer technique - O(n)" },
      ],
    },
    {
      title: "Stacks & Queues",
      icon: "layers",
      color: "orange",
      commands: [
        { cmd: "stack.push(x)", desc: "Push to stack - O(1)" },
        { cmd: "stack.pop()", desc: "Pop from stack - O(1)" },
        { cmd: "stack[stack.length-1]", desc: "Peek top element - O(1)" },
        { cmd: "queue.push(x)", desc: "Enqueue (add to back) - O(1)" },
        { cmd: "queue.shift()", desc: "Dequeue (remove front) - O(n)" },
        { cmd: "queue[0]", desc: "Peek front element - O(1)" },
        { cmd: "Monotonic Stack", desc: "Next greater/smaller element" },
        { cmd: "Valid Parentheses", desc: "Match open/close brackets" },
        { cmd: "Min Stack", desc: "Stack with O(1) getMin" },
        { cmd: "BFS uses Queue", desc: "Level order traversal" },
        { cmd: "DFS uses Stack", desc: "Depth-first traversal" },
      ],
    },
    {
      title: "Hash Tables",
      icon: "hash",
      color: "cyan",
      commands: [
        { cmd: "map.set(key, value)", desc: "Insert/Update - O(1) avg" },
        { cmd: "map.get(key)", desc: "Lookup value - O(1) avg" },
        { cmd: "map.has(key)", desc: "Check if key exists - O(1) avg" },
        { cmd: "map.delete(key)", desc: "Remove key - O(1) avg" },
        { cmd: "new Set()", desc: "Create set (unique values)" },
        { cmd: "set.add(x)", desc: "Add to set - O(1) avg" },
        { cmd: "set.has(x)", desc: "Check existence - O(1) avg" },
        { cmd: "Object.keys(obj)", desc: "Get all keys - O(n)" },
        { cmd: "Object.values(obj)", desc: "Get all values - O(n)" },
        { cmd: "Two Sum Pattern", desc: "Use map for complement lookup" },
        { cmd: "Frequency Counter", desc: "Count occurrences with map" },
        { cmd: "Group Anagrams", desc: "Use sorted string as key" },
      ],
    },
    {
      title: "Binary Trees",
      icon: "git-branch",
      color: "yellow",
      commands: [
        { cmd: "Inorder: Left → Root → Right", desc: "BST gives sorted order" },
        { cmd: "Preorder: Root → Left → Right", desc: "Copy tree, prefix expr" },
        { cmd: "Postorder: Left → Right → Root", desc: "Delete tree, postfix expr" },
        { cmd: "Level Order (BFS)", desc: "Use queue, level by level" },
        { cmd: "height = 1 + max(left, right)", desc: "Calculate tree height" },
        { cmd: "isBalanced(root)", desc: "Height diff ≤ 1 all nodes" },
        { cmd: "isBST(root, min, max)", desc: "Validate BST with bounds" },
        { cmd: "lowestCommonAncestor(p, q)", desc: "Find LCA of two nodes" },
        { cmd: "serialize/deserialize", desc: "Convert tree to string & back" },
        { cmd: "diameterOfTree(root)", desc: "Longest path between nodes" },
      ],
    },
    {
      title: "Binary Search Trees",
      icon: "search",
      color: "red",
      commands: [
        { cmd: "Search: O(log n) avg, O(n) worst", desc: "Compare & go left/right" },
        { cmd: "Insert: O(log n) avg", desc: "Find position & add leaf" },
        { cmd: "Delete: O(log n) avg", desc: "3 cases: leaf, 1 child, 2 children" },
        { cmd: "Inorder Successor", desc: "Smallest in right subtree" },
        { cmd: "Inorder Predecessor", desc: "Largest in left subtree" },
        { cmd: "BST Property: left < root < right", desc: "For all nodes" },
        { cmd: "Kth Smallest", desc: "Inorder traversal count k" },
        { cmd: "Range Query [lo, hi]", desc: "Prune branches outside range" },
        { cmd: "Floor/Ceiling", desc: "Largest ≤ x / Smallest ≥ x" },
      ],
    },
    {
      title: "Heaps / Priority Queue",
      icon: "bar-chart",
      color: "purple",
      commands: [
        { cmd: "Min Heap: parent ≤ children", desc: "Root is minimum" },
        { cmd: "Max Heap: parent ≥ children", desc: "Root is maximum" },
        { cmd: "Insert: O(log n)", desc: "Add at end, bubble up" },
        { cmd: "Extract Min/Max: O(log n)", desc: "Remove root, heapify down" },
        { cmd: "Peek: O(1)", desc: "View root without removing" },
        { cmd: "Build Heap: O(n)", desc: "Heapify from bottom up" },
        { cmd: "Heap Sort: O(n log n)", desc: "Extract all elements" },
        { cmd: "Top K Elements", desc: "Use min-heap of size k" },
        { cmd: "Merge K Sorted Lists", desc: "Min-heap of list heads" },
        { cmd: "Median in Stream", desc: "Max-heap + Min-heap" },
      ],
    },
    {
      title: "Graphs",
      icon: "network",
      color: "blue",
      commands: [
        { cmd: "Adjacency List: Map<node, [neighbors]>", desc: "Space: O(V+E)" },
        { cmd: "Adjacency Matrix: grid[i][j]", desc: "Space: O(V²)" },
        { cmd: "BFS: queue + visited set", desc: "Shortest path (unweighted)" },
        { cmd: "DFS: stack/recursion + visited", desc: "Path finding, cycles" },
        { cmd: "Topological Sort", desc: "DAG ordering, course schedule" },
        { cmd: "Detect Cycle (directed)", desc: "DFS with recursion stack" },
        { cmd: "Detect Cycle (undirected)", desc: "DFS or Union-Find" },
        { cmd: "Connected Components", desc: "DFS/BFS from unvisited" },
        { cmd: "Bipartite Check", desc: "2-color BFS/DFS" },
        { cmd: "Clone Graph", desc: "DFS/BFS with hashmap" },
      ],
    },
    {
      title: "Shortest Path Algorithms",
      icon: "globe",
      color: "green",
      commands: [
        { cmd: "Dijkstra: O((V+E) log V)", desc: "Single source, non-negative" },
        { cmd: "Bellman-Ford: O(VE)", desc: "Single source, negative edges" },
        { cmd: "Floyd-Warshall: O(V³)", desc: "All pairs shortest paths" },
        { cmd: "BFS: O(V+E)", desc: "Unweighted graph shortest path" },
        { cmd: "A* Algorithm", desc: "Heuristic-based pathfinding" },
        { cmd: "0-1 BFS", desc: "Only 0 and 1 edge weights" },
        { cmd: "Negative Cycle Detection", desc: "Bellman-Ford extra iteration" },
        { cmd: "Priority Queue + Distance Array", desc: "Dijkstra pattern" },
      ],
    },
    {
      title: "Sorting Algorithms",
      icon: "sort-asc",
      color: "orange",
      commands: [
        { cmd: "Bubble Sort: O(n²)", desc: "Swap adjacent if wrong order" },
        { cmd: "Selection Sort: O(n²)", desc: "Find min, place at front" },
        { cmd: "Insertion Sort: O(n²)", desc: "Insert each into sorted part" },
        { cmd: "Merge Sort: O(n log n)", desc: "Divide, sort, merge - stable" },
        { cmd: "Quick Sort: O(n log n) avg", desc: "Partition around pivot" },
        { cmd: "Heap Sort: O(n log n)", desc: "Build heap, extract max" },
        { cmd: "Counting Sort: O(n+k)", desc: "Count frequencies, k = range" },
        { cmd: "Radix Sort: O(d(n+k))", desc: "Sort by digits, d = digits" },
        { cmd: "Bucket Sort: O(n+k)", desc: "Distribute into buckets" },
        { cmd: "Tim Sort: O(n log n)", desc: "Hybrid merge + insertion" },
      ],
    },
    {
      title: "Binary Search",
      icon: "search",
      color: "cyan",
      commands: [
        { cmd: "while (left <= right)", desc: "Standard binary search" },
        { cmd: "mid = left + (right - left) / 2", desc: "Avoid overflow" },
        { cmd: "left = mid + 1 or right = mid - 1", desc: "Shrink search space" },
        { cmd: "Find First Occurrence", desc: "right = mid - 1 when found" },
        { cmd: "Find Last Occurrence", desc: "left = mid + 1 when found" },
        { cmd: "Search in Rotated Array", desc: "Check which half is sorted" },
        { cmd: "Find Peak Element", desc: "Compare mid with mid+1" },
        { cmd: "Search 2D Matrix", desc: "Treat as 1D array" },
        { cmd: "Minimum in Rotated Array", desc: "Compare mid with right" },
        { cmd: "Binary Search on Answer", desc: "Min/max optimization" },
      ],
    },
    {
      title: "Dynamic Programming",
      icon: "cpu",
      color: "yellow",
      commands: [
        { cmd: "1. Define state (dp[i] means...)", desc: "What does each cell represent?" },
        { cmd: "2. Recurrence relation", desc: "dp[i] = f(dp[i-1], ...)" },
        { cmd: "3. Base cases", desc: "dp[0] = initial value" },
        { cmd: "4. Order of computation", desc: "Bottom-up or top-down" },
        { cmd: "Fibonacci: dp[i] = dp[i-1] + dp[i-2]", desc: "Classic example" },
        { cmd: "Climbing Stairs", desc: "Ways to reach step n" },
        { cmd: "0/1 Knapsack", desc: "Take or skip each item" },
        { cmd: "Longest Common Subsequence", desc: "2D DP on two strings" },
        { cmd: "Longest Increasing Subsequence", desc: "O(n²) or O(n log n)" },
        { cmd: "Coin Change", desc: "Min coins for amount" },
        { cmd: "Edit Distance", desc: "Insert, delete, replace" },
        { cmd: "Matrix Chain Multiplication", desc: "Interval DP pattern" },
      ],
    },
    {
      title: "Two Pointers & Sliding Window",
      icon: "combine",
      color: "red",
      commands: [
        { cmd: "left = 0, right = n-1", desc: "Opposite direction pointers" },
        { cmd: "slow = fast = 0", desc: "Same direction pointers" },
        { cmd: "Two Sum (sorted)", desc: "Move left up or right down" },
        { cmd: "Container With Most Water", desc: "Move shorter pointer" },
        { cmd: "3Sum", desc: "Fix one, two-pointer on rest" },
        { cmd: "Remove Duplicates", desc: "Slow writes, fast reads" },
        { cmd: "Sliding Window Fixed Size", desc: "Add right, remove left" },
        { cmd: "Sliding Window Variable", desc: "Expand right, shrink left" },
        { cmd: "Longest Substring Without Repeat", desc: "Hash + sliding window" },
        { cmd: "Minimum Window Substring", desc: "Expand & contract pattern" },
      ],
    },
    {
      title: "Recursion & Backtracking",
      icon: "rotate-ccw",
      color: "purple",
      commands: [
        { cmd: "Base case → return", desc: "Termination condition" },
        { cmd: "Make choice → recurse → undo", desc: "Backtracking pattern" },
        { cmd: "Permutations", desc: "Swap, recurse, swap back" },
        { cmd: "Combinations", desc: "Include/exclude current" },
        { cmd: "Subsets", desc: "Include/exclude each element" },
        { cmd: "N-Queens", desc: "Place, validate, backtrack" },
        { cmd: "Sudoku Solver", desc: "Try 1-9, backtrack if invalid" },
        { cmd: "Word Search", desc: "DFS + mark visited + unmark" },
        { cmd: "Generate Parentheses", desc: "Track open/close count" },
        { cmd: "Palindrome Partitioning", desc: "Cut at each valid point" },
      ],
    },
    {
      title: "Time & Space Complexity",
      icon: "clock",
      color: "gray",
      commands: [
        { cmd: "O(1) - Constant", desc: "Array access, hash lookup" },
        { cmd: "O(log n) - Logarithmic", desc: "Binary search, balanced BST" },
        { cmd: "O(n) - Linear", desc: "Single loop, linear search" },
        { cmd: "O(n log n) - Linearithmic", desc: "Merge sort, quick sort avg" },
        { cmd: "O(n²) - Quadratic", desc: "Nested loops, bubble sort" },
        { cmd: "O(n³) - Cubic", desc: "Triple nested loops" },
        { cmd: "O(2ⁿ) - Exponential", desc: "Subsets, recursive fib" },
        { cmd: "O(n!) - Factorial", desc: "Permutations, TSP brute" },
        { cmd: "Space: O(n) for recursion stack", desc: "Recursive depth" },
        { cmd: "Space: O(n) for auxiliary array", desc: "Merge sort extra space" },
        { cmd: "Amortized Analysis", desc: "Average over sequence" },
      ],
    },
  ];

  const quickRef: QuickRefItem[] = [
    { term: "O(1)", desc: "Constant" },
    { term: "O(log n)", desc: "Logarithmic" },
    { term: "O(n)", desc: "Linear" },
    { term: "O(n log n)", desc: "Linearithmic" },
    { term: "O(n²)", desc: "Quadratic" },
    { term: "O(2ⁿ)", desc: "Exponential" },
    { term: "BFS", desc: "Breadth-First" },
    { term: "DFS", desc: "Depth-First" },
  ];

  const colorClasses: Record<string, ColorClass> = {
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
              <div className="absolute inset-0 bg-purple/20 blur-xl rounded-full" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple/20 to-blue/20 border border-border-default flex items-center justify-center print:w-10 print:h-10">
                <Icon
                  name="code"
                  className="w-7 h-7 text-purple print:w-5 print:h-5"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary print:text-xl tracking-tight">
                DSA Cheat Sheet
              </h1>
              <p className="text-sm text-text-secondary mt-0.5">
                Data Structures & Algorithms reference
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
            <Icon name="clock" className="w-4 h-4 text-purple" />
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider print:text-[10px]">
              Time Complexity Reference
            </h3>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 print:gap-x-4 print:gap-y-1">
            {quickRef.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm print:text-[10px]"
              >
                <code className="px-2 py-1 bg-bg-tertiary/80 rounded-md text-purple font-mono text-xs print:text-[9px] print:px-1 border border-border-subtle">
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
                      <code className="block text-xs font-mono text-purple break-all print:text-[8px] print:leading-tight leading-relaxed whitespace-pre-wrap">
                        {item.cmd}
                      </code>
                      <button
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-bg-elevated rounded print:hidden flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(item.cmd);
                        }}
                        title="Copy"
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
            <div className="w-8 h-8 rounded-lg bg-purple/10 flex items-center justify-center">
              <Icon name="code" className="w-4 h-4 text-purple" />
            </div>
            <span className="text-text-secondary">DSA Cheat Sheet</span>
          </div>
          <div className="flex items-center gap-6 print:gap-3">
            <a
              href="https://www.bigocheatsheet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-secondary transition-colors"
            >
              <Icon name="book-open" className="w-4 h-4 print:w-3 print:h-3" />
              <span>Big-O Cheat Sheet</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DSACheatSheet;
