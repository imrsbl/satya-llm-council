/* ============================================
   SATYA - AI LLM Council
   Application JavaScript
   ============================================ */

// ============================================
// CONFIGURATION
// ============================================

const OPENROUTER_API_KEY = ''; // REMOVED FOR SECURITY - User must provide key

const FREE_MODELS = [
    { id: 'meta-llama/llama-3.3-70b-instruct:free', name: 'Llama 3.3 70B', provider: 'Meta Free' },
    { id: 'deepseek/deepseek-r1-0528:free', name: 'DeepSeek R1', provider: 'DeepSeek Free' },
    { id: 'google/gemma-3-27b-it:free', name: 'Gemma 3 27B', provider: 'Google Free' },
    { id: 'google/gemini-2.0-flash-exp:free', name: 'Gemini 2.0 Flash', provider: 'Google Free' },
    { id: 'qwen/qwen3-coder:free', name: 'Qwen3 Coder', provider: 'Alibaba Free' },
    { id: 'xiaomi/mimo-v2-flash:free', name: 'MiMo-V2-Flash', provider: 'Xiaomi Free' },
    { id: 'mistralai/devstral-2512:free', name: 'Devstral', provider: 'Mistral Free' },
    { id: 'z-ai/glm-4.5-air:free', name: 'GLM 4.5 Air', provider: 'Z.AI Free' },
    { id: 'nousresearch/hermes-3-llama-3.1-405b:free', name: 'Hermes 3 405B', provider: 'Nous Free' },
    { id: 'moonshotai/kimi-k2:free', name: 'Kimi K2', provider: 'Moonshot Free' }
];

// ULTRA FREE - OpenRouter verified free models ranked by benchmark performance (Jan 2026)
const ULTRA_FREE_MODELS = [
    { id: 'nousresearch/hermes-3-llama-3.1-405b:free', name: 'Hermes 3 405B', provider: '#1 • 405B Params • Reasoning King' },
    { id: 'deepseek/deepseek-r1-0528:free', name: 'DeepSeek R1', provider: '#2 • 671B MoE • Math & Code' },
    { id: 'openai/gpt-oss-120b:free', name: 'GPT-OSS 120B', provider: '#3 • 120B Params • General' },
    { id: 'qwen/qwen3-coder:free', name: 'Qwen3 Coder', provider: '#4 • 480B MoE • Agentic Coding' },
    { id: 'meta-llama/llama-3.3-70b-instruct:free', name: 'Llama 3.3 70B', provider: '#5 • 70B Params • GPT-4 Level' },
    { id: 'mistralai/devstral-2512:free', name: 'Devstral', provider: '#6 • 123B Params • Code Master' },
    { id: 'google/gemini-2.0-flash-exp:free', name: 'Gemini 2.0 Flash', provider: '#7 • 1M Context • Multimodal' },
    { id: 'tngtech/deepseek-r1t2-chimera:free', name: 'DeepSeek R1T2 Chimera', provider: '#8 • Hybrid Reasoning' },
    { id: 'z-ai/glm-4.5-air:free', name: 'GLM 4.5 Air', provider: '#9 • Fast & Strong' },
    { id: 'google/gemma-3-27b-it:free', name: 'Gemma 3 27B', provider: '#10 • 27B Params • Multilingual' },
    { id: 'nvidia/nemotron-3-nano-30b-a3b:free', name: 'Nemotron 3 Nano 30B', provider: '#11 • 30B Params • Fast' },
    { id: 'xiaomi/mimo-v2-flash:free', name: 'MiMo-V2-Flash', provider: '#12 • High-Speed Analyst' },
    { id: 'openai/gpt-oss-20b:free', name: 'GPT-OSS 20B', provider: '#13 • 20B Params • Lightweight' },
    { id: 'nvidia/nemotron-nano-12b-v2-vl:free', name: 'Nemotron Nano 12B VL', provider: '#14 • 12B Vision-Language' },
    { id: 'mistralai/mistral-7b-instruct:free', name: 'Mistral 7B', provider: '#15 • 7B Params • Compact' }
];

// ============================================
// UNIFIED MODELS LIST - All available models
// ============================================

const MODELS = [
    // Top Free Models (Recommended)
    { id: 'nousresearch/hermes-3-llama-3.1-405b:free', name: 'Hermes 3 405B', provider: 'Nous • 405B Reasoning King' },
    { id: 'deepseek/deepseek-r1-0528:free', name: 'DeepSeek R1', provider: 'DeepSeek • 671B MoE Math/Code' },
    { id: 'meta-llama/llama-3.3-70b-instruct:free', name: 'Llama 3.3 70B', provider: 'Meta • GPT-4 Level' },
    { id: 'qwen/qwen3-coder:free', name: 'Qwen3 Coder', provider: 'Alibaba • Agentic Coding' },
    { id: 'google/gemini-2.0-flash-exp:free', name: 'Gemini 2.0 Flash', provider: 'Google • 1M Context' },
    { id: 'mistralai/devstral-2512:free', name: 'Devstral', provider: 'Mistral • Code Master' },
    { id: 'google/gemma-3-27b-it:free', name: 'Gemma 3 27B', provider: 'Google • Multilingual' },
    { id: 'z-ai/glm-4.5-air:free', name: 'GLM 4.5 Air', provider: 'Z.AI • Fast & Strong' },
    { id: 'xiaomi/mimo-v2-flash:free', name: 'MiMo-V2-Flash', provider: 'Xiaomi • High-Speed' },
    { id: 'moonshotai/kimi-k2:free', name: 'Kimi K2', provider: 'Moonshot • General' },
    { id: 'tngtech/deepseek-r1t2-chimera:free', name: 'DeepSeek Chimera', provider: 'TNG • Hybrid Reasoning' },

    // OpenAI Premium (GPT-5 Series)
    { id: 'openai/gpt-5.2-pro', name: 'GPT-5.2 Pro', provider: 'OpenAI Premium' },
    { id: 'openai/gpt-5.2-chat', name: 'GPT-5.2 Chat', provider: 'OpenAI Latest' },
    { id: 'openai/gpt-5.1-codex-max', name: 'GPT-5.1 Codex Max', provider: 'OpenAI Code' },
    { id: 'openai/gpt-5', name: 'GPT-5', provider: 'OpenAI' },

    // OpenAI Reasoning (o-Series)
    { id: 'openai/o4-mini', name: 'O4 Mini', provider: 'OpenAI Reasoning' },
    { id: 'openai/o3', name: 'O3', provider: 'OpenAI Reasoning' },
    { id: 'openai/o3-deep-research', name: 'O3 Deep Research', provider: 'OpenAI Deep' },
    { id: 'openai/o1', name: 'O1', provider: 'OpenAI Reasoning' },
    { id: 'openai/gpt-4o', name: 'GPT-4o', provider: 'OpenAI Flagship' },

    // xAI Grok
    { id: 'x-ai/grok-4', name: 'Grok 4', provider: 'xAI Premium' },
    { id: 'x-ai/grok-4.1-fast', name: 'Grok 4.1 Fast', provider: 'xAI Latest' },
    { id: 'x-ai/grok-4-fast', name: 'Grok 4 Fast', provider: 'xAI Fast' },
    { id: 'x-ai/grok-code-fast-1', name: 'Grok Code Fast 1', provider: 'xAI Code' },

    // Anthropic Claude
    { id: 'anthropic/claude-opus-4.5', name: 'Claude Opus 4.5', provider: 'Anthropic Premium' },
    { id: 'anthropic/claude-sonnet-4.5', name: 'Claude Sonnet 4.5', provider: 'Anthropic Latest' },
    { id: 'anthropic/claude-sonnet-4', name: 'Claude Sonnet 4', provider: 'Anthropic' },
    { id: 'anthropic/claude-3.5-sonnet', name: 'Claude 3.5 Sonnet', provider: 'Anthropic' },

    // Google Gemini
    { id: 'google/gemini-3-flash-preview', name: 'Gemini 3 Flash', provider: 'Google Latest' },
    { id: 'google/gemini-2.5-flash', name: 'Gemini 2.5 Flash', provider: 'Google Fast' },

    // DeepSeek Premium
    { id: 'deepseek/deepseek-v3.2', name: 'DeepSeek V3.2', provider: 'DeepSeek Latest' },
    { id: 'deepseek/deepseek-r1', name: 'DeepSeek R1', provider: 'DeepSeek Reasoning' },
    { id: 'deepseek/deepseek-chat', name: 'DeepSeek V3', provider: 'DeepSeek' },

    // Meta Llama Premium
    { id: 'meta-llama/llama-3.3-70b-instruct', name: 'Llama 3.3 70B (Paid)', provider: 'Meta Premium' },
    { id: 'meta-llama/llama-3.1-405b-instruct', name: 'Llama 3.1 405B', provider: 'Meta Premium' },

    // Others
    { id: 'mistralai/mistral-large-2411', name: 'Mistral Large', provider: 'Mistral AI' },
    { id: 'qwen/qwen-2.5-72b-instruct', name: 'Qwen 2.5 72B', provider: 'Alibaba' }
];

const ANONYMOUS_NAMES = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta'];

