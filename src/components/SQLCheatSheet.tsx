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

const SQLCheatSheet = () => {
  const { copiedCmd, copyToClipboard } = useCopyWithAnalytics("sql", "Databases");

  const sections: Section[] = [
    {
      title: "Database Operations",
      icon: "database",
      color: "cyan",
      commands: [
        { cmd: "CREATE DATABASE db_name;", desc: "Create a new database" },
        { cmd: "DROP DATABASE db_name;", desc: "Delete a database" },
        { cmd: "USE db_name;", desc: "Select database to use" },
        { cmd: "SHOW DATABASES;", desc: "List all databases" },
        { cmd: "SHOW TABLES;", desc: "List all tables in database" },
      ],
    },
    {
      title: "Table Operations",
      icon: "table",
      color: "blue",
      commands: [
        {
          cmd: "CREATE TABLE table_name (\n  id INT PRIMARY KEY,\n  name VARCHAR(100)\n);",
          desc: "Create a new table",
        },
        { cmd: "DROP TABLE table_name;", desc: "Delete a table" },
        { cmd: "TRUNCATE TABLE table_name;", desc: "Remove all rows from table" },
        { cmd: "ALTER TABLE t ADD column_name TYPE;", desc: "Add a column" },
        { cmd: "ALTER TABLE t DROP COLUMN col;", desc: "Remove a column" },
        { cmd: "ALTER TABLE t RENAME TO new_name;", desc: "Rename a table" },
        { cmd: "DESCRIBE table_name;", desc: "Show table structure" },
      ],
    },
    {
      title: "SELECT Queries",
      icon: "search",
      color: "green",
      commands: [
        { cmd: "SELECT * FROM table_name;", desc: "Select all columns" },
        { cmd: "SELECT col1, col2 FROM table_name;", desc: "Select specific columns" },
        { cmd: "SELECT DISTINCT col FROM table_name;", desc: "Select unique values" },
        { cmd: "SELECT * FROM t WHERE condition;", desc: "Filter with condition" },
        { cmd: "SELECT * FROM t LIMIT 10;", desc: "Limit number of rows" },
        { cmd: "SELECT * FROM t LIMIT 10 OFFSET 5;", desc: "Skip and limit rows" },
        { cmd: "SELECT col AS alias FROM t;", desc: "Column alias" },
      ],
    },
    {
      title: "WHERE Clauses",
      icon: "filter",
      color: "purple",
      commands: [
        { cmd: "WHERE col = 'value'", desc: "Equal to" },
        { cmd: "WHERE col <> 'value'", desc: "Not equal to" },
        { cmd: "WHERE col > 10", desc: "Greater than" },
        { cmd: "WHERE col BETWEEN 1 AND 10", desc: "Range of values" },
        { cmd: "WHERE col IN ('a', 'b', 'c')", desc: "Match any in list" },
        { cmd: "WHERE col LIKE 'pattern%'", desc: "Pattern matching" },
        { cmd: "WHERE col IS NULL", desc: "Check for NULL" },
        { cmd: "WHERE col IS NOT NULL", desc: "Check for NOT NULL" },
        { cmd: "WHERE cond1 AND cond2", desc: "Multiple conditions (AND)" },
        { cmd: "WHERE cond1 OR cond2", desc: "Multiple conditions (OR)" },
      ],
    },
    {
      title: "INSERT Data",
      icon: "plus",
      color: "green",
      commands: [
        {
          cmd: "INSERT INTO t (col1, col2)\nVALUES ('val1', 'val2');",
          desc: "Insert single row",
        },
        {
          cmd: "INSERT INTO t (col1, col2) VALUES\n('a', 'b'), ('c', 'd');",
          desc: "Insert multiple rows",
        },
        {
          cmd: "INSERT INTO t1 (col1)\nSELECT col1 FROM t2;",
          desc: "Insert from select",
        },
        {
          cmd: "INSERT INTO t (col1)\nVALUES ('val')\nON DUPLICATE KEY UPDATE col1='val';",
          desc: "Upsert (MySQL)",
        },
      ],
    },
    {
      title: "UPDATE & DELETE",
      icon: "pen-tool",
      color: "orange",
      commands: [
        {
          cmd: "UPDATE t SET col = 'val'\nWHERE condition;",
          desc: "Update rows",
        },
        {
          cmd: "UPDATE t SET col1='a', col2='b'\nWHERE id = 1;",
          desc: "Update multiple columns",
        },
        { cmd: "DELETE FROM t WHERE condition;", desc: "Delete specific rows" },
        { cmd: "DELETE FROM t;", desc: "Delete all rows (keeps structure)" },
      ],
    },
    {
      title: "ORDER & GROUP",
      icon: "arrow-up-down",
      color: "yellow",
      commands: [
        { cmd: "ORDER BY col ASC", desc: "Sort ascending" },
        { cmd: "ORDER BY col DESC", desc: "Sort descending" },
        { cmd: "ORDER BY col1, col2 DESC", desc: "Multi-column sort" },
        { cmd: "GROUP BY col", desc: "Group rows by column" },
        { cmd: "GROUP BY col HAVING COUNT(*) > 1", desc: "Filter groups" },
      ],
    },
    {
      title: "Aggregate Functions",
      icon: "layers",
      color: "cyan",
      commands: [
        { cmd: "SELECT COUNT(*) FROM t;", desc: "Count rows" },
        { cmd: "SELECT COUNT(DISTINCT col) FROM t;", desc: "Count unique values" },
        { cmd: "SELECT SUM(col) FROM t;", desc: "Sum of values" },
        { cmd: "SELECT AVG(col) FROM t;", desc: "Average of values" },
        { cmd: "SELECT MIN(col) FROM t;", desc: "Minimum value" },
        { cmd: "SELECT MAX(col) FROM t;", desc: "Maximum value" },
      ],
    },
    {
      title: "JOINs",
      icon: "link",
      color: "purple",
      commands: [
        {
          cmd: "SELECT * FROM t1\nINNER JOIN t2 ON t1.id = t2.id;",
          desc: "Inner join (matching rows)",
        },
        {
          cmd: "SELECT * FROM t1\nLEFT JOIN t2 ON t1.id = t2.id;",
          desc: "Left join (all from left)",
        },
        {
          cmd: "SELECT * FROM t1\nRIGHT JOIN t2 ON t1.id = t2.id;",
          desc: "Right join (all from right)",
        },
        {
          cmd: "SELECT * FROM t1\nFULL OUTER JOIN t2 ON t1.id = t2.id;",
          desc: "Full outer join",
        },
        {
          cmd: "SELECT * FROM t1\nCROSS JOIN t2;",
          desc: "Cross join (cartesian)",
        },
        {
          cmd: "SELECT * FROM t1 a\nJOIN t1 b ON a.parent = b.id;",
          desc: "Self join",
        },
      ],
    },
    {
      title: "Subqueries",
      icon: "braces",
      color: "orange",
      commands: [
        {
          cmd: "SELECT * FROM t\nWHERE col IN (SELECT col FROM t2);",
          desc: "Subquery in WHERE",
        },
        {
          cmd: "SELECT (SELECT MAX(col) FROM t2)\nFROM t1;",
          desc: "Scalar subquery",
        },
        {
          cmd: "SELECT * FROM\n(SELECT * FROM t) AS subq;",
          desc: "Derived table",
        },
        {
          cmd: "SELECT * FROM t WHERE EXISTS\n(SELECT 1 FROM t2 WHERE t2.id = t.id);",
          desc: "EXISTS subquery",
        },
      ],
    },
    {
      title: "Indexes & Keys",
      icon: "zap",
      color: "red",
      commands: [
        { cmd: "CREATE INDEX idx ON t(col);", desc: "Create index" },
        { cmd: "CREATE UNIQUE INDEX idx ON t(col);", desc: "Create unique index" },
        { cmd: "DROP INDEX idx ON t;", desc: "Remove index" },
        { cmd: "PRIMARY KEY (col)", desc: "Define primary key" },
        { cmd: "FOREIGN KEY (col) REFERENCES t2(id)", desc: "Define foreign key" },
        { cmd: "SHOW INDEX FROM table_name;", desc: "Show table indexes" },
      ],
    },
    {
      title: "Constraints",
      icon: "lock",
      color: "gray",
      commands: [
        { cmd: "NOT NULL", desc: "Column cannot be NULL" },
        { cmd: "UNIQUE", desc: "All values must be unique" },
        { cmd: "DEFAULT 'value'", desc: "Set default value" },
        { cmd: "CHECK (col > 0)", desc: "Value constraint" },
        { cmd: "AUTO_INCREMENT", desc: "Auto-increment (MySQL)" },
        { cmd: "SERIAL", desc: "Auto-increment (PostgreSQL)" },
      ],
    },
  ];

  const quickRef: QuickRefItem[] = [
    { term: "%", desc: "Wildcard (any characters)" },
    { term: "_", desc: "Single character wildcard" },
    { term: "NULL", desc: "Unknown/missing value" },
    { term: "*", desc: "All columns" },
    { term: "AS", desc: "Alias for columns/tables" },
    { term: "DISTINCT", desc: "Unique values only" },
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
    <div className="min-h-screen bg-bg-primary px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 pt-28 md:pt-32 print:p-4 print:pt-4">
      {/* Header */}
      <header className="max-w-[1800px] mx-auto mb-8 print:mb-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-cyan/20 blur-xl rounded-full" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-blue/20 border border-border-default flex items-center justify-center print:w-10 print:h-10">
                <Icon
                  name="database"
                  className="w-7 h-7 text-accent-cyan print:w-5 print:h-5"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary print:text-xl tracking-tight">
                SQL Cheat Sheet
              </h1>
              <p className="text-sm text-text-secondary mt-0.5">
                Complete reference for SQL queries
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 print:hidden">
            <div className="text-xs text-text-muted px-4 py-2 bg-bg-secondary rounded-lg border border-border-default">
              Press <kbd className="mx-1 px-1.5 py-0.5 bg-bg-tertiary rounded text-text-secondary">Ctrl</kbd>+<kbd className="px-1.5 py-0.5 bg-bg-tertiary rounded text-text-secondary">P</kbd> to print
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
              <Icon name="database" className="w-4 h-4 text-accent-cyan" />
            </div>
            <span className="text-text-secondary">SQL Cheat Sheet</span>
          </div>
          <div className="flex items-center gap-6 print:gap-3">
            <span className="flex items-center gap-2">
              <Icon name="book-open" className="w-4 h-4 print:w-3 print:h-3" />
              <span>MySQL / PostgreSQL / SQLite</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SQLCheatSheet;
