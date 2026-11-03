window.MGCaseStudyFlows = {
  'rentflow': {
    caption: 'The documented RentFlow billing journey: a rental and its meter readings become a reviewed bill, an allocated payment and a remaining balance.',
    stages: [
      { label: 'Rental', note: 'A property, unit and tenant are connected through an occupancy. The rental carries its rent plan, deposit and electricity method.' },
      { label: 'Meter reading', note: 'A reading is recorded against a meter. The web workflow displays consumption and warnings before the reading contributes to electricity billing.' },
      { label: 'Billing readiness', kind: 'gate', note: 'The monthly readiness check identifies what blocks billing. Previews and draft bills provide a review boundary before finalization.' },
      { label: 'Bill', note: 'Draft bill lines can be reviewed and recalculated before finalization. Finalized bills expose PDF downloads, share links and UPI payment details.' },
      { label: 'Payment', note: 'The payment API requires an Idempotency-Key and provides an allocation preview. Reversal and reallocation are documented operations rather than edits to the rent plan.' },
      { label: 'Balance due', note: 'The occupancy ledger and dues views show the money still owed after allocations. Advance credit and partial payments are represented separately from new charges.' }
    ]
  },
  'selfmind': {
    caption: 'The documented path of a chat message through SelfMind, with the role of each stage explained beside it.',
    stages: [
      { label: 'App', kind: 'external', note: 'The web, iOS or Android client is the starting point of the supplied chat flow.' },
      { label: 'REST API', note: 'The message enters the backend through the REST API. The portfolio records 94 REST endpoints across the product.' },
      { label: 'Crisis check', kind: 'gate', note: 'The supplied schematic places this gate before the model proxy. Its detection rules and escalation behaviour are not documented.' },
      { label: 'Model proxy', note: 'The proxy is the boundary between the application API and Azure OpenAI in the documented flow.' },
      { label: 'Azure OpenAI', kind: 'external', note: 'Azure OpenAI is the external model service named in both the stack and the chat schematic.' },
      { label: 'Token stream', note: 'The supplied flow ends with streamed model output. Stream formatting and timing measurements are not provided.' }
    ]
  },
  'content-engine': {
    caption: 'The six documented layers of the content engine, from ingestion to publication through a human approval gate.',
    stages: [
      { label: 'Ingest', note: 'The first layer brings material into the pipeline. The original schematic does not identify the input sources.' },
      { label: 'Intelligence', note: 'This is the processing layer immediately after ingestion in the supplied stage order. Its prompts and data contract are not provided.' },
      { label: 'Expansion', note: 'The documented workflow separates expansion from intelligence and creative work. The transformation performed here is not specified.' },
      { label: 'Creative', note: 'Creative work precedes review. Azure OpenAI and gpt-image are listed in the project stack; their exact assignment to layers is not documented.' },
      { label: 'Approval', kind: 'gate', note: 'The human-in-the-loop approval boundary sits before publication. The gate is part of the original project schematic.' },
      { label: 'Publish', note: 'The last layer publishes approved content. The portfolio records three publishing platforms without naming them.' }
    ]
  },
  'x402-backend': {
    caption: 'The documented payment-to-access path: an HTTP 402 response, a signed check and USDC settlement on Base.',
    stages: [
      { label: 'Client', kind: 'external', note: 'The client begins the supplied payment flow by requesting access to the paid HTTP resource.' },
      { label: '402 response', note: 'The backend exposes the payment boundary as an HTTP 402 response. The precise response schema is not supplied.' },
      { label: 'EIP-712 check', kind: 'gate', note: 'The schematic makes signed verification a gate before settlement and access. Verification code and replay rules are not supplied.' },
      { label: 'USDC on Base', kind: 'external', note: 'USDC on Base is the settlement asset and network named in the project description. Confirmation policy is not documented.' },
      { label: 'Access', note: 'Access is the final stage after the payment boundary in the original schematic. Retry and failure behaviour are not supplied.' }
    ]
  },
  'subscription-bot': {
    conceptual: true,
    caption: 'A conceptual overview of the stated payment-verification and Telegram-access responsibilities, not a verified implementation sequence.',
    stages: [
      { label: 'Telegram member', kind: 'external', note: 'Telegram group membership is the access context described by the project. The member-to-payment identity mapping is not supplied.' },
      { label: 'On-chain payment', kind: 'external', note: 'The description names payments on Base and Solana. Payment instructions and supported assets are not documented.' },
      { label: 'Payment verification', kind: 'gate', note: 'Verifying on-chain payments is an explicitly documented responsibility. Chain-specific confirmation and validation rules remain unspecified.' },
      { label: 'Paid group access', note: 'The bot is described as managing paid Telegram group access. Granting, expiry and recovery mechanics are not supplied.' },
      { label: 'Referral scope', note: 'Referral functionality appears in the project name. This overview identifies that scope without implying any particular reward or payout implementation.' }
    ]
  },
  'acp': {
    conceptual: true,
    caption: 'A conceptual map of the named API, agents and Virtuals ACP integration. Actual protocol transitions have not been supplied.',
    stages: [
      { label: 'API', note: 'An API is explicitly part of the project description. Endpoints, callers and authentication contracts are not documented.' },
      { label: 'Agent work', note: 'The project includes agents. Their responsibilities and execution model are not specified in the supplied entry.' },
      { label: 'Virtuals ACP', kind: 'external', note: 'Virtuals Agent Commerce Protocol is the named external integration. No protocol version or job lifecycle is supplied.' },
      { label: 'Job outcome', note: 'This is a conceptual output boundary, not a claim of completed commercial jobs. Job examples and results have not been provided.' }
    ]
  },
  'habit-tracker': {
    conceptual: true,
    caption: 'A conceptual overview of the stated cross-platform habit-tracking goal. Storage, tracking rules and shipped screens are not documented.',
    stages: [
      { label: 'Mobile user', kind: 'external', note: 'The product is described as a mobile habit tracker. Tested devices and supported operating-system releases are not supplied.' },
      { label: 'Flutter client', note: 'Flutter and Dart are the documented client technologies. The available entry does not identify a backend stack.' },
      { label: 'Habit tracking', note: 'Tracking habits is the stated product goal. Schedules, completion rules and date handling are not specified.' },
      { label: 'Tracking view', note: 'This is a conceptual presentation boundary. Specific dashboards, streaks and persistence behaviour are not claimed as implemented features.' }
    ]
  },
  'employee-turnover': {
    conceptual: true,
    caption: 'A conceptual modelling workflow for the stated employee-turnover prediction task, not a record of verified experiment stages.',
    stages: [
      { label: 'Dataset', kind: 'external', note: 'A dataset is a required input to this prediction task, but its source, target definition and feature availability are not supplied.' },
      { label: 'Python notebook', note: 'Python and Jupyter are the documented experiment environment. Data preparation and splitting decisions are not recorded.' },
      { label: 'Model', note: 'scikit-learn is the named modelling library. The estimator, training procedure and selected features are not provided.' },
      { label: 'Turnover prediction', note: 'Employee turnover is the stated prediction target. Prediction horizon and output format remain unspecified.' },
      { label: 'Evaluation', kind: 'gate', note: 'Evaluation is a conceptual verification boundary, not a claimed completed test. Baselines, scoring metrics and measured results are not supplied.' }
    ]
  }
};