// Model metadata for filtering and tooltips
const MODEL_METADATA = {
    'meta-llama/llama-3.3-70b-instruct:free': { tags: ['Reasoning', 'Fast'], developer: 'Meta', description: 'GPT-4 level performance', tooltip: 'Top for complex reasoning chains, excellent instruction following' },
    'deepseek/deepseek-r1-0528:free': { tags: ['Reasoning', 'Coding'], developer: 'DeepSeek', description: '671B MoE reasoning model', tooltip: 'Best for math and code, step-by-step reasoning chains' },
    'google/gemma-3-27b-it:free': { tags: ['Fast', 'Multimodal'], developer: 'Google', description: 'Multilingual expert', tooltip: 'Excellent multilingual support, fast inference speed' },
    'google/gemini-2.0-flash-exp:free': { tags: ['Fast', 'Multimodal'], developer: 'Google', description: '1M context multimodal', tooltip: 'Massive context window, vision capabilities, very fast' },
    'qwen/qwen3-coder:free': { tags: ['Coding', 'Reasoning'], developer: 'Alibaba', description: 'Agentic coding specialist', tooltip: 'Top for agentic coding tasks, excellent tool use' },
    'xiaomi/mimo-v2-flash:free': { tags: ['Fast'], developer: 'Xiaomi', description: 'High-speed analyst', tooltip: 'Ultra-fast inference, good for quick analysis' },
    'mistralai/devstral-2512:free': { tags: ['Coding'], developer: 'Mistral', description: 'Code master 123B', tooltip: 'Specialized for code generation and review' },
    'z-ai/glm-4.5-air:free': { tags: ['Fast', 'Reasoning'], developer: 'Z.AI', description: 'Fast context specialist', tooltip: 'Fast and strong general reasoning' },
    'nousresearch/hermes-3-llama-3.1-405b:free': { tags: ['Reasoning'], developer: 'Nous', description: '405B reasoning king', tooltip: 'Largest free model, best for complex reasoning' },
    'moonshotai/kimi-k2:free': { tags: ['Reasoning', 'Fast'], developer: 'Moonshot', description: 'General purpose', tooltip: 'Balanced performance across tasks' },
    'openai/gpt-oss-120b:free': { tags: ['Reasoning'], developer: 'OpenAI', description: '120B params general', tooltip: 'Strong general capability model' },
    'tngtech/deepseek-r1t2-chimera:free': { tags: ['Reasoning'], developer: 'TNG', description: 'Hybrid reasoning', tooltip: 'Enhanced reasoning capabilities' },
    'nvidia/nemotron-3-nano-30b-a3b:free': { tags: ['Fast'], developer: 'NVIDIA', description: '30B fast inference', tooltip: 'Optimized for speed' },
    'openai/gpt-oss-20b:free': { tags: ['Fast'], developer: 'OpenAI', description: '20B lightweight', tooltip: 'Fast and efficient' },
    'nvidia/nemotron-nano-12b-v2-vl:free': { tags: ['Multimodal', 'Fast'], developer: 'NVIDIA', description: 'Vision-Language', tooltip: 'Multimodal vision capabilities' },
    'mistralai/mistral-7b-instruct:free': { tags: ['Fast'], developer: 'Mistral', description: '7B compact', tooltip: 'Very fast, good for simple tasks' },
    // Paid models
    'openai/gpt-5.2-pro': { tags: ['Reasoning', 'Coding', 'Multimodal'], developer: 'OpenAI', description: 'Premium flagship', tooltip: 'Best-in-class across all benchmarks' },
    'openai/gpt-5.2-chat': { tags: ['Reasoning', 'Multimodal'], developer: 'OpenAI', description: 'Chat optimized', tooltip: 'Optimized for conversational AI' },
    'openai/gpt-5.1-codex-max': { tags: ['Coding'], developer: 'OpenAI', description: 'Code specialist', tooltip: 'Best for code generation' },
    'openai/gpt-5.1-chat': { tags: ['Reasoning'], developer: 'OpenAI', description: 'Previous gen chat', tooltip: 'Strong general performance' },
    'openai/gpt-5': { tags: ['Reasoning'], developer: 'OpenAI', description: 'GPT-5 base', tooltip: 'Foundation GPT-5 model' },
    'openai/o4-mini': { tags: ['Reasoning', 'Fast'], developer: 'OpenAI', description: 'Fast reasoning', tooltip: 'Quick reasoning model' },
    'openai/o3': { tags: ['Reasoning'], developer: 'OpenAI', description: 'Deep reasoning', tooltip: 'Advanced reasoning chains' },
    'openai/o3-deep-research': { tags: ['Reasoning'], developer: 'OpenAI', description: 'Research specialist', tooltip: 'Optimized for research tasks' },
    'openai/o1': { tags: ['Reasoning'], developer: 'OpenAI', description: 'Original o1', tooltip: 'First reasoning model' },
    'openai/gpt-4o': { tags: ['Reasoning', 'Multimodal'], developer: 'OpenAI', description: 'Multimodal flagship', tooltip: 'Vision and audio capable' },
    'x-ai/grok-4': { tags: ['Reasoning'], developer: 'xAI', description: 'Premium Grok', tooltip: 'xAI flagship model' },
    'x-ai/grok-4.1-fast': { tags: ['Reasoning', 'Fast'], developer: 'xAI', description: 'Fast Grok', tooltip: 'Speed optimized Grok' },
    'x-ai/grok-4-fast': { tags: ['Fast'], developer: 'xAI', description: 'Quick inference', tooltip: 'Very fast responses' },
    'x-ai/grok-code-fast-1': { tags: ['Coding', 'Fast'], developer: 'xAI', description: 'Code specialist', tooltip: 'Fast code generation' },
    'x-ai/grok-3-beta': { tags: ['Reasoning'], developer: 'xAI', description: 'Beta Grok', tooltip: 'Grok 3 capabilities' },
    'anthropic/claude-opus-4.5': { tags: ['Reasoning', 'Coding'], developer: 'Anthropic', description: 'Premium Claude', tooltip: 'Best-in-class reasoning and coding' },
    'anthropic/claude-sonnet-4.5': { tags: ['Reasoning', 'Coding'], developer: 'Anthropic', description: 'Latest Sonnet', tooltip: 'Excellent balance of speed and capability' },
    'anthropic/claude-sonnet-4': { tags: ['Reasoning'], developer: 'Anthropic', description: 'Previous Sonnet', tooltip: 'Strong general performance' },
    'anthropic/claude-3.5-sonnet': { tags: ['Reasoning', 'Coding'], developer: 'Anthropic', description: 'Claude 3.5', tooltip: 'Proven reliable performance' },
    'google/gemini-3-flash-preview': { tags: ['Fast', 'Multimodal'], developer: 'Google', description: 'Preview flash', tooltip: 'Latest Gemini preview' },
    'google/gemini-2.5-flash': { tags: ['Fast', 'Multimodal'], developer: 'Google', description: 'Fast Gemini', tooltip: 'Speed optimized multimodal' },
    'google/gemini-2.0-flash-001': { tags: ['Fast', 'Multimodal'], developer: 'Google', description: 'Gemini 2 flash', tooltip: 'Fast and capable' },
    'deepseek/deepseek-v3.2': { tags: ['Reasoning', 'Coding'], developer: 'DeepSeek', description: 'Latest DeepSeek', tooltip: 'Strong reasoning and code' },
    'deepseek/deepseek-r1': { tags: ['Reasoning'], developer: 'DeepSeek', description: 'R1 reasoning', tooltip: 'Specialized reasoning model' },
    'deepseek/deepseek-chat': { tags: ['Reasoning'], developer: 'DeepSeek', description: 'DeepSeek V3', tooltip: 'General chat model' },
    'meta-llama/llama-3.3-70b-instruct': { tags: ['Reasoning', 'Fast'], developer: 'Meta', description: 'Llama 3.3 paid', tooltip: 'Premium Llama access' },
    'meta-llama/llama-3.1-405b-instruct': { tags: ['Reasoning'], developer: 'Meta', description: '405B flagship', tooltip: 'Largest Llama model' },
    'mistralai/mistral-large-2411': { tags: ['Reasoning', 'Coding'], developer: 'Mistral', description: 'Mistral Large', tooltip: 'Flagship Mistral model' },
    'qwen/qwen-2.5-72b-instruct': { tags: ['Reasoning', 'Coding'], developer: 'Alibaba', description: 'Qwen 2.5 72B', tooltip: 'Strong multilingual model' }
};

// Filter state for each mode
let filterState = {
    council: { search: '', tags: [] },
    ensemble: { search: '', tags: [] }
};

// Helper function to find model across ALL model arrays
function findModelById(modelId) {
    return MODELS.find(m => m.id === modelId) ||
        FREE_MODELS.find(m => m.id === modelId) ||
        BEAST_FREE_MODELS.find(m => m.id === modelId) ||
        ULTRA_FREE_MODELS.find(m => m.id === modelId) ||
        { name: 'Unknown AI', provider: 'OpenRouter' };
}

const DEFAULT_ROLES = [
    {
        name: 'Lead Researcher',
        model: 'meta-llama/llama-3.3-70b-instruct:free',
        perspective: 'Primary analysis and synthesis',
        instructions: 'Conduct thorough research analysis, identify key findings and patterns.'
    },
    {
        name: 'Critical Reviewer',
        model: 'deepseek/deepseek-r1-0528:free',
        perspective: 'Identify gaps and weaknesses',
        instructions: 'Critically evaluate the research, identify methodological issues and limitations.'
    },
    {
        name: 'Domain Expert',
        model: 'meta-llama/llama-3.3-70b-instruct:free',
        perspective: 'Deep domain knowledge',
        instructions: 'Provide specialized expertise and context from the relevant field.'
    },
    {
        name: 'Data Analyst',
        model: 'qwen/qwen-2.5-72b-instruct:free',
        perspective: 'Quantitative reasoning',
        instructions: 'Focus on data, statistics, and quantitative aspects of the problem.'
    }
];

const TEMPLATES = {
    research: DEFAULT_ROLES,
    business: [
        { name: 'Strategy Lead', model: 'openai/gpt-5.2-pro', perspective: 'Strategic vision', instructions: 'Analyze strategic implications and long-term opportunities.' },
        { name: 'Financial Analyst', model: 'x-ai/grok-4.1-fast', perspective: 'Financial impact', instructions: 'Evaluate financial implications, ROI, and resource requirements.' },
        { name: 'Market Expert', model: 'anthropic/claude-sonnet-4.5', perspective: 'Market dynamics', instructions: 'Assess market conditions, competition, and positioning.' },
        { name: 'Risk Assessor', model: 'google/gemini-2.5-flash', perspective: 'Risk identification', instructions: 'Identify potential risks, challenges, and mitigation strategies.' }
    ],
    technical: [
        { name: 'Architect', model: 'openai/gpt-5.1-codex-max', perspective: 'System design', instructions: 'Design overall architecture and technical approach.' },
        { name: 'Security Expert', model: 'x-ai/grok-code-fast-1', perspective: 'Security analysis', instructions: 'Evaluate security implications and best practices.' },
        { name: 'Performance Engineer', model: 'openai/o3', perspective: 'Performance optimization', instructions: 'Analyze performance considerations and scalability.' },
        { name: 'Code Reviewer', model: 'deepseek/deepseek-r1', perspective: 'Code quality', instructions: 'Review implementation details and code quality.' }
    ],
    strategic: [
        { name: 'Visionary', model: 'openai/gpt-5.2-pro', perspective: 'Long-term vision', instructions: 'Think about long-term implications and future trends.' },
        { name: 'Pragmatist', model: 'x-ai/grok-4', perspective: 'Practical implementation', instructions: 'Focus on what can be realistically achieved.' },
        { name: 'Devil\'s Advocate', model: 'anthropic/claude-opus-4.5', perspective: 'Challenge assumptions', instructions: 'Question assumptions and present counter-arguments.' },
        { name: 'Synthesizer', model: 'openai/o3', perspective: 'Integration', instructions: 'Combine diverse viewpoints into coherent recommendations.' }
    ],
    creative: [
        { name: 'Innovator', model: 'openai/gpt-5.2-pro', perspective: 'Novel ideas', instructions: 'Generate creative and innovative solutions.' },
        { name: 'Critic', model: 'x-ai/grok-4.1-fast', perspective: 'Quality assessment', instructions: 'Evaluate ideas for feasibility and impact.' },
        { name: 'User Advocate', model: 'anthropic/claude-sonnet-4.5', perspective: 'User experience', instructions: 'Consider user needs and experience.' },
        { name: 'Trend Spotter', model: 'google/gemini-3-flash-preview', perspective: 'Emerging trends', instructions: 'Identify relevant trends and opportunities.' }
    ],
    crypto_analysis: [
        { name: 'Macro Strategist', model: 'openai/gpt-5.2-pro', perspective: 'Market cycle & Global events', instructions: 'Analyze crypto assets in the context of global macroeconomics and market cycles.' },
        { name: 'On-chain Sleuth', model: 'x-ai/grok-4', perspective: 'Wallet movements & Liquidity', instructions: 'Analyze on-chain data, exchange flows, and whale activity.' },
        { name: 'Tokenomics Expert', model: 'deepseek/deepseek-r1', perspective: 'Supply/Demand & Incentives', instructions: 'Audit token distribution, inflation models, and utility.' },
        { name: 'DeFi Yield Farmer', model: 'meta-llama/llama-3.3-70b-instruct:free', perspective: 'Yield optimization', instructions: 'Focus on yield mechanisms, composability, and liquidity depth.' }
    ],
    defi_audit: [
        { name: 'Security Auditor', model: 'openai/gpt-5.1-codex-max', perspective: 'Logic & Vulnerabilities', instructions: 'Identify reentrancy, overflow, and flash loan vulnerabilities.' },
        { name: 'Protocol Architect', model: 'anthropic/claude-sonnet-4.5', perspective: 'Solvency & Liquidation risk', instructions: 'Analyze protocol safety in high volatility and liquidations.' },
        { name: 'Governance Critic', model: 'mistralai/mistral-large-2411', perspective: 'Whale capture & Upgradability', instructions: 'Evaluate multisig controls and centralization risks.' }
    ]
};

// ============================================
// STATE
// ============================================

let state = {
    currentTab: 'council',
    freeMode: localStorage.getItem('satya_free_mode') === 'true',
    ultraFreeMode: localStorage.getItem('satya_ultra_mode') === 'true',
    selectedCouncilModels: [MODELS[0].id, MODELS[1].id, MODELS[2].id],
    selectedEnsembleModels: [MODELS[0].id, MODELS[1].id, MODELS[2].id],
    roles: [...DEFAULT_ROLES],
    history: JSON.parse(localStorage.getItem('satya_history') || '[]'),
    attachments: {
        superchat: [],
        council: [],
        dxo: [],
        ensemble: []
    },
    // New crypto research state
    leaderboardData: JSON.parse(localStorage.getItem('satya_leaderboard') || '{}'),
    leaderboardSessions: JSON.parse(localStorage.getItem('satya_leaderboard_sessions') || '[]'),
    sessionTags: [],
    roundsCount: 1,
    peerRankingEnabled: true,
    currentSessionId: null,
    showAllModels: false,
    showAllModelsEnsemble: false
};



// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderCouncilModels();
    renderEnsembleModels();
    renderRoles();
    hydrateModelSelects();
    updateHistoryStats();
    setupKeyboardShortcuts();
    setupPasteListeners();
    loadPresetDropdowns();
    loadPresetDropdowns();
    loadLeaderboardData();
    renderRandomQuickPrompts();
});

// ============================================
// QUICK PROMPTS
// ============================================

