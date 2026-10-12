import type { Topic } from "@/content/types";

export const topics: Topic[] = [
  {
    id: "intro-aict",
    number: 1,
    title: "Introduction to AICT",
    summary: "Definition, scope, applications, benefits and drawbacks of Information & Communication Technology.",
    content: `## Definition
AICT (Applied Information & Communication Technology) is the study and practical use of technologies that help people collect, organize, share, and use information. Rather than focusing purely on technology itself, AICT emphasizes how these tools are actually used in real-world situations—like schools, hospitals, businesses, and homes—to solve practical problems and improve how we live and work. Think of AICT as a bridge between pure technology and its real application.

## Importance
AICT is fundamental to modern society because nearly every field—from healthcare to education to business—now depends on technology to function. It shapes how we communicate with people across the world, how doctors diagnose diseases, how students learn, and how businesses operate. Understanding AICT helps us appreciate both the benefits (speed, access, efficiency) and challenges (security, privacy, equity) of living in a technology-driven world.

## Major Application Domains
- **Education** — online learning platforms where students take classes remotely, educational websites providing tutorials, simulations and virtual experiments for science learning, and tools for managing grades and assignments.
- **Health Sector** — digital patient records accessible to doctors, telemedicine allowing remote consultations, medical imaging tools, and AI systems that help diagnose diseases.
- **Personal Life** — smartphones and tablets we use daily, social media for staying connected, smart home technology that controls lights and temperature, and mobile banking for financial transactions.
- **Business** — software systems that manage all business operations (accounting, inventory, HR), tools for managing customer relationships and sales, systems for tracking orders and shipments, and online stores for selling products.

## Benefits
1. Speed and accuracy of information processing.
2. Ubiquitous access via the Internet.
3. Cost reduction through automation.
4. Improved decision-making via analytics and AI.
5. Global collaboration regardless of geography.

## Disadvantages
1. **Security risks** — data breaches, ransomware, identity theft.
2. **Privacy erosion** — pervasive tracking and profiling.
3. **Digital divide** — unequal access by region/income.
4. **Job displacement** — automation of routine work.
5. **Health and social effects** — screen fatigue, addiction, misinformation.`,
    mcqs: [
      { q: "Which of the following is NOT a primary domain of AICT application?", options: ["Education", "Health Sector", "Geological tectonics", "Business"], answer: 2, explain: "Tectonics is a natural science domain; AICT applies to information-driven sectors." },
      { q: "Which is a direct disadvantage of widespread ICT adoption?", options: ["Faster communication", "Digital divide", "Improved analytics", "Global collaboration"], answer: 1 },
      { q: "An EHR system is most associated with which sector?", options: ["Education", "Health", "E-commerce", "Manufacturing"], answer: 1 },
      { q: "Which acronym best matches 'AICT'?", options: ["Advanced Internet Communication Tool", "Applied Information & Communication Technology", "Automated Industrial Control Tech", "Agile Internet Computing Toolkit"], answer: 1 },
      { q: "Which is an example of ICT in business?", options: ["ERP systems", "Tectonic plates", "Carbon dating", "Mitosis"], answer: 0 },
      { q: "Which is the BEST description of the 'digital divide'?", options: ["A network split", "Unequal access to ICT", "A type of firewall", "Binary partitioning"], answer: 1 },
      { q: "Which is NOT a benefit of ICT?", options: ["Automation", "Cost reduction", "Loss of privacy", "Global reach"], answer: 2 },
      { q: "MOOCs primarily relate to ICT in:", options: ["Health", "Education", "Agriculture", "Defence"], answer: 1 },
    ],
    fillBlanks: [
      { q: "ICT stands for Information and ___ Technology.", answer: "Communication" },
      { q: "An ___ system stores patient medical history electronically.", answer: "EHR", alt: ["electronic health record"] },
      { q: "Unequal access to ICT resources is called the digital ___.", answer: "divide" },
      { q: "ERP and CRM are categories of ___ software.", answer: "business", alt: ["enterprise"] },
      { q: "Telemedicine is an ICT application in the ___ sector.", answer: "health" },
    ],
    trueFalse: [
      { q: "ICT is limited to the use of computers only.", answer: false, explain: "ICT also includes telecom, networks, and information systems." },
      { q: "MOOCs are an example of ICT in education.", answer: true },
      { q: "Loss of privacy can be a disadvantage of ICT.", answer: true },
      { q: "Automation always increases employment.", answer: false },
      { q: "Cloud-based CRM falls under ICT in business.", answer: true },
    ],
    flashcards: [
      { front: "AICT", back: "Applied Information & Communication Technology — the integrated study and use of computing, networking and information systems." },
      { front: "EHR", back: "Electronic Health Record — digital, longitudinal patient health information." },
      { front: "ERP", back: "Enterprise Resource Planning — integrated software for finance, HR, supply chain." },
      { front: "Digital divide", back: "Gap between groups with and without effective access to ICT." },
      { front: "MOOC", back: "Massive Open Online Course — large-scale online learning platform." },
      { front: "Telemedicine", back: "Remote clinical care delivered over ICT channels." },
    ],
  },
  {
    id: "computer-fundamentals",
    number: 2,
    title: "Computer Fundamentals",
    summary: "Definition, classifications, internal components, and the machine cycle.",
    content: `## Definition
A computer is an electronic machine that can be programmed to automatically perform operations on information. It accepts input (information you give it), processes that information according to instructions, and produces output (the results). What makes computers powerful is their versatility—the same physical machine can be used for vastly different tasks simply by changing the instructions it follows. Computers are used everywhere today: in our phones, cars, hospitals, schools, and businesses.

## Types of Computers
Computers come in different sizes and capabilities, each designed for specific purposes:
- **Supercomputers** — the most powerful computers, capable of performing trillions of calculations per second. Used for complex scientific problems like weather prediction, medical research, and climate modeling.
- **Mainframes** — large, extremely reliable computers used by major organizations (banks, airlines) to manage millions of transactions simultaneously and securely.
- **Servers** — specialized computers that store and share information with other computers on a network, like librarians distributing books to patrons.
- **Workstations** — powerful computers designed for professionals like architects, engineers, and scientists who need high performance for specialized work.
- **Personal Computers (PCs)** — the computers we use at home or in offices, powerful enough for everyday tasks like writing, browsing, and entertainment.

## Components
A computer has five main functional parts that work together:
- **Input Unit** — where information enters the system (keyboard, mouse, microphone, camera). This is how the computer receives data from the outside world.
- **Output Unit** — where the computer communicates results back to you (monitor, printer, speaker). This is how you see the results of the computer's work.
- **Memory Unit** — the computer's "storage shelf" that temporarily holds data and instructions currently being used. Like RAM is fast but temporary; ROM stores permanent instructions.
- **CPU (Processor)** — the "brain" of the computer that reads instructions, makes decisions, and performs calculations. It has two main parts:
  - **Control Unit** — like a conductor, it fetches instructions, understands them, and directs the flow of work.
  - **ALU (Arithmetic Logic Unit)** — performs the actual mathematical calculations and logical comparisons.

## Machine (Instruction) Cycle
The CPU operates by constantly repeating a simple four-step cycle, billions of times per second:
1. **Fetch** — The CPU retrieves the next instruction from memory. Like reading the next line of a recipe.
2. **Decode** — The CPU understands what the instruction means. Like understanding what "add two cups of flour" means.
3. **Execute** — The CPU performs the operation (addition, comparison, etc.). Like actually adding the flour.
4. **Store** — The CPU saves the result for later use. Like putting the mixed bowl aside.

This remarkable cycle, repeated endlessly, is how complex calculations and operations are accomplished quickly—by breaking them into simple, repeatable steps.`,
    mcqs: [
      { q: "Which CPU component performs arithmetic and logic?", options: ["Control Unit", "ALU", "Cache", "Bus"], answer: 1 },
      { q: "Which architecture stores program and data in the same memory?", options: ["Harvard", "Von Neumann", "Dataflow", "Quantum"], answer: 1 },
      { q: "Which is the correct order of the basic machine cycle?", options: ["Decode-Fetch-Execute", "Fetch-Execute-Decode", "Fetch-Decode-Execute", "Execute-Fetch-Decode"], answer: 2 },
      { q: "Which class of computer offers the HIGHEST raw performance?", options: ["Workstation", "Mainframe", "Microcomputer", "Supercomputer"], answer: 3 },
      { q: "Mainframes are best known for:", options: ["Gaming", "Transaction throughput & reliability", "3D rendering", "Mobile computing"], answer: 1 },
      { q: "The PC register holds:", options: ["Power consumption", "Address of next instruction", "Process count", "Cache size"], answer: 1 },
      { q: "RAM is:", options: ["Non-volatile", "Volatile", "Mechanical", "Optical"], answer: 1 },
      { q: "Which is NOT part of the CPU?", options: ["ALU", "Control Unit", "Hard disk", "Registers"], answer: 2 },
    ],
    fillBlanks: [
      { q: "The CPU has two main parts: the ALU and the ___ Unit.", answer: "Control" },
      { q: "RAM is ___ memory (lost on power off).", answer: "volatile" },
      { q: "The ___ register holds the address of the next instruction.", answer: "PC", alt: ["program counter"] },
      { q: "The basic instruction cycle is fetch, decode and ___.", answer: "execute" },
      { q: "A ___ computer is the highest-performance class used for simulations.", answer: "supercomputer" },
    ],
    trueFalse: [
      { q: "The ALU performs decoding of instructions.", answer: false, explain: "Decoding is done by the Control Unit." },
      { q: "Von Neumann architecture uses the same memory for code and data.", answer: true },
      { q: "Workstations are typically multi-user mainframes.", answer: false },
      { q: "ROM is non-volatile.", answer: true },
      { q: "Mainframes are designed for high transaction reliability.", answer: true },
    ],
    flashcards: [
      { front: "ALU", back: "Arithmetic Logic Unit — performs +, −, AND, OR, comparisons." },
      { front: "Control Unit", back: "Fetches and decodes instructions; generates control signals." },
      { front: "Machine Cycle", back: "Fetch → Decode → Execute (→ Store)." },
      { front: "Von Neumann", back: "Single memory for both instructions and data." },
      { front: "Register", back: "Small, fastest storage inside the CPU." },
    ],
  },
  {
    id: "storage-devices",
    number: 3,
    title: "Storage Devices",
    summary: "Primary vs secondary storage and the memory hierarchy.",
    content: `## Storage: Understanding the Difference
Computers need two types of storage with different purposes:

**Primary Storage (RAM)** — This is the computer's "active workspace," like a student's desk where they keep the books and papers they're currently working on. RAM is:
- Very fast — the CPU can access information almost instantly
- Temporary — it loses all information when the computer is turned off
- Limited in size — but sufficient for running programs
- Used for "live" data the computer is actively processing

**Secondary Storage (Permanent Storage)** — This is like a filing cabinet where information is stored permanently, even when the computer is off. It includes:
- **Hard Drives (HDD)** — mechanical storage, large capacity, affordable, but slower
- **Solid State Drives (SSD)** — faster than hard drives, more reliable, no moving parts
- **USB Flash Drives and Memory Cards** — portable storage you can carry anywhere
- **Optical Media (CDs, DVDs)** — older storage technology, still used for backups and distribution
- **Tape Storage** — used by organizations for long-term archival (very cheap, but slow)

The key difference: Primary storage is fast but temporary; secondary storage is slower but permanent.`,
    mcqs: [
      { q: "Which is volatile primary storage?", options: ["HDD", "SSD", "RAM", "DVD"], answer: 2 },
      { q: "Cache memory is typically built from:", options: ["DRAM", "SRAM", "Flash", "Magnetic"], answer: 1 },
      { q: "Which has the LOWEST access latency?", options: ["RAM", "Register", "L2 cache", "SSD"], answer: 1 },
      { q: "NVMe SSDs use which interface?", options: ["SATA", "PCIe", "USB 1.0", "Parallel ATA"], answer: 1 },
      { q: "Magnetic tape is best for:", options: ["Random access", "Real-time gaming", "Archival backup", "CPU cache"], answer: 2 },
      { q: "ROM stores:", options: ["User documents", "Firmware", "Cache lines", "Page table"], answer: 1 },
      { q: "Which is non-volatile?", options: ["DRAM", "SRAM", "Registers", "SSD"], answer: 3 },
      { q: "Secondary storage is accessed by the CPU:", options: ["Directly", "Via I/O subsystem", "Through registers only", "It cannot be accessed"], answer: 1 },
    ],
    fillBlanks: [
      { q: "RAM is a form of ___ storage.", answer: "primary" },
      { q: "SSDs are built from ___ flash memory.", answer: "NAND" },
      { q: "Registers reside inside the ___.", answer: "CPU" },
      { q: "Tape drives provide ___ access to data.", answer: "sequential" },
      { q: "BIOS firmware is stored in ___.", answer: "ROM" },
    ],
    trueFalse: [
      { q: "SSDs have moving parts.", answer: false },
      { q: "Cache is faster than main RAM.", answer: true },
      { q: "Secondary storage is volatile.", answer: false },
      { q: "Registers are the fastest storage in a system.", answer: true },
      { q: "DVDs are an example of optical secondary storage.", answer: true },
    ],
    flashcards: [
      { front: "Primary storage", back: "Directly accessed by CPU; usually volatile (RAM, cache, registers)." },
      { front: "Secondary storage", back: "Non-volatile bulk storage (HDD, SSD, tape)." },
      { front: "SRAM vs DRAM", back: "SRAM is faster, more expensive, used for cache; DRAM is denser, used for main RAM." },
      { front: "NVMe", back: "High-speed SSD interface using PCIe lanes." },
    ],
  },
  {
    id: "io-devices",
    number: 4,
    title: "Input & Output Devices",
    summary: "Peripheral devices that move data into and out of the computer.",
    content: `## Input Devices
Input devices are how you communicate with a computer—they convert your actions into digital signals the computer can understand:
- **Keyboard** — converts your key presses into letters and numbers the computer recognizes
- **Mouse/Touchpad** — translates your hand movements into cursor movements on the screen
- **Scanner** — reads printed documents or photos and converts them into digital images that computers can store
- **Microphone** — captures sound waves and converts them into digital audio files
- **Camera/Webcam** — captures images and video that can be stored, edited, or shared
- **Touchscreen** — combines input (your touch) and output (the display) into one device
- **Sensors** — specialized devices in smart homes and phones that detect temperature, movement, location, etc.

## Output Devices
Output devices show you the results of the computer's work—they convert digital information back into forms humans can perceive:
- **Monitor/Display** — shows text, images, and videos. Characterized by resolution (sharpness) and refresh rate (smoothness)
- **Printer** — converts digital documents into physical paper copies. Different types for different needs: inkjet for color photos, laser for sharp text
- **Speaker/Headphones** — convert digital audio into sound you can hear
- **Projector** — displays computer content on a large screen for presentations and meetings

## Why Input and Output Matter
Computers exist to solve problems and help people. Without input devices, there'd be no way to give the computer information. Without output devices, there'd be no way to see the results. Together, input and output devices create the "conversation" between humans and computers.`,
    mcqs: [
      { q: "Which is purely an input device?", options: ["Speaker", "Scanner", "Monitor", "Printer"], answer: 1 },
      { q: "An LCD's response time measures:", options: ["Pixel transition speed", "Boot time", "Network latency", "Color depth"], answer: 0 },
      { q: "A microphone needs which converter to digitise audio?", options: ["DAC", "ADC", "PSU", "GPU"], answer: 1 },
      { q: "Which is a dual (input+output) device?", options: ["Mouse", "Touchscreen", "Speaker", "Scanner"], answer: 1 },
      { q: "Laser printers form images using:", options: ["Ink droplets", "Heat-sensitive paper", "Electrostatic toner", "Thermal wax"], answer: 2 },
      { q: "CMOS sensors are commonly used in:", options: ["Speakers", "Keyboards", "Cameras", "Printers"], answer: 2 },
      { q: "Refresh rate is measured in:", options: ["Hz", "dpi", "ms", "bits"], answer: 0 },
      { q: "Which is NOT an output device?", options: ["Projector", "Headphones", "Plotter", "Barcode reader"], answer: 3 },
    ],
    fillBlanks: [
      { q: "A ___ converts analogue audio into digital samples.", answer: "ADC", alt: ["analog to digital converter"] },
      { q: "Printer resolution is measured in ___.", answer: "DPI", alt: ["dots per inch"] },
      { q: "A scanner produces a ___ image of a document.", answer: "bitmap", alt: ["raster"] },
      { q: "A touchscreen is both an input and an ___ device.", answer: "output" },
      { q: "Monitor refresh rate is measured in ___.", answer: "Hz", alt: ["hertz"] },
    ],
    trueFalse: [
      { q: "A scanner is an output device.", answer: false },
      { q: "Touchscreens combine input and output capabilities.", answer: true },
      { q: "Inkjet printers use lasers to fuse toner.", answer: false },
      { q: "Higher DPI means finer print detail.", answer: true },
      { q: "A speaker requires a DAC.", answer: true },
    ],
    flashcards: [
      { front: "ADC", back: "Analog-to-Digital Converter — samples analog signals into digital." },
      { front: "DAC", back: "Digital-to-Analog Converter — used in audio playback." },
      { front: "DPI", back: "Dots Per Inch — print/scan resolution metric." },
      { front: "Refresh rate", back: "How many times per second a display redraws (Hz)." },
    ],
  },
  {
    id: "information-technology",
    number: 5,
    title: "Information Technology",
    summary: "What IT means and where it is applied.",
    content: `## Definition
Information Technology (IT) is the practical use of computer systems, networks, and digital tools to manage, process, and secure information in organizations and businesses. It encompasses all the physical equipment (computers, servers, routers), the software and applications that run on them, and the processes and expertise needed to keep these systems working effectively and securely. 

IT is essentially about solving real-world problems using technology. A hospital's IT team manages patient records and medical equipment. A bank's IT department keeps money transactions secure. A school's IT staff maintains computers in classrooms and manages the learning management system. While AICT is a broader field about information and communication, IT is specifically focused on the practical management and optimization of technology systems.

## Core Areas
IT typically involves several key responsibilities:
- **Infrastructure** — managing physical equipment like computers, servers, and networks
- **Software & Applications** — ensuring the right programs are installed and updated
- **Security** — protecting data from theft and unauthorized access
- **Support** — helping users when they have problems with technology
- **Planning** — deciding what technology a business needs to grow and improve

## Applications
- Banking and finance (core banking, fraud detection)
- Healthcare (EHR, imaging, lab systems)
- Manufacturing (PLM, MES, robotics)
- Retail (POS, inventory, recommendation engines)
- Government (e-governance, tax portals)
- Research and academia (HPC, simulations)`,
    mcqs: [
      { q: "Which is NOT a core pillar of IT?", options: ["Hardware", "Software", "Geology", "Data"], answer: 2 },
      { q: "ITIL relates to:", options: ["Hardware design", "IT service management", "Cryptography", "Database normalisation"], answer: 1 },
      { q: "MES is mostly used in:", options: ["Manufacturing", "Banking", "Schools", "Hospitals"], answer: 0 },
      { q: "Compared to ICT, IT places less emphasis on:", options: ["Hardware", "Software", "Communication", "Data"], answer: 2 },
      { q: "POS systems are typical in which sector?", options: ["Retail", "Healthcare", "Defence", "Mining"], answer: 0 },
      { q: "DevOps primarily aligns with which IT pillar?", options: ["Hardware only", "People & Processes", "Data warehousing", "Network cabling"], answer: 1 },
    ],
    fillBlanks: [
      { q: "IT stands for ___ Technology.", answer: "Information" },
      { q: "EHR systems are an IT application in ___.", answer: "healthcare", alt: ["health"] },
      { q: "___ is a framework for IT service management.", answer: "ITIL" },
      { q: "POS terminals are mainly used in the ___ sector.", answer: "retail" },
    ],
    trueFalse: [
      { q: "IT and ICT mean exactly the same thing.", answer: false },
      { q: "ITIL is a methodology for IT service management.", answer: true },
      { q: "Data is one of the pillars of IT.", answer: true },
      { q: "DevOps is purely a hardware practice.", answer: false },
    ],
    flashcards: [
      { front: "IT", back: "Information Technology — hardware/software/data/processes for handling information." },
      { front: "ITIL", back: "IT Infrastructure Library — best-practice framework for IT service management." },
      { front: "DevOps", back: "Culture/practice combining software development and IT operations." },
    ],
  },
  {
    id: "internet",
    number: 6,
    title: "Internet",
    summary: "Global packet-switched network of networks.",
    content: `## Definition
The **Internet** is the world's largest network—a global system connecting billions of computers and devices together so they can communicate and share information. Unlike a traditional phone network where you have a direct line to one person, the Internet is more like a mail system where messages are broken into small pieces called "packets," sent through many different routes, and reassembled at their destination. This makes the Internet resilient: if one route is blocked, messages can take an alternative path.

No single person or organization owns or controls the Internet. Instead, it's like a cooperative system where internet service providers (ISPs), governments, universities, and companies work together to maintain it. Anyone with a connection can plug in and participate.

## How the Internet Works (Simplified)
1. **Your Device** — connects to an ISP (Internet Service Provider) through home internet
2. **ISP Network** — your ISP routes your request through its infrastructure
3. **Internet Exchange Points** — different ISPs connect to each other at these central hubs to exchange traffic (like cargo transfer hubs for packages)
4. **The Destination** — your message reaches the computer or website you requested
5. **The Return** — a response comes back through the same type of journey

## Types of Internet Access
- **Broadband** — fast, always-on connections (cable, fiber, wireless)
- **Mobile** — internet through cellular networks on phones and tablets
- **Satellite** — for remote areas where other options aren't available
- **Wi-Fi** — wireless internet in homes, offices, and public spaces`,
    mcqs: [
      { q: "Which protocol suite underpins the Internet?", options: ["IPX/SPX", "TCP/IP", "AppleTalk", "NetBEUI"], answer: 1 },
      { q: "POP in networking stands for:", options: ["Post Office Protocol", "Point of Presence", "Path of Packets", "Public Online Portal"], answer: 1, explain: "In Internet infrastructure context. POP3 (mail) is a separate meaning." },
      { q: "Which body manages global IP address allocation?", options: ["W3C", "IETF", "ICANN/IANA", "ISO"], answer: 2 },
      { q: "Routing between autonomous systems uses:", options: ["RIP", "OSPF", "BGP", "EIGRP"], answer: 2 },
      { q: "An IXP allows ISPs to:", options: ["Encrypt traffic", "Exchange traffic via peering", "Block users", "Measure latency only"], answer: 1 },
      { q: "Which is NOT a type of Internet access?", options: ["DSL", "Fiber", "Satellite", "USB-C"], answer: 3 },
      { q: "DNS converts:", options: ["IPs to MACs", "Names to IPs", "Packets to frames", "Bits to bytes"], answer: 1 },
      { q: "The Internet is best described as:", options: ["A single network", "A network of networks", "A web browser", "A protocol"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Routing between autonomous systems uses the ___ protocol.", answer: "BGP" },
      { q: "An ___ is a facility where multiple ISPs exchange traffic.", answer: "IXP" },
      { q: "ICANN coordinates domain names and ___ allocation.", answer: "IP" },
      { q: "DNS resolves names to ___ addresses.", answer: "IP" },
      { q: "The Internet is a packet-___ network.", answer: "switched" },
    ],
    trueFalse: [
      { q: "A single government controls the Internet.", answer: false },
      { q: "BGP is used between autonomous systems.", answer: true },
      { q: "An IXP improves peering efficiency between ISPs.", answer: true },
      { q: "DNS is part of the link layer.", answer: false },
      { q: "Fiber typically offers lower latency than dial-up.", answer: true },
    ],
    flashcards: [
      { front: "POP (network)", back: "Point of Presence — physical access location for an ISP." },
      { front: "IXP", back: "Internet Exchange Point — neutral facility where networks peer." },
      { front: "BGP", back: "Border Gateway Protocol — inter-AS routing protocol." },
      { front: "ICANN", back: "Coordinates global IP address and domain name allocation." },
      { front: "DNS", back: "Distributed naming system mapping hostnames to IPs." },
    ],
  },
  {
    id: "www",
    number: 7,
    title: "World Wide Web (WWW)",
    summary: "An information system of hyperlinked documents on the Internet.",
    content: `## Definition
The **World Wide Web (WWW)** is like a vast library built on top of the Internet. While the Internet is the physical and technical infrastructure that connects computers worldwide, the Web is the system of interconnected documents (web pages) and resources that you access through the Internet. It's made of billions of pages written in a language called HTML, decorated with styling (CSS), and made interactive with programming (JavaScript). 

When you click a link, your browser (like Chrome or Firefox) sends a request over the Internet to a web server, which responds by sending back the page code. The browser then translates that code into what you see on your screen. The revolutionary idea that made the Web so powerful is the **hyperlink**—the ability to click a word or image and jump to another document, whether it's on the same computer or on the other side of the world.

## The Web vs. The Internet
Think of it this way: The **Internet** is the roads and highways connecting cities (infrastructure). The **Web** is the stores, libraries, and buildings you access through those roads (content). The Internet is older and would exist even without the Web, but the Web made the Internet useful for ordinary people.

## Impact of the Web
The Web has fundamentally changed how humans share information and work together. It enables:
- **Access to knowledge** — billions of people can search for and learn about almost any topic
- **E-commerce** — buying and selling goods online has become normal
- **Social connection** — people across the world can share ideas and stay in touch
- **Remote work** — people can collaborate from anywhere
- **Innovation** — startups can reach global audiences from their garage`,
    mcqs: [
      { q: "Who invented the WWW?", options: ["Vint Cerf", "Tim Berners-Lee", "Bill Gates", "Linus Torvalds"], answer: 1 },
      { q: "Which protocol is the foundation of the Web?", options: ["FTP", "SMTP", "HTTP", "SSH"], answer: 2 },
      { q: "Web 2.0 is characterised by:", options: ["Static pages", "User-generated content", "Mainframe terminals", "Punch cards"], answer: 1 },
      { q: "Which is NOT a web browser?", options: ["Chrome", "Firefox", "Apache", "Safari"], answer: 2 },
      { q: "URLs identify:", options: ["IP packets", "Web resources", "MAC addresses", "Routing tables"], answer: 1 },
      { q: "The Web was invented at:", options: ["MIT", "CERN", "Bell Labs", "Stanford"], answer: 1 },
      { q: "Which language describes web page structure?", options: ["CSS", "HTML", "SQL", "Java"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The Web uses the ___ protocol for transport of pages.", answer: "HTTP" },
      { q: "Resources on the Web are identified by ___s.", answer: "URL" },
      { q: "WWW was invented by Tim ___ -Lee.", answer: "Berners" },
      { q: "Web ___ is read-only static pages.", answer: "1.0" },
      { q: "HTML defines the ___ of a web page.", answer: "structure" },
    ],
    trueFalse: [
      { q: "The Web and Internet are the same thing.", answer: false },
      { q: "HTTPS is HTTP secured with TLS.", answer: true },
      { q: "Apache is a web browser.", answer: false },
      { q: "Tim Berners-Lee invented the WWW at CERN.", answer: true },
      { q: "JavaScript is used for client-side behavior.", answer: true },
    ],
    flashcards: [
      { front: "WWW", back: "Hyperlinked information system over the Internet using HTTP and URLs." },
      { front: "HTML", back: "HyperText Markup Language — page structure." },
      { front: "URL", back: "Uniform Resource Locator — address of a web resource." },
      { front: "Web 1.0/2.0/3.0", back: "Static → social/interactive → semantic/decentralised." },
    ],
  },
  {
    id: "networking-concepts",
    number: 8,
    title: "Networking Concepts: Bandwidth, Broadband, Baseband",
    summary: "Capacity and signaling fundamentals.",
    content: `## Understanding Network Speed and Transmission

**Bandwidth** is a measure of how much data can flow through a communication channel. Think of it like a water pipe—a larger pipe (higher bandwidth) can carry more water (data) per unit time. Bandwidth is measured in bits per second (bps), kilobits (kbps), megabits (mbps), or gigabits (gbps). It's the maximum speed that a network connection can theoretically support. However, actual speeds are often lower due to various factors like distance, interference, and network congestion.

**Broadband** refers to high-speed, always-on internet connections. The term "broadband" originally had a technical meaning (transmitting multiple signals at once), but today it's commonly used to describe any fast internet connection—typically at least 25 megabits per second (Mbps). Broadband technology includes:
- **Cable internet** — delivered through the same cables that bring cable TV
- **Fiber internet** — delivered through fiber-optic cables (the fastest option)
- **Wireless broadband** — through cellular networks or Wi-Fi

**Baseband** refers to transmission where the entire channel capacity is used for one single signal or communication. Ethernet networks (like traditional LANs) use baseband transmission—they dedicate the whole wire to send one message at a time. It's simpler but less efficient than broadband for shared networks.

## Why This Matters
When choosing internet for your home or business, understanding bandwidth helps you know what to expect. A 100 Mbps connection allows faster browsing, smooth video streaming, and quicker downloads than a 10 Mbps connection. For families or businesses using the internet simultaneously, higher bandwidth is essential.`,
    mcqs: [
      { q: "Bandwidth is measured in:", options: ["Hz only", "bps", "Bytes", "Watts"], answer: 1 },
      { q: "Ethernet 100BASE-TX is an example of:", options: ["Broadband", "Baseband", "Satellite", "Optical WDM"], answer: 1 },
      { q: "Which uses FDM to carry multiple signals?", options: ["Baseband", "Broadband", "Half-duplex", "TDM only"], answer: 1 },
      { q: "Throughput vs bandwidth:", options: ["Same thing", "Throughput is realised rate; bandwidth is max", "Throughput is always higher", "Unrelated terms"], answer: 1 },
      { q: "Cable Internet is typically:", options: ["Baseband", "Broadband", "Optical only", "Dial-up"], answer: 1 },
      { q: "Which is closest to a baseband transmission?", options: ["DSL", "5G NR", "Ethernet 10BASE-T", "Cable TV"], answer: 2 },
    ],
    fillBlanks: [
      { q: "Bandwidth in data transfer is measured in ___.", answer: "bps", alt: ["bits per second"] },
      { q: "Baseband uses the ___ channel for one signal.", answer: "entire" },
      { q: "Broadband multiplexes signals using ___ division.", answer: "frequency" },
      { q: "Realised data rate is called ___.", answer: "throughput" },
    ],
    trueFalse: [
      { q: "Broadband can carry multiple channels simultaneously.", answer: true },
      { q: "Ethernet LAN is typically broadband.", answer: false },
      { q: "Bandwidth and throughput mean exactly the same.", answer: false },
      { q: "DSL is a broadband technology.", answer: true },
    ],
    flashcards: [
      { front: "Bandwidth", back: "Maximum channel capacity (bps or Hz)." },
      { front: "Baseband", back: "One signal occupies the full channel; digital pulses." },
      { front: "Broadband", back: "Multiple signals via FDM on one medium." },
      { front: "Throughput", back: "Actual data rate achieved." },
    ],
  },
  {
    id: "communication-protocols",
    number: 9,
    title: "Communication & Protocols",
    summary: "Protocols, packets, IP addresses (static & dynamic).",
    content: `## Protocols: The Rules of Communication
A **protocol** is a set of agreed-upon rules that govern how data is sent and received between computers. Just like humans have social protocols (shaking hands, greeting etiquette), computers follow protocols to communicate effectively. For example, HTTP is the protocol your browser uses to request web pages. SMTP is the protocol used for sending email. These rules ensure that no matter who made the equipment or software, it can all work together.

## Data Packets
When you send a message over a network, it's not sent all at once. Instead, it's broken into small pieces called **packets**. Imagine sending a book—instead of shipping the whole thing, you cut it into pages, put each in its own envelope (packet), label it with where it's going and which page number it is, then mail them all. 

Each packet contains:
- **Header** — contains the "address" (where it came from and where it's going), which packet number this is, and other instructions
- **Payload** — the actual data or "message" in the packet
- **Trailer** — sometimes includes an error-checking code to make sure the packet wasn't damaged in transit

This approach has advantages: if one packet gets lost, only that portion needs to be resent. Packets can take different routes, which makes networks more efficient and robust. At the destination, the packets are reassembled in the correct order to recreate the original message.

## IP Addresses: Computer "Phone Numbers"
For packets to find their destination, computers need addresses—much like your home address allows mail to reach you. On the internet, these addresses are called **IP addresses** (Internet Protocol addresses).

**IPv4 Addresses** — look like: \`192.168.1.5\` (four numbers separated by dots, each 0-255). Today's standard, but we're running out of addresses because there are only about 4.3 billion possible combinations.

**IPv6 Addresses** — look like: \`2001:0db8::1\` (much longer format using letters and numbers). Designed for the future with practically unlimited addresses.

### Static vs. Dynamic IP Addresses
- **Static IP** — assigned once and stays the same. Used for servers and important devices. Advantage: reliable for setting up rules; Disadvantage: requires manual management.
- **Dynamic IP** — automatically assigned and changes periodically. Used for regular computers and phones. Advantage: automatic and scalable; Disadvantage: address can change, making it harder to remember or reference.`,
    mcqs: [
      { q: "Which protocol provides reliable, connection-oriented delivery?", options: ["UDP", "TCP", "ICMP", "ARP"], answer: 1 },
      { q: "DHCP is used to:", options: ["Encrypt traffic", "Assign dynamic IP addresses", "Route between ASes", "Resolve names"], answer: 1 },
      { q: "IPv6 addresses are how many bits?", options: ["32", "64", "128", "256"], answer: 2 },
      { q: "Which is part of an IP packet header?", options: ["MAC of next router only", "TTL", "DNS query", "Browser version"], answer: 1 },
      { q: "Static IPs are typically used on:", options: ["Random user laptops", "Servers", "Smart bulbs", "Wearables"], answer: 1 },
      { q: "Which is a transport-layer protocol?", options: ["IP", "Ethernet", "UDP", "ARP"], answer: 2 },
      { q: "An IPv4 address is:", options: ["32-bit", "64-bit", "48-bit", "16-bit"], answer: 0 },
    ],
    fillBlanks: [
      { q: "TCP is connection- ___, while UDP is connectionless.", answer: "oriented" },
      { q: "DHCP assigns ___ IP addresses.", answer: "dynamic" },
      { q: "An IPv6 address has ___ bits.", answer: "128" },
      { q: "Network data is broken into ___ for transmission.", answer: "packets" },
      { q: "TTL stands for Time to ___.", answer: "Live" },
    ],
    trueFalse: [
      { q: "UDP is reliable and connection-oriented.", answer: false },
      { q: "Servers commonly use static IPs.", answer: true },
      { q: "IPv4 has more addresses than IPv6.", answer: false },
      { q: "DHCP leases are temporary.", answer: true },
      { q: "A protocol defines rules for data exchange.", answer: true },
    ],
    flashcards: [
      { front: "Protocol", back: "Rules governing data exchange between systems." },
      { front: "Packet", back: "Header + payload (+trailer) unit of network data." },
      { front: "Static IP", back: "Manually assigned, constant IP address." },
      { front: "Dynamic IP", back: "Assigned via DHCP for a lease period." },
      { front: "TCP vs UDP", back: "TCP: reliable, ordered. UDP: best-effort, low overhead." },
    ],
  },
  {
    id: "web-concepts",
    number: 10,
    title: "Web Concepts",
    summary: "Website, web portal, browser, URL, web protocols.",
    content: `## Key Web Concepts

**Website** — a collection of related web pages organized under a common domain name (like www.example.com) that work together to provide information or services. A website is like a digital space that belongs to a person, business, or organization. All the pages are connected logically through hyperlinks (clickable links), allowing visitors to navigate between related content. For example, an online bookstore website includes a home page, product pages, a shopping cart page, and a checkout page—all working together to serve customers.

**Web Portal** — a specialized type of website that acts as a **single gateway to multiple services and information sources**. Instead of just displaying static information, a portal aggregates different functions and tools in one place with unified login and personalized access. Think of it as an all-in-one hub where you can access everything you need without going to different websites. Examples include:
- A **university portal** — students check grades, register for classes, access library resources, and submit assignments all in one login
- A **banking portal** — customers view accounts, transfer money, pay bills, and apply for loans
- A **corporate employee portal** — workers access email, company policies, HR benefits, and project management tools

**Web Browser** — the software application that acts as your "window" into the Web. Just as you need a car to drive on roads, you need a browser to navigate and view web pages. The browser's essential functions include: connecting to web servers over the Internet, requesting the code that makes up a page, interpreting HTML/CSS/JavaScript code, and displaying the finished page on your screen. Popular browsers (Chrome, Firefox, Safari, Edge) all do this, though they may render pages slightly differently.

**URL (Uniform Resource Locator)** — the complete "address" or identifier of a specific web page or resource on the Internet. When you type a URL into your browser's address bar, it tells the browser exactly where on the Internet to find what you're looking for. URLs have a consistent structure:
\`\`\`
https://www.example.com/products/books?category=fiction#reviews
\`\`\`
Breaking this down:
- \`https://\` — the **protocol** (the "language" used; \`https\` is secure)
- \`www.example.com\` — the **domain** (the website's main address)
- \`/products/books\` — the **path** (which specific page within that website)
- \`?category=fiction\` — the **query** (parameters that filter or customize the page, like "show only fiction books")
- \`#reviews\` — the **fragment** (a specific section within the page to jump to)`,
    mcqs: [
      { q: "Default port for HTTPS is:", options: ["80", "443", "21", "25"], answer: 1 },
      { q: "Which is a web browser engine?", options: ["Apache", "Blink", "MySQL", "PostgreSQL"], answer: 1 },
      { q: "In a URL, the part after '?' is the:", options: ["Fragment", "Path", "Query string", "Scheme"], answer: 2 },
      { q: "HTTP/3 runs on top of:", options: ["TCP", "UDP (QUIC)", "ICMP", "SCTP"], answer: 1 },
      { q: "A web portal differs from a website by being:", options: ["Always public", "An aggregated, personalised access point", "Faster", "Hosted on cloud only"], answer: 1 },
      { q: "Which is a JavaScript engine?", options: ["V8", "Nginx", "Tomcat", "Redis"], answer: 0 },
      { q: "WebSocket provides:", options: ["Stateless requests", "Full-duplex over TCP", "Email transport", "DNS lookups"], answer: 1 },
    ],
    fillBlanks: [
      { q: "HTTPS uses TCP port ___.", answer: "443" },
      { q: "The ___ in a URL identifies the protocol.", answer: "scheme" },
      { q: "Chrome's JavaScript engine is called ___.", answer: "V8" },
      { q: "A ___ is a personalised gateway to multiple services.", answer: "portal" },
      { q: "HTTP/3 is built on the ___ transport protocol.", answer: "QUIC" },
    ],
    trueFalse: [
      { q: "A web browser is server software.", answer: false },
      { q: "HTTPS is HTTP over TLS.", answer: true },
      { q: "URLs always include a port.", answer: false },
      { q: "WebSocket supports full-duplex communication.", answer: true },
    ],
    flashcards: [
      { front: "URL", back: "Uniform Resource Locator: scheme://host:port/path?query#fragment" },
      { front: "Web portal", back: "Personalised gateway to services (e.g., student portal)." },
      { front: "HTTPS port", back: "443 (HTTP=80)." },
      { front: "QUIC", back: "UDP-based transport underlying HTTP/3." },
    ],
  },
  {
    id: "servers",
    number: 11,
    title: "Servers",
    summary: "Programs/computers that provide services to clients.",
    content: `## Definition
A **server** is a computer or program that provides services, resources, or data to other computers called **clients**. Think of a server as a helpful assistant sitting in a library: when you (the client) ask for a book, the librarian (server) finds it and gives it to you. Servers are designed to be reliable, available 24/7, and capable of serving many clients simultaneously.

## Types of Servers and What They Do
- **Web Servers** — store website files and deliver them to browsers when people visit. Examples: Apache, Nginx
- **File Servers** — store and share documents, photos, and other files that multiple people need to access
- **Database Servers** — manage organized collections of data and respond to queries (like "show me all customer orders from July")
- **Email Servers** — handle sending and receiving email messages
- **Application Servers** — run business applications and provide services to client software
- **DNS Servers** — convert website names (like "google.com") into IP addresses so your computer can find them

## Why Servers Matter
Servers are essential to how the modern internet and businesses work:
- **Centralization** — one server can serve data to hundreds or thousands of clients, making management easier
- **Backup and Recovery** — important data is stored safely on servers with backup systems
- **Security** — servers can have strong security controls to protect sensitive information
- **Scalability** — organizations can upgrade or add servers as they grow
- **24/7 availability** — servers can run continuously while client computers turn on and off

## Key Characteristics of Good Servers
- **Reliability** — they rarely crash or fail unexpectedly
- **Performance** — they respond quickly even when many people are using them
- **Security** — they have protections against hackers and data loss
- **Maintainability** — they're built so technicians can upgrade them or fix problems`,
    mcqs: [
      { q: "Apache and Nginx are examples of:", options: ["Web servers", "Operating systems", "DBMSs", "Browsers"], answer: 0 },
      { q: "ECC RAM is preferred in servers because it:", options: ["Boosts gaming", "Detects/corrects memory errors", "Reduces cost", "Enables overclocking"], answer: 1 },
      { q: "RAID provides:", options: ["Faster CPUs", "Storage redundancy/performance", "Better cooling", "Cheaper RAM"], answer: 1 },
      { q: "BIND is which kind of server?", options: ["Web", "DNS", "Database", "Game"], answer: 1 },
      { q: "Which is a server disadvantage?", options: ["Centralised control", "Scalability", "Single point of failure", "Backups"], answer: 2 },
      { q: "IPMI is used for:", options: ["Encryption", "Out-of-band management", "Compression", "Web hosting"], answer: 1 },
    ],
    fillBlanks: [
      { q: "A ___ server stores and serves files over a network.", answer: "file" },
      { q: "ECC ___ corrects bit errors in server memory.", answer: "RAM" },
      { q: "RAID 1 provides ___ of disks.", answer: "mirroring" },
      { q: "BIND is a popular ___ server.", answer: "DNS" },
    ],
    trueFalse: [
      { q: "Servers always require GUI.", answer: false },
      { q: "Nginx can act as a reverse proxy.", answer: true },
      { q: "RAID guarantees data backup.", answer: false, explain: "RAID adds redundancy but is not a backup." },
      { q: "Hot-swap drives can be replaced without downtime.", answer: true },
    ],
    flashcards: [
      { front: "Server", back: "System providing services/resources to clients over a network." },
      { front: "ECC RAM", back: "Memory that detects and corrects single-bit errors." },
      { front: "RAID", back: "Redundant Array of Independent Disks — combines disks for redundancy/performance." },
      { front: "Reverse proxy", back: "Server in front of backends that forwards client requests." },
    ],
  },
  {
    id: "ecommerce",
    number: 12,
    title: "E-Commerce",
    summary: "Buying and selling goods/services over electronic networks.",
    content: `## Definition
**E-Commerce** (Electronic Commerce) is buying, selling, and exchanging goods and services over the internet and digital networks. Instead of visiting a physical store, customers browse products online, place orders, pay digitally, and receive their purchases—all through websites and apps. E-commerce has revolutionized retail by making shopping available 24/7 from anywhere, and by allowing even small businesses to reach customers worldwide.

## Types of E-Commerce Models
Different e-commerce arrangements serve different purposes:

**Business-to-Business (B2B)** — when businesses sell products or services to other businesses. For example:
- A manufacturer selling raw materials to factories
- A wholesale distributor selling inventory to retailers
- A software company providing tools that other businesses use in their operations
B2B transactions are usually in large volumes and high values, and involve long-term contracts.

**Business-to-Consumer (B2C)** — when businesses sell directly to regular customers. Examples:
- Amazon selling books and electronics to individuals
- Nike's online store selling shoes to customers
- Streaming services like Netflix selling entertainment subscriptions
B2C involves many smaller transactions but much higher sales volume.

**Consumer-to-Consumer (C2C)** — when individuals sell products or services to other individuals, usually through a marketplace. Examples:
- eBay for used goods
- Etsy for handmade crafts
- Facebook Marketplace for local sales

## Why E-Commerce Matters
E-commerce has transformed shopping, allowing businesses to:
- Reach customers anywhere in the world, not just nearby
- Operate 24/7 without needing physical stores
- Collect data about what customers want
- Reduce costs by not needing expensive retail locations
- Sell products directly to consumers without middlemen`,
    mcqs: [
      { q: "Amazon's main e-commerce model is:", options: ["B2B", "B2C", "C2C", "G2C"], answer: 1 },
      { q: "Alibaba primarily operates as:", options: ["B2C", "B2B", "C2B", "G2B"], answer: 1 },
      { q: "Which standard governs payment card data security?", options: ["ISO 9001", "PCI-DSS", "GDPR", "HIPAA"], answer: 1 },
      { q: "EDI stands for:", options: ["Electronic Data Interchange", "Encrypted Direct Internet", "Encoded Digital Index", "Enterprise Data Integration"], answer: 0 },
      { q: "Which is a payment gateway?", options: ["Apache", "Stripe", "PostgreSQL", "Nginx"], answer: 1 },
      { q: "C2C is best illustrated by:", options: ["Amazon", "eBay", "SAP Ariba", "Walmart"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Selling between two businesses is called ___.", answer: "B2B" },
      { q: "PCI- ___ is the security standard for card data.", answer: "DSS" },
      { q: "EDI is the electronic exchange of business ___.", answer: "documents" },
      { q: "A ___ gateway processes online payments.", answer: "payment" },
    ],
    trueFalse: [
      { q: "B2C transactions usually have lower per-order value than B2B.", answer: true },
      { q: "PCI-DSS applies to organisations handling cardholder data.", answer: true },
      { q: "EDI is used mainly in C2C marketplaces.", answer: false },
      { q: "HTTPS is recommended for e-commerce sites.", answer: true },
    ],
    flashcards: [
      { front: "B2B", back: "Business sells to another business." },
      { front: "B2C", back: "Business sells to end consumers." },
      { front: "PCI-DSS", back: "Payment Card Industry Data Security Standard." },
      { front: "EDI", back: "Electronic Data Interchange — structured B2B document exchange." },
    ],
  },
  {
    id: "cyber-security",
    number: 13,
    title: "Cyber Security",
    summary: "Threats: snooping, spamming, spoofing, phishing, pharming, cookies, spyware, malware.",
    content: `## Understanding Cyber Security Threats

**Snooping** (also called eavesdropping) is when someone intercepts and reads messages or data that weren't meant for them. Imagine if a neighbor could listen to your phone calls—that's snooping on a network. Hackers use special software to capture unencrypted data traveling over networks. Protection: encrypt data using SSL/HTTPS, use VPNs.

**Spamming** is sending massive amounts of unwanted messages, usually through email or social media. While often just annoying advertising, spam can also be used to distribute malware or conduct phishing attacks. Modern email systems filter spam automatically.

**Spoofing** is when someone falsely claims to be someone else by forging an address or identity. Examples:
- Email spoofing: sending email that looks like it's from your bank but is actually from a criminal
- IP spoofing: forging the sender's IP address to hide their true location
- Website spoofing: creating a fake website that looks identical to a real one

**Phishing** is social engineering via email or messages to trick people into revealing passwords or sensitive information. A phishing email might claim to be from your bank or a service you use, ask you to "verify your account," and take you to a fake website where you unknowingly enter your credentials. **Spear phishing** targets specific individuals with personalized messages, making it more convincing.

**Pharming** is similar to phishing but uses technical tricks instead of social engineering. It redirects traffic from a legitimate website to a fraudulent one by:
- Poisoning the DNS system (making legitimate domain names point to fake addresses)
- Modifying the computer's hosts file
- Hackers must be very skilled; harder to detect because the URL might look correct

**Cookies** are small files stored on your computer by websites you visit. They can be helpful (remembering your login) but privacy-concerning when used to track your behavior across many websites. Third-party cookies let advertisers follow you across the web.

**Spyware** is malicious software that secretly watches your activity—logging keystrokes, recording what sites you visit, tracking your location. Unlike viruses, you might not know it's installed.

**Malware** is the umbrella term for all malicious software:
- **Viruses** — attach to files and spread when you run them
- **Worms** — self-replicate and spread through networks without needing a host file
- **Trojans** — disguised as legitimate software but contain hidden malicious code
- **Ransomware** — encrypts your files and demands payment to unlock them
- **Rootkits** — hide deep in the operating system, giving attackers full control`,
    mcqs: [
      { q: "Which attack redirects users via DNS poisoning?", options: ["Phishing", "Pharming", "Spamming", "Snooping"], answer: 1 },
      { q: "A self-propagating malware is a:", options: ["Trojan", "Worm", "Rootkit", "Cookie"], answer: 1 },
      { q: "Spear phishing differs from phishing because it is:", options: ["Mass-mailed", "Targeted at specific individuals", "Always via SMS", "Always voice-based"], answer: 1 },
      { q: "ARP spoofing typically enables:", options: ["DNS hijacking", "MITM on a LAN", "DDoS on routers", "Ransom payments"], answer: 1 },
      { q: "Which is NOT a type of malware?", options: ["Virus", "Worm", "Cookie", "Ransomware"], answer: 2 },
      { q: "DKIM/SPF/DMARC mainly mitigate:", options: ["Phishing & email spoofing", "Pharming", "Ransomware encryption", "Worm propagation"], answer: 0 },
      { q: "Spyware primarily:", options: ["Encrypts disks", "Gathers info covertly", "Mines crypto", "Sends spam"], answer: 1 },
    ],
    fillBlanks: [
      { q: "Encryption mitigates the threat of ___ on a network.", answer: "snooping", alt: ["eavesdropping"] },
      { q: "___ attacks impersonate a trusted source address.", answer: "Spoofing" },
      { q: "Ransomware ___ files and demands payment.", answer: "encrypts" },
      { q: "DNS poisoning enables ___ attacks.", answer: "pharming" },
      { q: "A ___ is a self-replicating malware that spreads over networks.", answer: "worm" },
    ],
    trueFalse: [
      { q: "Cookies themselves are malware.", answer: false },
      { q: "MFA helps reduce phishing damage.", answer: true },
      { q: "A trojan disguises itself as legitimate software.", answer: true },
      { q: "Spamming is always illegal everywhere.", answer: false },
      { q: "Pharming usually requires the user to click a malicious link.", answer: false },
    ],
    flashcards: [
      { front: "Phishing", back: "Social-engineering via fake messages to steal credentials." },
      { front: "Pharming", back: "Redirects via DNS/hosts poisoning to fraudulent sites." },
      { front: "Spoofing", back: "Forging a source address to impersonate." },
      { front: "Ransomware", back: "Malware that encrypts data and demands ransom." },
      { front: "Spyware", back: "Covertly collects user info." },
    ],
  },
  {
    id: "modern-tech",
    number: 14,
    title: "Modern Technologies: Big Data, Cloud, AI",
    summary: "Three pillars driving the contemporary digital economy.",
    content: `## Three Transformative Technologies

**Big Data** — refers to datasets that are so large and complex that traditional tools and methods can't process them effectively. Imagine trying to analyze billions of social media posts, millions of sensor readings from smart cities, or enormous health records. Big Data characterizes modern information through:
- **Volume** — massive amounts of data (petabytes, exabytes)
- **Velocity** — data arriving very quickly, in real-time streams
- **Variety** — data comes in many forms: text, images, videos, sensor data, etc.
- **Veracity** — the quality is uncertain; data can be messy or incomplete
- **Value** — the goal is extracting useful insights from all this data

Organizations use specialized tools and techniques to extract valuable patterns and insights from Big Data, leading to better decisions in business, science, and public health.

**Cloud Computing** — instead of buying and maintaining your own computers and servers, you rent computing power from a company that operates massive data centers. It's like renting an office versus building your own building. Cloud services include:
- **Storage** — save files online instead of on your device
- **Processing power** — run heavy calculations on remote servers
- **Applications** — use software online without installing it locally (Gmail, Dropbox, Microsoft 365)

Benefits of cloud computing: you only pay for what you use, you can scale up or down quickly, automatic updates and maintenance, access from anywhere.

**Artificial Intelligence (AI)** — technology that enables computers to perform tasks that normally require human intelligence. AI includes:
- **Machine Learning** — computers learning patterns from data without being explicitly programmed. For example: learning to recognize faces, detect spam email, or predict customer preferences
- **Natural Language Processing** — understanding and generating human language, enabling chatbots and voice assistants
- **Computer Vision** — understanding and analyzing images and videos
- **Robotics** — AI controlling physical machines

AI is already everywhere: recommendation systems suggesting movies, voice assistants like Alexa, medical diagnosis tools, autonomous vehicles, and content moderation. The key insight is that instead of programming every rule, you let AI learn the patterns from examples.`,
    mcqs: [
      { q: "Which is NOT one of the classic Vs of Big Data?", options: ["Volume", "Velocity", "Vibration", "Variety"], answer: 2 },
      { q: "EC2 is an example of:", options: ["IaaS", "PaaS", "SaaS", "FaaS only"], answer: 0 },
      { q: "Gmail is a cloud:", options: ["IaaS", "PaaS", "SaaS", "DBaaS"], answer: 2 },
      { q: "Transformers are mostly used in:", options: ["Computer vision only", "NLP / LLMs", "Cooling systems", "Storage compression"], answer: 1 },
      { q: "MapReduce is associated with:", options: ["Hadoop", "Postgres", "TensorFlow", "Kubernetes"], answer: 0 },
      { q: "A reinforcement learning agent learns by:", options: ["Memorising", "Trial-and-error rewards", "Static rules", "Manual labels only"], answer: 1 },
      { q: "Spark is best described as:", options: ["A distributed compute engine", "A web server", "A NoSQL DB", "An OS"], answer: 0 },
    ],
    fillBlanks: [
      { q: "The 5 Vs of Big Data include Volume, Velocity, Variety, Veracity and ___.", answer: "Value" },
      { q: "AWS EC2 belongs to the ___ service model.", answer: "IaaS" },
      { q: "CNNs are most commonly used in computer ___.", answer: "vision" },
      { q: "LLMs are based on the ___ neural network architecture.", answer: "Transformer" },
    ],
    trueFalse: [
      { q: "Cloud computing requires owning physical servers.", answer: false },
      { q: "Big Data systems often handle unstructured data.", answer: true },
      { q: "Deep learning is a subset of machine learning.", answer: true },
      { q: "PaaS provides full applications to end users.", answer: false },
    ],
    flashcards: [
      { front: "Big Data 5 Vs", back: "Volume, Velocity, Variety, Veracity, Value." },
      { front: "IaaS / PaaS / SaaS", back: "Infrastructure / Platform / Software as a Service." },
      { front: "Machine Learning", back: "Algorithms that learn patterns from data." },
      { front: "LLM", back: "Large Language Model — Transformer-based generative model for text." },
    ],
  },
  {
    id: "software",
    number: 15,
    title: "Software (System & Application)",
    summary: "OS, system types, server OS, application software, utilities, drivers.",
    content: `## System Software
System software is the foundation that allows your computer to work and run applications. It manages the hardware and provides basic services that other programs depend on.

### Operating System (OS)
An **Operating System** is the master control program that manages everything on your computer. Think of it as the conductor of an orchestra—it coordinates all the different parts working together. Key responsibilities:
- **Managing processes** — runs and controls programs, switches between them smoothly
- **Managing memory** — allocates memory to different programs so they don't interfere with each other
- **Managing files** — organizes and controls access to documents and data
- **Controlling hardware** — communicates with printers, monitors, keyboards, and other devices
- **Providing security** — controls who can access what and protects against unauthorized use
- **Providing a user interface** — gives you a way to interact with the computer (menus, windows, keyboard shortcuts)

**Booting** (starting up the computer) is a fascinating process:
1. The computer performs a **POST** (Power-On Self Test) to check if hardware is working
2. The **BIOS/UEFI** firmware loads, which is the most basic software
3. The **bootloader** finds the OS and loads it into memory
4. The OS **kernel** takes control and sets everything up
5. The OS launches system services and eventually gives you the login screen

## Types of Operating Systems
- **Standalone systems** — single user, no networking (kiosk, gaming console)
- **Network systems** — multi-user, designed for shared resources (corporate workstations, servers)
- **Embedded systems** — built into devices, controls specific functions (smartphone OS, car computer, microwave control)

## Server Operating Systems
Organizations use special operating systems designed for servers:
- **Windows Server** — robust system for business environments, integrated with Microsoft products
- **Linux/UNIX** — open-source, powerful, widely used for web servers and cloud infrastructure

## Application Software
Software that solves specific problems for users:
- **Productivity** — word processors, spreadsheets, presentation software
- **Creative** — photo editors, video editing, music production
- **Communication** — email, chat, video conferencing
- **Business** — accounting, project management, inventory management
- **Entertainment** — games, streaming apps, media players

## Utility Programs
Helper programs that maintain and optimize your system:
- **Antivirus** — protects against malware
- **Backup tools** — saves copies of important files
- **Disk cleanup** — removes unnecessary files to free space
- **Compression** — makes files smaller for storage or sharing

## Device Drivers
Special software that allows the OS to communicate with specific hardware. Without drivers, devices like printers and graphics cards wouldn't work. When you update your GPU driver or printer driver, you're updating this communication software.`,
    mcqs: [
      { q: "Which is NOT a function of an OS?", options: ["Memory management", "Process scheduling", "Compiling source code", "I/O management"], answer: 2 },
      { q: "GRUB is a:", options: ["Kernel", "Bootloader", "Shell", "Driver"], answer: 1 },
      { q: "An RTOS is most common in:", options: ["Web hosting", "Embedded systems", "Office PCs", "Mainframes"], answer: 1 },
      { q: "Which is application software?", options: ["Linux kernel", "Device driver", "MS Word", "BIOS"], answer: 2 },
      { q: "Active Directory is a feature of:", options: ["Linux", "Windows Server", "macOS Server", "FreeBSD"], answer: 1 },
      { q: "A ___ converts OS calls into hardware-specific commands.", options: ["Compiler", "Driver", "Linker", "Shell"], answer: 1 },
      { q: "Which is a utility program?", options: ["Photoshop", "7-Zip", "MS Excel", "Chrome"], answer: 1 },
    ],
    fillBlanks: [
      { q: "The process that loads the kernel after BIOS/UEFI is the ___.", answer: "bootloader" },
      { q: "An ___ is special-purpose software dedicated to a hardware device.", answer: "embedded system", alt: ["embedded"] },
      { q: "Active Directory is part of ___ Server.", answer: "Windows" },
      { q: "Device ___ allow the OS to talk to hardware.", answer: "drivers" },
      { q: "Antivirus is an example of a ___ program.", answer: "utility" },
    ],
    trueFalse: [
      { q: "BIOS/UEFI is loaded after the OS kernel.", answer: false },
      { q: "Linux is widely used as a server OS.", answer: true },
      { q: "MS Word is system software.", answer: false },
      { q: "An RTOS guarantees deterministic response times.", answer: true },
      { q: "Device drivers are part of application software.", answer: false },
    ],
    flashcards: [
      { front: "OS", back: "Manages hardware/software resources; provides process, memory, I/O, file services." },
      { front: "Bootloader", back: "Loads the OS kernel into memory at startup." },
      { front: "Driver", back: "Low-level software interfacing OS with a hardware device." },
      { front: "Utility", back: "Helper software for maintenance (antivirus, defrag, compression)." },
      { front: "Embedded system", back: "Dedicated computer inside a larger device." },
    ],
  },
  {
    id: "app-utility-software",
    number: 16,
    title: "Application & Utility Software (Recap)",
    summary: "Distinguishing application from system software.",
    content: `## Understanding the Difference
All software falls into two broad categories based on purpose and who uses it:

**Application Software** — this is software that solves specific problems for users. It's what most people think of as "programs." Examples:
- **Productivity tools** — word processors (Microsoft Word), spreadsheets (Excel), presentation software (PowerPoint) for working
- **Creative tools** — photo editors (Photoshop), video editing software (Adobe Premiere), 3D modeling (Blender)
- **Communication** — email clients (Outlook), messaging apps, video conferencing (Zoom)
- **Entertainment** — games, movie streaming services, music apps
- **Specialized software** — medical software for hospitals, design software for architects, accounting software for businesses

**System Software** — this is software that manages the computer's resources and provides a platform for applications. It runs "behind the scenes." Examples:
- **Operating Systems** — Windows, macOS, Linux, iOS (the core software that controls the computer)
- **Device Drivers** — software that lets the OS communicate with hardware like printers or graphics cards
- **Utility Software** — tools that help maintain and optimize the system like antivirus programs, backup tools, disk cleanup utilities

## The Relationship
System software is like the foundation and support structure of a building, while application software is like the specific rooms and services inside. Without system software, application software can't run. You need the OS and drivers working correctly before you can use Word or play a game.

## Key Difference
| Aspect | Application Software | System Software |
|---|---|---|
| Purpose | Solves user problems | Manages hardware and system |
| User awareness | Users directly use it | Often runs in background |
| Example | Microsoft Word, Chrome | Windows, device drivers, antivirus |
| What happens without it? | Specific task can't be done | Nothing runs at all |`,
    mcqs: [
      { q: "Which is system software?", options: ["MS Excel", "Linux kernel", "Photoshop", "Slack"], answer: 1 },
      { q: "AutoCAD is a type of:", options: ["Driver", "OS", "Application software", "Firmware"], answer: 2 },
      { q: "Antivirus is best classified as:", options: ["Utility (system) software", "Game", "OS", "Driver"], answer: 0 },
      { q: "Which cannot run without an OS?", options: ["Firmware", "Application software", "Bootloader", "POST routine"], answer: 1 },
      { q: "BIOS is:", options: ["Application", "Firmware", "Driver only", "Utility"], answer: 1 },
    ],
    fillBlanks: [
      { q: "BIOS is a form of ___.", answer: "firmware" },
      { q: "MS PowerPoint is ___ software.", answer: "application" },
      { q: "Antivirus and defrag tools are ___ programs.", answer: "utility" },
    ],
    trueFalse: [
      { q: "Application software depends on system software to run.", answer: true },
      { q: "Drivers are application software.", answer: false },
      { q: "An OS is system software.", answer: true },
    ],
    flashcards: [
      { front: "Application software", back: "Software for end-user tasks." },
      { front: "System software", back: "Software managing hardware / supporting apps." },
      { front: "Firmware", back: "Low-level software embedded in hardware." },
    ],
  },
  {
    id: "database",
    number: 17,
    title: "Database, Data Types & DBMS",
    summary: "Database systems, types, and management software.",
    content: `## Understanding Databases

**A database** is an organized, structured collection of related data stored on a computer. Instead of storing information in scattered files (like spreadsheets), a database organizes everything logically so information can be easily found, updated, and analyzed. Think of a database like a well-organized filing system—instead of scattered papers, everything is arranged with clear structure and relationships.

## Types of Databases
Different database types serve different purposes:

**Relational Databases** — organize data into tables with rows and columns, like spreadsheets. Examples: MySQL, PostgreSQL, Microsoft SQL Server. Best for: business data with clear relationships (customers, orders, inventory).

**NoSQL Databases** — more flexible, designed for different data patterns:
- **Document databases** (MongoDB) — store data as document-like objects, good for flexible data
- **Key-value stores** (Redis) — simple lookup tables, extremely fast
- **Graph databases** (Neo4j) — excellent for showing relationships (social networks, recommendation systems)
- **Time-series databases** (InfluxDB) — specialized for data that changes over time (sensor readings, stock prices)

## Database Management System (DBMS)
A **DBMS** is the software that controls a database. Like an office manager overseeing files, a DBMS:
- **Creates databases** — sets up the structure
- **Stores and retrieves data** — saves information and finds it when needed
- **Manages updates** — handles changes to data
- **Controls access** — decides who can see what data
- **Maintains consistency** — ensures data stays accurate and reliable
- **Handles failures** — protects data if something goes wrong

## Why Databases Matter
Instead of managing scattered files, databases allow organizations to:
- **Find information quickly** — searching millions of records takes seconds
- **Keep data accurate** — prevents duplicate or conflicting information
- **Share data safely** — multiple people can work with the same information
- **Protect privacy** — controls who sees sensitive information
- **Analyze patterns** — extract insights from vast amounts of data`,
    mcqs: [
      { q: "Which is a NoSQL document database?", options: ["MySQL", "MongoDB", "Oracle", "SQL Server"], answer: 1 },
      { q: "ACID stands for:", options: ["Atomic, Concurrent, Isolated, Durable", "Atomicity, Consistency, Isolation, Durability", "Async, Cached, Indexed, Distributed", "All Concurrent ID"], answer: 1 },
      { q: "DDL commands include:", options: ["SELECT", "CREATE", "INSERT", "UPDATE"], answer: 1 },
      { q: "Which DB type is best for graph relationships?", options: ["Key-Value", "Document", "Graph", "Column-family"], answer: 2 },
      { q: "MVCC stands for:", options: ["Multi-Version Concurrency Control", "Most Valuable Concurrent Cache", "Memory Volatile Concurrency Control", "Multi-View Cache Cluster"], answer: 0 },
      { q: "Cassandra is which DB type?", options: ["Document", "Column-family", "Graph", "RDBMS"], answer: 1 },
      { q: "Which type stores millisecond-resolution metrics best?", options: ["Time-series", "Graph", "RDBMS only", "Object-oriented"], answer: 0 },
    ],
    fillBlanks: [
      { q: "MySQL and PostgreSQL are ___ databases.", answer: "relational" },
      { q: "ACID's 'D' stands for ___.", answer: "Durability" },
      { q: "MongoDB is a ___ database.", answer: "document" },
      { q: "DDL stands for Data ___ Language.", answer: "Definition" },
      { q: "MVCC is short for Multi-Version ___ Control.", answer: "Concurrency" },
    ],
    trueFalse: [
      { q: "All NoSQL databases are non-relational.", answer: true },
      { q: "SELECT is a DDL command.", answer: false },
      { q: "ACID guarantees are typical of relational databases.", answer: true },
      { q: "Redis is a key-value store.", answer: true },
      { q: "Graph DBs are optimised for adjacency traversal.", answer: true },
    ],
    flashcards: [
      { front: "DBMS", back: "Software for defining, querying, and managing databases." },
      { front: "ACID", back: "Atomicity, Consistency, Isolation, Durability." },
      { front: "DDL vs DML", back: "DDL defines schema (CREATE); DML manipulates data (SELECT/INSERT)." },
      { front: "NoSQL families", back: "Document, Key-Value, Column-family, Graph." },
    ],
  },
  {
    id: "transitive-network",
    number: 18,
    title: "Transitive vs Intransitive Networks",
    summary: "Network reachability properties.",
    content: `## Network Architecture Patterns

**Transitive Network** — a network where information can flow through multiple "hops" or intermediate points. If Computer A can reach Computer B, and B can reach Computer C, then A can reach C by going through B. Most of the internet works this way—routers forward messages between networks automatically. This is convenient but creates security risks: if one computer is compromised, an attacker might reach others through it.

**Intransitive Network** — a network deliberately designed to prevent this automatic flow-through. A can talk to B, and B can talk to C, but A cannot reach C through B. This is done deliberately for security. For example:
- A **DMZ (Demilitarized Zone)** is an intransitive network area: public-facing servers can communicate with the DMZ but cannot directly access internal company networks
- **Network segmentation** in hospitals separates patient data networks from administrative networks
- **VPN gateways** act as checkpoints that allow approved traffic but block everything else

The choice between transitive and intransitive networks is a trade-off: transitive networks are easier to manage, but intransitive networks are more secure. Most modern organizations use a mix—some parts are transitive (internal) and others are intransitive (between trust zones).`,
    mcqs: [
      { q: "Which property defines a transitive network?", options: ["Encryption everywhere", "If A→B and B→C then A→C", "All hosts are servers", "Only IPv6 used"], answer: 1 },
      { q: "AWS VPC peering is:", options: ["Transitive", "Non-transitive", "Always public", "Layer-2 only"], answer: 1 },
      { q: "Hub-and-spoke topologies are typically:", options: ["Transitive", "Intransitive between spokes", "Mesh", "Bus only"], answer: 1 },
      { q: "Intransitive networks help mainly with:", options: ["Bandwidth boost", "Security & segmentation", "Compression", "Faster routing"], answer: 1 },
      { q: "AWS Transit Gateway introduces:", options: ["Forced transitivity", "Controlled transitivity", "Full intransitivity", "VPN tunnelling only"], answer: 1 },
    ],
    fillBlanks: [
      { q: "If A reaches B and B reaches C and A also reaches C, the network is ___.", answer: "transitive" },
      { q: "VPC peering in AWS is ___ -transitive.", answer: "non" },
      { q: "Intransitive segmentation reduces ___ movement of attackers.", answer: "lateral" },
    ],
    trueFalse: [
      { q: "Intransitive networks improve security by isolation.", answer: true },
      { q: "All IP networks are intransitive by default.", answer: false },
      { q: "Hub-and-spoke without inter-spoke routing is intransitive.", answer: true },
    ],
    flashcards: [
      { front: "Transitive network", back: "A→B and B→C implies A→C." },
      { front: "Intransitive network", back: "Reachability does not compose; controlled segmentation." },
      { front: "VPC peering", back: "Non-transitive interconnection between VPCs." },
    ],
  },
  {
    id: "networks",
    number: 19,
    title: "Networks: Types & Trade-offs",
    summary: "LAN, MAN, WAN, PAN, plus advantages and disadvantages.",
    content: `## What is a Computer Network?
A **computer network** is a group of computers and devices connected together so they can share information and resources. Networks are essential to modern life—without them, we couldn't use the internet, send email, access cloud services, or play online games.

## Networks by Size and Distance
Networks are classified by how geographically spread out they are:

**PAN (Personal Area Network)** — the smallest, covering just a few meters around you. Examples:
- Bluetooth connecting your phone to wireless earbuds
- Your laptop connecting to your wireless mouse and keyboard
- A smartwatch syncing with your phone

**LAN (Local Area Network)** — covers a building or campus. Examples:
- A school's computer lab where all computers in one room are connected
- An office building where all computers connect through a central switch
- A home Wi-Fi network connecting your devices

**MAN (Metropolitan Area Network)** — covers a city or large area. Example:
- A city's public transportation system connecting all buses and trains
- A cable company's network serving an entire metropolitan area

**WAN (Wide Area Network)** — spans cities, countries, or the entire world. Example:
- The internet is a WAN
- A multinational corporation's network connecting offices across continents

## Why Networks Matter
Networks fundamentally changed how organizations and people work:
- **Sharing resources** — one expensive printer can serve dozens of computers
- **Sharing information** — everyone accesses the same files and databases
- **Communication** — email, video calls, instant messaging
- **Efficiency** — centralized backups, standardized security policies
- **Scalability** — organizations can grow by adding more connected computers

## Network Challenges
- **Security risks** — more connections mean more potential entry points for attackers
- **Complexity** — managing hundreds of devices requires skilled technicians
- **Cost** — building and maintaining networks requires significant investment
- **Reliability** — if the central server fails, services might be disrupted`,
    mcqs: [
      { q: "Which network spans the largest geographic area?", options: ["LAN", "MAN", "PAN", "WAN"], answer: 3 },
      { q: "Bluetooth is associated with:", options: ["WAN", "PAN", "MAN", "SAN"], answer: 1 },
      { q: "Which is a storage-focused network?", options: ["LAN", "PAN", "SAN", "CAN"], answer: 2 },
      { q: "A star topology connects all nodes to a:", options: ["Ring", "Central switch/hub", "Bus", "Mesh peer"], answer: 1 },
      { q: "Which is NOT an advantage of networks?", options: ["Resource sharing", "Centralised management", "Single point of failure", "Communication"], answer: 2 },
      { q: "MPLS is most used in:", options: ["PAN", "LAN", "WAN", "SAN"], answer: 2 },
      { q: "Which topology has the most direct paths between nodes?", options: ["Bus", "Star", "Ring", "Mesh"], answer: 3 },
    ],
    fillBlanks: [
      { q: "A network covering a city is called a ___.", answer: "MAN" },
      { q: "Fibre Channel is commonly used in ___.", answer: "SAN" },
      { q: "Most modern LANs use the ___ topology.", answer: "star" },
      { q: "A WAN can span ___ or globally.", answer: "countries", alt: ["country"] },
    ],
    trueFalse: [
      { q: "PAN is bigger than WAN.", answer: false },
      { q: "Star topology depends on a central node.", answer: true },
      { q: "Networks always reduce security risk.", answer: false },
      { q: "SAN is optimised for block-level storage access.", answer: true },
    ],
    flashcards: [
      { front: "LAN", back: "Local Area Network — building/campus scale." },
      { front: "WAN", back: "Wide Area Network — country/global scale (e.g., Internet)." },
      { front: "MAN", back: "Metropolitan Area Network — city-wide." },
      { front: "PAN", back: "Personal Area Network — a few metres (Bluetooth)." },
      { front: "SAN", back: "Storage Area Network — high-speed block storage." },
    ],
  },
  {
    id: "hardware",
    number: 20,
    title: "Hardware: Transistors, ICs, Miniaturisation",
    summary: "From discrete components to modern microprocessors.",
    content: `## The Building Blocks of Computing

**Hardware** — the physical, tangible components of a computer that you can actually touch and see. Hardware includes the main processor (CPU), memory chips, storage drives, motherboard circuits, power supplies, cooling systems, and all peripheral devices like keyboards, monitors, and printers. Hardware is inert metal, silicon, and plastic until software gives it instructions on what to do. The relationship between hardware and software is like the relationship between a blank canvas and paint—the canvas (hardware) is useless without something to display, but the paint (software) needs the canvas to appear on.

**Transistors** — the tiny fundamental building blocks of all modern electronics and computation. A transistor is essentially a microscopic electronic switch that can be turned on (1) or off (0). This binary switching is the basis of everything computers do. The remarkable thing about transistors is their incredible miniaturization: modern computer chips contain **billions of transistors** in a space smaller than your fingernail, all working in coordinated patterns to store and process information. A smartphone chip might have 10 billion transistors, each smaller than a virus.

**Integrated Circuits (ICs or chips)** — devices that combine billions of transistors, along with resistors, capacitors, and connectors, all etched onto a single tiny piece of silicon called a "wafer." Instead of building computers by individually wiring thousands of separate components (like computers in the 1950s), we can now pack an entire computer's worth of circuitry into an area the size of a postage stamp. This integration allows modern devices to be tiny, portable, cheap, and powerful. The progression of integration density has been remarkable:
- **1960s** — 100s of transistors per chip
- **1980s** — 100,000s of transistors per chip  
- **2000s** — billions of transistors per chip
- **Today** — 50+ billion transistors per chip in the most advanced processors

**Miniaturization** — the ongoing trend of making transistors smaller and packing more of them into the same physical space. This is one of the most important drivers of technological progress because smaller transistors have dramatic advantages:
- **Speed** — electrons have shorter distances to travel, so operations happen faster
- **Power efficiency** — less energy is wasted, so devices need smaller batteries and produce less heat
- **Cost** — you can fabricate more chips from each silicon wafer, reducing cost per chip
- **Capability** — more transistors in the same space means more computing power in smaller devices

This miniaturization has historically followed **Moore's Law**: the number of transistors on a chip roughly doubles every two years. This trend has held true for over 50 years and is a major reason why your smartphone today is more powerful than supercomputers from the 1990s. However, the trend is approaching physical limits—you can't make transistors much smaller than a few atoms.`,
    mcqs: [
      { q: "Which device is the basic switching element of a CPU?", options: ["Resistor", "Transistor", "Capacitor", "Inductor"], answer: 1 },
      { q: "VLSI typically refers to ICs with:", options: ["<100 transistors", ">10,000 transistors", "Only optical components", "Mechanical relays"], answer: 1 },
      { q: "Moore's Law predicts transistor count:", options: ["Halves yearly", "Doubles ~every 2 years", "Stays constant", "Triples every 5 years"], answer: 1 },
      { q: "MOSFET stands for:", options: ["Metal-Oxide-Semiconductor Field-Effect Transistor", "Multi-Output Standard FET", "Modular Op-amp Semi FET", "Memory-Optimised Switching FET"], answer: 0 },
      { q: "Photolithography is part of:", options: ["Software design", "IC manufacturing", "Cloud deployment", "Database tuning"], answer: 1 },
      { q: "Which is NOT a hardware component?", options: ["Motherboard", "PSU", "Operating system", "GPU"], answer: 2 },
    ],
    fillBlanks: [
      { q: "An IC integrates many ___ on a single chip.", answer: "transistors" },
      { q: "ULSI denotes ICs with over ___ million transistors.", answer: "1" },
      { q: "Modern leading-edge process nodes are around ___ nm.", answer: "3" },
      { q: "Moore's Law refers to the doubling of transistor ___.", answer: "count" },
    ],
    trueFalse: [
      { q: "An OS is a hardware component.", answer: false },
      { q: "Smaller transistors generally allow lower power per operation.", answer: true },
      { q: "VLSI chips contain fewer than 100 transistors.", answer: false },
      { q: "TSMC is a chip manufacturer.", answer: true },
    ],
    flashcards: [
      { front: "Transistor", back: "Semiconductor switch; building block of digital logic." },
      { front: "IC", back: "Integrated Circuit — many transistors on one chip." },
      { front: "VLSI", back: "Very Large Scale Integration (>10,000 transistors)." },
      { front: "Moore's Law", back: "Transistor count per chip doubles roughly every 2 years." },
    ],
  },
  {
    id: "binary-coding",
    number: 21,
    title: "Binary & Coding Schemes",
    summary: "How characters and data are encoded in binary.",
    content: `## How Computers Represent Information

**Binary** — computers ultimately work with just two values: 0 and 1. Everything in a computer—whether it's text, images, sound, or instructions—is represented using combinations of these two digits. A **bit** (binary digit) is the smallest unit of information: either 0 or 1. By combining bits:
- 2 bits can represent 4 different values (00, 01, 10, 11)
- 3 bits can represent 8 values
- 8 bits (called a **byte**) can represent 256 values

Why binary? Because it's simple for electronics—voltage either on (1) or off (0). This simplicity makes electronics reliable and fast.

## Character Representation: How Computers Store Text

Just as computers represent numbers in binary, they represent letters and characters using codes. Over time, different schemes emerged:

**ASCII (American Standard Code for Information Exchange)** — one of the earliest character encoding standards. Using 7 bits, it can represent 128 characters: uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), punctuation, and control codes. It's simple but only covers English.

**Extended ASCII** — expanded ASCII to 8 bits, allowing 256 characters, including accented letters for European languages.

**Unicode** — a universal character encoding that can represent virtually every written language in the world—from English to Chinese to Arabic to emoji! Unicode is conceptually 32 bits per character, allowing millions of different symbols. Because this is a lot of data, different storage formats were created:
- **UTF-8** — uses 1 byte for common English characters but up to 4 bytes for less common symbols. Very efficient for English text.
- **UTF-16** — uses 2-4 bytes; commonly used internally by Windows and Java
- **UTF-32** — always uses 4 bytes; simple but wasteful for ASCII

## Why Multiple Schemes?
Historically, each region and organization developed its own character codes. As computers became global, the need for universal standards led to Unicode. The different UTF formats (UTF-8, UTF-16, UTF-32) are just different ways of storing the same Unicode information, trading between efficiency and simplicity.`,
    mcqs: [
      { q: "How many bits in a byte?", options: ["4", "6", "8", "16"], answer: 2 },
      { q: "Standard ASCII uses how many bits per character?", options: ["6", "7", "8", "16"], answer: 1 },
      { q: "Which is the dominant character encoding on the web?", options: ["UTF-8", "EBCDIC", "UTF-32", "ISO-8859-1"], answer: 0 },
      { q: "Two's complement is used to represent:", options: ["Floating-point", "Signed integers", "Strings", "DNS addresses"], answer: 1 },
      { q: "Hex base is:", options: ["8", "10", "16", "32"], answer: 2 },
      { q: "EBCDIC was developed by:", options: ["Apple", "IBM", "Google", "Microsoft"], answer: 1 },
      { q: "UTF-8 is:", options: ["Fixed 1 byte", "Fixed 2 bytes", "Variable 1–4 bytes", "Always 4 bytes"], answer: 2 },
    ],
    fillBlanks: [
      { q: "A byte contains ___ bits.", answer: "8" },
      { q: "ASCII originally used ___ bits per character.", answer: "7" },
      { q: "The web standard Unicode encoding is UTF- ___.", answer: "8" },
      { q: "Hexadecimal is base ___.", answer: "16" },
      { q: "Signed integers commonly use two's ___ representation.", answer: "complement" },
    ],
    trueFalse: [
      { q: "Unicode supports virtually all world scripts.", answer: true },
      { q: "ASCII can represent Chinese characters directly.", answer: false },
      { q: "EBCDIC is mainly an IBM mainframe encoding.", answer: true },
      { q: "UTF-32 uses 4 bytes per code point.", answer: true },
    ],
    flashcards: [
      { front: "Bit", back: "Smallest unit of data; 0 or 1." },
      { front: "ASCII", back: "7-bit character encoding for 128 symbols." },
      { front: "Unicode", back: "Universal character set; encoded by UTF-8/16/32." },
      { front: "UTF-8", back: "Variable-length 1–4 byte encoding for Unicode; web standard." },
    ],
  },
  {
    id: "firewall",
    number: 22,
    title: "Firewall",
    summary: "Network security device controlling traffic by rules.",
    content: `## Definition
A **firewall** is a security system that monitors and controls traffic flowing in and out of a network or computer. Think of a firewall like a security guard at a building entrance—it examines who/what is trying to enter or leave and enforces rules about what's allowed. A firewall makes decisions based on rules: "Allow emails from company servers," "Block login attempts from unfamiliar locations," "Allow web traffic but encrypt it," etc.

## How Firewalls Work
Firewalls examine data traveling on networks and make allow/deny decisions based on rules you configure. The rules typically specify:
- Where the traffic is coming from (source)
- Where it's going (destination)
- What type of traffic it is (email, web, video, etc.)
- What action to take (allow it through, block it, log it for monitoring)

## Types of Firewalls

**Network Firewalls** — protect an entire network from the internet. Usually located at the network edge where your organization connects to the internet. They protect all computers inside the network.

**Host-based Firewalls** — run on individual computers and protect just that computer. Modern operating systems (Windows, Mac, Linux) include built-in firewalls.

**Stateful Firewalls** — remember ongoing connections. If you initiate a web request to a website, the firewall remembers this connection and allows the response back in. Without this, responses to legitimate requests could be blocked.

**Deep Inspection Firewalls** — go beyond just looking at addresses and ports. They examine the actual content of data to detect threats. For example, detecting that an email contains malware even if it's addressed correctly.

## Firewall Rules Example
A company might have rules like:
- "Allow traffic from our office to the internet"
- "Allow internet traffic returning from external servers we initiated contact with"
- "Block all incoming connections from the internet directly to internal computers"
- "Allow email from trusted partners"
- "Block files from untrusted sources"

## What Firewalls Can't Do
While firewalls are important, they have limits:
- They can't stop insider threats (people already inside the network)
- They can't protect against malware hidden in encrypted data
- They can't prevent social engineering attacks (tricking people)
- They don't manage passwords or user authentication`,
    mcqs: [
      { q: "A stateful firewall tracks:", options: ["Only IP headers", "Connection state", "DNS records", "Cookies only"], answer: 1 },
      { q: "A WAF mainly protects against:", options: ["Floor flooding", "OWASP web vulnerabilities", "Hardware faults", "Disk failures"], answer: 1 },
      { q: "Which is typical of an NGFW?", options: ["Only packet filtering", "Application awareness + IPS", "Email signing", "RAID controller"], answer: 1 },
      { q: "iptables is a ___ firewall.", options: ["Cloud", "Host-based / Linux", "Hardware appliance only", "Application-only"], answer: 1 },
      { q: "Firewall actions typically include allow, deny, and:", options: ["Compress", "Log", "Encrypt by default", "Rebuild"], answer: 1 },
      { q: "A firewall cannot easily stop:", options: ["Port scanning from outside", "Insider threats", "Unauthorised inbound ports", "External SSH brute force"], answer: 1 },
    ],
    fillBlanks: [
      { q: "A ___ firewall inspects HTTP traffic for SQLi/XSS.", answer: "WAF", alt: ["web application"] },
      { q: "A stateful firewall tracks connection ___.", answer: "state" },
      { q: "iptables is a Linux host-based ___.", answer: "firewall" },
      { q: "Firewall rules typically match on source IP, destination IP, ___ and protocol.", answer: "port" },
    ],
    trueFalse: [
      { q: "A firewall can completely prevent insider threats.", answer: false },
      { q: "A WAF protects against SQL injection.", answer: true },
      { q: "Packet-filtering firewalls are stateless.", answer: true },
      { q: "NGFWs include IDS/IPS capabilities.", answer: true },
    ],
    flashcards: [
      { front: "Firewall", back: "Controls network traffic based on rules; barrier between trust zones." },
      { front: "Stateful firewall", back: "Tracks the state of network connections." },
      { front: "WAF", back: "Web Application Firewall — defends HTTP apps from common attacks." },
      { front: "NGFW", back: "Next-Gen Firewall combining stateful inspection with IPS and app awareness." },
    ],
  },
  {
    id: "client-server-p2p",
    number: 23,
    title: "Client-Server vs Peer-to-Peer",
    summary: "Two fundamental network architectures.",
    content: `## Two Fundamental Network Architectures

**Client-Server Architecture** — the traditional model where:
- **Servers** are dedicated computers that store data and run services, available 24/7
- **Clients** are user computers that request services from servers

Think of a restaurant: the chef (server) prepares food in the kitchen while waiters (clients) take orders from customers and deliver the food. Real-world examples:
- **Web browsing** — your browser (client) requests pages from web servers
- **Email** — your email app (client) connects to mail servers to send/receive messages
- **Online gaming** — your game (client) connects to game servers where the game world exists
- **Cloud storage** — your phone (client) stores files on cloud servers (Dropbox, Google Drive)

**Advantages:**
- Centralized control — one person manages the server and its rules
- Security — the server can have strong protections around sensitive data
- Reliability — important data is backed up on the server
- Consistency — everyone uses the same version of data

**Disadvantages:**
- If the server fails, services go down
- Server can become a bottleneck when many clients request services
- Requires dedicated hardware and skilled administration

## Peer-to-Peer (P2P) Architecture
In P2P, there are no special "servers"—every computer is equal. Each one can share files and services with others directly. Think of a file-sharing platform:
- **BitTorrent** — share files directly between computers without a central server
- **Blockchain networks** (Bitcoin) — thousands of computers maintain the ledger equally
- **Video calls** (some implementations) — your computer talks directly to your friend's computer

**Advantages:**
- Resilient — if one computer goes offline, the network continues
- Scales naturally — more participants add more capacity
- No bottleneck — no central server to slow down

**Disadvantages:**
- Harder to control — harder to enforce rules or prevent abuse
- Quality varies — peer availability is inconsistent
- Complex to coordinate — with many equals, deciding what's "truth" is harder
- Privacy concerns — files might be visible to many peers

## Which is Used When?
- **Client-Server** — when you need central control, security, and reliability (banking, hospitals, corporate systems)
- **P2P** — when you want resilience, no single point of failure, and don't need central authority (cryptocurrency, decentralized sharing)`,
    mcqs: [
      { q: "Which is a P2P system?", options: ["Web browsing", "BitTorrent", "Banking app", "Mainframe terminal"], answer: 1 },
      { q: "A major drawback of client-server is:", options: ["No central control", "Single point of failure", "Decentralisation", "No security"], answer: 1 },
      { q: "In P2P, each node is:", options: ["Only a client", "Only a server", "Both client and server", "A router"], answer: 2 },
      { q: "Which favours easier admin and backup?", options: ["P2P", "Client-server", "Mesh of peers", "Ad-hoc Wi-Fi"], answer: 1 },
      { q: "Bitcoin's network is:", options: ["Client-server", "P2P", "Mainframe", "Token Ring"], answer: 1 },
      { q: "Email between you and Gmail uses:", options: ["P2P", "Client-server", "Bluetooth", "PAN"], answer: 1 },
    ],
    fillBlanks: [
      { q: "BitTorrent is a ___ architecture.", answer: "P2P", alt: ["peer to peer", "peer-to-peer"] },
      { q: "Client-server has a risk of single point of ___.", answer: "failure" },
      { q: "In P2P, each peer is both a client and a ___.", answer: "server" },
      { q: "Bitcoin operates over a ___ network.", answer: "P2P" },
    ],
    trueFalse: [
      { q: "Client-server is decentralised by definition.", answer: false },
      { q: "P2P scales naturally with the number of peers.", answer: true },
      { q: "Web browsing is a client-server interaction.", answer: true },
      { q: "P2P always offers stronger security than client-server.", answer: false },
    ],
    flashcards: [
      { front: "Client-Server", back: "Centralised: dedicated servers serve many clients." },
      { front: "P2P", back: "Decentralised: every node acts as client and server." },
      { front: "Pros of P2P", back: "Resilience, scalability, low infrastructure cost." },
      { front: "Pros of Client-Server", back: "Centralised control, security, backups." },
    ],
  },
];
