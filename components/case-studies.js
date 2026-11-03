window.MGCaseStudies = {
  'rentflow': {
    problem: 'Property owners need a single account of rent, electricity consumption and money received. A rental can span several units, rent can change over time, and a partial payment must reduce the correct balance without creating another charge.',
    approach: 'RentFlow combines a Go net/http API and PostgreSQL with React and TypeScript on the web and React Native with Expo on mobile. The documented first working flow runs from property, unit and tenant setup through a rental, meter reading, bill, payment and balance due. Development is ongoing; a built workflow is not a claim of a completed production launch.',
    sections: [
      { title: 'A workspace owns the records', text: 'The backend documents workspace membership and permission checks in its route table, alongside PostgreSQL Row-Level Security. Properties, tenants, occupancies and meter records belong to that workspace. The same route metadata generates the API reference and its access requirements.' },
      { title: 'Readiness comes before a finalized bill', text: 'Rent plans, meter readings and additional charges feed billing. The API exposes a readiness check, bill previews and draft generation before finalization. The web billing screen follows that sequence, letting the owner inspect a month before turning drafts into finalized bills.' },
      { title: 'Payments change the ledger, not the rent plan', text: 'Payment creation requires an Idempotency-Key and offers an allocation preview. The documented backend includes reversals, reallocation, advance credit, occupancy ledgers and aged dues. These boundaries separate money received from charges raised and make the remaining balance visible.' }
    ],
    verification: 'The repository documents backend tests for enforced route security and documented responses, plus Playwright tests for the complete property-to-balance flow, billing, payments and page rendering. These are repository-documented checks; the RentFlow application test suites were not executed as part of adding this portfolio entry.',
    gaps: ['The repository is still under development; client completion and production readiness should not be inferred from the working core flow.', 'The remaining-work checklist records production setup tasks for authentication branding and messaging providers.', 'Production operating scale and independently measured reliability results are not reported here.']
  },
  'selfmind': {
    problem: 'A production mental-wellness companion spans web, iOS and Android. Chat, voice and paid access are parts of the same product, so the backend work extends beyond returning a model response.',
    approach: 'The documented scope combines a Flask REST API, Supabase and PostgreSQL, Azure OpenAI, and LiveKit. The portfolio identifies backend REST APIs, billing and entitlements, voice agents and the web frontend as my contribution to this team-built product.',
    sections: [
      { title: 'A message takes six stages', text: 'The supplied chat schematic runs from the app through the REST API, a crisis check and a model proxy, then to Azure OpenAI and back as a token stream. It makes the check and the model boundary visible rather than treating chat as a single request to a model.' },
      { title: 'Voice has its own path', text: 'The home-page voice schematic separates microphone input, speech to text, the language model, text to speech and speaker output. LiveKit is listed in the project stack. Provider choices, latency measurements and reconnect behaviour are not included in the supplied material.' },
      { title: 'Paid access crosses platform boundaries', text: 'The portfolio records three billing providers unified across three client platforms. Billing and the entitlement pipeline are explicitly part of my contribution. The available description does not specify provider names, webhook handling or reconciliation rules, so those mechanisms are not claimed here.' }
    ],
    verification: 'The supplied figures are 94 REST endpoints, three client platforms and three unified billing providers. The portfolio marks the product live. These are portfolio-reported facts, not results of a test or production audit performed for this site.',
    gaps: ['Crisis-check rules, escalation behaviour and safety verification are not supplied.', 'Voice latency, billing reconciliation evidence and the API test matrix are not supplied.']
  },
  'content-engine': {
    problem: 'The content engine is described as a six-layer AI pipeline with human-in-the-loop approval. The job is not only to generate content: the supplied workflow also includes ingestion, intermediate processing, review and publication.',
    approach: 'The documented stages are Ingest, Intelligence, Expansion, Creative, Approval and Publish. Python, Azure OpenAI, gpt-image, Supabase and Telegram are the listed stack. The portfolio identifies me as the author.',
    sections: [
      { title: 'Generation is one part of the pipeline', text: 'Ingestion precedes intelligence and expansion; creative work follows them. Those boundaries are present in the supplied schematic. The inputs, prompts and data passed between layers have not been supplied, so the diagram describes the published stage order rather than an undocumented implementation.' },
      { title: 'Approval is an explicit gate', text: 'Approval sits between Creative and Publish and is drawn as a gate. This matches the project’s human-in-the-loop description: review is represented as a distinct boundary before publishing. Telegram is listed in the stack, but its precise role and the review interface are not documented.' },
      { title: 'Publication reaches three platforms', text: 'The recorded scope is three publishing platforms. Platform names, scheduling rules and retry behaviour are not specified. Separating Publish from Creative and Approval makes that delivery boundary visible without inventing those details.' }
    ],
    verification: 'The supplied metrics record six pipeline layers and three publishing platforms, and the project is marked built in 2026. No sample outputs, quality evaluations or publishing test results accompany those figures.',
    gaps: ['Input sources, prompt designs and inter-stage data contracts are not supplied.', 'Approval audit records, publishing adapters and failure-recovery evidence are not supplied.']
  },
  'x402-backend': {
    problem: 'The payment backend addresses paid HTTP access using crypto micropayments. Its stated settlement asset is USDC on Base, and its schematic places payment verification before access.',
    approach: 'Two independent implementations are recorded. The supplied stack includes Python and Flask, TypeScript and Express, x402 and Supabase. The schematic runs Client, 402 response, EIP-712 check, USDC on Base and Access.',
    sections: [
      { title: 'The payment boundary is an HTTP response', text: 'The supplied flow begins with a client and a 402 response rather than granting access immediately. This is the project’s stated HTTP 402 payment boundary. Exact headers, request schemas and the unpaid resource behaviour are not included in the supplied description.' },
      { title: 'A signed check precedes access', text: 'EIP-712 is identified as the signed-settlement mechanism, and its check is drawn as a gate. The subsequent stages name USDC on Base and access. The portfolio does not provide the verification code, replay protection or transaction confirmation policy.' },
      { title: 'Two implementations share the stated goal', text: 'Python with Flask and TypeScript with Express are both listed alongside the metric of two independent implementations. The available material does not include a parity suite or benchmark, so matching behaviour or performance between them is not asserted.' }
    ],
    verification: 'The portfolio records two independent implementations and EIP-712 signed settlement. It marks the project built in 2025. Transaction receipts, automated payment tests and deployment evidence have not been supplied.',
    gaps: ['Payment schemas, replay protection and settlement confirmation rules are not supplied.', 'Transaction receipts, refund behaviour and cross-implementation parity tests are not supplied.']
  },
  'subscription-bot': {
    problem: 'This Telegram bot connects paid group access to on-chain payments on Base and Solana. The supplied description includes subscription and referral functionality, with payment verification and access management as the concrete documented responsibilities.',
    approach: 'The recorded stack is Python, web3.py, aiohttp and Supabase. Base and Solana are the named chains. A detailed pipeline, ownership statement and deployment status were not included in the original project entry.',
    sections: [
      { title: 'Two chains define the verification scope', text: 'The portfolio explicitly names Base and Solana. Each needs its own payment-verification evidence before the multi-chain claim can be independently checked. The supplied entry does not specify the Solana integration library or the transaction rules for either chain.' },
      { title: 'Payment and group access are separate responsibilities', text: 'The documented behaviour covers both verifying a payment and managing paid Telegram group access. A complete implementation account would need to show how a verified payment maps to a Telegram member and subscription period. That mapping has not been supplied.' },
      { title: 'Referral details remain undocumented', text: 'Referral functionality appears in the project name, but no attribution, reward or payout rules are provided. Those details are left open rather than presenting an invented referral system as completed work.' }
    ],
    verification: 'The original entry supplies a project description and stack, but no transaction examples, membership tests or measured outcomes. There is therefore no verified success rate, user count or operating scale to report.',
    gaps: ['Chain confirmation rules and payment-to-member identity mapping are not supplied.', 'Subscription expiry, referral rules and access-recovery behaviour are not supplied.']
  },
  'acp': {
    problem: 'The project is described as agents and an API built on the Virtuals Agent Commerce Protocol. The documented scope places protocol participation and an API in the same project, but does not name the commercial tasks those agents perform.',
    approach: 'Python and Virtuals ACP are the recorded stack. The available project entry identifies the protocol but does not include an agent lifecycle, endpoint inventory or system schematic.',
    sections: [
      { title: 'The protocol is the named integration', text: 'Virtuals ACP is the explicit integration in the supplied description. A protocol-level account would need the job states, messages and version used by these agents. None are included, so this case study does not assume a particular protocol workflow.' },
      { title: 'Agents and an API are both in scope', text: 'The original entry mentions agents and an API separately. The boundary between agent execution and API requests is not documented. Endpoints, authentication and execution guarantees require source material before they can be described as implemented decisions.' },
      { title: 'Commerce outcomes need evidence', text: 'The project’s protocol is commerce-oriented, but completed jobs, payment activity and counterparties are not reported. No transaction volume or commercial result is inferred from the project name.' }
    ],
    verification: 'No protocol traces, endpoint tests, job examples or measured outcomes were supplied with this project entry. The case study records the stated scope, not an independently verified deployment.',
    gaps: ['Agent responsibilities, protocol version and lifecycle transitions are not supplied.', 'API contracts, completed-job evidence and failure handling are not supplied.']
  },
  'habit-tracker': {
    problem: 'The supplied goal is a cross-platform mobile habit tracker. The original entry identifies the product category and implementation stack, but does not list the habit model, tracking rules or supported operating systems.',
    approach: 'Flutter and Dart are the recorded stack. This establishes the stated cross-platform mobile approach without claiming an undocumented backend, account system or storage implementation.',
    sections: [
      { title: 'The client is built with Flutter and Dart', text: 'The project entry lists Flutter and Dart and categorises the work as full-stack. No backend technology is named. Client and server responsibilities cannot be separated further from the available information.' },
      { title: 'Tracking rules need a concrete model', text: 'A complete habit-tracker account would describe what counts as a habit completion and how dates are interpreted. The supplied material does not define schedules, streaks or time-zone behaviour; none are presented here as shipped features.' },
      { title: 'Cross-platform is the stated scope', text: 'The description says cross-platform mobile, but does not name tested devices or operating-system releases. Store availability, platform parity and offline behaviour remain unverified.' }
    ],
    verification: 'No device test matrix, screenshots, store links or measured outcomes were supplied. Flutter and Dart are documented choices; a completed release or particular feature set is not established by that alone.',
    gaps: ['The habit model, completion rules and persistence design are not supplied.', 'Supported platforms, device tests and release evidence are not supplied.']
  },
  'employee-turnover': {
    problem: 'The project is described as a machine-learning model predicting employee turnover. That defines the prediction task, but the available entry does not specify the dataset, prediction horizon or evaluation setup.',
    approach: 'Python, Jupyter and scikit-learn are the recorded stack. They identify the supplied model-development environment, not a specific estimator, feature set or deployment method.',
    sections: [
      { title: 'The target is employee turnover', text: 'The project description names employee turnover as the prediction target. A reproducible account would need the target definition and the information available at prediction time. Neither is supplied, so no dataset or label construction is assumed.' },
      { title: 'The experiment stack is documented', text: 'Python, Jupyter and scikit-learn are the technologies listed. The estimator, preprocessing and model-selection process are not recorded. Their presence in the stack does not establish which modelling decisions were made.' },
      { title: 'A prediction needs an evaluation context', text: 'No train-test split, baseline or scoring metric accompanies the original entry. Accuracy, precision, recall and fairness outcomes cannot be inferred. These remain requirements for a complete technical evaluation rather than invented results.' }
    ],
    verification: 'No dataset citation, reproducible notebook, evaluation metrics or baseline comparison was supplied. This case study records the prediction goal and stack without claiming measured model performance.',
    gaps: ['Dataset provenance, target construction and feature availability are not supplied.', 'Data splitting, leakage checks, baseline results and model evaluation are not supplied.']
  }
};
