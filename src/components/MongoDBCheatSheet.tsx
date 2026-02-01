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

const MongoDBCheatSheet = () => {
  const { copiedCmd, copyToClipboard } = useCopyWithAnalytics("mongodb", "Databases");

  const sections: Section[] = [
    {
      title: "Database Operations",
      icon: "database",
      color: "green",
      commands: [
        { cmd: "show dbs", desc: "List all databases" },
        { cmd: "use db_name", desc: "Switch to database" },
        { cmd: "db", desc: "Show current database" },
        { cmd: "db.dropDatabase()", desc: "Delete current database" },
        { cmd: "db.stats()", desc: "Get database statistics" },
      ],
    },
    {
      title: "Collection Operations",
      icon: "layers",
      color: "cyan",
      commands: [
        { cmd: "show collections", desc: "List all collections" },
        { cmd: "db.createCollection('name')", desc: "Create collection" },
        { cmd: "db.collection.drop()", desc: "Delete collection" },
        { cmd: "db.collection.renameCollection('new')", desc: "Rename collection" },
        { cmd: "db.collection.stats()", desc: "Collection statistics" },
      ],
    },
    {
      title: "Insert Documents",
      icon: "plus",
      color: "green",
      commands: [
        {
          cmd: "db.col.insertOne({\n  name: 'John',\n  age: 30\n})",
          desc: "Insert single document",
        },
        {
          cmd: "db.col.insertMany([\n  { name: 'John' },\n  { name: 'Jane' }\n])",
          desc: "Insert multiple documents",
        },
        {
          cmd: "db.col.insertOne({\n  _id: 'custom_id',\n  data: 'value'\n})",
          desc: "Insert with custom _id",
        },
      ],
    },
    {
      title: "Find Documents",
      icon: "search",
      color: "blue",
      commands: [
        { cmd: "db.col.find()", desc: "Find all documents" },
        { cmd: "db.col.find().pretty()", desc: "Pretty print results" },
        { cmd: "db.col.findOne({ name: 'John' })", desc: "Find first match" },
        { cmd: "db.col.find({ age: 30 })", desc: "Find with filter" },
        { cmd: "db.col.find({}, { name: 1 })", desc: "Select specific fields" },
        { cmd: "db.col.find({}, { age: 0 })", desc: "Exclude fields" },
        { cmd: "db.col.find().limit(5)", desc: "Limit results" },
        { cmd: "db.col.find().skip(10)", desc: "Skip documents" },
        { cmd: "db.col.find().sort({ age: 1 })", desc: "Sort ascending" },
        { cmd: "db.col.find().sort({ age: -1 })", desc: "Sort descending" },
      ],
    },
    {
      title: "Query Operators",
      icon: "filter",
      color: "purple",
      commands: [
        { cmd: "{ age: { $eq: 30 } }", desc: "Equal to" },
        { cmd: "{ age: { $ne: 30 } }", desc: "Not equal to" },
        { cmd: "{ age: { $gt: 25 } }", desc: "Greater than" },
        { cmd: "{ age: { $gte: 25 } }", desc: "Greater than or equal" },
        { cmd: "{ age: { $lt: 30 } }", desc: "Less than" },
        { cmd: "{ age: { $lte: 30 } }", desc: "Less than or equal" },
        { cmd: "{ age: { $in: [25, 30] } }", desc: "Match any in array" },
        { cmd: "{ age: { $nin: [25, 30] } }", desc: "Not in array" },
        { cmd: "{ $and: [{ a: 1 }, { b: 2 }] }", desc: "Logical AND" },
        { cmd: "{ $or: [{ a: 1 }, { b: 2 }] }", desc: "Logical OR" },
        { cmd: "{ field: { $exists: true } }", desc: "Field exists" },
        { cmd: "{ field: { $type: 'string' } }", desc: "Check field type" },
      ],
    },
    {
      title: "Update Documents",
      icon: "pen-tool",
      color: "orange",
      commands: [
        {
          cmd: "db.col.updateOne(\n  { name: 'John' },\n  { $set: { age: 31 } }\n)",
          desc: "Update first match",
        },
        {
          cmd: "db.col.updateMany(\n  { status: 'A' },\n  { $set: { status: 'B' } }\n)",
          desc: "Update all matches",
        },
        {
          cmd: "db.col.replaceOne(\n  { _id: 1 },\n  { name: 'New', age: 25 }\n)",
          desc: "Replace entire document",
        },
        {
          cmd: "db.col.updateOne(\n  { _id: 1 },\n  { $set: { a: 1 } },\n  { upsert: true }\n)",
          desc: "Upsert (insert if not found)",
        },
      ],
    },
    {
      title: "Update Operators",
      icon: "refresh-cw",
      color: "yellow",
      commands: [
        { cmd: "{ $set: { field: 'value' } }", desc: "Set field value" },
        { cmd: "{ $unset: { field: '' } }", desc: "Remove field" },
        { cmd: "{ $inc: { count: 1 } }", desc: "Increment value" },
        { cmd: "{ $mul: { price: 1.1 } }", desc: "Multiply value" },
        { cmd: "{ $rename: { old: 'new' } }", desc: "Rename field" },
        { cmd: "{ $min: { low: 5 } }", desc: "Update if less than" },
        { cmd: "{ $max: { high: 100 } }", desc: "Update if greater than" },
        { cmd: "{ $currentDate: { updated: true } }", desc: "Set to current date" },
      ],
    },
    {
      title: "Array Operations",
      icon: "list-filter",
      color: "cyan",
      commands: [
        { cmd: "{ $push: { arr: 'item' } }", desc: "Add to array" },
        { cmd: "{ $pull: { arr: 'item' } }", desc: "Remove from array" },
        { cmd: "{ $addToSet: { arr: 'item' } }", desc: "Add unique to array" },
        { cmd: "{ $pop: { arr: 1 } }", desc: "Remove last element" },
        { cmd: "{ $pop: { arr: -1 } }", desc: "Remove first element" },
        { cmd: "{ tags: { $all: ['a', 'b'] } }", desc: "Match all in array" },
        { cmd: "{ tags: { $size: 3 } }", desc: "Array size equals" },
        { cmd: "{ 'arr.0': 'value' }", desc: "Match array index" },
      ],
    },
    {
      title: "Delete Documents",
      icon: "trash",
      color: "red",
      commands: [
        { cmd: "db.col.deleteOne({ name: 'John' })", desc: "Delete first match" },
        { cmd: "db.col.deleteMany({ status: 'D' })", desc: "Delete all matches" },
        { cmd: "db.col.deleteMany({})", desc: "Delete all documents" },
        {
          cmd: "db.col.findOneAndDelete(\n  { name: 'John' }\n)",
          desc: "Delete and return document",
        },
      ],
    },
    {
      title: "Aggregation",
      icon: "layers",
      color: "purple",
      commands: [
        { cmd: "{ $match: { status: 'A' } }", desc: "Filter documents" },
        { cmd: "{ $group: { _id: '$field' } }", desc: "Group by field" },
        { cmd: "{ $project: { name: 1 } }", desc: "Select fields" },
        { cmd: "{ $sort: { age: -1 } }", desc: "Sort documents" },
        { cmd: "{ $limit: 10 }", desc: "Limit results" },
        { cmd: "{ $skip: 5 }", desc: "Skip documents" },
        { cmd: "{ $unwind: '$array' }", desc: "Deconstruct array" },
        { cmd: "{ $lookup: { from: 'other' } }", desc: "Join collections" },
      ],
    },
    {
      title: "Aggregation Operators",
      icon: "gauge",
      color: "orange",
      commands: [
        { cmd: "{ $sum: '$field' }", desc: "Sum of values" },
        { cmd: "{ $avg: '$field' }", desc: "Average of values" },
        { cmd: "{ $min: '$field' }", desc: "Minimum value" },
        { cmd: "{ $max: '$field' }", desc: "Maximum value" },
        { cmd: "{ $count: 'total' }", desc: "Count documents" },
        { cmd: "{ $first: '$field' }", desc: "First value in group" },
        { cmd: "{ $last: '$field' }", desc: "Last value in group" },
      ],
    },
    {
      title: "Indexes",
      icon: "zap",
      color: "yellow",
      commands: [
        { cmd: "db.col.createIndex({ field: 1 })", desc: "Create ascending index" },
        { cmd: "db.col.createIndex({ field: -1 })", desc: "Create descending index" },
        { cmd: "db.col.createIndex({ a: 1, b: 1 })", desc: "Compound index" },
        { cmd: "db.col.createIndex(\n  { field: 1 },\n  { unique: true }\n)", desc: "Unique index" },
        { cmd: "db.col.getIndexes()", desc: "List all indexes" },
        { cmd: "db.col.dropIndex('index_name')", desc: "Drop an index" },
      ],
    },
  ];

  const quickRef: QuickRefItem[] = [
    { term: "_id", desc: "Unique document identifier" },
    { term: "$set", desc: "Set field value" },
    { term: "$gt/$lt", desc: "Greater/Less than" },
    { term: "$in", desc: "Match any in array" },
    { term: "$and/$or", desc: "Logical operators" },
    { term: "$push", desc: "Add to array" },
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
              <div className="absolute inset-0 bg-green/20 blur-xl rounded-full" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-green/20 to-cyan/20 border border-border-default flex items-center justify-center print:w-10 print:h-10">
                <Icon
                  name="braces"
                  className="w-7 h-7 text-green print:w-5 print:h-5"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary print:text-xl tracking-tight">
                MongoDB Cheat Sheet
              </h1>
              <p className="text-sm text-text-secondary mt-0.5">
                Complete reference for MongoDB queries
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
            <Icon name="terminal" className="w-4 h-4 text-green" />
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
                <code className="px-2 py-1 bg-bg-tertiary/80 rounded-md text-green font-mono text-xs print:text-[9px] print:px-1 border border-border-subtle">
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
                      <code className="block text-xs font-mono text-green break-all print:text-[8px] print:leading-tight leading-relaxed whitespace-pre-wrap">
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
            <div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center">
              <Icon name="braces" className="w-4 h-4 text-green" />
            </div>
            <span className="text-text-secondary">MongoDB Cheat Sheet</span>
          </div>
          <div className="flex items-center gap-6 print:gap-3">
            <a
              href="https://www.mongodb.com/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-secondary transition-colors"
            >
              <Icon name="book-open" className="w-4 h-4 print:w-3 print:h-3" />
              <span>MongoDB Docs</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MongoDBCheatSheet;