const QUICK_PROMPTS_LIBRARY = [
    { label: 'DeFi Risk', text: 'Analyze the smart contract risks of Aave V3 on Arbitrum.' },
    { label: 'L2 Scaling', text: 'Compare the technical architecture of Optimism Bedrock vs Arbitrum Nitro.' },
    { label: 'ZK Tech', text: 'Explain zk-SNARKs vs zk-STARKs for a non-technical audience.' },
    { label: 'AI Code', text: 'Write a Python script to optimize portfolio allocation using Monte Carlo simulation.' },
    { label: 'Tokenomics', text: 'Critique the tokenomics of the latest EIGEN layer protocol.' },
    { label: 'Market', text: 'What are the macro tailwinds for RWA tokenization in 2026?' },
    { label: 'Security', text: 'How does account abstraction (ERC-4337) impact wallet security?' },
    { label: 'Privacy', text: 'Analyze the privacy implications of CBDCs vs private stablecoins.' },
    { label: 'Solidity', text: 'Write a secure ERC-20 token contract with permit functionality.' },
    { label: 'Rust', text: 'Explain the advantages of Rust for Solana program development.' },
    { label: 'NFTs', text: 'What is the future of dynamic NFTs beyond simple PFPs?' },
    { label: 'DAOs', text: 'Propose a governance framework for a decentralized lending protocol.' },
    { label: 'MEV', text: 'Explain Proposer-Builder Separation (PBS) and its impact on MEV.' },
    { label: 'Bridging', text: 'Analyze the security model of LayerZero vs Wormhole.' },
    { label: 'Identity', text: 'How can Zero-Knowledge proofs solve decentralized identity (DID)?' },
    { label: 'Stablecoins', text: 'Compare the stability mechanisms of DAI, FRAX, and LUSD.' },
    { label: 'Regulation', text: 'What are the implications of MiCA regulation for DeFi protocols?' },
    { label: 'Integration', text: 'How to integrate Chainlink Oracles into a prediction market?' },
    { label: 'Hypothesis', text: 'Formulate a hypothesis on the next major narrative in crypto.' },
    { label: 'Audit', text: 'What are the most common vulnerabilities found in DeFi hacks 2025?' }
];

function renderRandomQuickPrompts() {
    // Select 4 unique random prompts
    const shuffled = [...QUICK_PROMPTS_LIBRARY].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);

    const chipHtml = selected.map(p =>
        `<button class="quick-chip" onclick="setPrompt('${p.text.replace(/'/g, "\\'")}', 'council')">${p.label}</button>`
    ).join('');

    document.querySelectorAll('.quick-prompts').forEach(container => {
        const label = container.querySelector('.quick-label');
        if (label) {
            container.innerHTML = '';
            container.appendChild(label);
            container.insertAdjacentHTML('beforeend', chipHtml);
        }
    });

    // Also update window.setPrompt to handle mode specific setting if needed
    window.setPrompt = function (text, mode) {
        // Find the active tab first to determine which prompt input to target if mode generic
        const activeTab = state.currentTab;
        const targetMode = mode || activeTab;
        const textarea = document.getElementById(`${targetMode}-prompt`);
        if (textarea) {
            textarea.value = text;
            textarea.focus();
            // Trigger auto-resize if implemented
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    };
}

function initNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    state.currentTab = tabName;

    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });

    // Update pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`${tabName}-page`).classList.add('active');
}

// ============================================
// MODEL RENDERING
// ============================================

function renderCouncilModels() {
    const container = document.getElementById('council-models');
    let baseModels = MODELS;

    if (state.ultraFreeMode) baseModels = ULTRA_FREE_MODELS;
    else if (state.freeMode) baseModels = FREE_MODELS;

    // Apply filters
    let filteredModels = baseModels.filter(model => {
        const metadata = MODEL_METADATA[model.id] || { tags: [], developer: '' };
        const searchTerm = filterState.council.search.toLowerCase();
        const activeTags = filterState.council.tags;

        // Search filter
        const matchesSearch = searchTerm === '' ||
            model.name.toLowerCase().includes(searchTerm) ||
            model.provider.toLowerCase().includes(searchTerm) ||
            metadata.developer.toLowerCase().includes(searchTerm);

        // Tag filter
        const matchesTags = activeTags.length === 0 ||
            activeTags.some(tag => metadata.tags.includes(tag));

        return matchesSearch && matchesTags;
    });

    // Mobile filter: Show only top 4 by default on mobile
    const isMobile = window.innerWidth < 768;
    const SHOW_LIMIT = 4;
    const shouldLimit = isMobile && !state.showAllModels && filteredModels.length > SHOW_LIMIT;
    const displayModels = shouldLimit ? filteredModels.slice(0, SHOW_LIMIT) : filteredModels;

    container.innerHTML = displayModels.map(model => {
        const metadata = MODEL_METADATA[model.id] || { tooltip: 'AI model', tags: [] };
        const tagBadges = metadata.tags ? metadata.tags.slice(0, 2).map(tag =>
            `<span class="model-tag">${tag}</span>`
        ).join('') : '';

        return `
        <div class="model-card ${state.selectedCouncilModels.includes(model.id) ? 'selected' : ''}" 
             onclick="toggleCouncilModel('${model.id}')"
             data-tooltip="${metadata.tooltip}">
            <div class="model-checkbox"></div>
            <div class="model-info">
                <h4>${model.name}</h4>
                <p>${model.provider}</p>
                <div class="model-tags">${tagBadges}</div>
            </div>
            <div class="model-tooltip">${metadata.tooltip}</div>
        </div>
    `}).join('');

    // Add Toggle Button for Mobile
    if (isMobile && filteredModels.length > SHOW_LIMIT) {
        const remainingCount = filteredModels.length - SHOW_LIMIT;
        const toggleBtn = document.createElement('div');
        toggleBtn.className = 'model-show-more-btn';
        toggleBtn.innerHTML = state.showAllModels
            ? `Show Less <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>`
            : `Show All (${remainingCount} more) <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>`;
        toggleBtn.onclick = () => {
            state.showAllModels = !state.showAllModels;
            renderCouncilModels();
        };
        container.appendChild(toggleBtn);
    } else {
        // Reset state if not needed to avoid getting stuck
        if (!isMobile) state.showAllModels = false;
    }

    // Update selection counter
    updateSelectionCounter('council');
}

function renderEnsembleModels() {
    const container = document.getElementById('ensemble-models');
    let baseModels = MODELS;

    if (state.ultraFreeMode) baseModels = ULTRA_FREE_MODELS;
    else if (state.freeMode) baseModels = FREE_MODELS;

    // Apply filters
    let filteredModels = baseModels.filter(model => {
        const metadata = MODEL_METADATA[model.id] || { tags: [], developer: '' };
        const searchTerm = filterState.ensemble.search.toLowerCase();
        const activeTags = filterState.ensemble.tags;

        // Search filter
        const matchesSearch = searchTerm === '' ||
            model.name.toLowerCase().includes(searchTerm) ||
            model.provider.toLowerCase().includes(searchTerm) ||
            metadata.developer.toLowerCase().includes(searchTerm);

        // Tag filter
        const matchesTags = activeTags.length === 0 ||
            activeTags.some(tag => metadata.tags.includes(tag));

        return matchesSearch && matchesTags;
    });

    // Mobile filter: Show only top 4 by default on mobile
    const isMobile = window.innerWidth < 768;
    const SHOW_LIMIT = 4;
    const shouldLimit = isMobile && !state.showAllModelsEnsemble && filteredModels.length > SHOW_LIMIT;
    const displayModels = shouldLimit ? filteredModels.slice(0, SHOW_LIMIT) : filteredModels;

    container.innerHTML = displayModels.map(model => {
        const metadata = MODEL_METADATA[model.id] || { tooltip: 'AI model', tags: [] };
        const tagBadges = metadata.tags ? metadata.tags.slice(0, 2).map(tag =>
            `<span class="model-tag">${tag}</span>`
        ).join('') : '';

        return `
        <div class="model-card ${state.selectedEnsembleModels.includes(model.id) ? 'selected' : ''}" 
             onclick="toggleEnsembleModel('${model.id}')"
             data-tooltip="${metadata.tooltip}">
            <div class="model-checkbox"></div>
            <div class="model-info">
                <h4>${model.name}</h4>
                <p>${model.provider}</p>
                <div class="model-tags">${tagBadges}</div>
            </div>
            <div class="model-tooltip">${metadata.tooltip}</div>
        </div>
    `}).join('');

    // Add Toggle Button for Mobile
    if (isMobile && filteredModels.length > SHOW_LIMIT) {
        const remainingCount = filteredModels.length - SHOW_LIMIT;
        const toggleBtn = document.createElement('div');
        toggleBtn.className = 'model-show-more-btn';
        toggleBtn.style.gridColumn = "1 / -1"; // Make it span full width
        toggleBtn.innerHTML = state.showAllModelsEnsemble
            ? `Show Less <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>`
            : `Show All (${remainingCount} more) <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>`;
        toggleBtn.onclick = () => {
            state.showAllModelsEnsemble = !state.showAllModelsEnsemble;
            renderEnsembleModels();
        };
        container.appendChild(toggleBtn);
    }

    document.getElementById('ensemble-count').textContent = `${state.selectedEnsembleModels.length} selected`;

    // Update selection counter
    updateSelectionCounter('ensemble');
}

function toggleFreeMode() {
    state.freeMode = !state.freeMode;
    if (state.freeMode) {
        state.ultraFreeMode = false;
    }

    localStorage.setItem('satya_free_mode', state.freeMode);
    localStorage.setItem('satya_ultra_mode', state.ultraFreeMode);

    // Only set a default selection if there are no existing selections
    if (state.freeMode && state.selectedCouncilModels.length === 0) {
        state.selectedCouncilModels = [FREE_MODELS[0].id, FREE_MODELS[1].id, FREE_MODELS[2].id];
        state.selectedEnsembleModels = [FREE_MODELS[0].id, FREE_MODELS[1].id, FREE_MODELS[2].id];
    }

    renderCouncilModels();
    renderEnsembleModels();
    renderRoles();
    hydrateModelSelects();
    updateFreeModeToggleUI();
}

function toggleUltraFreeMode() {
    state.ultraFreeMode = !state.ultraFreeMode;
    if (state.ultraFreeMode) {
        state.freeMode = false;
    }

    localStorage.setItem('satya_free_mode', state.freeMode);
    localStorage.setItem('satya_ultra_mode', state.ultraFreeMode);

    // Only set a default selection if there are no existing selections
    if (state.ultraFreeMode && state.selectedCouncilModels.length === 0) {
        state.selectedCouncilModels = [ULTRA_FREE_MODELS[0].id, ULTRA_FREE_MODELS[1].id, ULTRA_FREE_MODELS[2].id];
        state.selectedEnsembleModels = [ULTRA_FREE_MODELS[0].id, ULTRA_FREE_MODELS[1].id, ULTRA_FREE_MODELS[2].id];
    }

    renderCouncilModels();
    renderEnsembleModels();
    renderRoles();
    hydrateModelSelects();
    updateFreeModeToggleUI();
}

function updateFreeModeToggleUI() {
    const freeToggle = document.getElementById('free-mode-toggle');
    const ultraToggle = document.getElementById('ultra-mode-toggle');

    if (freeToggle) {
        if (state.freeMode) freeToggle.classList.add('active');
        else freeToggle.classList.remove('active');
    }

    if (ultraToggle) {
        if (state.ultraFreeMode) ultraToggle.classList.add('active');
        else ultraToggle.classList.remove('active');
    }
}

// ============================================
// ATTACHMENT MANAGEMENT
// ============================================

function triggerUpload(mode) {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*,.pdf,.txt,.doc,.docx';
    input.onchange = (e) => handleFileUpload(mode, e.target.files);
    input.click();
}

async function handleFileUpload(mode, files) {
    const fileList = Array.from(files);
    for (const file of fileList) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const attachment = {
                name: file.name,
                type: file.type,
                size: file.size,
                data: e.target.result // Base64 or DataURL
            };
            state.attachments[mode].push(attachment);
            renderAttachments(mode);
        };

        if (file.type.startsWith('image/')) {
            reader.readAsDataURL(file);
        } else {
            reader.readAsDataURL(file);
        }
    }
}

function removeAttachment(mode, index) {
    state.attachments[mode].splice(index, 1);
    renderAttachments(mode);
}

function renderAttachments(mode) {
    const container = document.getElementById(`${mode}-attachments`);
    if (!container) return;

    container.innerHTML = state.attachments[mode].map((file, index) => `
        <div class="attachment-chip">
            <span class="attachment-name">${file.name}</span>
            <button class="remove-attachment" onclick="removeAttachment('${mode}', ${index})">×</button>
        </div>
    `).join('');
}

function handlePaste(event, mode) {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (const item of items) {
        if (item.type.indexOf('image') !== -1) {
            const file = item.getAsFile();
            const reader = new FileReader();
            reader.onload = (e) => {
                const attachment = {
                    name: `Pasted Image ${new Date().toLocaleTimeString()}`,
                    type: file.type,
                    size: file.size,
                    data: e.target.result
                };
                state.attachments[mode].push(attachment);
                renderAttachments(mode);
            };
            reader.readAsDataURL(file);
        }
    }
}

