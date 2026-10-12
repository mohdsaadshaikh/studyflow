import type { Topic } from "@/content/types";

export const topics: Topic[] = [
  {
    id: "fa-definition",
    number: 1,
    title: "Definition of Accounting",
    summary: "What accounting is, its purpose, and its fundamental role in business.",
    content: `## Definition of Accounting
Accounting is the process of identifying, recording, classifying, summarizing, and interpreting financial transactions and events that occur within an organization.

## Core Functions
1. **Recording** — documenting all financial transactions
2. **Classifying** — organizing by account type
3. **Summarizing** — preparing financial statements
4. **Analyzing** — interpreting financial data
5. **Communicating** — presenting to stakeholders

## Purposes
- Record-keeping and historical tracking
- Financial reporting to users
- Tax compliance and regulations
- Support management decision-making`,
    mcqs: [
      { q: "Accounting is best described as:", options: ["Just record-keeping", "Recording, classifying, summarizing, and interpreting transactions", "Only for corporations", "A tax requirement only"], answer: 1 },
      { q: "Which is a core function of accounting?", options: ["Manufacturing", "Recording transactions", "Marketing", "Sales"], answer: 1 },
      { q: "Accounting is called the language of business because:", options: ["It uses complex terms", "It communicates financial information universally", "It is only for accountants", "It is required by law"], answer: 1 },
      { q: "Which of the following is NOT a core function of accounting?", options: ["Recording", "Classifying", "Summarizing", "Manufacturing"], answer: 3 },
      { q: "Who relies on accounting information to track business performance?", options: ["Only government", "Only investors", "All stakeholders", "Only owners"], answer: 2 },
      { q: "The summarizing function of accounting results in:", options: ["Ledgers", "Financial statements", "Journals", "Transactions"], answer: 1 },
      { q: "Accounting serves what primary purpose for a business?", options: ["Marketing", "Communicating financial information", "Production", "Distribution"], answer: 1 },
      { q: "Which is an example of a financial transaction?", options: ["Planning", "Brainstorming", "Selling merchandise for cash", "Setting goals"], answer: 2 },
      { q: "The classifying function groups transactions by:", options: ["Date", "Amount", "Account type", "Chronology"], answer: 2 },
      { q: "Accounting information helps management with:", options: ["Legal requirements only", "Decision-making and planning", "Advertising only", "Customer service"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Accounting is the process of recording, classifying, ___, and interpreting.", answer: "summarizing" },
      { q: "The four purposes are: record-keeping, reporting, ___, and decision-making.", answer: "compliance" },
      { q: "Accounting provides ___ information to stakeholders.", answer: "financial" },
    ],
    trueFalse: [
      { q: "Accounting is only about keeping tax records.", answer: false, explain: "Accounting serves multiple purposes including reporting, compliance, and decision-making." },
      { q: "Accounting transforms raw financial data into meaningful information.", answer: true },
      { q: "Only large companies use accounting.", answer: false, explain: "All businesses, regardless of size, use accounting." },
      { q: "Recording is the first step in the accounting process.", answer: true },
      { q: "Accounting information is only useful for external users.", answer: false, explain: "Both internal and external users benefit from accounting information." },
    ],
    flashcards: [
      { front: "Accounting", back: "Process of recording, classifying, summarizing, and interpreting financial transactions." },
      { front: "Financial Statement", back: "Formal documents presenting financial position and performance of a business." },
      { front: "Transaction", back: "A business event that has a monetary effect on the organization." },
      { front: "Stakeholder", back: "Any person or group with an interest in the business's financial information." },
    ],
    examples: [
      {
        title: "Analogy: Personal Finance",
        items: [
          "Just as you track your monthly spending by category (food, transport, entertainment), accounting tracks business spending by account type",
          "Keeping a personal diary is like keeping a journal—recording what happened",
          "Summing up all your expenses is like preparing a financial statement",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "A small shop records every sale and purchase in its accounting system",
          "A hospital tracks patient fees, staff salaries, and medical supply costs",
          "A school records tuition fees, teacher salaries, and building maintenance expenses",
        ],
      },
    ],
  },
  {
    id: "fa-statements-intro",
    number: 2,
    title: "What is a Financial Statement",
    summary: "Introduction to financial statements and their role in business.",
    content: `## Definition
A financial statement is a formal document presenting the financial position, performance, and changes in a business entity.

## Purpose of Financial Statements
- Show financial health and performance
- Provide information for decision-makers
- Enable compliance with regulations
- Allow comparison across periods
- Support stakeholder analysis

## Main Users of Financial Statements
- Investors and shareholders (returns)
- Creditors and lenders (repayment ability)
- Management (operations and planning)
- Government agencies (taxes, compliance)
- Suppliers and customers (stability)`,
    mcqs: [
      { q: "The main purpose of financial statements is to:", options: ["Sell products", "Present financial information", "Hire employees", "Plan marketing"], answer: 1 },
      { q: "Who are primary users of financial statements?", options: ["Investors only", "Management only", "Multiple stakeholders", "Government only"], answer: 2 },
      { q: "Financial statements help stakeholders make:", options: ["Marketing decisions", "Production decisions", "Financial and investment decisions", "Hiring decisions"], answer: 2 },
      { q: "Which is NOT a user of financial statements?", options: ["Investors", "Creditors", "Customers", "Accountants only"], answer: 3 },
      { q: "Financial statements enable comparison:", options: ["With competitors", "Across different periods", "With other countries", "With personal finances"], answer: 1 },
      { q: "The purpose of showing financial health is to:", options: ["Satisfy curiosity", "Help stakeholders make informed decisions", "Avoid taxes", "Hide problems"], answer: 1 },
      { q: "Which stakeholder group is most concerned with repayment ability?", options: ["Investors", "Employees", "Creditors and lenders", "Customers"], answer: 2 },
      { q: "Financial statements are prepared by:", options: ["Customers", "Investors", "Accountants and management", "Government only"], answer: 2 },
      { q: "Regulations requiring financial statements are enforced by:", options: ["Companies", "Government agencies", "Customers", "Suppliers"], answer: 1 },
      { q: "Financial statements support stakeholder analysis in terms of:", options: ["Production capacity", "Market share", "Financial position and performance", "Employee satisfaction"], answer: 2 },
    ],
    fillBlanks: [
      { q: "A financial statement is a formal ___ presenting financial information.", answer: "document" },
      { q: "Financial statements provide information to ___ stakeholders.", answer: "multiple", alt: ["various", "different"] },
      { q: "___ use financial statements to determine if they should invest.", answer: "Investors" },
    ],
    trueFalse: [
      { q: "Financial statements are only prepared once a year.", answer: false, explain: "They can be prepared monthly, quarterly, or annually." },
      { q: "Financial statements are important for decision-making.", answer: true },
      { q: "Only external users benefit from financial statements.", answer: false, explain: "Both internal and external users rely on financial statements." },
      { q: "Suppliers use financial statements to assess stability.", answer: true },
      { q: "Financial statements show only cash receipts.", answer: false, explain: "They show comprehensive financial information including assets, liabilities, and performance." },
    ],
    flashcards: [
      { front: "Financial Statement", back: "Formal document presenting financial position, performance, and changes." },
      { front: "Stakeholder", back: "Any person or group with interest in the business (investors, creditors, employees)." },
      { front: "Creditor", back: "Person or entity that has loaned money to the business." },
      { front: "Investor", back: "Person or entity that owns a stake in the business." },
    ],
    examples: [
      {
        title: "Analogy: Medical Report",
        items: [
          "Financial statements are like a medical report—they show your financial health",
          "Vital signs (revenue, profit) tell you if the business is healthy",
          "Doctors use reports to give treatment advice; investors use statements to make decisions",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "A bank reviews financial statements before approving a business loan",
          "An investor reads statements to decide whether to buy stock",
          "Tax authorities require statements to verify tax payments",
        ],
      },
    ],
  },
  {
    id: "fa-statement-types",
    number: 3,
    title: "Types of Financial Statements",
    summary: "The three main financial statements and their purposes.",
    content: `## Income Statement
- **Purpose:** Shows revenue and expenses for a period
- **Formula:** Revenue - Expenses = Net Income
- **Measures:** Profitability and operational performance
- **Period:** For the month/year ended [date]

## Balance Sheet
- **Purpose:** Shows assets, liabilities, equity at a point in time
- **Equation:** Assets = Liabilities + Equity
- **Shows:** Financial position and solvency
- **Date:** As of [specific date]

## Statement of Retained Earnings
- **Purpose:** Shows changes in retained earnings during period
- **Formula:** Beginning RE + Net Income - Dividends = Ending RE
- **Links:** Income Statement to Balance Sheet
- **Period:** For the month/year ended [date]`,
    mcqs: [
      { q: "Which statement shows profit/loss for a period?", options: ["Balance Sheet", "Income Statement", "Trial Balance", "Journal"], answer: 1 },
      { q: "Which statement shows financial position at a specific date?", options: ["Income Statement", "Balance Sheet", "Statement of RE", "Ledger"], answer: 1 },
      { q: "The Balance Sheet equation is:", options: ["Revenue - Expenses = NI", "Assets = Liabilities + Equity", "Debits = Credits", "Cash = Profit"], answer: 1 },
      { q: "The Statement of Retained Earnings links which two statements?", options: ["IS and Trial Balance", "IS and Balance Sheet", "Trial Balance and GL", "GL and Journal"], answer: 1 },
      { q: "Which statement uses 'for the period ended' in the header?", options: ["Balance Sheet", "Income Statement", "Both equally", "Neither"], answer: 1 },
      { q: "The Balance Sheet shows accounts as of:", options: ["The end of the year only", "A specific date", "The end of the month only", "Any date"], answer: 1 },
      { q: "Net Income appears on which statement first?", options: ["Balance Sheet", "Income Statement", "Trial Balance", "Statement of RE"], answer: 1 },
      { q: "Which account appears on the Balance Sheet but not Income Statement?", options: ["Sales Revenue", "Rent Expense", "Cash", "Supplies Expense"], answer: 2 },
      { q: "The Income Statement measures:", options: ["Financial position", "Profitability", "Cash flow only", "Assets only"], answer: 1 },
      { q: "Retained Earnings changes due to:", options: ["Revenue only", "Expenses only", "Net Income and Dividends", "Balance Sheet items only"], answer: 2 },
    ],
    fillBlanks: [
      { q: "The ___ Statement shows revenue and expenses.", answer: "Income" },
      { q: "The ___ Sheet shows assets and liabilities.", answer: "Balance" },
      { q: "The Statement of ___ Earnings shows changes during the period.", answer: "Retained" },
      { q: "Net Income comes from the ___ Statement.", answer: "Income" },
    ],
    trueFalse: [
      { q: "The Income Statement covers a specific date rather than a period.", answer: false, explain: "The Income Statement covers a period; the Balance Sheet shows a specific date." },
      { q: "Assets always equal Liabilities plus Equity.", answer: true },
      { q: "Dividends appear on the Income Statement.", answer: false, explain: "Dividends appear on the Statement of Retained Earnings." },
      { q: "The Balance Sheet is dated 'as of' a specific date.", answer: true },
      { q: "Net Income flows directly to the Balance Sheet.", answer: false, explain: "Net Income flows through the Statement of Retained Earnings to the Balance Sheet." },
    ],
    flashcards: [
      { front: "Income Statement", back: "Shows revenue, expenses, and net income for a period." },
      { front: "Balance Sheet", back: "Shows assets, liabilities, and equity as of a specific date." },
      { front: "Statement of Retained Earnings", back: "Shows changes in retained earnings; links the Income Statement to Balance Sheet." },
      { front: "Net Income", back: "Revenue minus expenses; bottom-line profit on the Income Statement." },
    ],
    examples: [
      {
        title: "Analogy: Sports Team",
        items: [
          "Income Statement = Season performance (wins/losses for the year)",
          "Balance Sheet = Team roster and assets (players, equipment, venue as of today)",
          "Retained Earnings = Accumulated trophies and achievements",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Apple's Income Statement shows iPhone sales and operating costs for Q3",
          "Coca-Cola's Balance Sheet shows factories, trucks, and cash as of Dec 31",
          "Netflix's Retained Earnings statement shows how profits were retained or distributed",
        ],
      },
    ],
  },
  {
    id: "fa-mgmt-vs-financial",
    number: 4,
    title: "Managerial vs Financial Accounting",
    summary: "Key differences between these two accounting branches.",
    content: `## Financial Accounting
- **Users:** External (investors, creditors, government)
- **Focus:** Historical data (past)
- **Standards:** Must follow GAAP
- **Reports:** Annual/quarterly formal statements
- **Scope:** Entire company
- **Verification:** External audits

## Managerial Accounting
- **Users:** Internal management
- **Focus:** Future-oriented (budgets, forecasts)
- **Standards:** Flexible, no mandated rules
- **Reports:** Daily/weekly/monthly internal reports
- **Scope:** Departments, products, segments
- **Verification:** Internal review only

## Key Similarities
- Both use the same basic accounting system
- Both rely on transaction data
- Both require careful record-keeping`,
    mcqs: [
      { q: "Financial accounting serves:", options: ["Internal management", "External users only", "Both equally", "Tax authorities only"], answer: 1 },
      { q: "Managerial accounting is primarily:", options: ["Historical", "Future-focused", "Tax-focused", "Public disclosure"], answer: 1 },
      { q: "Which must follow GAAP standards?", options: ["Managerial accounting", "Financial accounting", "Both equally", "Neither"], answer: 1 },
      { q: "Managerial accounting reports are typically prepared:", options: ["Annually", "Daily or weekly", "Only when required", "Quarterly only"], answer: 1 },
      { q: "Financial accounting information is used by:", options: ["Internal employees", "External stakeholders", "Only managers", "Only accountants"], answer: 1 },
      { q: "GAAP stands for:", options: ["General Accounting And Procedures", "Generally Accepted Accounting Principles", "Global Accounting Access Plan", "Government Accounting Assessment Plan"], answer: 1 },
      { q: "Which accounting type focuses on product costs and efficiency?", options: ["Financial accounting", "Managerial accounting", "Tax accounting", "Government accounting"], answer: 1 },
      { q: "Financial statements must be audited by:", options: ["Internal staff", "External auditors", "Management only", "Never"], answer: 1 },
      { q: "Managerial accounting flexibility is necessary for:", options: ["Compliance", "Meeting diverse internal needs", "Tax purposes", "External reporting"], answer: 1 },
      { q: "Which accounting type emphasizes profitability by department?", options: ["Financial accounting", "Managerial accounting", "Tax accounting", "Public accounting"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Financial accounting must follow ___ standards.", answer: "GAAP" },
      { q: "Managerial accounting serves ___ users.", answer: "internal" },
      { q: "Financial accounting is more ___ than managerial accounting.", answer: "historical", alt: ["past-focused"] },
    ],
    trueFalse: [
      { q: "Financial accounting is only concerned with taxes.", answer: false, explain: "It serves investors, creditors, and many other external users." },
      { q: "Managerial accounting reports must follow GAAP standards.", answer: false, explain: "Only financial accounting must follow GAAP." },
      { q: "Managerial accounting focuses on future planning.", answer: true },
      { q: "Financial accounting requires external audits.", answer: true },
      { q: "Managerial accounting is mandatory for all companies.", answer: false, explain: "It's internal and optional; financial accounting is mandatory." },
    ],
    flashcards: [
      { front: "GAAP", back: "Generally Accepted Accounting Principles; standards for financial accounting." },
      { front: "Financial Accounting", back: "Accounting for external users following GAAP standards." },
      { front: "Managerial Accounting", back: "Internal accounting for management decision-making without GAAP requirements." },
      { front: "Audit", back: "Independent examination of financial statements by external auditors." },
    ],
    examples: [
      {
        title: "Analogy: Report Card vs Teacher Notes",
        items: [
          "Financial accounting = Official report card given to parents (external)",
          "Managerial accounting = Teacher's daily notes and feedback for improvement (internal)",
          "Report card follows standard format; teacher notes are flexible",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Financial: Quarterly earnings report published to all shareholders",
          "Managerial: Budget for next quarter created by the accounting department",
          "Financial: Annual audited statements; Managerial: Daily sales reports by department",
        ],
      },
    ],
  },
  {
    id: "fa-org-forms",
    number: 5,
    title: "Forms of Business Organization",
    summary: "Sole proprietorship, partnership, and corporation structures.",
    content: `## Sole Proprietorship
- Single owner
- Unlimited personal liability
- Easiest and cheapest to start
- Income taxed as personal income
- Owner makes all decisions
- Examples: Freelancers, small shops

## Partnership
- Two or more owners (partners)
- Generally unlimited liability (in GP)
- Shared management and profits
- Pass-through taxation
- Types: General (GP), Limited (LP)
- Partners can bind the partnership

## Corporation
- Separate legal entity from owners
- Shareholders have limited liability
- More complex to establish
- Perpetual existence
- Easier to raise capital
- Double taxation possible (C-Corp)`,
    mcqs: [
      { q: "Which form has unlimited personal liability?", options: ["Corporation", "Sole proprietorship", "Partnership LP", "All equally"], answer: 1 },
      { q: "In a corporation, shareholders have:", options: ["Unlimited liability", "Limited liability", "Full responsibility for debts", "No property rights"], answer: 1 },
      { q: "The easiest form to establish is:", options: ["Corporation", "Partnership", "Sole proprietorship", "LLC"], answer: 2 },
      { q: "Which form is a separate legal entity?", options: ["Sole proprietorship", "Partnership", "Corporation", "None"], answer: 2 },
      { q: "A General Partnership has:", options: ["Limited liability", "Unlimited liability", "No personal liability", "Shared limited liability"], answer: 1 },
      { q: "Which form requires the most legal documentation?", options: ["Sole proprietorship", "Partnership", "Corporation", "All equally"], answer: 2 },
      { q: "In a Limited Partnership, the general partner has:", options: ["Limited liability only", "Unlimited liability", "No liability", "Shared liability"], answer: 1 },
      { q: "Corporation income is taxed:", options: ["Only once", "Twice (double taxation)", "Not at all", "At partnership rates"], answer: 1 },
      { q: "A sole proprietor's personal assets are:", options: ["Protected", "Separate from business", "At risk for business debts", "Limited to investment"], answer: 2 },
      { q: "Which form dissolves if an owner leaves?", options: ["Corporation", "Sole proprietorship", "Partnership", "All equally"], answer: 2 },
    ],
    fillBlanks: [
      { q: "A business owned by one person is a ___ proprietorship.", answer: "sole" },
      { q: "Two or more owners sharing profits form a ___.", answer: "partnership" },
      { q: "A ___ is a legal entity separate from its owners.", answer: "corporation" },
      { q: "Corporation owners are called ___ or stockholders.", answer: "shareholders" },
    ],
    trueFalse: [
      { q: "Sole proprietors have limited personal liability.", answer: false, explain: "They have unlimited personal liability." },
      { q: "A partnership dissolves if one partner leaves.", answer: true },
      { q: "Corporations have perpetual existence.", answer: true },
      { q: "Partnerships are separate legal entities.", answer: false, explain: "Only corporations are separate legal entities." },
      { q: "Shareholders' liability is limited to their investment.", answer: true },
    ],
    flashcards: [
      { front: "Sole Proprietorship", back: "Business owned and operated by one person with unlimited personal liability." },
      { front: "Partnership", back: "Business owned by two or more people sharing management and profits." },
      { front: "Corporation", back: "Separate legal entity owned by shareholders with limited liability." },
      { front: "Limited Liability", back: "Owners are not personally responsible for business debts beyond their investment." },
    ],
    examples: [
      {
        title: "Analogy: Responsibility",
        items: [
          "Sole Proprietor = You're fully responsible (like eating alone)",
          "Partnership = Shared responsibility (like cooking with a friend)",
          "Corporation = Company is separate from you (like hiring a chef)",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Sole: Freelance consultant, local plumber, street vendor",
          "Partnership: Law firms, medical practices, consulting groups",
          "Corporation: Apple Inc., Microsoft, Toyota (with public shareholders)",
        ],
      },
    ],
  },
  {
    id: "fa-accounting-cycle",
    number: 6,
    title: "Accounting Cycle",
    summary: "The eight-step process to record and report transactions.",
    content: `## The Eight Steps

1. **Analyze transactions** — identify events affecting financial position
2. **Journalize transactions** — record in General Journal
3. **Post to ledger** — transfer to General Ledger accounts
4. **Prepare unadjusted trial balance** — verify debits = credits
5. **Journalize and post adjusting entries** — update for accruals, depreciation
6. **Prepare adjusted trial balance** — verify balance after adjustments
7. **Prepare financial statements** — create IS, RE, BS
8. **Journalize and post closing entries** — close temporary accounts

## Key Characteristics
- Cycle repeats each fiscal period
- Each step builds on previous
- Balance verified at checkpoints
- Double-entry bookkeeping used
- Ensures complete and accurate reporting`,
    mcqs: [
      { q: "How many steps in the accounting cycle?", options: ["5", "6", "8", "10"], answer: 2 },
      { q: "Step 1 is to:", options: ["Journalize", "Analyze transactions", "Post", "Prepare statements"], answer: 1 },
      { q: "Closing entries occur in step:", options: ["5", "6", "7", "8"], answer: 3 },
      { q: "Adjusting entries are made in step:", options: ["2", "4", "5", "7"], answer: 2 },
      { q: "The trial balance is prepared in step:", options: ["1", "2", "4", "6"], answer: 2 },
      { q: "Which step involves transferring to the ledger?", options: ["1", "2", "3", "4"], answer: 2 },
      { q: "Financial statements are prepared in step:", options: ["5", "6", "7", "8"], answer: 2 },
      { q: "The unadjusted trial balance verifies:", options: ["All transactions", "Debits = Credits", "Account balances", "Adjustments"], answer: 1 },
      { q: "When does the adjusted trial balance occur?", options: ["Before adjusting entries", "After adjusting entries", "Before posting", "During closing"], answer: 1 },
      { q: "The accounting cycle ensures:", options: ["Maximum profit", "Complete and accurate reporting", "Legal compliance only", "Tax reduction"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The eight-step process is called the accounting ___.", answer: "cycle" },
      { q: "Step 3 is to ___ information to the ledger.", answer: "post" },
      { q: "Step 4 is to prepare an ___ trial balance.", answer: "unadjusted" },
    ],
    trueFalse: [
      { q: "The accounting cycle runs continuously throughout the year.", answer: true },
      { q: "All eight steps occur every single day.", answer: false, explain: "Steps 4-8 typically occur at month-end or year-end." },
      { q: "The purpose of the cycle is to ensure complete and accurate reporting.", answer: true },
      { q: "Adjusting entries are optional in the accounting cycle.", answer: false, explain: "They are required to ensure accurate financial reporting." },
      { q: "The cycle repeats each fiscal period.", answer: true },
    ],
    flashcards: [
      { front: "Accounting Cycle", back: "Eight-step process to record, process, and finalize transactions." },
      { front: "Journalize", back: "Record transactions in the General Journal." },
      { front: "Post", back: "Transfer information from journal to ledger." },
      { front: "Closing Entries", back: "Entries to close temporary accounts and prepare for next period." },
    ],
    examples: [
      {
        title: "Analogy: Daily Routine",
        items: [
          "Steps 1-3 = Morning tasks (wake up, shower, breakfast)",
          "Steps 4-6 = Mid-day check (verify you're on track)",
          "Steps 7-8 = Evening wrap-up (review day, prepare for tomorrow)",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Step 1: Sale of merchandise for $500",
          "Step 2: Record in journal: Debit Cash, Credit Sales Revenue",
          "Step 3: Post entry to Cash and Sales Revenue accounts in ledger",
          "Step 4: List all accounts to verify balance",
        ],
      },
    ],
  },
  {
    id: "fa-users-accounting",
    number: 7,
    title: "Users of Financial Accounting",
    summary: "Who uses accounting information and for what purposes.",
    content: `## Internal Users
- **Management** — decision-making and planning
- **Employees** — job security assessment
- **Owners** — returns on investment

## External Users
- **Investors** — stock purchase/sale decisions
- **Creditors** — loan approval and monitoring
- **Suppliers** — trade credit decisions
- **Government** — tax compliance
- **Analysts** — investment recommendations

## Information Needs by User
- **Investors:** focus on profitability and earnings
- **Creditors:** focus on ability to repay
- **Management:** focus on efficiency and control
- **Suppliers:** focus on short-term liquidity
- **Government:** focus on taxable income`,
    mcqs: [
      { q: "Internal users include:", options: ["Investors", "Creditors", "Management", "Suppliers"], answer: 2 },
      { q: "External users are:", options: ["Employees", "Owners", "Creditors and investors", "All internal"], answer: 2 },
      { q: "Creditors primarily focus on:", options: ["Profitability", "Ability to repay loans", "Market share", "Sales growth"], answer: 1 },
      { q: "Which is an internal user?", options: ["Bank", "Government", "Employee", "Investor"], answer: 2 },
      { q: "Investors are interested in:", options: ["Operational efficiency", "Cash flow management", "Return on investment", "Daily transactions"], answer: 2 },
      { q: "Government agencies use financial statements for:", options: ["Marketing", "Tax assessment", "Product development", "Hiring"], answer: 1 },
      { q: "Suppliers use financial statements to:", options: ["Find customers", "Assess creditworthiness", "Plan production", "Hire employees"], answer: 1 },
      { q: "Which user focuses on operational efficiency?", options: ["Investor", "Creditor", "Management", "Supplier"], answer: 2 },
      { q: "Employees are considered:", options: ["Internal users", "External users", "Not stakeholders", "Creditors"], answer: 0 },
      { q: "Analysts use financial statements to:", options: ["Make recommendations", "Manage inventory", "Produce goods", "Sell products"], answer: 0 },
    ],
    fillBlanks: [
      { q: "Users inside the organization are called ___ users.", answer: "internal" },
      { q: "Users outside are called ___ users.", answer: "external" },
      { q: "A ___ uses financial statements to assess ability to repay loans.", answer: "creditor" },
    ],
    trueFalse: [
      { q: "Only external users need financial accounting information.", answer: false, explain: "Both internal and external users rely on financial information." },
      { q: "Investors are internal users of financial statements.", answer: false, explain: "Investors are external users." },
      { q: "Government agencies use financial statements to verify taxes.", answer: true },
      { q: "Management is always an external user.", answer: false, explain: "Management is an internal user." },
      { q: "Creditors are always external users.", answer: true },
    ],
    flashcards: [
      { front: "Internal User", back: "Person or group inside the organization using financial information (management, employees)." },
      { front: "External User", back: "Person or group outside the organization using financial information (investors, creditors)." },
      { front: "Creditor", back: "External user who has loaned money to the business." },
      { front: "Investor", back: "External user who owns a stake or considers owning a stake in the business." },
    ],
    examples: [
      {
        title: "Analogy: Medical Information",
        items: [
          "Internal users = Your doctor (has full access, makes treatment plans)",
          "External users = Insurance company (needs key info to approve payment)",
          "Each user has different information needs and focuses",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Manager: Reviews quarterly reports to improve operations",
          "Investor: Checks annual earnings to decide if stock price will rise",
          "Creditor: Reviews balance sheet to ensure company can repay loan",
          "Tax authority: Verifies income statement to calculate taxes owed",
        ],
      },
    ],
  },
  {
    id: "fa-equation-elements",
    number: 8,
    title: "Accounting Equation and Elements",
    summary: "The fundamental equation and components: assets, liabilities, equity.",
    content: `## The Accounting Equation
**Assets = Liabilities + Equity**

This equation must always balance. Every transaction affects this equation while keeping it in balance.

## Assets
Resources owned by business:
- **Current assets:** cash, receivables, inventory (convert to cash within 1 year)
- **Non-current assets:** equipment, buildings, land (held >1 year)

## Liabilities
Obligations owed to creditors:
- **Current liabilities:** accounts payable, short-term loans (due <1 year)
- **Non-current liabilities:** long-term debt, bonds (due >1 year)

## Equity
Owner's stake in business:
- **Capital:** owner's initial investment
- **Retained earnings:** accumulated profits kept in business
- **Dividends:** distributions to owners (reduces equity)

## Accounts Receivable
Money owed TO the business by customers (current asset)`,
    mcqs: [
      { q: "The accounting equation is:", options: ["A + L = E", "A = L + E", "R - E = NI", "D = C"], answer: 1 },
      { q: "Which is a current asset?", options: ["Building", "Equipment", "Accounts Receivable", "Land"], answer: 2 },
      { q: "Accounts Receivable is:", options: ["A liability", "Equity", "An asset", "Revenue"], answer: 2 },
      { q: "When owner withdraws cash, what happens?", options: ["Assets and capital increase", "Assets decrease, equity decreases", "Liabilities increase", "Revenue increases"], answer: 1 },
      { q: "Current liabilities are due within:", options: ["6 months", "1 year", "2 years", "5 years"], answer: 1 },
      { q: "Which is a non-current asset?", options: ["Cash", "Inventory", "Building", "Receivables"], answer: 2 },
      { q: "Retained earnings represent:", options: ["Owner's investment", "Accumulated profits", "Liabilities", "Current assets"], answer: 1 },
      { q: "Total Assets always equal:", options: ["Total Equity", "Total Liabilities", "Liabilities + Equity", "Revenue"], answer: 2 },
      { q: "Accounts Payable is a:", options: ["Current asset", "Non-current asset", "Current liability", "Equity"], answer: 2 },
      { q: "Capital increases when owner:", options: ["Withdraws cash", "Invests cash", "Buys equipment", "Pays expenses"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Assets = Liabilities + ___", answer: "Equity" },
      { q: "Money owed TO us is Accounts ___", answer: "Receivable" },
      { q: "Owner's initial investment is called ___", answer: "Capital" },
      { q: "Profits kept in the business are ___ earnings.", answer: "Retained" },
    ],
    trueFalse: [
      { q: "The accounting equation must always be in balance.", answer: true },
      { q: "Accounts Receivable is a liability.", answer: false, explain: "It is an asset—money owed to us." },
      { q: "Retained earnings are profits distributed to owners.", answer: false, explain: "Retained earnings are profits kept in the business." },
      { q: "Current assets are convertible to cash within one year.", answer: true },
      { q: "Non-current liabilities are always longer than 5 years.", answer: false, explain: "They are longer than one year but can vary in duration." },
    ],
    flashcards: [
      { front: "Assets", back: "Resources owned by the business that have economic value." },
      { front: "Liabilities", back: "Obligations or debts owed by the business to creditors." },
      { front: "Equity", back: "Owner's claim on assets; assets minus liabilities." },
      { front: "Accounts Receivable", back: "Money owed to the business by customers; a current asset." },
    ],
    examples: [
      {
        title: "Analogy: House Ownership",
        items: [
          "Assets = House and furniture (what you own)",
          "Liabilities = Mortgage loan (what you owe the bank)",
          "Equity = Your ownership stake (Assets - Liabilities)",
          "If house costs $200k and mortgage is $150k, your equity is $50k",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Business buys computer for $1,000 cash: Assets ↑ $1,000, Assets ↓ $1,000",
          "Business receives $500 from customer who owes money: Cash ↑, Receivables ↓",
          "Owner invests $10,000: Cash ↑ $10,000, Capital ↑ $10,000",
        ],
      },
    ],
  },
  {
    id: "fa-transaction-analysis",
    number: 9,
    title: "Analysis of Transactions",
    summary: "How to analyze and record business transactions.",
    content: `## Five Steps to Analyze

1. **Identify** the business transaction or event
2. **Identify** which accounts are affected
3. **Classify** each account (asset, liability, etc.)
4. **Determine** if accounts increase or decrease
5. **Apply** debit/credit rules

## Debit/Credit Rules
- **Assets:** increase with debits, decrease with credits
- **Liabilities:** decrease with debits, increase with credits
- **Equity:** decrease with debits, increase with credits
- **Revenues:** decrease with debits, increase with credits
- **Expenses:** increase with debits, decrease with credits
- **Dividends:** increase with debits, decrease with credits

## Key Principle
Every transaction affects at least two accounts, and debits must equal credits.`,
    mcqs: [
      { q: "First step in transaction analysis:", options: ["Journalize", "Identify transaction", "Post", "Close"], answer: 1 },
      { q: "Assets increase with:", options: ["Credits", "Debits", "Closings", "Adjustments"], answer: 1 },
      { q: "When recording revenue, you:", options: ["Debit revenue", "Credit revenue", "Debit cash and credit revenue", "Debit accounts payable"], answer: 1 },
      { q: "Expenses increase with:", options: ["Credits", "Debits", "Equity", "Liabilities"], answer: 1 },
      { q: "Liabilities increase with:", options: ["Debits", "Credits", "Withdrawals", "Expenses"], answer: 1 },
      { q: "Every transaction must affect:", options: ["One account", "Two accounts", "Three accounts", "All accounts"], answer: 1 },
      { q: "In a debit/credit entry, debits must equal:", options: ["Credits", "Assets", "Expenses", "Revenue"], answer: 0 },
      { q: "Dividends increase with:", options: ["Credits", "Debits", "Revenue", "Liabilities"], answer: 1 },
      { q: "When you pay an expense in cash:", options: ["Debit expense, credit equity", "Debit cash, credit expense", "Debit expense, credit cash", "Credit expense, credit cash"], answer: 2 },
      { q: "Which account classification uses the opposite rule for debits?", options: ["Assets", "Liabilities", "Expenses", "Revenue"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The process is called transaction ___", answer: "analysis" },
      { q: "In every transaction, ___ must equal credits.", answer: "debits" },
      { q: "Every transaction affects at least ___ accounts.", answer: "two" },
    ],
    trueFalse: [
      { q: "A single account can be affected by a transaction.", answer: false, explain: "Every transaction affects at least two accounts." },
      { q: "Assets always increase with debits.", answer: true },
      { q: "Debits must equal credits in every entry.", answer: true },
      { q: "Liabilities increase with debits.", answer: false, explain: "Liabilities increase with credits." },
      { q: "The debit/credit system is called double-entry bookkeeping.", answer: true },
    ],
    flashcards: [
      { front: "Transaction Analysis", back: "Process of identifying which accounts are affected and how." },
      { front: "Debit", back: "Left side of an account; increases assets and expenses." },
      { front: "Credit", back: "Right side of an account; increases liabilities and equity." },
      { front: "Double-Entry", back: "System where every transaction affects at least two accounts." },
    ],
    examples: [
      {
        title: "Analogy: Scale Balance",
        items: [
          "Debits and credits like a balanced scale—must always equal",
          "Adding weight to one side requires removing from the other",
          "If you add $100 to cash (debit), something else must go down (credit) by $100",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Sell $500 merchandise: Debit Cash, Credit Sales Revenue",
          "Pay $200 rent: Debit Rent Expense, Credit Cash",
          "Owner withdraws $300: Debit Owner Withdrawal, Credit Cash",
          "Buy $400 equipment on credit: Debit Equipment, Credit Accounts Payable",
        ],
      },
    ],
  },
  {
    id: "fa-general-journal",
    number: 10,
    title: "General Journal",
    summary: "The book of original entry for recording transactions.",
    content: `## What is the Journal
The first place where transactions are recorded. Also called the "book of original entry."

## Journal Entry Format
Each entry includes:
- **Date** — when transaction occurred
- **Account names** — affected accounts (debit listed first)
- **Debit amount** — on the left
- **Credit amount** — on the right
- **Explanation** — brief description

## Key Rules for Entries
- Debits must equal credits in every entry
- Use exact account names
- Include explanation for clarity
- Record in chronological order
- Never skip dates

## Example Entry
\`\`\`
Jan 1  Cash              5,000
       Capital                   5,000
       (Owner invested cash)
\`\`\``,
    mcqs: [
      { q: "The journal is the 'book of ___ entry':", options: ["first", "original", "secondary", "final"], answer: 1 },
      { q: "In every journal entry:", options: ["Debits = Credits", "Debits > Credits", "Credits > Debits", "Only debits used"], answer: 0 },
      { q: "Journal entries are recorded:", options: ["By account", "Chronologically", "By amount", "Randomly"], answer: 1 },
      { q: "A journal entry requires:", options: ["Date only", "Date and amount", "Date, accounts, debits, credits, explanation", "Account name only"], answer: 2 },
      { q: "Debit accounts are listed:", options: ["After credit accounts", "First in the journal", "Indented", "On a separate page"], answer: 1 },
      { q: "Credit accounts are listed:", options: ["First", "Indented to the right", "On separate lines", "Without amounts"], answer: 1 },
      { q: "The journal is organized by:", options: ["Account type", "Amount", "Date", "Debits"], answer: 2 },
      { q: "Journal entries serve as:", options: ["Financial statements", "Supporting evidence", "Balance sheets", "Ledger accounts"], answer: 1 },
      { q: "An explanation in a journal entry is:", options: ["Optional", "Required for clarity", "Never included", "Always the same"], answer: 1 },
      { q: "Transactions go to the journal:", options: ["Before the ledger", "After the ledger", "Instead of the ledger", "At the same time"], answer: 0 },
    ],
    fillBlanks: [
      { q: "The General Journal is called the book of ___ entry", answer: "original" },
      { q: "In journal entries, debit accounts are listed ___", answer: "first" },
      { q: "In journal entries, credit accounts are ___ to the right", answer: "indented" },
    ],
    trueFalse: [
      { q: "Journal entries can have only one account.", answer: false, explain: "Every entry affects at least two accounts." },
      { q: "Transactions are recorded in the journal before the ledger.", answer: true },
      { q: "An explanation is optional in journal entries.", answer: false, explain: "Explanations are important for clarity." },
      { q: "The journal shows account balances.", answer: false, explain: "The ledger shows account balances; the journal shows transactions." },
      { q: "Journal entries must be dated.", answer: true },
    ],
    flashcards: [
      { front: "Journal", back: "Book of original entry where transactions are first recorded." },
      { front: "Journal Entry", back: "Record of a transaction showing date, accounts, debits, credits, and explanation." },
      { front: "Journalize", back: "Process of recording transactions in the journal." },
      { front: "Chronological", back: "In order of occurrence; how journal entries are arranged." },
    ],
    examples: [
      {
        title: "Analogy: Written Diary",
        items: [
          "Journal is like a diary—you record what happened in order",
          "Each entry has a date, description, and details",
          "You write it before transferring info to organized files",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Jan 5: Received $500 from customer → Debit Cash, Credit Receivable",
          "Jan 8: Paid $200 utilities → Debit Expense, Credit Cash",
          "Jan 12: Owner withdrew $300 → Debit Withdrawal, Credit Cash",
          "Jan 15: Purchased $1000 equipment → Debit Equipment, Credit Payable",
        ],
      },
    ],
  },
  {
    id: "fa-general-ledger",
    number: 11,
    title: "General Ledger",
    summary: "Collection of all accounts organized by type.",
    content: `## What is the Ledger
A collection of all accounts for a business. Shows all debits, credits, and balances for each account.

## T-Account Format
Accounts are shown in "T" shape:
\`\`\`
           Account Name
Debit (L) | Credit (R)
\`\`\`

## Posting
The process of transferring information from journal to ledger. Each journal entry updates the affected ledger accounts.

## Account Types in Ledger
- **Assets** (100-199): Cash, Equipment, Receivables
- **Liabilities** (200-299): Payables, Loans
- **Equity** (300-399): Capital, Retained Earnings
- **Revenue** (400-499): Sales, Service Revenue
- **Expenses** (500-599): Salaries, Rent, Utilities`,
    mcqs: [
      { q: "The ledger is organized by:", options: ["Date", "Account", "Amount", "Chronology"], answer: 1 },
      { q: "Posting refers to:", options: ["Mailing", "Recording in journal", "Transferring to ledger", "Closing entries"], answer: 2 },
      { q: "The T-account shows:", options: ["Only debits", "Only credits", "Both debits and credits", "Neither"], answer: 2 },
      { q: "A T-account is useful for:", options: ["Finding dates", "Showing account changes", "Recording transactions", "Preparing statements"], answer: 1 },
      { q: "The left side of a T-account is the:", options: ["Credit side", "Debit side", "Balance side", "Total side"], answer: 1 },
      { q: "Account balances in the ledger are:", options: ["Always zero", "Debits only", "The difference between debits and credits", "Only for assets"], answer: 2 },
      { q: "Posting is done:", options: ["Daily", "Weekly", "After journalizing", "Only annually"], answer: 2 },
      { q: "The General Ledger contains:", options: ["Selected accounts", "All accounts", "Only asset accounts", "Only income accounts"], answer: 1 },
      { q: "Account numbering in the ledger typically:", options: ["Doesn't exist", "Ranges by type (100s for assets)", "Is random", "Follows alphabetical order"], answer: 1 },
      { q: "The ledger provides:", options: ["Chronological record", "Organized account details", "Transaction dates", "User information"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The General ___ is a collection of all accounts", answer: "Ledger" },
      { q: "The process of transferring to ledger is called ___", answer: "posting" },
      { q: "The left side of a T-account is the ___ side", answer: "debit" },
    ],
    trueFalse: [
      { q: "The ledger is organized chronologically.", answer: false, explain: "The ledger is organized by account type, not by date." },
      { q: "Posting transfers information from journal to ledger.", answer: true },
      { q: "Each account in the ledger shows its balance.", answer: true },
      { q: "T-accounts are only used for practice.", answer: false, explain: "T-accounts are fundamental tools in accounting." },
      { q: "The ledger is updated before the journal.", answer: false, explain: "The journal is updated first, then the ledger through posting." },
    ],
    flashcards: [
      { front: "General Ledger", back: "Collection of all accounts organized by type showing debits, credits, and balances." },
      { front: "T-Account", back: "Account format showing debit on left and credit on right." },
      { front: "Posting", back: "Process of transferring journal entries to the general ledger." },
      { front: "Account Balance", back: "The net debit or credit amount in an account." },
    ],
    examples: [
      {
        title: "Analogy: Filing System",
        items: [
          "Journal = Inbox with papers in order received",
          "Ledger = Organized filing cabinet by category",
          "Posting = Moving papers from inbox to correct file",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Cash account in ledger shows all deposits and withdrawals",
          "Sales Revenue account shows all sales from the journal",
          "Salaries Expense account accumulates all salary payments",
          "After posting, each account has a running balance",
        ],
      },
    ],
  },
  {
    id: "fa-trial-balance",
    number: 12,
    title: "Trial Balance",
    summary: "A list of all accounts to verify balance.",
    content: `## What is Trial Balance
A list of all ledger accounts with their debit or credit balances. Used to verify that total debits equal total credits.

## Three Types of Trial Balances
1. **Unadjusted** — prepared before adjusting entries
2. **Adjusted** — prepared after adjusting entries
3. **Post-Closing** — prepared after closing entries (only permanent accounts)

## Purpose
- Verify debits equal credits
- Identify posting errors
- Foundation for financial statements
- Checkpoint in accounting cycle

## Important Note
If trial balance balances, debits = credits. But errors can still exist (transpositions, omissions, etc.).`,
    mcqs: [
      { q: "Primary purpose of trial balance:", options: ["Calculate profit", "Verify D = C", "Record transactions", "Close accounts"], answer: 1 },
      { q: "A trial balance that balances:", options: ["Guarantees no errors", "Proves debits equal credits", "Ensures profitability", "Is never wrong"], answer: 1 },
      { q: "Trial balances are prepared:", options: ["Only once yearly", "Multiple times in the cycle", "Only after closing", "Never"], answer: 1 },
      { q: "The unadjusted trial balance is prepared:", options: ["At year-end only", "Before adjustments", "After financial statements", "Never"], answer: 1 },
      { q: "The adjusted trial balance includes:", options: ["Pre-adjustment balances", "All adjusting entries", "Closing entries", "Journal entries only"], answer: 1 },
      { q: "If debits don't equal credits in trial balance:", options: ["It's normal", "An error exists", "Accounts are correct", "It's being prepared"], answer: 1 },
      { q: "The post-closing trial balance:", options: ["Shows all accounts", "Shows only permanent accounts", "Is optional", "Includes revenue"], answer: 1 },
      { q: "Trial balance verifies:", options: ["Accuracy completely", "Posting accuracy", "Account existence", "Mathematical equality"], answer: 3 },
      { q: "A trial balance is a:", options: ["Financial statement", "Supporting document", "Journal entry", "Ledger account"], answer: 1 },
      { q: "Errors that won't be caught by trial balance:", options: ["Debit $100, credit $90", "Double entry of $200", "Posting to wrong account", "Unequal debits and credits"], answer: 2 },
    ],
    fillBlanks: [
      { q: "Trial balance verifies ___ equal credits", answer: "debits" },
      { q: "The ___ trial balance is prepared before adjustments", answer: "unadjusted" },
      { q: "The ____ trial balance is prepared after adjustments", answer: "adjusted" },
    ],
    trueFalse: [
      { q: "A balanced trial balance means no errors exist.", answer: false, explain: "It only verifies that debits equal credits; other errors can still exist." },
      { q: "The trial balance is used to prepare financial statements.", answer: true },
      { q: "The post-closing trial balance includes temporary accounts.", answer: false, explain: "Only permanent accounts remain after closing." },
      { q: "Errors can exist even if trial balance balances.", answer: true },
      { q: "Trial balance is a required step before financial statements.", answer: true },
    ],
    flashcards: [
      { front: "Trial Balance", back: "List of all accounts with debit or credit balances to verify balance." },
      { front: "Unadjusted TB", back: "Trial balance prepared before adjusting entries." },
      { front: "Adjusted TB", back: "Trial balance prepared after adjusting entries; used for financial statements." },
      { front: "Post-Closing TB", back: "Trial balance prepared after closing entries; shows only permanent accounts." },
    ],
    examples: [
      {
        title: "Analogy: Scale Check",
        items: [
          "Trial balance like checking if a scale is balanced",
          "If balanced, debits and credits match (good sign)",
          "But balanced scale doesn't mean items are correct—just that sides match",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Total debits: $50,000; Total credits: $50,000 → Balances! ✓",
          "Total debits: $49,000; Total credits: $50,000 → Doesn't balance! (Error exists)",
          "Error could be: transposition (64 vs 46), posting to wrong account",
        ],
      },
    ],
  },
  {
    id: "fa-adjustments-entries",
    number: 13,
    title: "Adjusting Entries",
    summary: "End-of-period adjustments for accrual accounting.",
    content: `## Five Types of Adjustments

1. **Accrued Expenses** — incurred but not yet paid
2. **Accrued Revenues** — earned but not yet received
3. **Prepaid Expenses** — paid but not yet used
4. **Unearned Revenues** — received but not yet earned
5. **Depreciation** — allocation of asset cost over life

## Purpose of Adjustments
Ensure revenue and expenses are recorded in the period earned/incurred (accrual basis), not just when cash moves.

## Adjusted Trial Balance
Prepared after all adjusting entries are journalized and posted. Shows updated account balances and serves as the source for financial statements.

## Key Point
Adjustments bridge the gap between cash and accrual accounting.`,
    mcqs: [
      { q: "Purpose of adjusting entries:", options: ["Close accounts", "Ensure accrual basis", "Record cash only", "Verify balance"], answer: 1 },
      { q: "An accrued expense is:", options: ["Paid in advance", "Incurred but not paid", "Received in advance", "Not yet incurred"], answer: 1 },
      { q: "Adjusted trial balance is prepared:", options: ["Before adjustments", "After adjustments", "Before posting", "After closing"], answer: 1 },
      { q: "Unearned revenue is:", options: ["Revenue earned", "Cash received in advance", "Revenue that needs adjustment", "An expense"], answer: 1 },
      { q: "A prepaid expense becomes:", options: ["A revenue", "An expense over time", "A liability", "An asset"], answer: 1 },
      { q: "Depreciation adjusts:", options: ["Cash balance", "Asset value", "Revenue", "Liabilities"], answer: 1 },
      { q: "Accrued revenues occur when:", options: ["Cash is received", "Service is provided but cash not received", "Payment is made", "Invoice is sent"], answer: 1 },
      { q: "Adjusting entries occur:", options: ["Daily", "At period-end", "Never", "Randomly"], answer: 1 },
      { q: "An accrued expense requires:", options: ["Debit expense, credit cash", "Debit expense, credit payable", "Debit payable, credit expense", "Debit cash, credit expense"], answer: 1 },
      { q: "The purpose of adjustments is to:", options: ["Reduce workload", "Match revenue with expenses", "Delay reporting", "Simplify accounting"], answer: 1 },
    ],
    fillBlanks: [
      { q: "An accrued expense is ___ but not paid", answer: "incurred" },
      { q: "Depreciation allocates asset cost over its ___ life", answer: "useful" },
      { q: "Prepaid expenses are paid in ___ but used later", answer: "advance" },
    ],
    trueFalse: [
      { q: "Adjusting entries are optional.", answer: false, explain: "They are required for accurate financial reporting." },
      { q: "Unearned revenue is a liability.", answer: true },
      { q: "Depreciation is the loss in value of an asset.", answer: false, explain: "Depreciation is the allocation of cost over the asset's useful life." },
      { q: "Accrued revenues must be recorded before cash is received.", answer: true },
      { q: "Adjusting entries affect the balance sheet only.", answer: false, explain: "They affect both the income statement and balance sheet." },
    ],
    flashcards: [
      { front: "Adjusting Entry", back: "Entry made at period-end to ensure accrual basis accounting." },
      { front: "Accrued Expense", back: "Expense incurred but not yet paid." },
      { front: "Prepaid Expense", back: "Cash paid in advance for future expense." },
      { front: "Depreciation", back: "Allocation of asset cost over its useful life." },
    ],
    examples: [
      {
        title: "Analogy: Sports Season",
        items: [
          "Accrued expense = Referees worked but not paid yet (work done, payment coming)",
          "Prepaid = Coach paid in advance for 6-month contract (cash now, service later)",
          "Depreciation = Stadium loses value each year (cost spread over life)",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Employees earned $5,000 wages but paycheck is next week → Debit Expense, Credit Payable",
          "Paid $1,200 for 6-month insurance → Each month debit $200 expense",
          "Equipment cost $10,000 with 10-year life → Record $1,000 depreciation yearly",
          "Received $600 for 3-month contract, only 1 month completed → $400 still unearned",
        ],
      },
    ],
  },
  {
    id: "fa-adjusted-trial-balance",
    number: 14,
    title: "Adjusted Trial Balance",
    summary: "The trial balance after all adjusting entries have been recorded.",
    content: `## What is Adjusted Trial Balance
A list of all ledger accounts with their updated balances after adjusting entries have been journalized and posted.

## Preparation
1. Prepare unadjusted trial balance
2. Make adjusting entries
3. Post adjusting entries to ledger
4. Prepare adjusted trial balance from updated account balances

## Purpose
- Verify debits still equal credits after adjustments
- Provides source for preparing financial statements
- Shows accounts in final form before closing
- Serves as checkpoint in accounting cycle

## Relationship to Other Documents
- **Unadjusted TB:** Before adjustments
- **Adjusted TB:** After adjustments (used for statements)
- **Post-Closing TB:** After closing (only permanent accounts)

## Key Difference from Unadjusted
The adjusted trial balance reflects all accrual adjustments, prepaid expirations, accrued items, and depreciation.`,
    mcqs: [
      { q: "Adjusted trial balance is prepared:", options: ["Before adjustments", "After adjustments", "Before posting", "After closing"], answer: 1 },
      { q: "Adjusted TB is used to prepare:", options: ["Journal entries", "Financial statements", "Ledger accounts", "Journals"], answer: 1 },
      { q: "After adjusting entries, debits still:", options: ["Increase", "Decrease", "Equal credits", "Change randomly"], answer: 2 },
      { q: "The adjusted TB includes:", options: ["Only asset accounts", "All accounts with adjustments", "Only expense accounts", "No revenue"], answer: 1 },
      { q: "Compared to unadjusted TB, adjusted TB shows:", options: ["Same balances", "Updated balances", "Fewer accounts", "More errors"], answer: 1 },
      { q: "Which account is likely different between unadjusted and adjusted TB?", options: ["Cash", "Depreciation Expense", "Owner's Capital", "Dividends"], answer: 1 },
      { q: "The adjusted TB serves as:", options: ["First document", "Source for statements", "Journal entry", "Ledger summary"], answer: 1 },
      { q: "If adjusted TB doesn't balance:", options: ["It's normal", "An error exists", "Accounts are correct", "Post adjustments later"], answer: 1 },
      { q: "The adjusted trial balance is a:", options: ["Financial statement", "Supporting schedule", "Journal", "Ledger"], answer: 1 },
      { q: "Which comes after adjusted TB in the cycle?", options: ["Adjusting entries", "Journal entries", "Financial statements", "Closing entries"], answer: 2 },
    ],
    fillBlanks: [
      { q: "The adjusted ___ balance is prepared after adjustments", answer: "trial" },
      { q: "Adjusting entries are ___ before preparing adjusted TB", answer: "posted" },
      { q: "The adjusted TB provides source for ___ statements", answer: "financial" },
      { q: "Depreciation appears on the adjusted ___ balance", answer: "trial" },
    ],
    trueFalse: [
      { q: "Adjusted TB is prepared before adjusting entries.", answer: false, explain: "It is prepared after adjusting entries are posted." },
      { q: "Adjusted TB must balance if all adjustments are correct.", answer: true },
      { q: "The adjusted TB has the same balances as unadjusted TB.", answer: false, explain: "Adjustments change account balances." },
      { q: "Accrued expenses appear on adjusted TB.", answer: true },
      { q: "Financial statements are prepared directly from unadjusted TB.", answer: false, explain: "They are prepared from the adjusted trial balance." },
    ],
    flashcards: [
      { front: "Adjusted Trial Balance", back: "List of all accounts with updated balances after adjusting entries." },
      { front: "Unadjusted TB", back: "Trial balance prepared before adjusting entries." },
      { front: "Adjusting Entries", back: "End-of-period entries to ensure accrual basis accounting." },
      { front: "Accrual Basis", back: "Recording revenue and expenses when earned/incurred, not when cash is received/paid." },
    ],
    examples: [
      {
        title: "Analogy: Grade Report",
        items: [
          "Unadjusted TB = Grades before final exam adjustments",
          "Adjusting entries = Extra credit applied for project completion",
          "Adjusted TB = Final grade report ready to send to parents",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Supplies account: $500 on unadjusted TB, adjusted to $200 after recording $300 used",
          "Prepaid Insurance: $1,200 unadjusted, adjusted to $900 after recording $300 expired",
          "Depreciation: $0 on unadjusted TB, adjusted to $1,000 depreciation expense recorded",
          "Accrued Wages: $0 on unadjusted TB, adjusted to $500 wages earned but not paid",
        ],
      },
    ],
  },
  {
    id: "fa-financial-statements",
    number: 15,
    title: "Financial Statements",
    summary: "Income Statement, Balance Sheet, and Statement of Retained Earnings.",
    content: `## Income Statement
**Shows:** Revenue, Expenses, Net Income
**Period:** For the month/year ended [date]
**Formula:** Revenue - Expenses = Net Income

## Balance Sheet
**Shows:** Assets, Liabilities, Equity
**Date:** As of [specific date]
**Equation:** Assets = Liabilities + Equity

## Statement of Retained Earnings
**Shows:** Changes in retained earnings
**Period:** For the month/year ended [date]
**Formula:** Beginning RE + NI - Dividends = Ending RE

## Preparation Order
1. Income Statement (calculates Net Income)
2. Statement of RE (uses NI, calculates Ending RE)
3. Balance Sheet (uses Ending RE)

## Key Points
- Income Statement shows performance
- Balance Sheet shows position
- Statement of RE links the two
- All three prepared from adjusted trial balance`,
    mcqs: [
      { q: "Which statement shows profit?", options: ["Balance Sheet", "Income Statement", "Statement of RE", "Trial Balance"], answer: 1 },
      { q: "Balance Sheet shows position:", options: ["For a period", "At a point in time", "Over a year", "Monthly"], answer: 1 },
      { q: "Statements are prepared in order:", options: ["BS, IS, RE", "IS, RE, BS", "RE, IS, BS", "All at once"], answer: 1 },
      { q: "The Income Statement formula is:", options: ["Assets - Liabilities", "Revenue - Expenses", "Debits - Credits", "Income + Expenses"], answer: 1 },
      { q: "The Balance Sheet equation is:", options: ["Assets = Liabilities", "Assets = Liabilities + Equity", "Revenue = Expenses", "Debits = Credits"], answer: 1 },
      { q: "Retained Earnings is calculated as:", options: ["Revenue - Expenses", "Beginning RE + NI - Dividends", "Assets - Liabilities", "Cash - Debt"], answer: 1 },
      { q: "The Income Statement is prepared:", options: ["Last", "First", "Second", "Depends"], answer: 1 },
      { q: "Which statement uses 'as of' in the date?", options: ["Income Statement", "Statement of RE", "Balance Sheet", "All equally"], answer: 2 },
      { q: "The Statement of RE links:", options: ["Two statements", "The IS and BS", "The journal and ledger", "Assets and liabilities"], answer: 1 },
      { q: "Expenses appear on which statement?", options: ["Balance Sheet only", "Income Statement only", "Statement of RE only", "All three"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The ___ Statement shows revenue and expenses", answer: "Income" },
      { q: "The ___ Sheet shows assets and liabilities", answer: "Balance" },
      { q: "Statement of ___ Earnings links the other two", answer: "Retained" },
      { q: "Net Income comes from the ___ Statement", answer: "Income" },
    ],
    trueFalse: [
      { q: "The Income Statement covers a specific point in time.", answer: false, explain: "It covers a period; the Balance Sheet shows a point in time." },
      { q: "Dividends appear on the Income Statement.", answer: false, explain: "They appear on the Statement of Retained Earnings." },
      { q: "All three statements are needed for a complete picture.", answer: true },
      { q: "The Statement of RE directly links to the Balance Sheet.", answer: true },
      { q: "Financial statements cannot be audited.", answer: false, explain: "Financial statements are often audited by external auditors." },
    ],
    flashcards: [
      { front: "Income Statement", back: "Shows revenue, expenses, and net income for a period." },
      { front: "Balance Sheet", back: "Shows assets, liabilities, and equity at a specific date." },
      { front: "Statement of RE", back: "Shows changes in retained earnings; links IS and BS." },
      { front: "Net Income", back: "Revenue minus expenses; bottom-line profit." },
    ],
    examples: [
      {
        title: "Analogy: Movie Production",
        items: [
          "Income Statement = Box office earnings vs production costs (profit from movie)",
          "Balance Sheet = Studio assets (cameras, facilities) vs debts (film loans)",
          "Retained Earnings = Accumulated profits kept in studio (for future films)",
        ],
      },
      {
        title: "Real-World Examples",
        items: [
          "Netflix IS: Streaming revenue $8B - Costs $3B = Net Income $5B",
          "Netflix BS: Cameras ($2M) + Cash ($1M) = Loans ($1.5M) + Equity ($1.5M)",
          "Apple RE: Started with $0, added $25B profit, paid $5B dividends = $20B retained",
        ],
      },
    ],
  },
];
