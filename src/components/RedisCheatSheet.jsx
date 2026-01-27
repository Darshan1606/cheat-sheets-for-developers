import { useState } from "react";
import { Icon } from "./Icon";

const RedisCheatSheet = () => {
  const [copiedCmd, setCopiedCmd] = useState(null);

  const copyToClipboard = (cmd) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const sections = [
    {
      title: "Connection",
      icon: "link",
      color: "red",
      commands: [
        { cmd: "redis-cli", desc: "Connect to local Redis" },
        { cmd: "redis-cli -h host -p port", desc: "Connect to remote Redis" },
        { cmd: "redis-cli -a password", desc: "Connect with password" },
        { cmd: "AUTH password", desc: "Authenticate after connect" },
        { cmd: "PING", desc: "Test connection (returns PONG)" },
        { cmd: "SELECT index", desc: "Switch to database index (0-15)" },
        { cmd: "QUIT", desc: "Close connection" },
      ],
    },
    {
      title: "String Operations",
      icon: "file-text",
      color: "blue",
      commands: [
        { cmd: "SET key value", desc: "Set a key-value pair" },
        { cmd: "GET key", desc: "Get value by key" },
        { cmd: "MSET k1 v1 k2 v2", desc: "Set multiple keys" },
        { cmd: "MGET k1 k2 k3", desc: "Get multiple values" },
        { cmd: "SETNX key value", desc: "Set only if key doesn't exist" },
        { cmd: "SETEX key seconds value", desc: "Set with expiration" },
        { cmd: "APPEND key value", desc: "Append to existing value" },
        { cmd: "STRLEN key", desc: "Get string length" },
        { cmd: "GETRANGE key start end", desc: "Get substring" },
        { cmd: "SETRANGE key offset value", desc: "Overwrite part of string" },
      ],
    },
    {
      title: "Numbers",
      icon: "hash",
      color: "cyan",
      commands: [
        { cmd: "INCR key", desc: "Increment by 1" },
        { cmd: "INCRBY key amount", desc: "Increment by amount" },
        { cmd: "INCRBYFLOAT key amount", desc: "Increment by float" },
        { cmd: "DECR key", desc: "Decrement by 1" },
        { cmd: "DECRBY key amount", desc: "Decrement by amount" },
      ],
    },
    {
      title: "Key Management",
      icon: "key",
      color: "yellow",
      commands: [
        { cmd: "KEYS pattern", desc: "Find keys matching pattern" },
        { cmd: "EXISTS key", desc: "Check if key exists" },
        { cmd: "DEL key [key ...]", desc: "Delete key(s)" },
        { cmd: "UNLINK key [key ...]", desc: "Delete key(s) async" },
        { cmd: "TYPE key", desc: "Get key's data type" },
        { cmd: "RENAME key newkey", desc: "Rename a key" },
        { cmd: "RENAMENX key newkey", desc: "Rename if new doesn't exist" },
        { cmd: "COPY source dest", desc: "Copy key to another key" },
        { cmd: "DUMP key", desc: "Serialize key value" },
        { cmd: "SCAN cursor [MATCH pat]", desc: "Iterate keys incrementally" },
      ],
    },
    {
      title: "Expiration",
      icon: "clock",
      color: "orange",
      commands: [
        { cmd: "EXPIRE key seconds", desc: "Set TTL in seconds" },
        { cmd: "PEXPIRE key ms", desc: "Set TTL in milliseconds" },
        { cmd: "EXPIREAT key timestamp", desc: "Set expiry Unix timestamp" },
        { cmd: "TTL key", desc: "Get remaining TTL (seconds)" },
        { cmd: "PTTL key", desc: "Get remaining TTL (ms)" },
        { cmd: "PERSIST key", desc: "Remove expiration" },
      ],
    },
    {
      title: "Lists",
      icon: "list",
      color: "green",
      commands: [
        { cmd: "LPUSH key value [value]", desc: "Push to left (head)" },
        { cmd: "RPUSH key value [value]", desc: "Push to right (tail)" },
        { cmd: "LPOP key [count]", desc: "Pop from left" },
        { cmd: "RPOP key [count]", desc: "Pop from right" },
        { cmd: "LRANGE key start stop", desc: "Get range of elements" },
        { cmd: "LLEN key", desc: "Get list length" },
        { cmd: "LINDEX key index", desc: "Get element by index" },
        { cmd: "LSET key index value", desc: "Set element at index" },
        { cmd: "LINSERT key BEFORE|AFTER pivot val", desc: "Insert element" },
        { cmd: "LREM key count value", desc: "Remove elements" },
        { cmd: "LTRIM key start stop", desc: "Trim list to range" },
        { cmd: "BLPOP key [key] timeout", desc: "Blocking left pop" },
      ],
    },
    {
      title: "Sets",
      icon: "circle-dot",
      color: "purple",
      commands: [
        { cmd: "SADD key member [member]", desc: "Add members to set" },
        { cmd: "SREM key member [member]", desc: "Remove members" },
        { cmd: "SMEMBERS key", desc: "Get all members" },
        { cmd: "SISMEMBER key member", desc: "Check if member exists" },
        { cmd: "SCARD key", desc: "Get set size" },
        { cmd: "SPOP key [count]", desc: "Remove random member(s)" },
        { cmd: "SRANDMEMBER key [count]", desc: "Get random member(s)" },
        { cmd: "SUNION key [key ...]", desc: "Union of sets" },
        { cmd: "SINTER key [key ...]", desc: "Intersection of sets" },
        { cmd: "SDIFF key [key ...]", desc: "Difference of sets" },
        { cmd: "SMOVE source dest member", desc: "Move member between sets" },
      ],
    },
    {
      title: "Sorted Sets",
      icon: "sort-asc",
      color: "cyan",
      commands: [
        { cmd: "ZADD key score member", desc: "Add with score" },
        { cmd: "ZREM key member", desc: "Remove member" },
        { cmd: "ZSCORE key member", desc: "Get member's score" },
        { cmd: "ZRANK key member", desc: "Get member's rank (asc)" },
        { cmd: "ZREVRANK key member", desc: "Get member's rank (desc)" },
        { cmd: "ZRANGE key start stop", desc: "Get range by rank" },
        { cmd: "ZREVRANGE key start stop", desc: "Get range (desc)" },
        { cmd: "ZRANGEBYSCORE key min max", desc: "Get by score range" },
        { cmd: "ZCARD key", desc: "Get set size" },
        { cmd: "ZCOUNT key min max", desc: "Count in score range" },
        { cmd: "ZINCRBY key incr member", desc: "Increment score" },
      ],
    },
    {
      title: "Hashes",
      icon: "braces",
      color: "orange",
      commands: [
        { cmd: "HSET key field value", desc: "Set hash field" },
        { cmd: "HGET key field", desc: "Get hash field" },
        { cmd: "HMSET key f1 v1 f2 v2", desc: "Set multiple fields" },
        { cmd: "HMGET key f1 f2", desc: "Get multiple fields" },
        { cmd: "HGETALL key", desc: "Get all fields and values" },
        { cmd: "HDEL key field [field]", desc: "Delete field(s)" },
        { cmd: "HEXISTS key field", desc: "Check if field exists" },
        { cmd: "HKEYS key", desc: "Get all field names" },
        { cmd: "HVALS key", desc: "Get all values" },
        { cmd: "HLEN key", desc: "Get number of fields" },
        { cmd: "HINCRBY key field amount", desc: "Increment field value" },
        { cmd: "HSETNX key field value", desc: "Set if field doesn't exist" },
      ],
    },
    {
      title: "Pub/Sub",
      icon: "radio",
      color: "purple",
      commands: [
        { cmd: "SUBSCRIBE channel [channel]", desc: "Subscribe to channel(s)" },
        { cmd: "PSUBSCRIBE pattern", desc: "Subscribe to pattern" },
        { cmd: "PUBLISH channel message", desc: "Publish message" },
        { cmd: "UNSUBSCRIBE [channel]", desc: "Unsubscribe from channel" },
        { cmd: "PUBSUB CHANNELS [pattern]", desc: "List active channels" },
        { cmd: "PUBSUB NUMSUB [channel]", desc: "Count subscribers" },
      ],
    },
    {
      title: "Transactions",
      icon: "combine",
      color: "blue",
      commands: [
        { cmd: "MULTI", desc: "Start transaction" },
        { cmd: "EXEC", desc: "Execute transaction" },
        { cmd: "DISCARD", desc: "Discard transaction" },
        { cmd: "WATCH key [key ...]", desc: "Watch keys for changes" },
        { cmd: "UNWATCH", desc: "Unwatch all keys" },
      ],
    },
    {
      title: "Server & Info",
      icon: "server",
      color: "gray",
      commands: [
        { cmd: "INFO [section]", desc: "Get server information" },
        { cmd: "DBSIZE", desc: "Get number of keys" },
        { cmd: "FLUSHDB [ASYNC]", desc: "Delete all keys in DB" },
        { cmd: "FLUSHALL [ASYNC]", desc: "Delete all keys in all DBs" },
        { cmd: "SAVE", desc: "Synchronous save to disk" },
        { cmd: "BGSAVE", desc: "Background save to disk" },
        { cmd: "LASTSAVE", desc: "Get last save timestamp" },
        { cmd: "CONFIG GET parameter", desc: "Get config value" },
        { cmd: "CONFIG SET param value", desc: "Set config value" },
        { cmd: "CLIENT LIST", desc: "List connected clients" },
      ],
    },
  ];

  const quickRef = [
    { term: "KEYS *", desc: "All keys (use SCAN in prod)" },
    { term: "NX", desc: "Only if not exists" },
    { term: "XX", desc: "Only if exists" },
    { term: "EX", desc: "Expire in seconds" },
    { term: "PX", desc: "Expire in milliseconds" },
    { term: "-1", desc: "No expiration set" },
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
              <div className="absolute inset-0 bg-red/20 blur-xl rounded-full" />
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-red/20 to-orange/20 border border-border-default flex items-center justify-center print:w-10 print:h-10">
                <Icon
                  name="database"
                  className="w-7 h-7 text-red print:w-5 print:h-5"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary print:text-xl tracking-tight">
                Redis Cheat Sheet
              </h1>
              <p className="text-sm text-text-secondary mt-0.5">
                Complete reference for Redis commands
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
            <Icon name="terminal" className="w-4 h-4 text-red" />
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
                <code className="px-2 py-1 bg-bg-tertiary/80 rounded-md text-red font-mono text-xs print:text-[9px] print:px-1 border border-border-subtle">
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
                      <code className="block text-xs font-mono text-red break-all print:text-[8px] print:leading-tight leading-relaxed whitespace-pre-wrap">
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
            <div className="w-8 h-8 rounded-lg bg-red/10 flex items-center justify-center">
              <Icon name="database" className="w-4 h-4 text-red" />
            </div>
            <span className="text-text-secondary">Redis Cheat Sheet</span>
          </div>
          <div className="flex items-center gap-6 print:gap-3">
            <a
              href="https://redis.io/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-secondary transition-colors"
            >
              <Icon name="book-open" className="w-4 h-4 print:w-3 print:h-3" />
              <span>redis.io/docs</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RedisCheatSheet;