function setupKeyboardShortcuts() {
    const modes = ['council', 'dxo', 'ensemble', 'superchat'];
    modes.forEach(mode => {
        const textarea = document.getElementById(`${mode}-prompt`);
        if (textarea) {
            textarea.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    switch (mode) {
                        case 'council': startCouncil(); break;
                        case 'dxo': startDxO(); break;
                        case 'ensemble': startEnsemble(); break;
                        case 'superchat': startSuperChat(); break;
                    }
                }
            });
        }
    });
}

function setupPasteListeners() {
    const modes = ['council', 'dxo', 'ensemble', 'superchat'];
    modes.forEach(mode => {
        const textarea = document.getElementById(`${mode}-prompt`);
        if (textarea) {
            textarea.addEventListener('paste', (e) => handlePaste(e, mode));
        }
    });
}

function hydrateModelSelects() {
    const chairmanSelect = document.getElementById('chairman-select');
    const superchatSelect = document.getElementById('superchat-model');
    let filteredModels = MODELS;

    if (state.ultraFreeMode) filteredModels = ULTRA_FREE_MODELS;
    else if (state.freeMode) filteredModels = FREE_MODELS;

    if (chairmanSelect) {
        chairmanSelect.innerHTML = filteredModels.map(m =>
            `<option value="${m.id}">${m.name} (${m.provider})</option>`
        ).join('');
    }

    if (superchatSelect) {
        superchatSelect.innerHTML = filteredModels.map(m =>
            `<option value="${m.id}">${m.name} (${m.provider})</option>`
        ).join('');
    }
}

// updateFreeModeToggleUI removed

function toggleCouncilModel(modelId) {
    const index = state.selectedCouncilModels.indexOf(modelId);
    if (index > -1) {
        state.selectedCouncilModels.splice(index, 1);
    } else {
        state.selectedCouncilModels.push(modelId);
    }
    renderCouncilModels();
}

function toggleEnsembleModel(modelId) {
    const index = state.selectedEnsembleModels.indexOf(modelId);
    if (index > -1) {
        state.selectedEnsembleModels.splice(index, 1);
    } else {
        state.selectedEnsembleModels.push(modelId);
    }
    renderEnsembleModels();
}

// ============================================
// FILTER & SEARCH FUNCTIONS
// ============================================

function filterCouncilModels() {
    const searchInput = document.getElementById('council-model-search');
    filterState.council.search = searchInput ? searchInput.value : '';
    renderCouncilModels();
}

function filterEnsembleModels() {
    const searchInput = document.getElementById('ensemble-model-search');
    filterState.ensemble.search = searchInput ? searchInput.value : '';
    renderEnsembleModels();
}

function toggleFilter(mode, tag, buttonEl) {
    const tags = filterState[mode].tags;
    const index = tags.indexOf(tag);

    if (index > -1) {
        tags.splice(index, 1);
        buttonEl.classList.remove('active');
    } else {
        tags.push(tag);
        buttonEl.classList.add('active');
    }

    if (mode === 'council') {
        renderCouncilModels();
    } else {
        renderEnsembleModels();
    }
}

function updateSelectionCounter(mode) {
    const selectedModels = mode === 'council' ? state.selectedCouncilModels : state.selectedEnsembleModels;
    const countEl = document.getElementById(`${mode}-selected-count`);
    const speedBadgeEl = document.getElementById(`${mode}-speed-badge`);
    const costBadgeEl = document.getElementById(`${mode}-cost-badge`);

    if (countEl) countEl.textContent = selectedModels.length;

    // Estimate speed based on model count and types
    let hasFast = selectedModels.some(id => {
        const meta = MODEL_METADATA[id];
        return meta && meta.tags && meta.tags.includes('Fast');
    });

    if (speedBadgeEl) {
        if (selectedModels.length <= 3 && hasFast) {
            speedBadgeEl.textContent = '⚡ Fast';
        } else if (selectedModels.length <= 5) {
            speedBadgeEl.textContent = '⏱️ Medium';
        } else {
            speedBadgeEl.textContent = '🐢 Slower';
        }
    }

    // Estimate cost based on free mode
    if (costBadgeEl) {
        if (state.freeMode || state.ultraFreeMode) {
            costBadgeEl.textContent = '💰 Free';
            costBadgeEl.classList.remove('paid');
        } else {
            // Check if any paid models selected
            const hasPaid = selectedModels.some(id => !id.includes(':free'));
            if (hasPaid) {
                costBadgeEl.textContent = '💳 Paid';
                costBadgeEl.classList.add('paid');
            } else {
                costBadgeEl.textContent = '💰 Free';
                costBadgeEl.classList.remove('paid');
            }
        }
    }
}

// ============================================
// CRYPTO RESEARCH & LEADERBOARD FUNCTIONS
// ============================================

async function conductPeerRanking(originalPrompt, modelResponses) {
    const peerRankingsContainer = document.getElementById('peer-rankings-container');
    const peerRankingsContent = document.getElementById('peer-rankings-content');
    if (peerRankingsContainer) peerRankingsContainer.classList.remove('hidden');
    if (peerRankingsContent) peerRankingsContent.innerHTML = '<div class="loading">Conducting Peer Ranking & Analysis...</div>';

    const scores = {};
    const participatingIds = Object.keys(modelResponses);
    participatingIds.forEach(id => scores[id] = 0);

    // Filter out models that failed
    const validIds = participatingIds.filter(id => modelResponses[id] && !modelResponses[id].startsWith('Error:'));
    if (validIds.length < 2) {
        if (peerRankingsContainer) peerRankingsContainer.classList.add('hidden');
        return null;
    }

    const rankingPromises = validIds.map(async (voterId) => {
        const others = validIds.filter(id => id !== voterId);
        const voterModel = findModelById(voterId);

        const peerPrompt = `You are an expert ${state.sessionTags.includes('crypto') ? 'crypto' : 'AI'} researcher. 
        Evaluate these responses to: "${originalPrompt}"
        
${others.map((id, i) => `[ID: ${id}] Response:\n${modelResponses[id]}\n---\n`).join('')}

Rank these ${others.length} responses from best to worst based on depth, accuracy, and utility.
Format your response exactly like this:
RANKING: [ID_OF_BEST, ID_OF_SECOND, ...]
CRITIQUE: A concise 2-sentence summary of what you learned or disagreed with across these samples.`;

        try {
            const reader = await streamResponse(voterId, peerPrompt, "You are an objective peer reviewer.");
            let fullText = '';
            await processStream(reader, () => { }, (full) => fullText = full);

            const match = fullText.match(/RANKING:\s*\[(.*?)\]/i);
            if (match) {
                const order = match[1].split(',').map(s => s.trim());
                order.forEach((targetId, index) => {
                    if (scores[targetId] !== undefined) {
                        scores[targetId] += (validIds.length - index);
                    }
                });
            }

            return { voter: voterModel.name, text: fullText };
        } catch (e) {
            console.error("Peer ranking error:", e);
            return null;
        }
    });

    const results = await Promise.all(rankingPromises);

    const finalRankings = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .map(([id, score], index) => ({
            id,
            name: findModelById(id).name,
            provider: findModelById(id).provider,
            score,
            rank: index + 1
        }));

    renderPeerRankings(finalRankings, results.filter(r => r));
    updateLeaderboard(finalRankings);
    return finalRankings;
}

