window.MGProjects = [
  {
    "name": "SelfMind (Mello)",
    "href": "../ProjectPage/preview.html?project=selfmind",
    "tagline": "Production AI mental-wellness companion across web, iOS and Android",
    "status": "live",
    "year": "2025–2026",
    "categories": [
      "Full-Stack",
      "AI / Agentic"
    ],
    "contribution": "Team-built. I own the backend REST API, the billing and entitlement pipeline, the voice agents and the web frontend.",
    "techStack": [
      "Python",
      "Flask",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "Azure OpenAI",
      "LiveKit"
    ],
    "flowLabel": "How a chat message flows through SelfMind",
    "stages": [
      {
        "label": "App",
        "kind": "external"
      },
      "REST API",
      {
        "label": "Crisis check",
        "kind": "gate"
      },
      "Model proxy",
      {
        "label": "Azure OpenAI",
        "kind": "external"
      },
      "Token stream"
    ],
    "metrics": [
      {
        "value": "94",
        "label": "REST endpoints"
      },
      {
        "value": "3",
        "label": "platforms: web, iOS, Android"
      },
      {
        "value": "3",
        "label": "billing providers unified"
      }
    ],
    "slug": "selfmind"
  },
  {
    "name": "Mello Go Backend",
    "href": "../CaseStudyPage/preview.html",
    "tagline": "A standard-library Go backend for a production AI wellness app",
    "status": "built",
    "year": "2026",
    "categories": [
      "Backend",
      "AI / Agentic"
    ],
    "role": "Sole author",
    "techStack": [
      "Go 1.22",
      "net/http",
      "coder/websocket",
      "Supabase",
      "PostgREST",
      "Azure OpenAI",
      "Docker"
    ],
    "flowLabel": "How a request flows through the Go backend",
    "stages": [
      {
        "label": "App",
        "kind": "external"
      },
      {
        "label": "Bearer auth",
        "kind": "gate"
      },
      "Handler",
      {
        "label": "Crisis check",
        "kind": "gate"
      },
      "Model client",
      "Token stream"
    ],
    "metrics": [
      {
        "value": "101",
        "label": "HTTP routes"
      },
      {
        "value": "62",
        "label": "Go files"
      },
      {
        "value": "~19.9k",
        "label": "lines of Go"
      },
      {
        "value": "2",
        "label": "external dependencies"
      }
    ],
    "slug": "mello-backend-go"
  },
  {
    "name": "RentFlow",
    "slug": "rentflow",
    "href": "../ProjectPage/preview.html?project=rentflow",
    "repository": "https://github.com/MadhurGupta0/Rentflow",
    "tagline": "Rent and electricity management with a Go backend, billing and payment ledgers",
    "status": "built",
    "year": "2026",
    "categories": ["Full-Stack", "Backend"],
    "contribution": "Built by me. A working rent-to-payment flow, with web and mobile clients and ongoing development.",
    "techStack": ["Go", "net/http", "pgx", "PostgreSQL", "React", "TypeScript", "React Native", "Expo"],
    "flowLabel": "How a rental becomes a bill, payment and balance in RentFlow",
    "stages": ["Rental", "Meter reading", { "label": "Billing readiness", "kind": "gate" }, "Bill", "Payment", "Balance due"]
  },
  {
    "name": "SelfMind Content Engine",
    "href": "../ProjectPage/preview.html?project=content-engine",
    "tagline": "Six-layer AI content pipeline with human-in-the-loop approval",
    "status": "built",
    "year": "2026",
    "categories": [
      "AI / Agentic",
      "Automation"
    ],
    "role": "Author",
    "techStack": [
      "Python",
      "Azure OpenAI",
      "gpt-image",
      "Supabase",
      "Telegram"
    ],
    "stages": [
      "Ingest",
      "Intelligence",
      "Expansion",
      "Creative",
      {
        "label": "Approval",
        "kind": "gate"
      },
      "Publish"
    ],
    "metrics": [
      {
        "value": "6",
        "label": "pipeline layers"
      },
      {
        "value": "3",
        "label": "publishing platforms"
      }
    ],
    "slug": "content-engine"
  },
  {
    "name": "x402 Payment Backend",
    "href": "../ProjectPage/preview.html?project=x402-backend",
    "tagline": "HTTP 402 crypto micropayments settling USDC on Base",
    "status": "built",
    "year": "2025",
    "categories": [
      "Web3 / Blockchain",
      "Backend"
    ],
    "role": "Author",
    "techStack": [
      "Python",
      "Flask",
      "TypeScript",
      "Express",
      "x402",
      "Supabase"
    ],
    "stages": [
      {
        "label": "Client",
        "kind": "external"
      },
      "402 response",
      {
        "label": "EIP-712 check",
        "kind": "gate"
      },
      {
        "label": "USDC on Base",
        "kind": "external"
      },
      "Access"
    ],
    "metrics": [
      {
        "value": "2",
        "label": "independent implementations"
      },
      {
        "value": "EIP-712",
        "label": "signed settlement"
      }
    ],
    "slug": "x402-backend"
  },
  {
    "name": "Multi-chain subscription and referral bot",
    "description": "Telegram bot that verifies on-chain payments on Base and Solana and manages paid group access.",
    "categories": [
      "Web3 / Blockchain",
      "Backend"
    ],
    "techStack": [
      "Python",
      "web3.py",
      "aiohttp",
      "Supabase"
    ],
    "slug": "subscription-bot",
    "href": "../ProjectPage/preview.html?project=subscription-bot"
  },
  {
    "name": "ACP agent commerce protocol",
    "description": "Agents and an API built on the Virtuals Agent Commerce Protocol.",
    "categories": [
      "AI / Agentic",
      "Web3 / Blockchain"
    ],
    "techStack": [
      "Python",
      "Virtuals ACP"
    ],
    "slug": "acp",
    "href": "../ProjectPage/preview.html?project=acp"
  },
  {
    "name": "Habit tracker",
    "description": "A cross-platform mobile habit tracker.",
    "categories": [
      "Full-Stack"
    ],
    "techStack": [
      "Flutter",
      "Dart"
    ],
    "slug": "habit-tracker",
    "href": "../ProjectPage/preview.html?project=habit-tracker"
  },
  {
    "name": "Employee turnover prediction",
    "description": "A machine-learning model predicting employee turnover.",
    "categories": [
      "Data / ML"
    ],
    "techStack": [
      "Python",
      "Jupyter",
      "scikit-learn"
    ],
    "slug": "employee-turnover",
    "href": "../ProjectPage/preview.html?project=employee-turnover"
  }
];
