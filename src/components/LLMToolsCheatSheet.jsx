import { Icon } from "./Icon";
import { useCopyWithAnalytics } from "../hooks/useCopyWithAnalytics";

const LLMToolsCheatSheet = () => {
  const { copiedCmd, copyToClipboard } = useCopyWithAnalytics("llmtools", "AI & ML");

  const sections = [
    {
      title: "LangChain Core",
      icon: "link",
      color: "green",
      commands: [
        { cmd: "Chains", desc: "Sequence of calls to LLMs, tools, or data sources" },
        { cmd: "Agents", desc: "LLMs that decide which actions to take dynamically" },
        { cmd: "Memory", desc: "Persist state between chain/agent calls" },
        { cmd: "Callbacks", desc: "Hook into chain execution for logging/streaming" },
        { cmd: "LCEL", desc: "LangChain Expression Language - declarative chain composition" },
        { cmd: "Runnables", desc: "Base interface for all chain components (invoke, batch, stream)" },
        { cmd: "Output Parsers", desc: "Structure LLM text output into usable formats" },
        { cmd: "Document Loaders", desc: "Load data from various sources (PDF, web, DB)" },
      ],
    },
    {
      title: "LlamaIndex",
      icon: "database",
      color: "purple",
      commands: [
        { cmd: "Index", desc: "Data structure for efficient retrieval (Vector, List, Tree, Keyword)" },
        { cmd: "Query Engine", desc: "Interface to query your indexed data with natural language" },
        { cmd: "Retriever", desc: "Fetches relevant nodes/chunks from index" },
        { cmd: "Node", desc: "Chunk of text with metadata from original document" },
        { cmd: "Response Synthesizer", desc: "Combines retrieved nodes into coherent response" },
        { cmd: "Data Connectors", desc: "Load data from APIs, databases, files (100+ sources)" },
        { cmd: "Chat Engine", desc: "Conversational interface with memory over your data" },
        { cmd: "Agents", desc: "Autonomous reasoning over tools and data sources" },
      ],
    },
    {
      title: "OpenAI API",
      icon: "sparkles",
      color: "cyan",
      commands: [
        { cmd: "GPT-4o", desc: "Latest multimodal model - text, vision, audio" },
        { cmd: "GPT-4 Turbo", desc: "128K context, knowledge up to Dec 2023" },
        { cmd: "GPT-3.5 Turbo", desc: "Fast, cost-effective for simpler tasks" },
        { cmd: "Temperature", desc: "0-2, controls randomness (0=deterministic, 2=creative)" },
        { cmd: "Max Tokens", desc: "Limit response length (input + output combined)" },
        { cmd: "Top P", desc: "Nucleus sampling - alternative to temperature" },
        { cmd: "Function Calling", desc: "Structured outputs for tool use and APIs" },
        { cmd: "JSON Mode", desc: "Force valid JSON output with response_format" },
      ],
    },
    {
      title: "Anthropic API",
      icon: "message-square",
      color: "orange",
      commands: [
        { cmd: "Claude 3.5 Sonnet", desc: "Best balance of speed, cost, and intelligence" },
        { cmd: "Claude 3 Opus", desc: "Most capable for complex reasoning tasks" },
        { cmd: "Claude 3 Haiku", desc: "Fastest and most cost-effective" },
        { cmd: "System Prompt", desc: "Set behavior, personality, and constraints" },
        { cmd: "200K Context", desc: "Process very long documents in single request" },
        { cmd: "Tool Use", desc: "Define tools/functions Claude can call" },
        { cmd: "Vision", desc: "Analyze images with text prompts" },
        { cmd: "Streaming", desc: "Get response tokens as they're generated" },
      ],
    },
    {
      title: "Hugging Face",
      icon: "box",
      color: "yellow",
      commands: [
        { cmd: "Transformers", desc: "Library for using pre-trained models" },
        { cmd: "Pipeline", desc: "High-level API for common tasks (sentiment, QA, etc.)" },
        { cmd: "AutoModel", desc: "Auto-detect and load correct model architecture" },
        { cmd: "Tokenizer", desc: "Convert text to tokens model can understand" },
        { cmd: "Model Hub", desc: "400K+ pre-trained models to download" },
        { cmd: "Datasets", desc: "100K+ datasets for training and evaluation" },
        { cmd: "Inference API", desc: "Hosted API for model inference without setup" },
        { cmd: "Spaces", desc: "Host ML demos and apps (Gradio, Streamlit)" },
      ],
    },
    {
      title: "Vector Databases",
      icon: "database",
      color: "blue",
      commands: [
        { cmd: "Pinecone", desc: "Managed vector DB - serverless, scalable, low latency" },
        { cmd: "Chroma", desc: "Open-source, embedded vector DB for local dev" },
        { cmd: "Weaviate", desc: "Open-source with hybrid search (vector + keyword)" },
        { cmd: "Milvus", desc: "Distributed vector DB for billion-scale" },
        { cmd: "Qdrant", desc: "Rust-based, filtering + payload support" },
        { cmd: "pgvector", desc: "PostgreSQL extension for vector similarity" },
        { cmd: "FAISS", desc: "Facebook's library for efficient similarity search" },
        { cmd: "Similarity Metrics", desc: "Cosine, Euclidean, Dot Product for matching" },
      ],
    },
    {
      title: "RAG Architecture",
      icon: "git-branch",
      color: "green",
      commands: [
        { cmd: "RAG", desc: "Retrieval Augmented Generation - ground LLM in external data" },
        { cmd: "Chunking", desc: "Split documents into optimal-size pieces (512-1024 tokens)" },
        { cmd: "Embedding", desc: "Convert chunks to vectors for similarity search" },
        { cmd: "Retrieval", desc: "Find top-k most relevant chunks for query" },
        { cmd: "Reranking", desc: "Re-score retrieved chunks for better relevance" },
        { cmd: "Context Window", desc: "Inject retrieved chunks into LLM prompt" },
        { cmd: "Hybrid Search", desc: "Combine vector + keyword search for better recall" },
        { cmd: "Query Transform", desc: "Rewrite/expand user query for better retrieval" },
      ],
    },
    {
      title: "Embeddings",
      icon: "hash",
      color: "purple",
      commands: [
        { cmd: "text-embedding-3-large", desc: "OpenAI's best embedding model (3072 dims)" },
        { cmd: "text-embedding-3-small", desc: "Efficient OpenAI model (1536 dims)" },
        { cmd: "all-MiniLM-L6-v2", desc: "Fast open-source embedding (384 dims)" },
        { cmd: "bge-large-en", desc: "Top open-source for English (1024 dims)" },
        { cmd: "Voyage AI", desc: "State-of-art embeddings for retrieval" },
        { cmd: "Cohere Embed", desc: "Multilingual embeddings with compression" },
        { cmd: "Dimensionality", desc: "Higher = more info, but slower search" },
        { cmd: "Normalization", desc: "L2 normalize vectors for cosine similarity" },
      ],
    },
    {
      title: "Fine-Tuning",
      icon: "settings",
      color: "red",
      commands: [
        { cmd: "Full Fine-Tuning", desc: "Update all model weights - expensive, powerful" },
        { cmd: "LoRA", desc: "Low-Rank Adaptation - train small adapter layers" },
        { cmd: "QLoRA", desc: "LoRA with quantization - fits on consumer GPUs" },
        { cmd: "PEFT", desc: "Parameter-Efficient Fine-Tuning library" },
        { cmd: "OpenAI Fine-Tuning", desc: "Upload JSONL, train GPT-3.5/4 on your data" },
        { cmd: "Instruction Tuning", desc: "Train model to follow instructions better" },
        { cmd: "RLHF", desc: "Reinforcement Learning from Human Feedback" },
        { cmd: "DPO", desc: "Direct Preference Optimization - simpler than RLHF" },
      ],
    },
    {
      title: "Agents & Tools",
      icon: "terminal",
      color: "cyan",
      commands: [
        { cmd: "ReAct", desc: "Reasoning + Acting - think then act loop" },
        { cmd: "Tool Calling", desc: "LLM invokes external functions/APIs" },
        { cmd: "Planning", desc: "Break complex tasks into sub-tasks" },
        { cmd: "Self-Reflection", desc: "Agent evaluates and corrects own output" },
        { cmd: "Multi-Agent", desc: "Multiple specialized agents collaborate" },
        { cmd: "AutoGPT", desc: "Fully autonomous task completion" },
        { cmd: "CrewAI", desc: "Role-based multi-agent orchestration" },
        { cmd: "LangGraph", desc: "Build stateful, multi-step agent workflows" },
      ],
    },
    {
      title: "Memory & Context",
      icon: "layers",
      color: "orange",
      commands: [
        { cmd: "Buffer Memory", desc: "Store full conversation history" },
        { cmd: "Window Memory", desc: "Keep only last K messages" },
        { cmd: "Summary Memory", desc: "LLM summarizes conversation to save tokens" },
        { cmd: "Entity Memory", desc: "Track entities mentioned in conversation" },
        { cmd: "Vector Memory", desc: "Store messages in vector DB for retrieval" },
        { cmd: "Conversation Buffer", desc: "Simple list of human/AI message pairs" },
        { cmd: "Token Counting", desc: "Track context usage to avoid limits" },
        { cmd: "Context Compression", desc: "Reduce context size while preserving info" },
      ],
    },
    {
      title: "Evaluation",
      icon: "check-circle",
      color: "yellow",
      commands: [
        { cmd: "RAGAS", desc: "RAG evaluation - faithfulness, relevance, recall" },
        { cmd: "LLM-as-Judge", desc: "Use LLM to evaluate other LLM outputs" },
        { cmd: "Human Eval", desc: "Gold standard but expensive and slow" },
        { cmd: "Benchmarks", desc: "MMLU, HumanEval, GSM8K for comparison" },
        { cmd: "Faithfulness", desc: "Is response grounded in retrieved context?" },
        { cmd: "Relevance", desc: "Does response answer the actual question?" },
        { cmd: "Groundedness", desc: "Are claims supported by evidence?" },
        { cmd: "Toxicity Check", desc: "Detect harmful or inappropriate content" },
      ],
    },
    {
      title: "Deployment",
      icon: "cloud",
      color: "blue",
      commands: [
        { cmd: "vLLM", desc: "High-throughput inference with PagedAttention" },
        { cmd: "TGI", desc: "Text Generation Inference - HF's production server" },
        { cmd: "Ollama", desc: "Run LLMs locally with simple CLI" },
        { cmd: "LMStudio", desc: "Desktop app for local model inference" },
        { cmd: "Modal", desc: "Serverless GPU infrastructure for ML" },
        { cmd: "Replicate", desc: "API for running open-source models" },
        { cmd: "Quantization", desc: "Reduce model size (INT8, INT4) for faster inference" },
        { cmd: "Batching", desc: "Process multiple requests together for efficiency" },
      ],
    },
    {
      title: "Cost Optimization",
      icon: "dollar-sign",
      color: "green",
      commands: [
        { cmd: "Caching", desc: "Store responses to avoid duplicate API calls" },
        { cmd: "Semantic Cache", desc: "Cache based on meaning, not exact match" },
        { cmd: "Model Routing", desc: "Use cheaper models for simple queries" },
        { cmd: "Prompt Compression", desc: "Reduce token count without losing meaning" },
        { cmd: "Batch Processing", desc: "Group requests for volume discounts" },
        { cmd: "Token Limits", desc: "Set max_tokens to prevent runaway costs" },
        { cmd: "Fallback Chains", desc: "Try cheap model first, escalate if needed" },
        { cmd: "Output Streaming", desc: "Stop generation early if answer found" },
      ],
    },
    {
      title: "Security & Safety",
      icon: "shield",
      color: "red",
      commands: [
        { cmd: "Prompt Injection", desc: "User input that hijacks system instructions" },
        { cmd: "Jailbreaking", desc: "Bypassing model safety restrictions" },
        { cmd: "Input Validation", desc: "Filter/sanitize user inputs before LLM" },
        { cmd: "Output Filtering", desc: "Check responses for harmful content" },
        { cmd: "Guardrails", desc: "NeMo Guardrails - programmable safety rails" },
        { cmd: "Rate Limiting", desc: "Prevent abuse and control costs" },
        { cmd: "PII Detection", desc: "Find and redact personal information" },
        { cmd: "Audit Logging", desc: "Track all prompts and responses" },
      ],
    },
    {
      title: "Key Concepts",
      icon: "book-open",
      color: "gray",
      commands: [
        { cmd: "Token", desc: "Basic unit of text (~4 chars English, varies by model)" },
        { cmd: "Context Window", desc: "Max tokens model can process at once" },
        { cmd: "Latency", desc: "Time to first token (TTFT) and total response time" },
        { cmd: "Throughput", desc: "Tokens per second model can generate" },
        { cmd: "Hallucination", desc: "Model generates plausible but false information" },
        { cmd: "Grounding", desc: "Anchoring responses in factual/retrieved data" },
        { cmd: "Temperature", desc: "Controls randomness/creativity of output" },
        { cmd: "Inference", desc: "Running trained model to generate predictions" },
      ],
    },
  ];

  const quickRef = [
    { term: "LangChain", desc: "Chains & agents" },
    { term: "LlamaIndex", desc: "Data indexing" },
    { term: "RAG", desc: "Retrieval + Gen" },
    { term: "Vector DB", desc: "Similarity search" },
    { term: "Embeddings", desc: "Text → vectors" },
    { term: "Fine-tune", desc: "Adapt models" },
    { term: "Agent", desc: "Autonomous AI" },
    { term: "Guardrails", desc: "Safety filters" },
  ];

  const colorClasses = {
    purple: "border-purple/30 bg-purple/5",
    blue: "border-blue/30 bg-blue/5",
    green: "border-green/30 bg-green/5",
    orange: "border-orange/30 bg-orange/5",
    cyan: "border-accent-cyan/30 bg-accent-cyan/5",
    yellow: "border-yellow/30 bg-yellow/5",
    red: "border-red/30 bg-red/5",
    gray: "border-gray/30 bg-gray/5",
  };

  const iconColorClasses = {
    purple: "text-purple",
    blue: "text-blue",
    green: "text-green",
    orange: "text-orange",
    cyan: "text-accent-cyan",
    yellow: "text-yellow",
    red: "text-red",
    gray: "text-gray",
  };

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-12 px-4 md:px-6 lg:px-8 print:pt-4 print:pb-2 print:px-2">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 print:mb-4">
          <div className="inline-flex items-center gap-3 mb-4 print:mb-2">
            <div className="p-3 bg-green/10 rounded-xl border border-green/30 print:p-1">
              <Icon name="blocks" className="w-8 h-8 text-green print:w-5 print:h-5" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary print:text-2xl">
              LLM Tools & Frameworks
            </h1>
          </div>
          <p className="text-text-secondary text-lg print:text-sm">
            120+ concepts for LangChain, LlamaIndex, RAG, Vector DBs, and more
          </p>
        </div>

        {/* Quick Reference Bar */}
        <div className="bg-bg-secondary/50 backdrop-blur-sm rounded-xl border border-border-default p-4 mb-8 print:p-2 print:mb-4">
          <div className="flex flex-wrap justify-center gap-4 print:gap-2">
            {quickRef.map((item) => (
              <div
                key={item.term}
                className="flex items-center gap-2 text-sm print:text-xs"
              >
                <span className="text-green font-semibold">{item.term}</span>
                <span className="text-text-muted">→</span>
                <span className="text-text-secondary">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cheat Sheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 print:grid-cols-4 print:gap-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className={`rounded-xl border ${colorClasses[section.color]} p-4 print:p-2`}
            >
              <div className="flex items-center gap-2 mb-3 print:mb-1">
                <Icon
                  name={section.icon}
                  className={`w-5 h-5 ${iconColorClasses[section.color]} print:w-3 print:h-3`}
                />
                <h2 className="font-semibold text-text-primary print:text-xs">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-2 print:space-y-0.5">
                {section.commands.map((cmd, index) => (
                  <div
                    key={index}
                    onClick={() => copyToClipboard(cmd.cmd)}
                    className="group cursor-pointer hover:bg-bg-secondary/50 rounded-lg p-2 transition-all print:p-0.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <code className="text-green text-sm font-medium print:text-[8px]">
                          {cmd.cmd}
                        </code>
                        <p className="text-text-secondary text-xs mt-0.5 print:text-[7px] print:mt-0">
                          {cmd.desc}
                        </p>
                      </div>
                      <Icon
                        name={copiedCmd === cmd.cmd ? "check" : "copy"}
                        className={`w-4 h-4 flex-shrink-0 transition-all print:hidden ${
                          copiedCmd === cmd.cmd
                            ? "text-green"
                            : "text-text-muted opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-text-muted text-sm print:mt-4 print:text-xs">
          <p>Click any term to copy • Covers LangChain, LlamaIndex, OpenAI, Anthropic, and more</p>
        </div>
      </div>
    </div>
  );
};

export default LLMToolsCheatSheet;