function renderPeerRankings(rankings, critiques) {
    const peerRankingsContent = document.getElementById('peer-rankings-content');
    if (!peerRankingsContent) return;

    peerRankingsContent.innerHTML = `
        <div class="final-rankings-list">
            ${rankings.map(r => `
                <div class="rank-item rank-${r.rank}">
                    <div class="rank-number">${r.rank}</div>
                    <div class="rank-details">
                        <div class="rank-model-name">${r.name}</div>
                        <div class="rank-score">Aggregate Reputation Score: ${r.score}</div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="peer-critiques" style="margin-top: 20px; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
            <h4 style="color: var(--teal-accent); margin-bottom: 12px;">Expert Consensus Highlights</h4>
            ${critiques.slice(0, 3).map(c => {
        const critiquePart = c.text.split(/CRITIQUE:/i)[1] || "Analyzed peer perspectives for synthesis.";
        return `
                    <div class="critique-box" style="margin-bottom: 12px; font-size: 0.9rem;">
                        <strong style="color: var(--text-primary);">${c.voter}:</strong> 
                        <span style="color: var(--text-secondary); font-style: italic;">"${critiquePart.trim()}"</span>
                    </div>
                `;
    }).join('')}
        </div>
    `;
}

function updateLeaderboard(finalRankings) {
    // We store the session data directly to allow post-hoc filtering by tags
    const sessionTags = document.getElementById('session-tags')?.value.split(',').map(t => t.trim()).filter(t => t !== '') || [];

    const sessionEntry = {
        timestamp: new Date().toISOString(),
        rankings: finalRankings,
        tags: sessionTags
    };

    state.leaderboardSessions.push(sessionEntry);
    localStorage.setItem('satya_leaderboard_sessions', JSON.stringify(state.leaderboardSessions));

    renderLeaderboard();
}

function renderLeaderboard() {
    const container = document.getElementById('leaderboard-body');
    const tagFilter = document.getElementById('leaderboard-tag-filter')?.value.toLowerCase();
    if (!container) return;

    // Filter sessions
    const filteredSessions = state.leaderboardSessions.filter(s => {
        if (!tagFilter) return true;
        return s.tags.some(t => t.toLowerCase().includes(tagFilter));
    });

    // Compute stats from filtered sessions
    const statsMap = {};
    filteredSessions.forEach(s => {
        s.rankings.forEach(r => {
            if (!statsMap[r.id]) {
                statsMap[r.id] = { name: r.name, wins: 0, topPicks: 0, sessions: 0, totalRank: 0 };
            }
            statsMap[r.id].sessions++;
            statsMap[r.id].totalRank += r.rank;
            if (r.rank === 1) statsMap[r.id].wins++;
            if (r.rank <= 2) statsMap[r.id].topPicks++;
        });
    });

    // Update total sessions count in UI
    const totalSessionsEl = document.getElementById('lb-total-sessions');
    if (totalSessionsEl) totalSessionsEl.textContent = filteredSessions.length;

    const data = Object.entries(statsMap)
        .map(([id, stats]) => ({
            id,
            ...stats,
            winRate: ((stats.wins / stats.sessions) * 100).toFixed(1),
            topPickRate: ((stats.topPicks / stats.sessions) * 100).toFixed(1),
            avgRank: (stats.totalRank / stats.sessions).toFixed(2)
        }))
        .sort((a, b) => b.winRate - a.winRate || a.avgRank - b.avgRank);

    container.innerHTML = data.map((d, i) => `
        <tr>
            <td>#${i + 1}</td>
            <td style="font-weight: 600;">${d.name}</td>
            <td>
                <div class="win-rate-bar"><div class="win-rate-fill" style="width: ${d.winRate}%"></div></div>
                ${d.winRate}%
            </td>
            <td>${d.topPickRate}%</td>
            <td>${d.sessions} sessions</td>
        </tr>
    `).join('') || '<tr><td colspan="5" style="text-align:center; padding: 40px; color: var(--text-secondary);">No sessions found with these filters.</td></tr>';
}

function loadLeaderboardData() {
    renderLeaderboard();
}
function savePreset(mode) {
    const name = prompt('Enter a name for this custom setup:');
    if (!name) return;

    const presets = JSON.parse(localStorage.getItem('satya_presets') || '{}');
    if (!presets[mode]) presets[mode] = [];

    const newPreset = {
        id: Date.now(),
        name: name,
        timestamp: new Date().toISOString()
    };

    if (mode === 'council') {
        newPreset.models = [...state.selectedCouncilModels];
        newPreset.chairman = document.getElementById('chairman-select')?.value;
    } else if (mode === 'ensemble') {
        newPreset.models = [...state.selectedEnsembleModels];
    } else if (mode === 'dxo') {
        newPreset.roles = [...state.roles];
    }

    presets[mode].push(newPreset);
    localStorage.setItem('satya_presets', JSON.stringify(presets));
    loadPresetDropdowns();
    alert(`Setup "${name}" saved!`);
}

function continueSession() {
    // This allows manually running another round regardless of the slider
    const resultsPanel = document.getElementById('results-panel');
    if (resultsPanel.classList.contains('hidden')) return;

    const resultsTitle = document.getElementById('results-title').textContent;
    if (resultsTitle.includes('Council')) {
        // Council continue logic
        // We increment the slider or just run one more round
        startCouncil(true); // pass true to indicate it's a 'continue' action
    } else if (resultsTitle.includes('DxO')) {
        startDxO(true);
    } else if (resultsTitle.includes('Ensemble')) {
        startEnsemble(true);
    }
}

function loadPreset(mode, presetId) {
    if (!presetId) return;

    const presets = JSON.parse(localStorage.getItem('satya_presets') || '{}');
    const modePresets = presets[mode] || [];
    const preset = modePresets.find(p => p.id == presetId);

    if (!preset) return;

    if (mode === 'council') {
        state.selectedCouncilModels = [...preset.models];
        if (preset.chairman) {
            const chairmanSelect = document.getElementById('chairman-select');
            if (chairmanSelect) chairmanSelect.value = preset.chairman;
        }
        renderCouncilModels();
    } else if (mode === 'ensemble') {
        state.selectedEnsembleModels = [...preset.models];
        renderEnsembleModels();
    } else if (mode === 'dxo' && preset.roles) {
        state.roles = [...preset.roles];
        renderRoles();
    }

    // Reset dropdown
    const dropdown = document.getElementById(`${mode}-preset-select`);
    if (dropdown) dropdown.value = '';
}

function loadPresetDropdowns() {
    const presets = JSON.parse(localStorage.getItem('satya_presets') || '{}');

    ['council', 'ensemble'].forEach(mode => {
        const dropdown = document.getElementById(`${mode}-preset-select`);
        if (!dropdown) return;

        const modePresets = presets[mode] || [];
        dropdown.innerHTML = '<option value="">Load Preset...</option>' +
            modePresets.map(p => `<option value="${p.id}">${p.name} (${p.models.length} models)</option>`).join('');
    });
}

// ============================================
// ROLE MANAGEMENT (DxO)
// ============================================

function renderRoles() {
    const container = document.getElementById('role-assignments');
    container.innerHTML = state.roles.map((role, index) => `
        <div class="role-card">
            <div class="role-card-header">
                <div class="role-field">
                    <label>Role Name</label>
                    <input type="text" value="${role.name}" onchange="updateRole(${index}, 'name', this.value)">
                </div>
                <div class="role-field">
                    <label>Assigned Model</label>
                    <select onchange="updateRole(${index}, 'model', this.value)">
                        ${(() => {
            let filtered;
            if (state.ultraFreeMode) filtered = ULTRA_FREE_MODELS;
            else if (state.freeMode) filtered = FREE_MODELS;
            else filtered = MODELS;
            return filtered.map(m => `<option value="${m.id}" ${role.model === m.id ? 'selected' : ''}>${m.name}</option>`).join('');
        })()}
                    </select>
                </div>
                <div class="role-field">
                    <label>Perspective/Focus</label>
                    <input type="text" value="${role.perspective}" onchange="updateRole(${index}, 'perspective', this.value)">
                </div>
                <button class="remove-role-btn" onclick="removeRole(${index})">×</button>
            </div>
            <div class="role-instructions">
                <label>Role Instructions (Optional)</label>
                <textarea onchange="updateRole(${index}, 'instructions', this.value)">${role.instructions}</textarea>
            </div>
        </div>
    `).join('');
}

function updateRole(index, field, value) {
    state.roles[index][field] = value;
}

function addRole() {
    let defaultModel;
    if (state.ultraFreeMode) defaultModel = ULTRA_FREE_MODELS[0].id;
    else if (state.freeMode) defaultModel = FREE_MODELS[0].id;
    else defaultModel = MODELS[0].id;

    state.roles.push({
        name: 'New Role',
        model: defaultModel,
        perspective: 'Custom perspective',
        instructions: 'Describe this role\'s focus and responsibilities.'
    });
    renderRoles();
}

function removeRole(index) {
    state.roles.splice(index, 1);
    renderRoles();
}

function loadTemplate(templateName) {
    state.roles = [...TEMPLATES[templateName]];
    renderRoles();
}

// ============================================
// QUICK PROMPTS
// ============================================

function setPrompt(mode, prompt) {
    document.getElementById(`${mode}-prompt`).value = prompt;
}

// ============================================
// API CALLS & UTILITIES
// ============================================

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function streamResponse(model, prompt, systemPrompt = '', attachments = [], retryCount = 0) {
    const apiKey = localStorage.getItem('satya_api_key') || '';
    const localEnabled = document.getElementById('local-llm-toggle')?.classList.contains('active');

    if (!localEnabled && !apiKey) {
        document.getElementById('login-overlay').style.display = 'flex';
        document.getElementById('login-error').textContent = 'Please enter your API Key to continue';
        document.getElementById('login-error').style.display = 'block';
        throw new Error('No API key provided');
    }

    const localEndpoint = document.getElementById('local-endpoint-input')?.value || 'http://localhost:11434/v1';
    const url = localEnabled ? `${localEndpoint}/chat/completions` : 'https://openrouter.ai/api/v1/chat/completions';
    const MAX_RETRIES = 3;

    try {
        const messages = [];
        if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });

        let content;
        if (attachments && attachments.length > 0) {
            content = [{ type: 'text', text: prompt }];
            for (const attachment of attachments) {
                if (attachment.type.startsWith('image/')) {
                    content.push({ type: 'image_url', image_url: { url: attachment.data } });
                } else {
                    content.push({ type: 'text', text: `[File Attachment: ${attachment.name}]` });
                }
            }
        } else {
            content = prompt;
        }

        messages.push({ role: 'user', content: content });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localEnabled ? '' : `Bearer ${apiKey}`,
                'HTTP-Referer': window.location.origin,
                'X-Title': 'Satya AI Council'
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                stream: true,
                max_tokens: 4000
            })
        });

        if (response.status === 401) {
            localStorage.removeItem('satya_api_key');
            localStorage.removeItem('satya_auth');
            document.getElementById('login-overlay').style.display = 'flex';
            const errorMsg = document.getElementById('login-error');
            if (errorMsg) {
                errorMsg.textContent = 'Action Required: Your API Key is invalid or expired.';
                errorMsg.style.display = 'block';
            }
            throw new Error('API Key Invalid');
        }

        if (response.status === 429 && retryCount < MAX_RETRIES && !localEnabled) {
            const delay = Math.pow(2, retryCount) * 1000 + (Math.random() * 1000);
            await sleep(delay);
            return streamResponse(model, prompt, systemPrompt, attachments, retryCount + 1);
        }

        if (!response.ok) throw new Error(`API error: ${response.status}`);
        return response.body.getReader();
    } catch (error) {
        if (error.message.includes('API Key Invalid')) throw error;
        if (retryCount < MAX_RETRIES) {
            await sleep(1000);
            return streamResponse(model, prompt, systemPrompt, attachments, retryCount + 1);
        }
        throw error;
    }
}

async function processStream(reader, onChunk, onComplete) {
    const decoder = new TextDecoder();
    let buffer = '';
    let fullContent = '';

    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const data = line.slice(6);
                    if (data === '[DONE]') continue;

                    try {
                        const json = JSON.parse(data);
                        const content = json.choices?.[0]?.delta?.content;
                        if (content) {
                            fullContent += content;
                            onChunk(content, fullContent);
                        }
                    } catch (e) {
                        // Skip invalid JSON
                    }
                }
            }
        }
    } catch (error) {
        console.error('Stream error:', error);
    }

    onComplete(fullContent);
}

// ============================================
// COUNCIL MODE
// ============================================

async function startCouncil(isContinue = false) {
    const originalPrompt = document.getElementById('council-prompt').value.trim();
    if (!originalPrompt) {
        alert('Please enter a research prompt.');
        return;
    }

    if (state.selectedCouncilModels.length < 2) {
        alert('Please select at least 2 models for the council.');
        return;
    }

    // Refresh state from UI elements
    const roundsToRun = isContinue ? 1 : parseInt(document.getElementById('council-rounds')?.value || 1);
    state.peerRankingEnabled = document.getElementById('council-peer-ranking-toggle')?.classList.contains('active');
    const chairman = document.getElementById('chairman-select').value;

    if (!isContinue) showResults('Council Deliberation');
    else document.getElementById('results-panel').classList.remove('hidden');

    const responsesContainer = document.getElementById('model-responses');
    const existingSynthesis = document.getElementById('synthesis-content').textContent;

    let currentContext = isContinue ? `Initial Prompt: ${originalPrompt}\n\nPrevious Synthesis: ${existingSynthesis}\n\nTask: Continue the research, refine details, and address unexplored angles.` : originalPrompt;
    let finalModelResponses = {};
    let finalSynthesis = '';

    const totalRoundsToRun = roundsToRun;

    for (let round = 1; round <= totalRoundsToRun; round++) {
        // If continuing, we treat this as a new round offset by existing state if we tracked it, 
        // but for now let's just label it "Continued Research"
        const displayRound = isContinue ? 'Continuation' : round;
        const roundTitle = !isContinue && totalRoundsToRun > 1 ? ` (Round ${round}/${totalRoundsToRun})` : (isContinue ? ' (Continuation)' : '');
        document.getElementById('results-title').textContent = `Council Deliberation${roundTitle}`;

        const modelResponses = {};
        const responsesContainer = document.getElementById('model-responses');

        // Clear or prepare container for round
        if (round === 1) responsesContainer.innerHTML = '';

        // Add round header if multi-round
        if (state.roundsCount > 1) {
            const roundHeader = document.createElement('div');
            roundHeader.className = 'round-header';
            roundHeader.style = 'grid-column: 1 / -1; margin: 20px 0 10px; padding: 10px; background: var(--bg-tertiary); border-radius: 8px; font-weight: 700; color: var(--teal-accent);';
            roundHeader.innerHTML = `ROUND ${round}: ${round === 1 ? 'Initial Analysis' : 'Deepening Insights'}`;
            responsesContainer.appendChild(roundHeader);
        }

        // Create individual cards for this round
        state.selectedCouncilModels.forEach(modelId => {
            const model = findModelById(modelId);
            const cardId = `${modelId}-round-${round}`;
            const cardHtml = createResponseCard(model.name, model.provider, cardId);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = cardHtml;
            responsesContainer.appendChild(tempDiv.firstElementChild);
        });

        const roundPromises = state.selectedCouncilModels.map(async (modelId) => {
            const cardId = `${modelId}-round-${round}`;
            const systemPrompt = `You are a member of an AI council. 
            ${round > 1 ? `This is Round ${round} of the deliberation. Build upon the previous synthesis to provide deeper technical insights.` : 'Provide your initial expert analysis.'}
            Focus on accuracy, edge cases, and verifiable facts.`;

            const attemptRequest = async (retry = false) => {
                try {
                    const reader = await streamResponse(modelId, currentContext, systemPrompt, state.attachments.council);
                    await processStream(
                        reader,
                        (chunk, full) => updateResponseCard(cardId, full, 'streaming'),
                        (full) => {
                            modelResponses[modelId] = full;
                            updateResponseCard(cardId, full, 'complete');
                        }
                    );
                } catch (error) {
                    if (!retry) {
                        console.log(`Retrying ${modelId} after error: ${error.message}`);
                        await sleep(2000);
                        return attemptRequest(true);
                    }
                    updateResponseCard(cardId, `Error: ${error.message}`, 'error');
                }
            };
            await attemptRequest();
        });

        await Promise.all(roundPromises);
        finalModelResponses = modelResponses;

        // Conduct synthesis for the round
        const intermediateSynthesis = await synthesizeCouncil(chairman, originalPrompt, modelResponses, round, state.roundsCount);
        finalSynthesis = intermediateSynthesis;

        // If another round follows, update context
        if (round < state.roundsCount) {
            currentContext = `Original Question: ${originalPrompt}\n\nPrevious Council Synthesis (Round ${round}):\n${intermediateSynthesis}\n\nTask: Analyze the above synthesis. Identify what's missing, where deeper technical detail is needed, or if there are any subtle risks not yet addressed. Provide a deeper, more refined level of research.`;
        }
    }

    // After all rounds, conduct Peer Ranking if enabled
    if (state.peerRankingEnabled) {
        await conductPeerRanking(originalPrompt, finalModelResponses);
    }

    saveToHistory('council', originalPrompt, state.selectedCouncilModels.length, null, finalModelResponses, finalSynthesis);
}

