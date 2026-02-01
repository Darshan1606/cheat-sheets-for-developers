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

const PromptCheatSheet = () => {
  const { copiedCmd, copyToClipboard } = useCopyWithAnalytics("prompt", "AI & ML");

  const sections: Section[] = [
    {
      title: "Basic Prompt Structure",
      icon: "layout",
      color: "blue",
      commands: [
        { cmd: "Role", desc: "Who the AI should be - defines persona and expertise level" },
        { cmd: "Context", desc: "Background information the AI needs to understand the situation" },
        { cmd: "Task", desc: "What you want the AI to accomplish - be specific and clear" },
        { cmd: "Format", desc: "How to structure the output (list, JSON, markdown, etc.)" },
        { cmd: "Constraints", desc: "Limitations, rules, and boundaries for the response" },
        { cmd: "Examples", desc: "Sample inputs/outputs to demonstrate expected behavior" },
        { cmd: "Template", desc: "You are a [role]. Given [context], please [task]. Format as [format]." },
        { cmd: "Ordering", desc: "Context → Role → Task → Format → Constraints (most effective order)" },
      ],
    },
    {
      title: "Zero-Shot Prompting",
      icon: "zap",
      color: "green",
      commands: [
        { cmd: "Definition", desc: "Direct instruction without providing any examples" },
        { cmd: "Best For", desc: "Simple, clear tasks that rely on model's pre-trained knowledge" },
        { cmd: "Example", desc: "Summarize the following text in 3 bullet points: [text]" },
        { cmd: "Example", desc: "Translate this to French: [text]" },
        { cmd: "Example", desc: "What is the capital of France?" },
        { cmd: "Tip: Be Specific", desc: "Use precise language - avoid ambiguous words" },
        { cmd: "Tip: Be Direct", desc: "State the task immediately without unnecessary preamble" },
        { cmd: "Limitation", desc: "May struggle with complex or nuanced tasks without examples" },
      ],
    },
    {
      title: "Few-Shot Prompting",
      icon: "list",
      color: "purple",
      commands: [
        { cmd: "Definition", desc: "Provide examples before the actual task to show the pattern" },
        { cmd: "Best For", desc: "Complex tasks, specific formats, or nuanced behavior" },
        { cmd: "Format", desc: "Input: [ex1] → Output: [result1] | Input: [ex2] → Output: [result2]" },
        { cmd: "Example Count", desc: "Use 2-5 representative examples for best results" },
        { cmd: "Consistency", desc: "Keep all examples in the same format and style" },
        { cmd: "Ordering", desc: "Arrange examples from simple to complex for better learning" },
        { cmd: "Diversity", desc: "Include varied examples to cover edge cases" },
        { cmd: "Quality", desc: "Ensure examples are correct - model will learn from mistakes too" },
      ],
    },
    {
      title: "Chain of Thought (CoT)",
      icon: "git-branch",
      color: "orange",
      commands: [
        { cmd: "Definition", desc: "Ask model to show reasoning steps before giving final answer" },
        { cmd: "Magic Phrase", desc: "Let's think step by step... (triggers reasoning mode)" },
        { cmd: "Zero-shot CoT", desc: "Add 'think step by step' to any prompt without examples" },
        { cmd: "Few-shot CoT", desc: "Provide examples that include the reasoning process" },
        { cmd: "Best For", desc: "Math problems, logic puzzles, multi-step reasoning tasks" },
        { cmd: "Benefit", desc: "More accurate results and transparent, debuggable reasoning" },
        { cmd: "Format", desc: "Problem → Step 1: [reasoning] → Step 2: [reasoning] → Answer" },
        { cmd: "Verification", desc: "Ask model to verify its answer after reasoning" },
      ],
    },
    {
      title: "Role Prompting",
      icon: "user",
      color: "cyan",
      commands: [
        { cmd: "Definition", desc: "Assign a specific persona or expert role to the AI" },
        { cmd: "Effect", desc: "Changes tone, vocabulary, depth, and perspective of responses" },
        { cmd: "Expert Role", desc: "You are an expert Python developer with 10 years experience..." },
        { cmd: "Teacher Role", desc: "Act as a patient teacher explaining to beginners..." },
        { cmd: "Reviewer Role", desc: "You are a senior code reviewer focused on best practices..." },
        { cmd: "Support Role", desc: "Respond as a friendly customer support agent..." },
        { cmd: "Combine", desc: "Mix role with expertise level: 'senior data scientist who...' " },
        { cmd: "Consistency", desc: "Maintain role throughout conversation for coherent responses" },
      ],
    },
    {
      title: "System vs User Prompts",
      icon: "layers",
      color: "yellow",
      commands: [
        { cmd: "System Prompt", desc: "Sets overall behavior, persistent across entire conversation" },
        { cmd: "System Use", desc: "Define role, rules, constraints, and response format" },
        { cmd: "User Prompt", desc: "Individual requests that change each turn" },
        { cmd: "User Use", desc: "Specific tasks, questions, and content to process" },
        { cmd: "Best Practice", desc: "Put stable instructions in system, dynamic content in user" },
        { cmd: "System Example", desc: "You are a helpful coding assistant. Always explain your code." },
        { cmd: "User Example", desc: "Write a function to sort a list of numbers" },
        { cmd: "Separation", desc: "Keep concerns separate - system for 'how', user for 'what'" },
      ],
    },
    {
      title: "Output Formatting",
      icon: "align-left",
      color: "red",
      commands: [
        { cmd: "JSON", desc: "Respond in JSON format: {\"key\": \"value\", ...}" },
        { cmd: "Markdown", desc: "Use markdown with headers (##) and bullet points" },
        { cmd: "List", desc: "Format as a numbered list: 1. First 2. Second 3. Third" },
        { cmd: "Table", desc: "Provide a table with columns: Name, Description, Example" },
        { cmd: "Code Only", desc: "Return only the code, no explanations or markdown" },
        { cmd: "Structured", desc: "## Summary [text] ## Details [text] ## Next Steps [text]" },
        { cmd: "Length", desc: "Respond in exactly 3 sentences / 100 words / 5 bullet points" },
        { cmd: "Template", desc: "Fill in this template: [provide exact format to follow]" },
      ],
    },
    {
      title: "Constraints & Boundaries",
      icon: "shield",
      color: "blue",
      commands: [
        { cmd: "Length Limit", desc: "In 100 words or less... / Maximum 3 paragraphs" },
        { cmd: "Tone", desc: "Use a professional/casual/formal/friendly tone" },
        { cmd: "Audience", desc: "Explain for a 10-year-old / technical expert / beginner" },
        { cmd: "Exclusions", desc: "Do not include... / Avoid mentioning... / Skip..." },
        { cmd: "Requirements", desc: "Must include... / Always mention... / Ensure..." },
        { cmd: "Language", desc: "Use simple vocabulary / Avoid jargon / Technical terms only" },
        { cmd: "Scope", desc: "Focus only on X, do not discuss Y or Z" },
        { cmd: "Boundaries", desc: "Do not make assumptions beyond the given data" },
      ],
    },
    {
      title: "Prompt Chaining",
      icon: "link",
      color: "green",
      commands: [
        { cmd: "Definition", desc: "Break complex tasks into steps, output of one feeds next" },
        { cmd: "Step 1", desc: "Analyze this data and identify key trends" },
        { cmd: "Step 2", desc: "Based on these trends, suggest 3 strategies" },
        { cmd: "Step 3", desc: "Create an implementation plan for strategy #2" },
        { cmd: "Benefit", desc: "Handles complex multi-step tasks more reliably" },
        { cmd: "Debugging", desc: "Easier to identify and fix issues at each step" },
        { cmd: "Review", desc: "Can review and adjust between steps before continuing" },
        { cmd: "Best For", desc: "Research, analysis, content creation, problem-solving" },
      ],
    },
    {
      title: "Self-Consistency",
      icon: "check-circle",
      color: "purple",
      commands: [
        { cmd: "Definition", desc: "Generate multiple responses and select the most consistent" },
        { cmd: "Technique", desc: "Ask same question in different ways, compare results" },
        { cmd: "Multiple Paths", desc: "Solve this problem 3 different ways, then pick the best" },
        { cmd: "Voting", desc: "Generate 5 answers, majority vote determines final answer" },
        { cmd: "Synthesis", desc: "Combine the best parts of multiple generated solutions" },
        { cmd: "Validation", desc: "After answering, verify by approaching from different angle" },
        { cmd: "Best For", desc: "Complex reasoning, decision making, critical outputs" },
        { cmd: "Trade-off", desc: "More reliable results but uses more tokens/time" },
      ],
    },
    {
      title: "ReAct Pattern",
      icon: "repeat",
      color: "orange",
      commands: [
        { cmd: "Definition", desc: "Reasoning + Acting framework: Thought → Action → Observation loop" },
        { cmd: "Thought", desc: "Model reasons about what to do next" },
        { cmd: "Action", desc: "Model decides what action to take (search, calculate, etc.)" },
        { cmd: "Observation", desc: "Result of the action is fed back to model" },
        { cmd: "Loop", desc: "Repeat until task is complete, then give Final Answer" },
        { cmd: "Format", desc: "Thought: [reasoning] Action: [action] Observation: [result]" },
        { cmd: "Best For", desc: "Research tasks, tool use, multi-step problem solving" },
        { cmd: "Benefit", desc: "Transparent reasoning and ability to use external tools" },
      ],
    },
    {
      title: "Negative Prompting",
      icon: "x-circle",
      color: "cyan",
      commands: [
        { cmd: "Definition", desc: "Explicitly specify what NOT to do to avoid common mistakes" },
        { cmd: "Exclusion", desc: "Do NOT include code examples in your response" },
        { cmd: "Avoidance", desc: "Avoid using technical jargon or acronyms" },
        { cmd: "Skip", desc: "Skip the introduction and get straight to the point" },
        { cmd: "Never", desc: "Never respond with 'I cannot' - always offer alternatives" },
        { cmd: "Combined", desc: "DO: Use simple analogies. DON'T: Use math formulas." },
        { cmd: "Behavior", desc: "Do not apologize or use filler phrases" },
        { cmd: "Best For", desc: "Preventing unwanted patterns, refining output style" },
      ],
    },
    {
      title: "Context Management",
      icon: "database",
      color: "yellow",
      commands: [
        { cmd: "Challenge", desc: "LLMs have limited context windows - manage content wisely" },
        { cmd: "Summarize", desc: "Provide summary of previous context: [condensed info]" },
        { cmd: "Relevant Only", desc: "Include only the parts of documents relevant to task" },
        { cmd: "Prioritize", desc: "Put most important information first (primacy effect)" },
        { cmd: "Recency", desc: "Place critical instructions at end too (recency effect)" },
        { cmd: "Chunking", desc: "For long documents: break into chunks, process sequentially" },
        { cmd: "Remove Noise", desc: "Strip redundant content, boilerplate, and formatting" },
        { cmd: "Reference", desc: "Use 'as mentioned above' to reference without repeating" },
      ],
    },
    {
      title: "Task-Specific Patterns",
      icon: "briefcase",
      color: "red",
      commands: [
        { cmd: "Coding", desc: "Write [language] code that [task]. Include comments and error handling." },
        { cmd: "Writing", desc: "Write a [type] about [topic] in [tone] for [audience]." },
        { cmd: "Analysis", desc: "Analyze [data] and provide: 1) Findings 2) Implications 3) Recommendations" },
        { cmd: "Summary", desc: "Summarize [content] in [length], focusing on [key aspects]." },
        { cmd: "Translation", desc: "Translate to [language], maintaining [tone/formality level]." },
        { cmd: "Brainstorm", desc: "Generate [number] ideas for [topic], considering [constraints]." },
        { cmd: "Comparison", desc: "Compare [A] and [B] in terms of [criteria]. Present as table." },
        { cmd: "Explanation", desc: "Explain [concept] to [audience] using [analogies/examples]." },
      ],
    },
    {
      title: "Common Mistakes",
      icon: "alert-triangle",
      color: "gray",
      commands: [
        { cmd: "Vague → Specific", desc: "Instead of 'make it better', say exactly what to improve" },
        { cmd: "Multi-task → Single", desc: "One task per prompt; chain prompts for complex work" },
        { cmd: "No Context → Context", desc: "Provide necessary background; don't assume AI knows" },
        { cmd: "No Format → Format", desc: "Always specify desired output structure" },
        { cmd: "Too Long → Concise", desc: "Be complete but not verbose; remove unnecessary words" },
        { cmd: "No Examples → Few-shot", desc: "For complex tasks, always include examples" },
        { cmd: "Not Iterating", desc: "Refine prompts based on outputs; rarely perfect first try" },
        { cmd: "Ignoring Edge Cases", desc: "Specify how to handle unusual or boundary conditions" },
      ],
    },
    {
      title: "Prompt Templates",
      icon: "file-text",
      color: "blue",
      commands: [
        { cmd: "General", desc: "As a [role], help me [task]. Consider [context]. Format as [format]." },
        { cmd: "Analysis", desc: "Analyze [content]. Provide: 1) Summary 2) Key insights 3) Recommendations" },
        { cmd: "Creative", desc: "Write [format] about [topic], [tone/style], for [audience], [length]." },
        { cmd: "Problem-Solve", desc: "Problem: [X] Constraints: [Y] Goal: [Z] Give step-by-step solution." },
        { cmd: "Review", desc: "Review [content]: list Strengths, Areas for improvement, Specific suggestions" },
        { cmd: "Learning", desc: "Explain [topic] as if I'm a [level]. Use [examples/analogies]." },
        { cmd: "Decision", desc: "Given [options], recommend the best choice. Consider [criteria]. Justify." },
        { cmd: "Debug", desc: "This [code/text] has issues. Identify problems and suggest fixes." },
      ],
    },
  ];

  const quickRef: QuickRefItem[] = [
    { term: "Zero-shot", desc: "No examples given" },
    { term: "Few-shot", desc: "Include examples" },
    { term: "CoT", desc: "Chain of Thought" },
    { term: "Role", desc: "Assign persona" },
    { term: "Context", desc: "Background info" },
    { term: "Task", desc: "What to do" },
    { term: "Format", desc: "Output structure" },
    { term: "Constraints", desc: "Limitations" },
  ];

  const colorClasses: Record<string, string> = {
    purple: "border-purple/30 bg-purple/5",
    blue: "border-blue/30 bg-blue/5",
    green: "border-green/30 bg-green/5",
    orange: "border-orange/30 bg-orange/5",
    cyan: "border-accent-cyan/30 bg-accent-cyan/5",
    yellow: "border-yellow/30 bg-yellow/5",
    red: "border-red/30 bg-red/5",
    gray: "border-gray/30 bg-gray/5",
  };

  const iconColorClasses: Record<string, string> = {
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
            <div className="p-3 bg-accent-coral/10 rounded-xl border border-accent-coral/30 print:p-1">
              <Icon name="message-square" className="w-8 h-8 text-accent-coral print:w-5 print:h-5" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary print:text-2xl">
              Prompt Engineering
            </h1>
          </div>
          <p className="text-text-secondary text-lg print:text-sm">
            100+ techniques, patterns, and best practices for effective AI prompting
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
                <span className="text-accent-coral font-semibold">{item.term}</span>
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
                        <code className="text-accent-coral text-sm font-medium print:text-[8px]">
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
          <p>Click any technique to copy • Use with any LLM (ChatGPT, Claude, etc.)</p>
        </div>
      </div>
    </div>
  );
};

export default PromptCheatSheet;