async function synthesizeCouncil(chairmanModel, originalPrompt, responses, round = 1, totalRounds = 1) {
    const synthesisPanel = document.getElementById('synthesis-panel');
    const synthesisContent = document.getElementById('synthesis-content');
    synthesisPanel.classList.remove('hidden');
    synthesisContent.innerHTML = '<span class="cursor"></span>';

    const responseSummary = Object.entries(responses).map(([modelId, response]) => {
        const model = findModelById(modelId);
        return `## ${model.name}'s Analysis:\n${response}`;
    }).join('\n\n---\n\n');

    const isFinalRound = round === totalRounds;
    const synthesisPrompt = `You are the Chairman of an AI Council. Multiple AI models have analyzed the following question:

**Original Question:** ${originalPrompt}
${totalRounds > 1 ? `**Current Round:** ${round} of ${totalRounds}` : ''}

**Council Members' Responses:**
${responseSummary}

Your task is to synthesize these perspectives into a comprehensive ${isFinalRound ? 'FINAL' : 'INTERMEDIATE'} recommendation. Structure your response as follows:

1. **Consensus Points** - Areas where models agree
2. **Key Debates** - Areas of disagreement and why
3. **Synthesis** - Your integrated analysis
${isFinalRound ? '4. **Actionable Recommendations** - Clear next steps' : '4. **Missing Information / Targeted Research** - What should we focus on in the next round?'}

Be thorough but organized. Highlight the most valuable insights from each council member.`;

    let synthesisText = '';
    try {
        const reader = await streamResponse(chairmanModel, synthesisPrompt);
        await processStream(
            reader,
            (chunk, full) => {
                synthesisText = full;
                const roundText = totalRounds > 1 ? `<h4>Synthesis - Round ${round}</h4>` : '';
                synthesisContent.innerHTML = roundText + formatMarkdown(full) + '<span class="cursor"></span>';
            },
            (full) => {
                synthesisText = full;
                const roundText = totalRounds > 1 ? `<h4>Synthesis - Round ${round}</h4>` : '';
                synthesisContent.innerHTML = roundText + formatMarkdown(full);
            }
        );
    } catch (error) {
        synthesisText = `Error generating synthesis: ${error.message}`;
        synthesisContent.innerHTML = `<p style="color: #ef4444;">${synthesisText}</p>`;
    }
    return synthesisText;
}

// ============================================
// DxO MODE
// ============================================

async function startDxO(isContinue = false) {
    const prompt = document.getElementById('dxo-prompt').value.trim();
    if (!prompt) {
        alert('Please enter a problem statement or research question.');
        return;
    }

    if (state.roles.length === 0) {
        alert('Please add at least one role.');
        return;
    }

    const roundsToRun = isContinue ? 1 : parseInt(document.getElementById('dxo-rounds')?.value || 1);
    const existingSynthesis = document.getElementById('synthesis-content').textContent;

    if (!isContinue) showResults('DxO Decision Analysis');
    else document.getElementById('results-panel').classList.remove('hidden');

    let currentContext = isContinue ? existingSynthesis : '';
    let finalRoleResponses = {};
    let finalSynthesis = '';

    for (let round = 1; round <= roundsToRun; round++) {
        const displayRound = isContinue ? 'Continuation' : round;
        const totalDisplay = isContinue ? 'Continuation' : roundsToRun;

        if (!isContinue && roundsToRun > 1) {
            document.getElementById('results-title').textContent = `DxO Analysis - Round ${round} of ${roundsToRun}`;
        } else if (isContinue) {
            document.getElementById('results-title').textContent = `DxO Analysis - Continuation`;
        }

        const roleResponses = {};
        const responsesContainer = document.getElementById('model-responses');
        if (round === 1) responsesContainer.innerHTML = '';

        // Query all roles in parallel
        const promises = state.roles.map(async (role, index) => {
            const cardId = `${role.name.replace(/\s+/g, '-')}-round-${round}`;

            // Create a new card for this round
            const cardHtml = createResponseCard(role.name, role.perspective, cardId);
            responsesContainer.insertAdjacentHTML('beforeend', cardHtml);

            if (index > 0) await sleep(index * 1000); // Slight stagger

            let systemPrompt = `You are acting as the ${role.name} in a multi-perspective analysis team.
Your focus: ${role.perspective}
Your instructions: ${role.instructions}`;

            if (round > 1) {
                systemPrompt += `\n\n**Previous Iteration Synthesis:**\n${currentContext}\n\nBased on the synthesis above, refine your analysis. Focus on addressing any gaps or debating points identified.`;
            }

            systemPrompt += `\n\nAnalyze the following problem from your unique perspective. Be thorough but stay focused on your specific role.`;

            try {
                const reader = await streamResponse(role.model, prompt, systemPrompt, state.attachments.dxo);
                await processStream(
                    reader,
                    (chunk, full) => updateResponseCard(cardId, full, 'streaming'),
                    (full) => {
                        roleResponses[role.name] = { response: full, role: role };
                        updateResponseCard(cardId, full, 'complete');
                    }
                );
            } catch (error) {
                updateResponseCard(cardId, `Error: ${error.message}`, 'error');
            }
        });

        await Promise.all(promises);

        finalRoleResponses = { ...finalRoleResponses, ...roleResponses };
        finalSynthesis = await synthesizeDxO(prompt, roleResponses, round, totalRounds);
        currentContext = finalSynthesis;
    }

    // Save to history
    saveToHistory('dxo', prompt, state.roles.length, state.roles.map(r => r.name), finalRoleResponses, finalSynthesis);
}

async function synthesizeDxO(originalPrompt, responses, round = 1, totalRounds = 1) {
    const synthesisPanel = document.getElementById('synthesis-panel');
    const synthesisContent = document.getElementById('synthesis-content');
    synthesisPanel.classList.remove('hidden');
    synthesisContent.innerHTML = '<span class="cursor"></span>';

    const responseSummary = Object.entries(responses).map(([roleName, data]) => {
        return `## ${roleName} (${data.role.perspective}):\n${data.response}`;
    }).join('\n\n---\n\n');

    const isFinalRound = round === totalRounds;
    const synthesisPrompt = `You are synthesizing a multi-perspective analysis from a DxO Decision Orchestrator session.
${totalRounds > 1 ? `**Current Round:** ${round} of ${totalRounds}` : ''}

**Original Problem:** ${originalPrompt}

**Role-Based Analyses:**
${responseSummary}

Create a comprehensive ${isFinalRound ? 'FINAL' : 'INTERMEDIATE'} synthesis that:
1. **Integrates Key Insights** from each role's perspective
2. **Identifies Synergies** where perspectives complement each other
3. **Resolves Tensions** where perspectives conflict
${isFinalRound ? '4. **Provides Actionable Recommendations** based on the combined analysis' : '4. **Targeted Questions** - What specific points should the roles address in the next round?'}

Be structured and thorough. This synthesis should be more valuable than any single perspective alone.`;

    let synthesisText = '';
    const chairmanModel = document.getElementById('chairman-select')?.value || MODELS[0].id;

    try {
        const reader = await streamResponse(chairmanModel, synthesisPrompt);
        await processStream(
            reader,
            (chunk, full) => {
                synthesisText = full;
                const roundText = totalRounds > 1 ? `<h4>DxO Synthesis - Round ${round}</h4>` : '';
                synthesisContent.innerHTML = roundText + formatMarkdown(full) + '<span class="cursor"></span>';
            },
            (full) => {
                synthesisText = full;
                const roundText = totalRounds > 1 ? `<h4>DxO Synthesis - Round ${round}</h4>` : '';
                synthesisContent.innerHTML = roundText + formatMarkdown(full);
            }
        );
    } catch (error) {
        synthesisText = `Error generating synthesis: ${error.message}`;
        synthesisContent.innerHTML = `<p style="color: #ef4444;">${synthesisText}</p>`;
    }
    return synthesisText;
}

// ============================================
// ENSEMBLE MODE
// ============================================

async function startEnsemble(isContinue = false) {
    const prompt = document.getElementById('ensemble-prompt').value.trim();
    if (!prompt) {
        alert('Please enter a question or topic.');
        return;
    }

    if (state.selectedEnsembleModels.length < 2) {
        alert('Please select at least 2 models for the ensemble.');
        return;
    }

    const roundsToRun = isContinue ? 1 : parseInt(document.getElementById('ensemble-rounds')?.value || 1);
    const existingSynthesis = document.getElementById('synthesis-content').textContent;

    if (!isContinue) showResults('Ensemble Analysis');
    else document.getElementById('results-panel').classList.remove('hidden');

    let currentContext = isContinue ? existingSynthesis : '';
    let finalAnonymousResponses = {};
    let finalSynthesis = '';

    for (let round = 1; round <= roundsToRun; round++) {
        const displayRound = isContinue ? 'Continuation' : round;
        const roundTitle = !isContinue && roundsToRun > 1 ? ` (Round ${round}/${roundsToRun})` : (isContinue ? ' (Continuation)' : '');
        document.getElementById('results-title').textContent = `Ensemble${roundTitle}`;

        const anonymousResponses = {};
        const responsesContainer = document.getElementById('model-responses');
        if (round === 1) responsesContainer.innerHTML = '';

        // Shuffle models once at the start of the session to keep labels consistent
        const shuffledModels = [...state.selectedEnsembleModels];
        if (round === 1) shuffledModels.sort(() => Math.random() - 0.5);

        const promises = shuffledModels.map(async (modelId, index) => {
            const anonName = ANONYMOUS_NAMES[index] || `Agent ${index + 1}`;
            const cardId = `${anonName.toLowerCase()}-round-${round}`;

            const cardHtml = createResponseCard(anonName, 'Anonymous Perspective', cardId, anonName.toLowerCase());
            responsesContainer.insertAdjacentHTML('beforeend', cardHtml);

            if (index > 0) await sleep(index * 1000);

            let systemPrompt = `Provide your analysis and perspective on the following question. Be thorough, insightful, and focused on substance. Your response will be anonymized for unbiased evaluation.`;

            if (round > 1) {
                systemPrompt += `\n\n**Previous Iteration Synthesis:**\n${currentContext}\n\nBased on the collective synthesis, refine your position or address any specific critiques.`;
            }

            try {
                const reader = await streamResponse(modelId, prompt, systemPrompt, state.attachments.ensemble);
                await processStream(
                    reader,
                    (chunk, full) => updateResponseCard(cardId, full, 'streaming'),
                    (full) => {
                        anonymousResponses[anonName] = full;
                        updateResponseCard(cardId, full, 'complete');
                    }
                );
            } catch (error) {
                updateResponseCard(cardId, `Error: ${error.message}`, 'error');
            }
        });

        await Promise.all(promises);

        finalAnonymousResponses = { ...finalAnonymousResponses, ...anonymousResponses };
        finalSynthesis = await synthesizeEnsemble(prompt, anonymousResponses, round, totalRounds);
        currentContext = finalSynthesis;
    }

    saveToHistory('ensemble', prompt, state.selectedEnsembleModels.length, null, finalAnonymousResponses, finalSynthesis);
}

async function synthesizeEnsemble(originalPrompt, responses, round = 1, totalRounds = 1) {
    const synthesisPanel = document.getElementById('synthesis-panel');
    const synthesisContent = document.getElementById('synthesis-content');
    synthesisPanel.classList.remove('hidden');

    const responseSummary = Object.entries(responses).map(([anonName, response]) => {
        return `## Agent ${anonName}:\n${response}`;
    }).join('\n\n---\n\n');

    const isFinalRound = round === totalRounds;
    const synthesisPrompt = `You are synthesizing responses from multiple anonymous AI agents. Focus purely on the substance and quality of arguments, not on who said what.
${totalRounds > 1 ? `**Current Round:** ${round} of ${totalRounds}` : ''}

**Original Question:** ${originalPrompt}

**Anonymous Agent Responses:**
${responseSummary}

Create an unbiased ${isFinalRound ? 'FINAL' : 'INTERMEDIATE'} synthesis that:
1. **Identifies Best Ideas** regardless of source
2. **Highlights Unique Insights** each agent contributed
3. **Notes Agreement Areas** where agents converge
4. **Resolves Disagreements** based on argument strength
5. **Provides ${isFinalRound ? 'Final Recommendation' : 'Topics for Iterative Refinement'}** synthesizing the best elements

Remember: Focus on the quality of reasoning, not the source. This is anonymous collective intelligence.`;

    let synthesisText = '';
    const chairmanModel = document.getElementById('chairman-select')?.value || MODELS[0].id;

    try {
        const reader = await streamResponse(chairmanModel, synthesisPrompt);
        await processStream(
            reader,
            (chunk, full) => {
                synthesisText = full;
                const roundText = totalRounds > 1 ? `<h4>Ensemble Synthesis - Round ${round}</h4>` : '';
                synthesisContent.innerHTML = roundText + formatMarkdown(full) + '<span class="cursor"></span>';
            },
            (full) => {
                synthesisText = full;
                const roundText = totalRounds > 1 ? `<h4>Ensemble Synthesis - Round ${round}</h4>` : '';
                synthesisContent.innerHTML = roundText + formatMarkdown(full);
            }
        );
    } catch (error) {
        synthesisText = `Error generating synthesis: ${error.message}`;
        synthesisContent.innerHTML = `<p style="color: #ef4444;">${synthesisText}</p>`;
    }
    return synthesisText;
}

// ============================================
// SUPER CHAT MODE
// ============================================

async function startSuperChat() {
    const prompt = document.getElementById('superchat-prompt').value.trim();
    if (!prompt) {
        alert('Please enter a message.');
        return;
    }

    const modelId = document.getElementById('superchat-model').value;
    const model = findModelById(modelId);

    showResults('Super Chat');

    const responsesContainer = document.getElementById('model-responses');
    responsesContainer.innerHTML = createResponseCard(model.name, model.provider, 'superchat');

    // Hide synthesis panel for super chat
    document.getElementById('synthesis-panel').classList.add('hidden');

    try {
        const reader = await streamResponse(modelId, prompt, '', state.attachments.superchat);
        await processStream(
            reader,
            (chunk, full) => updateResponseCard('superchat', full, 'streaming'),
            (full) => {
                updateResponseCard('superchat', full, 'complete');
                saveToHistory('superchat', prompt, 1);
            }
        );
    } catch (error) {
        updateResponseCard('superchat', `Error: ${error.message}`, 'error');
    }
}

// ============================================
// UI HELPERS
// ============================================

function createResponseCard(name, subtitle, id, avatarClass = '') {
    return `
        <div class="response-card" id="response-${id}">
            <div class="response-header">
                <div class="response-avatar ${avatarClass}">${name.charAt(0)}</div>
                <div class="response-info">
                    <h4>${name}</h4>
                    <p>${subtitle}</p>
                </div>
                <span class="response-status streaming" id="status-${id}">Thinking...</span>
            </div>
            <div class="response-content" id="content-${id}">
                <span class="cursor"></span>
            </div>
        </div>
    `;
}

function updateResponseCard(id, content, status) {
    const contentEl = document.getElementById(`content-${id}`);
    const statusEl = document.getElementById(`status-${id}`);

    if (contentEl) {
        if (status === 'streaming') {
            contentEl.innerHTML = formatMarkdown(content) + '<span class="cursor"></span>';
        } else {
            contentEl.innerHTML = formatMarkdown(content);
        }
    }

    if (statusEl) {
        if (status === 'complete') {
            statusEl.textContent = 'Complete';
            statusEl.className = 'response-status complete';
        } else if (status === 'error') {
            statusEl.textContent = 'Error';
            statusEl.className = 'response-status error';
        }
    }
}

function formatMarkdown(text) {
    if (!text) return '';

    // Basic markdown formatting
    let html = text
        // Headers
        .replace(/^### (.*$)/gm, '<h4>$1</h4>')
        .replace(/^## (.*$)/gm, '<h4>$1</h4>')
        .replace(/^# (.*$)/gm, '<h3>$1</h3>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Code blocks
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Lists
        .replace(/^\s*[-*]\s+(.*)$/gm, '<li>$1</li>')
        .replace(/^\s*(\d+)\.\s+(.*)$/gm, '<li>$2</li>')
        // Paragraphs
        .replace(/\n\n/g, '</p><p>')
        // Line breaks
        .replace(/\n/g, '<br>');

    // Wrap in paragraph tags
    html = '<p>' + html + '</p>';

    // Clean up empty paragraphs
    html = html.replace(/<p><\/p>/g, '');

    // Wrap consecutive li elements in ul
    html = html.replace(/(<li>.*?<\/li>)+/gs, '<ul>$&</ul>');

    return html;
}

function showResults(title) {
    document.getElementById('results-title').textContent = title;
    document.getElementById('results-panel').classList.remove('hidden');
    document.getElementById('synthesis-panel').classList.add('hidden');
    document.getElementById('model-responses').innerHTML = '';
}

function closeResults() {
    document.getElementById('results-panel').classList.add('hidden');
}

// Store current results for copy/export
let currentResults = {
    title: '',
    responses: {},
    synthesis: ''
};

function copyAllResults() {
    const title = document.getElementById('results-title').textContent;
    let text = `# ${title}\n\n`;
    text += `Generated: ${new Date().toLocaleString()}\n\n`;
    text += `---\n\n`;

    // Get all response cards
    const responseCards = document.querySelectorAll('#model-responses .response-card');
    if (responseCards.length > 0) {
        text += `## Council Member Responses\n\n`;
        responseCards.forEach(card => {
            const header = card.querySelector('.response-header h3');
            const body = card.querySelector('.response-body');
            if (header && body) {
                text += `### ${header.textContent}\n\n`;
                text += `${body.innerText}\n\n`;
                text += `---\n\n`;
            }
        });
    }

    // Get synthesis
    const synthesisPanel = document.getElementById('synthesis-panel');
    const synthesisContent = document.getElementById('synthesis-content');
    if (synthesisPanel && !synthesisPanel.classList.contains('hidden') && synthesisContent) {
        text += `## ✨ Final Synthesis\n\n`;
        text += `${synthesisContent.innerText}\n`;
    }

    navigator.clipboard.writeText(text).then(() => {
        showCopyFeedback('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy to clipboard');
    });
}

function exportCurrentResults() {
    const title = document.getElementById('results-title').textContent;
    let markdown = `# ${title}\n\n`;
    markdown += `**Generated:** ${new Date().toLocaleString()}\n\n`;
    markdown += `---\n\n`;

    // Get all response cards  
    const responseCards = document.querySelectorAll('#model-responses .response-card');
    if (responseCards.length > 0) {
        markdown += `## Council Member Responses\n\n`;
        responseCards.forEach(card => {
            const header = card.querySelector('.response-header h3');
            const body = card.querySelector('.response-body');
            if (header && body) {
                markdown += `### ${header.textContent}\n\n`;
                markdown += `${body.innerText}\n\n`;
                markdown += `---\n\n`;
            }
        });
    }

    // Get synthesis
    const synthesisPanel = document.getElementById('synthesis-panel');
    const synthesisContent = document.getElementById('synthesis-content');
    if (synthesisPanel && !synthesisPanel.classList.contains('hidden') && synthesisContent) {
        markdown += `## ✨ Final Synthesis\n\n`;
        markdown += `${synthesisContent.innerText}\n`;
    }

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const sanitizedTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    a.download = `satya-${sanitizedTitle}-${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
}

function showCopyFeedback(message) {
    const existing = document.querySelector('.copy-feedback');
    if (existing) existing.remove();

    const feedback = document.createElement('div');
    feedback.className = 'copy-feedback';
    feedback.textContent = message;
    document.body.appendChild(feedback);

    setTimeout(() => {
        feedback.classList.add('fade-out');
        setTimeout(() => feedback.remove(), 300);
    }, 2000);
}

// ============================================
// HISTORY
// ============================================

function showHistory() {
    document.getElementById('history-modal').classList.remove('hidden');
    renderHistory();
}

function closeHistory() {
    document.getElementById('history-modal').classList.add('hidden');
}

function saveToHistory(type, prompt, modelCount, roles = null, responses = null, synthesis = null) {
    const entryId = Date.now();
    const entry = {
        id: entryId,
        type: type,
        prompt: prompt.substring(0, 200) + (prompt.length > 200 ? '...' : ''),
        fullPrompt: prompt,
        modelCount: modelCount,
        roles: roles,
        responses: responses,
        synthesis: synthesis,
        timestamp: new Date().toISOString(),
        status: 'Completed',
        tags: [],
        notes: ''
    };

    state.currentSessionId = entryId;
    state.history.unshift(entry);
    if (state.history.length > 50) {
        state.history = state.history.slice(0, 50);
    }

    localStorage.setItem('satya_history', JSON.stringify(state.history));
    updateHistoryStats();

    // Reset session meta inputs
    const tagsInput = document.getElementById('session-tags');
    const notesInput = document.getElementById('session-notes');
    if (tagsInput) tagsInput.value = '';
    if (notesInput) notesInput.value = '';
}

function saveSessionMeta() {
    if (!state.currentSessionId) {
        alert('No active session to tag. Run a deliberation first.');
        return;
    }

    const tagsInput = document.getElementById('session-tags');
    const notesInput = document.getElementById('session-notes');
    const tags = tagsInput.value.split(',').map(t => t.trim()).filter(t => t !== '');
    const notes = notesInput.value.trim();

    const entryIndex = state.history.findIndex(h => h.id === state.currentSessionId);
    if (entryIndex !== -1) {
        state.history[entryIndex].tags = tags;
        state.history[entryIndex].notes = notes;

        localStorage.setItem('satya_history', JSON.stringify(state.history));
        updateHistoryStats();
        showCopyFeedback('Research metadata saved to history!');
    }
}

function updateHistoryStats() {
    const counts = {
        total: state.history.length,
        superchat: state.history.filter(h => h.type === 'superchat').length,
        council: state.history.filter(h => h.type === 'council').length,
        dxo: state.history.filter(h => h.type === 'dxo').length,
        ensemble: state.history.filter(h => h.type === 'ensemble').length
    };

    document.getElementById('stat-total').textContent = counts.total;
    document.getElementById('stat-superchat').textContent = counts.superchat;
    document.getElementById('stat-council').textContent = counts.council;
    document.getElementById('stat-dxo').textContent = counts.dxo;
    document.getElementById('stat-ensemble').textContent = counts.ensemble;
}

function renderHistory() {
    const container = document.getElementById('history-list');

    const groupedHistory = {
        council: state.history.filter(h => h.type === 'council'),
        dxo: state.history.filter(h => h.type === 'dxo'),
        ensemble: state.history.filter(h => h.type === 'ensemble'),
        superchat: state.history.filter(h => h.type === 'superchat')
    };

    let html = '';

    if (groupedHistory.council.length > 0) {
        html += `
            <div class="history-section council">
                <div class="history-section-title">Council Research Sessions</div>
                ${groupedHistory.council.map(h => createHistoryItem(h)).join('')}
            </div>
        `;
    }

    if (groupedHistory.dxo.length > 0) {
        html += `
            <div class="history-section dxo">
                <div class="history-section-title">DxO Decision Analysis Sessions</div>
                ${groupedHistory.dxo.map(h => createHistoryItem(h)).join('')}
            </div>
        `;
    }

    if (groupedHistory.ensemble.length > 0) {
        html += `
            <div class="history-section ensemble">
                <div class="history-section-title">Ensemble Analysis Sessions</div>
                ${groupedHistory.ensemble.map(h => createHistoryItem(h)).join('')}
            </div>
        `;
    }

    if (groupedHistory.superchat.length > 0) {
        html += `
            <div class="history-section superchat">
                <div class="history-section-title">Super Chat Sessions</div>
                ${groupedHistory.superchat.map(h => createHistoryItem(h)).join('')}
            </div>
        `;
    }

    if (html === '') {
        html = '<p style="text-align: center; color: var(--text-muted); padding: 40px;">No history yet. Start a research session to see it here.</p>';
    }

    container.innerHTML = html;
}

function createHistoryItem(item) {
    const date = new Date(item.timestamp).toLocaleString();
    const meta = item.roles
        ? `${item.modelCount} roles: ${item.roles.join(', ')}`
        : `${item.modelCount} models`;

    const tagBadges = item.tags && item.tags.length > 0
        ? `<div class="history-tags">${item.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}</div>`
        : '';

    return `
        <div class="history-item" onclick="viewHistoryItem(${item.id})">
            <div class="history-item-info">
                <h4>${item.prompt}</h4>
                <div class="history-item-meta">
                    <span>${date}</span>
                    <span class="status">● ${item.status}</span>
                    <span>${meta}</span>
                </div>
                ${tagBadges}
            </div>
            <button class="export-btn" onclick="event.stopPropagation(); exportHistoryItem(${item.id})">
                ↓ Export
            </button>
        </div>
    `;
}

function viewHistoryItem(itemId) {
    const item = state.history.find(h => h.id === itemId);
    if (!item) return;

    state.currentSessionId = item.id;
    showResults(`${item.type.charAt(0).toUpperCase() + item.type.slice(1)} - ${new Date(item.timestamp).toLocaleDateString()}`);

    // Populate meta inputs
    const tagsInput = document.getElementById('session-tags');
    const notesInput = document.getElementById('session-notes');
    if (tagsInput) tagsInput.value = item.tags ? item.tags.join(', ') : '';
    if (notesInput) notesInput.value = item.notes || '';

    // Show responses if available
    if (item.responses) {
        const responsesContainer = document.getElementById('model-responses');
        responsesContainer.innerHTML = Object.entries(item.responses).map(([name, response]) => {
            return `
                <div class="response-card complete">
                    <div class="response-header">
                        <h3>${name}</h3>
                    </div>
                    <div class="response-body">
                        ${formatMarkdown(response)}
                    </div>
                </div>
            `;
        }).join('');
    }

    // Show synthesis if available
    if (item.synthesis) {
        const synthesisPanel = document.getElementById('synthesis-panel');
        const synthesisContent = document.getElementById('synthesis-content');
        synthesisPanel.classList.remove('hidden');
        synthesisContent.innerHTML = formatMarkdown(item.synthesis);
    }
}

function exportHistoryItem(itemId) {
    const item = state.history.find(h => h.id === itemId);
    if (!item) return;

    // Build readable markdown export
    let markdown = `# Satya ${item.type.charAt(0).toUpperCase() + item.type.slice(1)} Session\n\n`;
    markdown += `**Date:** ${new Date(item.timestamp).toLocaleString()}\n`;
    markdown += `**Mode:** ${item.type}\n`;
    markdown += `**Models:** ${item.modelCount}\n`;
    if (item.tags && item.tags.length > 0) markdown += `**Tags:** ${item.tags.join(', ')}\n`;
    markdown += `\n---\n\n`;

    markdown += `## Prompt\n\n${item.fullPrompt || item.prompt}\n\n`;

    if (item.notes) {
        markdown += `## Research Notes\n\n${item.notes}\n\n`;
    }

    markdown += `---\n\n`;

    // Add roles if present (DxO mode)
    if (item.roles && item.roles.length > 0) {
        markdown += `## Roles\n\n`;
        item.roles.forEach(role => {
            markdown += `- **${role.name}**: ${role.perspective}\n`;
        });
        markdown += `\n---\n\n`;
    }

    // Add responses
    if (item.responses) {
        markdown += `## Responses\n\n`;
        Object.entries(item.responses).forEach(([name, response]) => {
            markdown += `### ${name}\n\n${response}\n\n---\n\n`;
        });
    }

    // Add synthesis
    if (item.synthesis) {
        markdown += `## ✨ Final Synthesis\n\n${item.synthesis}\n`;
    }

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `satya-${item.type}-${new Date(item.timestamp).toISOString().split('T')[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
}

// ============================================
// SETTINGS
// ============================================

function showSettings() {
    document.getElementById('settings-modal').classList.remove('hidden');
}

function logout() {
    localStorage.removeItem('satya_auth');
    localStorage.removeItem('satya_api_key');
    window.location.reload();
}

function closeSettings() {
    document.getElementById('settings-modal').classList.add('hidden');
}

function loadApiKey() {
    const savedKey = localStorage.getItem('satya_api_key');
    if (savedKey) {
        document.getElementById('api-key-input').value = savedKey;
    }
}

function saveSettings() {
    const apiKey = document.getElementById('api-key-input').value.trim();
    if (apiKey) {
        localStorage.setItem('satya_api_key', apiKey);
    } else {
        localStorage.removeItem('satya_api_key');
    }
    closeSettings();
    alert('Settings saved!');
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeResults();
        closeHistory();
        closeSettings();
    }
});

// Close modals on backdrop click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

// ============================================
// BENCHMARK TESTS
// ============================================

const BENCHMARK_TESTS = {
    'blue-eyed': {
        name: 'Blue-Eyed Islanders',
        icon: '🧩',
        prompt: `Solve this logic puzzle step by step:

100 people live on an island. Some have blue eyes, some have brown eyes. They cannot see their own eye color, but can see everyone else's. If anyone ever figures out their own eye color, they must leave the island at midnight that same day. There are no mirrors, and they cannot directly communicate about eye colors.

One day, a visitor comes and announces to everyone: "At least one person on this island has blue eyes."

Everyone on the island is a perfect logician. They can deduce anything that is logically possible.

Key questions to answer:
1. Does anyone leave the island? If so, who and when?
2. What exactly happens if there are exactly K blue-eyed people?
3. Explain the step-by-step reasoning for how they figure this out.`,
        evaluationCriteria: ['Correctly identifies induction/recursion', 'Explains K=1 base case', 'Shows K-day departure for K blue-eyed people', 'Explains the "common knowledge" concept']
    },
    'three-gods': {
        name: 'Three Gods Puzzle',
        icon: '🔮',
        prompt: `Solve this famous logic puzzle:

Three gods A, B, and C are called, in some order, True, False, and Random.
- True always speaks truly
- False always speaks falsely  
- Random speaks randomly (sometimes true, sometimes false)

Your task is to determine the identities of A, B, and C by asking exactly three yes-no questions. Each question must be posed to exactly one god.

Additional complications:
- The gods understand English but answer in their own language with words "da" and "ja" - you don't know which word means yes and which means no
- Random's answers are determined by the flip of a fair coin

Provide:
1. The three questions to ask
2. Which god to ask each question
3. How to interpret the answers to determine all three identities`,
        evaluationCriteria: ['Handles the da/ja language barrier', 'Uses self-referential or counterfactual questions', 'Correctly eliminates Random first', 'Provides complete 3-question strategy']
    },
    'coding': {
        name: 'Coding Challenge',
        icon: '💻',
        prompt: `Implement Manacher's Algorithm in Python to find the longest palindromic substring in a given string.

Requirements:
1. Time complexity must be O(n)
2. Include clear comments explaining each step
3. Handle edge cases (empty string, single character, all same characters)
4. Include test cases demonstrating correctness

Explain:
1. Why the naive approach is O(n²) or O(n³)
2. How Manacher's algorithm achieves O(n) time
3. The key insight about palindrome symmetry that makes this possible`,
        evaluationCriteria: ['Correct O(n) implementation', 'Proper string transformation with separators', 'Correct center/radius expansion', 'Handles all edge cases', 'Clear explanation of the algorithm']
    },
    'debate': {
        name: 'AI Ethics Debate',
        icon: '⚖️',
        prompt: `Analyze the ethical implications of AI systems making autonomous decisions in three critical domains:

1. **Healthcare**: AI diagnosing diseases and recommending treatments
2. **Criminal Justice**: AI predicting recidivism and influencing sentencing
3. **Financial Lending**: AI determining loan approvals and credit limits

For each domain, address:
- Key ethical concerns (bias, accountability, transparency)
- Real-world examples of AI failures or successes
- Proposed safeguards and their limitations
- Your position on appropriate AI autonomy levels

Conclude with a framework for when AI should augment vs. replace human decision-making.`,
        evaluationCriteria: ['Balanced analysis of benefits and risks', 'Concrete real-world examples', 'Nuanced discussion of tradeoffs', 'Practical recommendations', 'Addresses accountability and bias']
    }
};

let selectedBenchmark = null;
let lastSessionContext = null;

function selectBenchmark(benchmarkId) {
    selectedBenchmark = benchmarkId;

    // Update UI
    document.querySelectorAll('.benchmark-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`[data-benchmark="${benchmarkId}"]`)?.classList.add('selected');

    const benchmark = BENCHMARK_TESTS[benchmarkId];
    if (benchmark) {
        document.getElementById('benchmark-selected').classList.remove('hidden');
        document.getElementById('selected-benchmark-icon').textContent = benchmark.icon;
        document.getElementById('selected-benchmark-name').textContent = benchmark.name;
    }
}

function toggleBenchmarkSelection() {
    const toggle = document.getElementById('use-current-selection');
    toggle.classList.toggle('active');
}

async function startBenchmark() {
    if (!selectedBenchmark) {
        alert('Please select a benchmark test first.');
        return;
    }

    const benchmark = BENCHMARK_TESTS[selectedBenchmark];
    const mode = document.getElementById('benchmark-mode').value;

    // Set the prompt and run the appropriate mode
    if (mode === 'council') {
        document.getElementById('council-prompt').value = benchmark.prompt;
        switchTab('council');
        startCouncil();
    } else {
        document.getElementById('ensemble-prompt').value = benchmark.prompt;
        switchTab('ensemble');
        startEnsemble();
    }
}

// ============================================
// CONTINUE SESSION
// ============================================

function continueSession() {
    if (!lastSessionContext) {
        alert('No previous session context available.');
        return;
    }

    const continuePrompt = prompt('Enter follow-up question or request:');
    if (!continuePrompt || continuePrompt.trim() === '') return;

    // Combine previous context with new prompt
    const fullPrompt = `Previous discussion summary:
${lastSessionContext.synthesisText}

---

Follow-up question: ${continuePrompt}

Please continue the analysis, building on the insights from the previous discussion.`;

    // Re-run with context
    if (lastSessionContext.mode === 'council') {
        document.getElementById('council-prompt').value = fullPrompt;
        startCouncil();
    } else if (lastSessionContext.mode === 'ensemble') {
        document.getElementById('ensemble-prompt').value = fullPrompt;
        startEnsemble();
    } else if (lastSessionContext.mode === 'dxo') {
        document.getElementById('dxo-prompt').value = fullPrompt;
        startDxO();
    }
}

// Store session context after each run
function storeSessionContext(mode, prompt, responses, synthesisText) {
    lastSessionContext = {
        mode,
        prompt,
        responses,
        synthesisText,
        timestamp: new Date().toISOString()
    };
}

// ============================================
// EXPORT FUNCTIONS
// ============================================

function toggleExportMenu() {
    const menu = document.getElementById('export-menu');
    menu.classList.toggle('hidden');

    // Close menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', closeExportMenuOnOutsideClick, { once: true });
    }, 0);
}

function closeExportMenuOnOutsideClick(e) {
    const menu = document.getElementById('export-menu');
    const wrapper = document.querySelector('.export-dropdown-wrapper');
    if (wrapper && !wrapper.contains(e.target)) {
        menu.classList.add('hidden');
    }
}

function exportAsPDF() {
    // Close menu
    document.getElementById('export-menu').classList.add('hidden');

    // Use browser print to PDF
    const title = document.getElementById('results-title').textContent;
    const resultsContent = document.querySelector('.results-content').innerHTML;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${title} - Satya Export</title>
            <style>
                body { 
                    font-family: 'Inter', -apple-system, sans-serif; 
                    padding: 40px; 
                    max-width: 800px; 
                    margin: 0 auto;
                    color: #333;
                    line-height: 1.6;
                }
                h1 { color: #00DDB3; border-bottom: 2px solid #00DDB3; padding-bottom: 10px; }
                h2 { color: #8b5cf6; margin-top: 24px; }
                h3 { color: #666; }
                .response-card { 
                    border: 1px solid #ddd; 
                    border-radius: 8px; 
                    padding: 16px; 
                    margin: 16px 0; 
                    background: #f9f9f9;
                }
                .synthesis-panel {
                    border: 2px solid #8b5cf6;
                    border-radius: 8px;
                    padding: 20px;
                    margin-top: 24px;
                    background: #faf5ff;
                }
                pre { background: #f4f4f4; padding: 12px; border-radius: 4px; overflow-x: auto; }
                code { background: #f4f4f4; padding: 2px 4px; border-radius: 3px; }
            </style>
        </head>
        <body>
            <h1>${title}</h1>
            <p><em>Generated: ${new Date().toLocaleString()}</em></p>
            ${resultsContent}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

function generateShareableLink() {
    // Close menu
    document.getElementById('export-menu').classList.add('hidden');

    const title = document.getElementById('results-title').textContent;
    const synthesisContent = document.getElementById('synthesis-content').innerText;

    // Create a simplified, anonymized version for sharing
    const shareData = {
        title: title,
        synthesis: synthesisContent,
        timestamp: new Date().toISOString(),
        models: 'anonymized'
    };

    // Encode as base64 (simplified approach - in production use proper backend)
    const encoded = btoa(encodeURIComponent(JSON.stringify(shareData)));
    const shareUrl = `${window.location.origin}${window.location.pathname}#share=${encoded}`;

    navigator.clipboard.writeText(shareUrl).then(() => {
        showCopyFeedback('Shareable link copied to clipboard!');
    }).catch(err => {
        prompt('Copy this shareable link:', shareUrl);
    });
}

// ============================================
// CUSTOM ROLE STORAGE
// ============================================

function saveCustomRoles() {
    localStorage.setItem('satya_custom_roles', JSON.stringify(state.roles));
}

function loadCustomRoles() {
    const saved = localStorage.getItem('satya_custom_roles');
    if (saved) {
        try {
            state.roles = JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load custom roles:', e);
        }
    }
}

// Add custom role with persistence
function addCustomRole(roleData = null) {
    let defaultModel;
    if (state.ultraFreeMode) defaultModel = ULTRA_FREE_MODELS[0].id;
    else if (state.beastFreeMode) defaultModel = BEAST_FREE_MODELS[0].id;
    else if (state.freeMode) defaultModel = FREE_MODELS[0].id;
    else defaultModel = MODELS[0].id;

    const newRole = roleData || {
        name: 'Custom Role',
        model: defaultModel,
        perspective: 'Custom perspective',
        instructions: 'Define this role\'s focus and responsibilities.',
        isCustom: true
    };

    state.roles.push(newRole);
    saveCustomRoles();
    renderRoles();
}
