import type { Topic } from "@/content/types";

const LEC5 = "Lec 5 · OSI Model";
const LEC6 = "Lec 6 · TCP/IP Model";
const LEC7 = "Lec 7 · IoT Architecture";

export const topics: Topic[] = [
  // ---------------------------------------------------------------------------
  // Lec 5.1 OSI overview and why layers
  // ---------------------------------------------------------------------------
  {
    id: "iot-osi-overview",
    number: 1,
    chapter: LEC5,
    title: "The OSI Model: Overview and Why Networks Use Layers",
    summary:
      "What the OSI reference model is, who made it, why networking is split into layers, the seven layers in order with one job each, peer-to-peer communication, and two mnemonics for the layer order.",
    content: `## What the OSI model is

OSI stands for **Open Systems Interconnection**. It is a reference model published by ISO (the International Organization for Standardization) in 1984. It splits the job of getting data from one computer to another into seven layers. Each layer does one part of that job, uses the services of the layer below it, and offers services to the layer above it.

OSI is a model, a way of describing and organising the work. Your phone does not run "OSI" software. The Internet actually runs on the TCP/IP suite (Lec 6). We still study OSI because everyone in networking uses its layer numbers when they talk: a "layer 2 switch", a "layer 3 device", a "layer 7 firewall". If you know the seven layers, you can place any protocol or device on the map.

Watch the spelling. ISO is the organisation, OSI is the model. "ISO made OSI" is an easy way to keep them apart.

## Why split networking into layers?

Sending a message across the world involves cables, radio signals, addresses, routes, error checking, encryption and the app itself. One giant design that does all of that would be impossible to build or fix. Layers help in a few concrete ways:

- Each layer solves a smaller problem, so it is easier to design and understand.
- You can change one layer without touching the rest. Moving your laptop from Ethernet to Wi-Fi changes layers 1 and 2, and your browser keeps working.
- Different companies can build different layers and still work together, because the interfaces between layers are standard. This is the "open" in Open Systems.
- Troubleshooting gets easier. You check the cable (layer 1), then the link (layer 2), then the IP address (layer 3), and so on.
- It gives students and engineers a common vocabulary.

The IoT Architecture slides (Lec 7) give the same argument for IoT: there are too many parts to fit in one diagram, so the system is split into layers that each do one job and talk only to the layers next to them.

## The seven layers

Layer 1 is at the bottom, next to the wire. Layer 7 is at the top, next to the user.

\`\`\`
  7  Application    network services for the user and apps
  6  Presentation   data format, encryption, compression
  5  Session        start, manage and end a conversation
  4  Transport      process-to-process delivery, ports
  3  Network        logical (IP) addressing and routing
  2  Data Link      framing, MAC addressing, hop-to-hop delivery
  1  Physical       raw bits on the medium
\`\`\`

| No. | Layer | Main job | Data unit (PDU) | Examples |
|---|---|---|---|---|
| 7 | Application | gives apps access to the network | data | HTTP, FTP, SMTP, DNS, MQTT |
| 6 | Presentation | translation, encryption, compression | data | JPEG, ASCII, SSL/TLS |
| 5 | Session | dialog control, synchronisation | data | NetBIOS, RPC |
| 4 | Transport | end-to-end delivery between processes | segment (TCP) / datagram (UDP) | TCP, UDP |
| 3 | Network | logical addressing, routing | packet | IP, ICMP |
| 2 | Data Link | framing, physical addressing, error detection | frame | Ethernet, Wi-Fi (802.11) |
| 1 | Physical | sends bits as signals | bits | cables, hubs, radio |

## Peer-to-peer communication

Each layer on the sender "talks" to the same layer on the receiver. Layer 4 on your phone talks to layer 4 on the server, using the layer 4 header. That is a logical (virtual) conversation. Physically, the data goes down the sender's stack, across the medium, and up the receiver's stack. Routers in the middle only need layers 1 to 3, because their job is to forward packets.

\`\`\`
   Host A                                          Host B
 7 Application  <- - - - - - peer - - - - - ->  7 Application
 6 Presentation <- - - - - - peer - - - - - ->  6 Presentation
 5 Session      <- - - - - - peer - - - - - ->  5 Session
 4 Transport    <- - - - - - peer - - - - - ->  4 Transport
 3 Network   <------>   3 Network   <------>    3 Network
 2 Data Link <------>   2 Data Link <------>    2 Data Link
 1 Physical  ========   1 Physical  ========    1 Physical
                         (Router)
\`\`\`

## Two groups of layers

| Group | Layers | What they care about |
|---|---|---|
| Network support layers | 1, 2, 3 | physically moving data from one device to the next |
| Transport layer | 4 | links the two groups; makes delivery reliable end to end |
| User support layers | 5, 6, 7 | letting software on different systems understand each other |

Some books call layers 1 to 3 the "media layers" and layers 4 to 7 the "host layers", which is the same split under different names.

## Remembering the order

From layer 1 up: **Please Do Not Throw Sausage Pizza Away** (Physical, Data Link, Network, Transport, Session, Presentation, Application).

From layer 7 down: **All People Seem To Need Data Processing** (Application, Presentation, Session, Transport, Network, Data Link, Physical).

Pick one and practise writing the layers in both directions. Examiners like asking "which layer is directly above the network layer?" (Transport) or "which layer is directly below the session layer?" (Transport again).

## Common mistakes

- Numbering from the top. Layer 1 is Physical, at the bottom.
- Writing ISO when you mean OSI, or the other way round.
- Saying the Internet "uses the OSI model". It uses TCP/IP. OSI is the reference.
- Thinking every device uses all seven layers. A router works up to layer 3, a switch up to layer 2, a hub only at layer 1.

## How this shows up in the mid

Expect "Draw the OSI model and write one function of each layer" as a short question, and MCQs like "Which layer is responsible for routing?" or "How many layers does OSI have?". Learn the order cold, one job per layer, and the PDU names.`,
    mcqs: [
      {
        q: "How many layers does the OSI reference model have?",
        options: ["4", "5", "7", "9"],
        answer: 2,
        explain: "OSI has seven layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
      },
      {
        q: "Which organisation published the OSI model?",
        options: ["IEEE", "ISO", "IETF", "DARPA"],
        answer: 1,
        explain: "ISO published OSI in 1984. DARPA funded TCP/IP; IEEE writes standards like 802.3 and 802.11; IETF publishes RFCs.",
      },
      {
        q: "Which OSI layer is at the bottom, closest to the transmission medium?",
        options: ["Physical", "Data Link", "Network", "Application"],
        answer: 0,
        explain: "Layer 1, the Physical layer, deals with bits as electrical, light or radio signals on the medium.",
      },
      {
        q: "Which layer sits directly above the Network layer?",
        options: ["Data Link", "Session", "Presentation", "Transport"],
        answer: 3,
        explain: "The order upward is Network (3), Transport (4), Session (5).",
      },
      {
        q: "In 'All People Seem To Need Data Processing', what does the word 'Seem' stand for?",
        options: ["Security", "Session", "Segment", "Switching"],
        answer: 1,
        explain: "Top-down: Application, Presentation, Session, Transport, Network, Data Link, Physical.",
      },
      {
        q: "Which statement about the OSI model is correct?",
        options: [
          "It is the protocol suite the Internet runs on",
          "It is a reference model used to describe and teach networking",
          "It has four layers",
          "It was developed by DARPA for the US military",
        ],
        answer: 1,
        explain: "OSI is a conceptual reference model. The Internet runs TCP/IP, which came out of DARPA research.",
      },
      {
        q: "Layers 5, 6 and 7 of OSI are grouped together as the:",
        options: ["user support layers", "network support layers", "media layers", "routing layers"],
        answer: 0,
        explain: "Session, Presentation and Application let software on different systems work together, so they are the user support layers. Layers 1 to 3 are the network support layers.",
      },
      {
        q: "Peer-to-peer communication in OSI means:",
        options: [
          "two hosts must be connected by a direct cable",
          "each layer logically communicates with the same layer on the other host",
          "every device runs all seven layers",
          "only the application layer talks to the other host",
        ],
        answer: 1,
        explain: "Layer 4 on the sender talks to layer 4 on the receiver through layer 4 headers, even though the data physically travels down and up the stacks.",
      },
      {
        q: "Which is NOT an advantage of a layered model?",
        options: [
          "A change in one layer does not force changes in others",
          "Equipment from different vendors can interoperate",
          "Troubleshooting can be done layer by layer",
          "It removes the need for any protocols",
        ],
        answer: 3,
        explain: "Layering organises protocols. Every layer still needs its own protocols.",
      },
    ],
    fillBlanks: [
      {
        q: "OSI stands for Open Systems ___.",
        answer: "Interconnection",
        alt: ["interconnection"],
      },
      {
        q: "The OSI model has ___ layers.",
        answer: "7",
        alt: ["seven"],
      },
      {
        q: "Layer 1 of OSI is the ___ layer.",
        answer: "Physical",
        alt: ["physical"],
      },
      {
        q: "The layer directly below the Presentation layer is the ___ layer.",
        answer: "Session",
        alt: ["session"],
      },
      {
        q: "OSI was published by ___ in 1984.",
        answer: "ISO",
        alt: ["iso", "international organization for standardization"],
      },
      {
        q: "A router uses OSI layers 1 to ___.",
        answer: "3",
        alt: ["three"],
      },
    ],
    trueFalse: [
      {
        q: "In OSI, layer 7 is the Physical layer.",
        answer: false,
        explain: "Layer 7 is Application. Layer 1 is Physical.",
      },
      {
        q: "The Transport layer sits between the Network layer and the Session layer.",
        answer: true,
        explain: "Network is 3, Transport is 4, Session is 5.",
      },
      {
        q: "OSI and ISO are two names for the same model.",
        answer: false,
        explain: "ISO is the organisation. OSI is the model ISO published.",
      },
      {
        q: "In a layered model, each layer uses the services of the layer below it and serves the layer above it.",
        answer: true,
        explain: "That service relationship is the whole point of layering.",
      },
      {
        q: "Switching a laptop from Ethernet to Wi-Fi requires the web browser to be rewritten.",
        answer: false,
        explain: "Only layers 1 and 2 change. The application layer is untouched, which is one benefit of layering.",
      },
      {
        q: "Intermediate routers normally process only OSI layers 1 to 3.",
        answer: true,
        explain: "A router reads the network-layer header to forward the packet. It does not need the transport or application data.",
      },
    ],
    flashcards: [
      { front: "OSI stands for", back: "Open Systems Interconnection, a 7-layer reference model published by ISO in 1984." },
      { front: "OSI layers, bottom to top", back: "Physical, Data Link, Network, Transport, Session, Presentation, Application." },
      { front: "Bottom-up mnemonic", back: "Please Do Not Throw Sausage Pizza Away." },
      { front: "Top-down mnemonic", back: "All People Seem To Need Data Processing." },
      { front: "Why use layers? (give four reasons)", back: "Smaller problems, change one layer without the rest, vendor interoperability, easier troubleshooting." },
      { front: "Network support layers", back: "Layers 1 to 3 (Physical, Data Link, Network): moving data from device to device." },
      { front: "User support layers", back: "Layers 5 to 7 (Session, Presentation, Application): letting software on different systems interoperate." },
      { front: "Which layer links the two groups?", back: "Layer 4, Transport. It gives reliable end-to-end delivery between processes." },
      { front: "Peer-to-peer communication", back: "Each layer logically talks to the same layer on the other host using that layer's header." },
      { front: "Is OSI what the Internet runs on?", back: "No. The Internet runs TCP/IP. OSI is the reference model used to describe it." },
    ],
    examples: [
      {
        title: "Mnemonics for the OSI layer order",
        items: [
          "Bottom-up (1 to 7): Please Do Not Throw Sausage Pizza Away = Physical, Data Link, Network, Transport, Session, Presentation, Application.",
          "Top-down (7 to 1): All People Seem To Need Data Processing = Application, Presentation, Session, Transport, Network, Data Link, Physical.",
          "Quick check: the 4th word in both mnemonics starts with T, because Transport is layer 4 from either end.",
        ],
      },
      {
        title: "Layering in everyday life",
        items: [
          "Posting a letter: you write it (application), put it in an envelope with an address (network), the post office sorts it, and a van carries it (physical). You do not need to know which van was used.",
          "Moving from mobile data to home Wi-Fi mid-video: the lower layers change, YouTube keeps playing.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Draw the OSI reference model and state one function of each layer.",
        solution: `\`\`\`
 7 Application   provides network services to user applications (HTTP, FTP, DNS)
 6 Presentation  translates data formats, encrypts and compresses data
 5 Session       establishes, manages and terminates sessions; adds checkpoints
 4 Transport     process-to-process delivery using ports; segmentation, flow and error control
 3 Network       logical (IP) addressing and routing packets across networks
 2 Data Link     framing, physical (MAC) addressing, error detection, media access
 1 Physical      transmits raw bits as signals over the medium
\`\`\`

Write layer 1 at the bottom. For full marks, add the PDU next to the lower layers: bits (1), frame (2), packet (3), segment (4), data (5 to 7).`,
      },
      {
        problem: "Why is networking divided into layers? Give at least four reasons.",
        solution: `1. A big problem becomes several small ones. Each layer has one clear job.
2. Modularity: a layer can be changed or upgraded without changing the others, as long as its interface stays the same (Ethernet to Wi-Fi does not affect HTTP).
3. Interoperability: standard interfaces let products from different vendors work together.
4. Troubleshooting: faults can be isolated layer by layer (cable, then link, then IP, then application).
5. Teaching and communication: engineers share a vocabulary ("a layer 3 problem").`,
      },
      {
        problem: "Explain peer-to-peer communication in the OSI model with a diagram.",
        solution: `Each layer on the sending host communicates logically with the same layer on the receiving host. It does this by adding a header that only its peer layer reads. The real path is vertical: down through layers 7 to 1 on the sender, across the medium, through any routers (which use layers 1 to 3), then up through layers 1 to 7 on the receiver.

\`\`\`
 Sender                       Receiver
 7 <- - - - - - - - - - - - -> 7
 4 <- - - - - - - - - - - - -> 4
 3 <---> Router (1-3) <------> 3
 1 ===========================  1
\`\`\`

Dashed arrows are the logical peer conversations. The solid line at the bottom is the only physical connection.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lec 5.2 Lower layers
  // ---------------------------------------------------------------------------
  {
    id: "iot-osi-lower-layers",
    number: 2,
    chapter: LEC5,
    title: "OSI Lower Layers: Physical, Data Link and Network",
    summary:
      "The three network support layers in detail: what the Physical layer specifies, framing and MAC addressing at the Data Link layer with its LLC and MAC sublayers, and logical addressing and routing at the Network layer, with IoT examples.",
    content: `## Layer 1: Physical

The Physical layer moves individual **bits** from one device to the next over a medium. It does not know what the bits mean. Its concerns are physical:

- the medium: twisted-pair cable, coaxial cable, fibre optic, or wireless (radio, infrared);
- how a 0 and a 1 are represented: voltage levels, light pulses, radio modulation;
- data rate, meaning how many bits per second;
- synchronisation of sender and receiver clocks so bits are read at the right moment;
- connectors, pins and cable specs;
- the physical topology: bus, star, ring or mesh (the Networking Basics slides cover these);
- transmission mode: simplex (one way only), half duplex (both ways, one at a time), full duplex (both ways at once).

Devices at this layer: cables, connectors, **repeaters** and **hubs**. A hub just copies incoming bits out of every other port. It has no idea about addresses.

IoT example: a DHT11 sensor sends readings to an Arduino over a single data wire, and a LoRa radio turns bits into a long-range chirp signal. Both are physical-layer decisions.

## Layer 2: Data Link

The Data Link layer delivers data **hop to hop** (node to node) on the same link or local network. It groups bits into **frames**.

Its jobs:

1. **Framing**: wrapping the network-layer packet with a header and a trailer so the receiver knows where a frame starts and ends.
2. **Physical addressing**: the header carries the source and destination **MAC addresses**. A MAC address is 48 bits, burned into the network card, written like 00:1A:2B:3C:4D:5E.
3. **Error control**: the trailer carries a CRC (Frame Check Sequence). The receiver recomputes it to detect corrupted frames.
4. **Flow control**: stops a fast sender from overwhelming a slow receiver on the link.
5. **Access control**: decides who may transmit when several devices share one medium. Wired Ethernet used CSMA/CD (collision detection); Wi-Fi uses CSMA/CA (collision avoidance).

IEEE splits this layer into two sublayers:

| Sublayer | Position | Job |
|---|---|---|
| LLC (Logical Link Control) | upper | talks to the network layer, flow and error control |
| MAC (Media Access Control) | lower | MAC addressing, access to the shared medium |

Devices: **switches**, **bridges**, and the NIC (network interface card, which works at layers 1 and 2). A switch reads the destination MAC address and sends the frame only out of the right port, which is why it is smarter than a hub.

Protocols and standards: Ethernet (IEEE 802.3), Wi-Fi (802.11), Bluetooth (802.15.1), IEEE 802.15.4 (used under Zigbee), PPP, Token Ring (802.5).

## Layer 3: Network

The Data Link layer only gets a frame to the next device. The Network layer gets a **packet** from the original source to the final destination, even across many different networks. That is called source-to-destination (end-to-end host) delivery.

Its jobs:

1. **Logical addressing**: every host gets an IP address. IPv4 addresses are 32 bits (192.168.1.10). IPv6 addresses are 128 bits.
2. **Routing**: choosing the path a packet takes through routers.
3. **Forwarding**: a router moves each packet from an input interface to the right output interface.
4. **Fragmentation**: splitting a packet that is too big for the next link.

Device: the **router**. Protocols: IP (IPv4, IPv6), ICMP (error messages and ping), IPsec, and routing protocols like OSPF. In IoT, **6LoWPAN** is an adaptation layer that squeezes IPv6 packets into the tiny frames of IEEE 802.15.4 radios, and **RPL** is a routing protocol for low-power networks.

## Hop-to-hop vs end-to-end

\`\`\`
  Sensor ---> Switch ---> Router A ---> Router B ---> Cloud server
     |__ hop __|   |__ hop __|    |__ hop __|    |__ hop __|     Data Link: each hop
     |________________________ end to end ___________________|  Network: whole trip
\`\`\`

The MAC addresses in the frame change at every router. The source and destination IP addresses in the packet stay the same for the whole trip (ignoring NAT).

## Summary table

| | Physical (1) | Data Link (2) | Network (3) |
|---|---|---|---|
| PDU | bits | frame | packet |
| Address | none | MAC (48-bit) | IP (32-bit IPv4) |
| Delivery | bit by bit | hop to hop | source to destination |
| Devices | hub, repeater, cable | switch, bridge, NIC | router |
| Examples | RJ-45, fibre, radio | Ethernet, Wi-Fi, Bluetooth | IP, ICMP |

## Common mistakes

- Putting the switch at layer 3. A normal switch is layer 2. (A "layer 3 switch" exists, but in exam questions "switch" means layer 2.)
- Saying the Data Link layer routes packets. Routing is layer 3.
- Mixing up MAC address (physical, 48-bit, local hop) and IP address (logical, end to end).
- Forgetting that the Data Link layer adds a trailer as well as a header.

## How this shows up in the mid

"Which layer is responsible for framing?" (Data Link). "Which device works at the network layer?" (Router). "What is the PDU at layer 2?" (Frame). A short question may ask for the functions of the Data Link layer or the difference between MAC and IP addresses.`,
    mcqs: [
      {
        q: "Which OSI layer groups bits into frames?",
        options: ["Physical", "Network", "Data Link", "Transport"],
        answer: 2,
        explain: "Framing is a Data Link layer job. The Physical layer only deals with raw bits.",
      },
      {
        q: "A router works mainly at which OSI layer?",
        options: ["Layer 1", "Layer 2", "Layer 4", "Layer 3"],
        answer: 3,
        explain: "Routers read IP addresses and choose paths, which is Network layer (layer 3) work.",
      },
      {
        q: "How long is a MAC address?",
        options: ["48 bits", "32 bits", "128 bits", "16 bits"],
        answer: 0,
        explain: "MAC addresses are 48 bits (6 bytes). 32 bits is IPv4, 128 bits is IPv6, 16 bits is a port number.",
      },
      {
        q: "Which device simply repeats incoming bits out of all its other ports?",
        options: ["Switch", "Hub", "Router", "Gateway"],
        answer: 1,
        explain: "A hub is a layer 1 device with no address awareness. A switch forwards based on MAC addresses.",
      },
      {
        q: "The two sublayers of the Data Link layer are:",
        options: ["TCP and UDP", "IP and ICMP", "LLC and MAC", "Session and Presentation"],
        answer: 2,
        explain: "IEEE divides layer 2 into Logical Link Control (upper) and Media Access Control (lower).",
      },
      {
        q: "Which layer is responsible for source-to-destination delivery of a packet across multiple networks?",
        options: ["Network", "Data Link", "Physical", "Session"],
        answer: 0,
        explain: "Data Link delivers hop to hop; the Network layer gets the packet across many hops to the final host.",
      },
      {
        q: "Full duplex transmission means:",
        options: [
          "data flows in one direction only",
          "both sides can send, but not at the same time",
          "both sides can send at the same time",
          "data is sent twice for reliability",
        ],
        answer: 2,
        explain: "Simplex is one way, half duplex is both ways in turns, full duplex is both ways simultaneously.",
      },
      {
        q: "Where in a frame is the CRC used for error detection usually placed?",
        options: ["In the IP header", "In the TCP header", "In the frame trailer", "In the preamble only"],
        answer: 2,
        explain: "The Frame Check Sequence (CRC) goes in the Data Link trailer at the end of the frame.",
      },
      {
        q: "Which of these is an IoT-related protocol working around the network layer?",
        options: ["JPEG", "6LoWPAN", "SMTP", "NetBIOS"],
        answer: 1,
        explain: "6LoWPAN adapts IPv6 packets to fit IEEE 802.15.4 frames, sitting between layers 2 and 3.",
      },
      {
        q: "Wi-Fi avoids collisions on the shared radio channel using:",
        options: ["CSMA/CD", "Token passing", "CSMA/CA", "Routing tables"],
        answer: 2,
        explain: "Wi-Fi uses CSMA/CA (collision avoidance). Classic Ethernet used CSMA/CD (collision detection).",
      },
    ],
    fillBlanks: [
      {
        q: "The PDU at the Data Link layer is called a ___.",
        answer: "frame",
        alt: ["frames"],
      },
      {
        q: "The PDU at the Network layer is called a ___.",
        answer: "packet",
        alt: ["packets", "datagram"],
      },
      {
        q: "An IPv4 address is ___ bits long.",
        answer: "32",
        alt: ["thirty-two", "thirty two"],
      },
      {
        q: "A ___ forwards frames using MAC addresses.",
        answer: "switch",
        alt: ["bridge", "switches"],
      },
      {
        q: "The upper sublayer of the Data Link layer is LLC, which stands for Logical Link ___.",
        answer: "Control",
        alt: ["control"],
      },
      {
        q: "Choosing a path for a packet through the network is called ___.",
        answer: "routing",
      },
    ],
    trueFalse: [
      {
        q: "The Physical layer understands MAC addresses.",
        answer: false,
        explain: "The Physical layer only sends bits. MAC addresses are a Data Link (layer 2) concept.",
      },
      {
        q: "The Data Link layer adds both a header and a trailer.",
        answer: true,
        explain: "The header carries MAC addresses; the trailer carries the CRC for error detection.",
      },
      {
        q: "As a packet crosses several routers, its source and destination IP addresses normally stay the same while the MAC addresses change at each hop.",
        answer: true,
        explain: "IP is end to end; MAC is hop to hop. (NAT is the usual exception, outside this topic.)",
      },
      {
        q: "A hub works at the Network layer.",
        answer: false,
        explain: "A hub is a Physical layer (layer 1) device.",
      },
      {
        q: "Network topology (bus, star, ring, mesh) is a Physical layer concern.",
        answer: true,
        explain: "How devices are physically wired together is defined at layer 1.",
      },
      {
        q: "ICMP is a Network layer protocol.",
        answer: true,
        explain: "ICMP carries error and diagnostic messages (like ping) and works alongside IP at layer 3.",
      },
    ],
    flashcards: [
      { front: "Physical layer job", back: "Send raw bits as signals; defines media, voltages, data rate, synchronisation, topology, transmission mode." },
      { front: "Data Link layer jobs", back: "Framing, MAC addressing, error detection (CRC), flow control, media access control. Hop-to-hop delivery." },
      { front: "Network layer jobs", back: "Logical (IP) addressing, routing, forwarding, fragmentation. Source-to-destination delivery." },
      { front: "Data Link sublayers", back: "LLC (Logical Link Control, upper) and MAC (Media Access Control, lower)." },
      { front: "MAC vs IP address", back: "MAC: 48-bit physical address, changes per hop. IPv4: 32-bit logical address, stays the same end to end." },
      { front: "Layer 1 devices", back: "Hub, repeater, cables, connectors." },
      { front: "Layer 2 devices", back: "Switch, bridge, NIC." },
      { front: "Layer 3 device", back: "Router." },
      { front: "Simplex / half duplex / full duplex", back: "One way only / both ways in turns / both ways at the same time." },
      { front: "CSMA/CD vs CSMA/CA", back: "CD = collision detection (classic Ethernet). CA = collision avoidance (Wi-Fi)." },
    ],
    examples: [
      {
        title: "Placing real things on layers 1 to 3",
        items: [
          "Fibre-optic cable, an RJ-45 jack, a LoRa radio's modulation: Physical.",
          "Your laptop's Wi-Fi MAC address, an Ethernet switch, a Zigbee frame on 802.15.4: Data Link.",
          "Your home router, the IP address 192.168.1.10, the ping command (ICMP), 6LoWPAN carrying IPv6: Network.",
        ],
      },
      {
        title: "Mnemonic for the transmission modes",
        items: [
          "Simplex = radio broadcast or a temperature sensor that only transmits.",
          "Half duplex = walkie-talkie: say 'over' and wait.",
          "Full duplex = phone call: both people can talk at once.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Explain the functions of the Data Link layer.",
        solution: `The Data Link layer (layer 2) delivers frames from one node to the next on the same link.

1. Framing: divides the stream into frames by adding a header and a trailer to the network-layer packet.
2. Physical addressing: the header holds the source and destination MAC addresses (48-bit).
3. Flow control: prevents a fast sender from flooding a slow receiver.
4. Error control: the trailer carries a CRC/FCS; damaged frames are detected and discarded or retransmitted.
5. Access control: when many devices share a medium, decides who transmits (CSMA/CD in Ethernet, CSMA/CA in Wi-Fi).

It has two sublayers, LLC (upper) and MAC (lower). Devices: switch, bridge. Examples: Ethernet, Wi-Fi, Bluetooth.`,
      },
      {
        problem: "Differentiate between a hub, a switch and a router.",
        solution: `| | Hub | Switch | Router |
|---|---|---|---|
| OSI layer | 1 Physical | 2 Data Link | 3 Network |
| Works with | bits | frames, MAC addresses | packets, IP addresses |
| Forwarding | repeats to all ports | sends only to the port of the destination MAC | chooses a path to another network |
| Connects | devices in one LAN | devices in one LAN | different networks (LAN to Internet) |
| Intelligence | none | MAC address table | routing table |`,
      },
      {
        problem: "Compare hop-to-hop delivery and source-to-destination delivery. Which layers provide them?",
        solution: `Hop-to-hop (node-to-node) delivery is provided by the Data Link layer. It moves a frame across one link, from one device to the next, using MAC addresses that are rewritten at every router.

Source-to-destination delivery is provided by the Network layer. It moves a packet from the original sender to the final host across many networks, using IP addresses that stay the same for the whole journey.

Example: a sensor sends to a cloud server through a switch and two routers. That is four hops at layer 2 but one end-to-end delivery at layer 3.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lec 5.3 Upper layers
  // ---------------------------------------------------------------------------
  {
    id: "iot-osi-upper-layers",
    number: 3,
    chapter: LEC5,
    title: "OSI Upper Layers: Transport, Session, Presentation and Application",
    summary:
      "Layer 4 to layer 7: port-based process-to-process delivery and segmentation at the Transport layer, dialog control and checkpoints at the Session layer, translation, encryption and compression at the Presentation layer, and the protocols users touch at the Application layer.",
    content: `## Layer 4: Transport

The Network layer gets a packet to the right **computer**. The Transport layer gets the data to the right **program** (process) on that computer. Your phone may have WhatsApp, Chrome and a weather widget all using the network at once. Port numbers tell them apart.

Jobs of the Transport layer:

1. **Port (service-point) addressing**: a 16-bit port number identifies the process. A web server listens on port 80 (HTTP) or 443 (HTTPS).
2. **Segmentation and reassembly**: large data is cut into segments, each with a sequence number, and put back in order at the receiver.
3. **Connection control**: TCP sets up a connection first; UDP just sends.
4. **Flow control**: end to end, so the receiving program is not flooded.
5. **Error control**: end to end. Lost or damaged segments are detected and resent (in TCP).

The two main protocols:

| | TCP | UDP |
|---|---|---|
| Connection | connection-oriented (3-way handshake) | connectionless |
| Reliability | reliable: acknowledgements, retransmission, ordering | unreliable: no acks, no resend |
| Speed / overhead | slower, 20-byte minimum header | faster, 8-byte header |
| PDU name | segment | datagram |
| Used by | web (HTTP), email, file transfer, MQTT | DNS, video calls, online games, CoAP |

The Network layer does host-to-host delivery; the Transport layer does **process-to-process** delivery. Many MCQs reduce to that distinction.

## Layer 5: Session

The Session layer is the network's dialog controller. It sets up, maintains and ends a conversation (session) between two applications.

- **Dialog control**: decides whether the two sides talk in half duplex or full duplex.
- **Synchronisation (checkpoints)**: adds checkpoints into a long transfer. If a 100-page file fails at page 75 and there is a checkpoint every 10 pages, only pages 71 to 100 need resending, not the whole file.
- Session establishment, maintenance and termination; can also handle login (authentication) for the session.

Examples often listed: NetBIOS, RPC (Remote Procedure Call), PPTP. In TCP/IP these duties are mostly done inside the application itself.

## Layer 6: Presentation

The Presentation layer is about the **form** of data, so both sides understand it the same way. Think of it as the translator.

- **Translation**: converts between different encodings, such as ASCII, EBCDIC and Unicode, so a character sent by one system means the same on the other.
- **Encryption and decryption**: for privacy. SSL/TLS is usually placed here in OSI discussions.
- **Compression**: reduces the number of bits to send. JPEG, GIF, PNG, MPEG and MP3 are presentation-layer formats.

## Layer 7: Application

The Application layer is the top layer. It lets the user, or software, access network services. The app itself (Chrome, WhatsApp) is not the layer. The **protocol** the app uses is.

| Protocol | Purpose |
|---|---|
| HTTP / HTTPS | web pages between browser and server |
| FTP | file transfer |
| SMTP | sending email |
| IMAP / POP3 | retrieving email |
| DNS | turns names like google.com into IP addresses |
| Telnet / SSH | remote login (SSH is encrypted) |
| MQTT, CoAP | messaging for IoT devices |

## One request through layers 7 to 4

You open a weather dashboard that fetches readings from an IoT server:

\`\`\`
 7 Application   browser builds an HTTPS GET request
 6 Presentation  data is encrypted by TLS, JSON text encoded as UTF-8
 5 Session       a session with the server is kept open for later requests
 4 Transport     TCP cuts it into segments, src port 52344 -> dst port 443
 ... then Network, Data Link and Physical carry it to the server
\`\`\`

## Common mistakes

- Saying the Transport layer does routing. Routing is layer 3; Transport is end to end between processes.
- Calling UDP "connection-oriented". UDP is connectionless; TCP is connection-oriented.
- Putting encryption in the Session layer. In OSI, encryption and compression are Presentation.
- Saying "Chrome is an application layer protocol". Chrome is a program; HTTP is the protocol.

## How this shows up in the mid

Common MCQs: "Which layer is responsible for encryption?" (Presentation), "Checkpoints / dialog control?" (Session), "Port numbers / process-to-process delivery?" (Transport). Long question: "Explain the functions of the upper layers of OSI" or "Differentiate TCP and UDP".`,
    mcqs: [
      {
        q: "Which OSI layer is responsible for encryption, compression and translation?",
        options: ["Session", "Presentation", "Application", "Transport"],
        answer: 1,
        explain: "Presentation handles the form of the data: translation, encryption and compression.",
      },
      {
        q: "Adding checkpoints to a long file transfer is a function of the:",
        options: ["Session layer", "Data Link layer", "Network layer", "Physical layer"],
        answer: 0,
        explain: "Synchronisation (checkpoints) and dialog control belong to the Session layer.",
      },
      {
        q: "Process-to-process delivery is the job of the:",
        options: ["Network layer", "Data Link layer", "Transport layer", "Presentation layer"],
        answer: 2,
        explain: "The Transport layer uses port numbers to deliver data to the right process. The Network layer only reaches the right host.",
      },
      {
        q: "Which statement about UDP is correct?",
        options: [
          "It uses a three-way handshake",
          "It guarantees in-order delivery",
          "It retransmits lost data",
          "It is connectionless and has low overhead",
        ],
        answer: 3,
        explain: "UDP sends datagrams without a connection, acknowledgements or retransmission, so it is fast but unreliable.",
      },
      {
        q: "Which protocol converts a domain name like google.com into an IP address?",
        options: ["DNS", "FTP", "SMTP", "ARP"],
        answer: 0,
        explain: "DNS resolves names to IP addresses. ARP resolves IP addresses to MAC addresses.",
      },
      {
        q: "JPEG and MPEG are associated with which OSI layer?",
        options: ["Application", "Session", "Transport", "Presentation"],
        answer: 3,
        explain: "They are data formats and compression standards, which is Presentation layer territory.",
      },
      {
        q: "A port number is how many bits long?",
        options: ["8", "16", "32", "48"],
        answer: 1,
        explain: "Port numbers are 16 bits, giving 0 to 65535.",
      },
      {
        q: "Which of these is the Application layer in OSI terms?",
        options: ["The Chrome program itself", "The HTTP protocol Chrome uses", "The Wi-Fi card", "The TCP segment"],
        answer: 1,
        explain: "The layer is made of protocols like HTTP, FTP and DNS, not the user's program.",
      },
      {
        q: "Which upper-layer job is described as 'dialog control'?",
        options: [
          "Deciding whether communication is half duplex or full duplex",
          "Choosing a route through routers",
          "Converting ASCII to Unicode",
          "Detecting bit errors with CRC",
        ],
        answer: 0,
        explain: "Dialog control is a Session layer function.",
      },
    ],
    fillBlanks: [
      {
        q: "TCP is connection-___, while UDP is connectionless.",
        answer: "oriented",
      },
      {
        q: "The OSI layer that adds checkpoints during a long transfer is the ___ layer.",
        answer: "Session",
        alt: ["session"],
      },
      {
        q: "HTTP uses port ___ by default.",
        answer: "80",
        alt: ["eighty"],
      },
      {
        q: "The Transport layer cuts large data into ___ and reassembles them at the receiver.",
        answer: "segments",
        alt: ["segment"],
      },
      {
        q: "Encryption and compression happen at the ___ layer of OSI.",
        answer: "Presentation",
        alt: ["presentation"],
      },
      {
        q: "The protocol used to send email from a client to a mail server is ___.",
        answer: "SMTP",
        alt: ["smtp"],
      },
    ],
    trueFalse: [
      {
        q: "The Transport layer is responsible for routing packets between networks.",
        answer: false,
        explain: "Routing is a Network layer job. Transport handles end-to-end delivery between processes.",
      },
      {
        q: "TCP provides acknowledgements and retransmission of lost segments.",
        answer: true,
        explain: "That is what makes TCP reliable.",
      },
      {
        q: "The Session layer translates ASCII text to EBCDIC.",
        answer: false,
        explain: "Translation between encodings is a Presentation layer function.",
      },
      {
        q: "DNS normally uses UDP port 53.",
        answer: true,
        explain: "DNS queries normally use UDP port 53 (TCP 53 is used for large responses and zone transfers).",
      },
      {
        q: "If a transfer with checkpoints every 10 pages fails at page 75, the Session layer lets it resume from the last checkpoint instead of page 1.",
        answer: true,
        explain: "Synchronisation points exist so a failure only costs the data after the last checkpoint.",
      },
      {
        q: "UDP is a good choice for live video calls because a late packet is useless anyway.",
        answer: true,
        explain: "Retransmitting old video frames would add delay, so real-time media usually prefers UDP's speed.",
      },
    ],
    flashcards: [
      { front: "Transport layer jobs", back: "Port addressing, segmentation and reassembly, connection control, end-to-end flow and error control." },
      { front: "Session layer jobs", back: "Establish, maintain and end sessions; dialog control (half/full duplex); synchronisation with checkpoints." },
      { front: "Presentation layer jobs", back: "Translation (ASCII, Unicode), encryption/decryption, compression." },
      { front: "Application layer", back: "Gives users and programs access to network services: HTTP, FTP, SMTP, DNS, Telnet, MQTT, CoAP." },
      { front: "TCP in one line", back: "Connection-oriented, reliable, ordered, uses a 3-way handshake; PDU = segment." },
      { front: "UDP in one line", back: "Connectionless, unreliable, fast, 8-byte header; PDU = datagram." },
      { front: "Host-to-host vs process-to-process", back: "Network layer reaches the right host (IP). Transport layer reaches the right process (port)." },
      { front: "Port number size", back: "16 bits (0 to 65535)." },
      { front: "Checkpoint example", back: "100-page file, checkpoint every 10 pages, fails at page 75: resend only pages 71 to 100." },
    ],
    examples: [
      {
        title: "Which upper layer does it?",
        items: [
          "WhatsApp end-to-end encryption, a photo saved as JPEG: Presentation.",
          "A video call that keeps a session alive and resumes after a short drop: Session.",
          "Port 443 telling your phone's HTTPS traffic apart from port 53 DNS traffic: Transport.",
          "Your browser sending GET /index.html with HTTP: Application.",
        ],
      },
      {
        title: "TCP or UDP?",
        items: [
          "Downloading a PDF, loading a web page, sending email, MQTT telemetry: TCP (every byte must arrive).",
          "DNS lookup, live cricket stream, online game, CoAP sensor reading: UDP (speed matters more than perfection).",
        ],
      },
    ],
    exercises: [
      {
        problem: "Explain the functions of the Transport, Session, Presentation and Application layers of the OSI model.",
        solution: `Transport (4): process-to-process delivery using 16-bit port numbers; segmentation and reassembly with sequence numbers; connection control (TCP connection-oriented, UDP connectionless); end-to-end flow control and error control. PDU: segment.

Session (5): establishes, maintains and terminates sessions between applications; dialog control (half or full duplex); synchronisation by inserting checkpoints so a failed transfer resumes from the last checkpoint. Examples: NetBIOS, RPC.

Presentation (6): makes sure both sides understand the data format. Translation between encodings (ASCII, Unicode), encryption and decryption, compression (JPEG, MPEG).

Application (7): provides network services to the user and programs. Protocols: HTTP, FTP, SMTP, DNS, Telnet, and IoT protocols like MQTT and CoAP.`,
      },
      {
        problem: "Differentiate between TCP and UDP. Give two applications of each.",
        solution: `| | TCP | UDP |
|---|---|---|
| Connection | connection-oriented, 3-way handshake | connectionless |
| Reliability | reliable: acks, retransmission | unreliable: no acks |
| Ordering | data delivered in order | no ordering guarantee |
| Header | 20 bytes minimum | 8 bytes |
| Speed | slower | faster |
| PDU | segment | datagram |

TCP applications: web browsing (HTTP/HTTPS), email (SMTP), file transfer (FTP), MQTT.
UDP applications: DNS, video/voice calls, online games, CoAP.`,
      },
      {
        problem: "A 100-page document is being transferred. The connection fails while page 75 is being sent. Explain how the Session layer helps.",
        solution: `The Session layer inserts synchronisation points (checkpoints) into the data stream, for example one after every 10 pages. Each checkpoint is acknowledged.

When the failure happens at page 75, the last acknowledged checkpoint is after page 70. After the session is re-established, transfer resumes from page 71, so only pages 71 to 100 are resent instead of all 100 pages. This saves time and bandwidth on long transfers.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lec 5.4 Encapsulation, PDUs, devices
  // ---------------------------------------------------------------------------
  {
    id: "iot-osi-encapsulation",
    number: 4,
    chapter: LEC5,
    title: "Encapsulation, PDUs and Devices per Layer",
    summary:
      "How each layer wraps data with its own header on the way down and strips it on the way up, the name of the data unit at every layer with a mnemonic, and which network devices work at which layer.",
    content: `## The postal analogy

The TCP/IP slides compare networks to the postal service. You cannot drop a bare letter into a mailbox and expect it to arrive. It needs an envelope with an address, maybe a registered-post sticker, then a mailbag with a sorting code. Networks are the same: raw data is wrapped with extra information before it goes out. That wrapping is **encapsulation**.

## Encapsulation (sender side)

As data moves **down** the stack, each layer adds its own header in front of whatever it got from the layer above. The Data Link layer also adds a trailer at the end. Each header holds the information that layer's peer on the other side needs: who the data is for, where it came from, how to deliver it, and what kind of data it is.

\`\`\`
 Application                         [ DATA ]
 Transport                     [TCP][ DATA ]                 = segment
 Network                   [IP][TCP][ DATA ]                 = packet
 Data Link          [ETH][IP][TCP][ DATA ][FCS]              = frame
 Physical   0101100111010101110010101010110101...            = bits
\`\`\`

## Decapsulation (receiver side)

The receiver does the reverse. Each layer reads and removes its own header, checks it, and passes what is left **up** to the next layer. The Data Link layer checks the FCS, strips the frame header and trailer and hands the packet to the Network layer, and so on until the application gets the original data.

A router in the middle decapsulates only up to layer 3: it removes the frame, reads the IP header to choose the next hop, then builds a new frame for the next link.

## PDU names

PDU means **Protocol Data Unit**, the name of the data at a given layer.

| Layer | PDU |
|---|---|
| 7 Application, 6 Presentation, 5 Session | data (message) |
| 4 Transport | segment (TCP) / datagram (UDP) |
| 3 Network | packet |
| 2 Data Link | frame |
| 1 Physical | bits |

Mnemonic, top to bottom: **Do Some People Fear Birthdays?** = Data, Segment, Packet, Frame, Bits.

Careful with "datagram". UDP's PDU is called a datagram, and an IP packet is also called an IP datagram in many books. If an MCQ offers "packet" for layer 3, pick packet.

## Devices per layer

| Layer | Devices | What they look at |
|---|---|---|
| 1 Physical | hub, repeater, cables, modem (signal side) | only bits and signal strength |
| 2 Data Link | switch, bridge, NIC, wireless access point | MAC addresses in frames |
| 3 Network | router (and layer 3 switch) | IP addresses in packets |
| 4 to 7 | gateway, firewall (layer 7), load balancer, end hosts | ports and application data |

A **gateway** in the textbook sense works at any or all layers. It connects networks that use different protocols and translates between them. In IoT, a gateway might take Zigbee frames from sensors and send the readings to the cloud as MQTT over Wi-Fi, so it touches every layer.

End hosts (your laptop, a cloud server, a smart camera) implement all seven layers.

## Collision and broadcast domains (bonus point)

- A hub puts every port in one collision domain.
- A switch gives each port its own collision domain, but all ports are still in one broadcast domain.
- A router separates broadcast domains.

## Common mistakes

- Saying only the Transport layer adds a header. Every layer from 7 down to 2 can add one.
- Forgetting the trailer. Only the Data Link layer adds a trailer.
- Reversing the order. Encapsulation goes down (7 to 1) at the sender; decapsulation goes up (1 to 7) at the receiver.
- Writing "segment" for layer 3 or "packet" for layer 2.

## How this shows up in the mid

MCQs: "The PDU of the Data Link layer is?" (frame), "Which layer adds a trailer?" (Data Link), "A switch operates at?" (layer 2). Short question: "Explain encapsulation with a diagram."`,
    mcqs: [
      {
        q: "What is the PDU at the Transport layer when TCP is used?",
        options: ["Frame", "Packet", "Segment", "Bit"],
        answer: 2,
        explain: "TCP's PDU is a segment. Layer 3 is packet, layer 2 is frame, layer 1 is bits.",
      },
      {
        q: "Which layer adds a trailer as well as a header?",
        options: ["Data Link", "Network", "Transport", "Application"],
        answer: 0,
        explain: "The Data Link layer adds a trailer containing the FCS/CRC for error detection.",
      },
      {
        q: "During encapsulation, data moves:",
        options: [
          "up the stack at the receiver",
          "down the stack at the sender",
          "sideways between peers only",
          "only through the Physical layer",
        ],
        answer: 1,
        explain: "Headers are added as data goes down from layer 7 to layer 1 at the sender.",
      },
      {
        q: "In the mnemonic 'Do Some People Fear Birthdays', the F stands for:",
        options: ["Fragment", "File", "Firewall", "Frame"],
        answer: 3,
        explain: "Data, Segment, Packet, Frame, Bits.",
      },
      {
        q: "A switch operates at which OSI layer?",
        options: ["Physical", "Network", "Data Link", "Session"],
        answer: 2,
        explain: "A standard switch forwards frames by MAC address, which is layer 2.",
      },
      {
        q: "Which device can work at all seven layers and translate between different protocols?",
        options: ["Hub", "Repeater", "Bridge", "Gateway"],
        answer: 3,
        explain: "A gateway connects networks with different protocols and can operate at every layer.",
      },
      {
        q: "When a router receives a frame, how far up the stack does it decapsulate?",
        options: ["Layer 1", "Layer 3", "Layer 5", "Layer 7"],
        answer: 1,
        explain: "The router strips the frame, reads the IP header (layer 3) and builds a new frame for the next link.",
      },
      {
        q: "Which device separates broadcast domains?",
        options: ["Router", "Hub", "Switch", "Repeater"],
        answer: 0,
        explain: "Routers do not forward broadcasts between networks. Switches separate collision domains only.",
      },
      {
        q: "Removing headers layer by layer at the receiver is called:",
        options: ["encryption", "decapsulation", "segmentation", "routing"],
        answer: 1,
        explain: "Decapsulation is the reverse of encapsulation.",
      },
    ],
    fillBlanks: [
      {
        q: "PDU stands for Protocol Data ___.",
        answer: "Unit",
        alt: ["unit"],
      },
      {
        q: "Adding headers to data as it moves down the stack is called ___.",
        answer: "encapsulation",
      },
      {
        q: "The PDU at the Physical layer is ___.",
        answer: "bits",
        alt: ["bit"],
      },
      {
        q: "A hub works at OSI layer ___.",
        answer: "1",
        alt: ["one"],
      },
      {
        q: "The Data Link trailer carries the FCS, which uses a ___ check to detect errors.",
        answer: "CRC",
        alt: ["crc", "cyclic redundancy"],
      },
    ],
    trueFalse: [
      {
        q: "Every layer from Application down to Data Link can add its own header.",
        answer: true,
        explain: "Each layer adds the control information its peer needs. The Physical layer just sends bits.",
      },
      {
        q: "The PDU at the Network layer is called a frame.",
        answer: false,
        explain: "Layer 3 is a packet. Frame is layer 2.",
      },
      {
        q: "A router creates a new Data Link frame for each link it forwards a packet onto.",
        answer: true,
        explain: "MAC addresses are hop to hop, so the frame is rebuilt at every router.",
      },
      {
        q: "A switch gives each of its ports a separate broadcast domain.",
        answer: false,
        explain: "A switch separates collision domains. Broadcast domains are separated by routers (or VLANs).",
      },
      {
        q: "End hosts such as laptops and cloud servers implement all seven layers.",
        answer: true,
        explain: "The application runs on the host, so its stack goes from Physical up to Application.",
      },
    ],
    flashcards: [
      { front: "Encapsulation", back: "Each layer adds its header (Data Link also adds a trailer) as data goes down the sender's stack." },
      { front: "Decapsulation", back: "Each layer reads and removes its own header as data goes up the receiver's stack." },
      { front: "PDU per layer", back: "5-7: data, 4: segment/datagram, 3: packet, 2: frame, 1: bits." },
      { front: "PDU mnemonic", back: "Do Some People Fear Birthdays: Data, Segment, Packet, Frame, Bits." },
      { front: "Which layer adds a trailer?", back: "Data Link (FCS/CRC)." },
      { front: "What does a header tell the peer?", back: "Who the data is for, where it came from, how to deliver it, what type it is." },
      { front: "Devices: L1 / L2 / L3", back: "Hub, repeater / switch, bridge, NIC / router." },
      { front: "Gateway", back: "Connects networks using different protocols; can work at all layers. An IoT gateway turns Zigbee or BLE into IP/MQTT." },
      { front: "Collision vs broadcast domains", back: "Switch splits collision domains; router splits broadcast domains." },
    ],
    examples: [
      {
        title: "Mnemonics for this topic",
        items: [
          "Layer order bottom-up: Please Do Not Throw Sausage Pizza Away.",
          "PDUs top-down: Do Some People Fear Birthdays (Data, Segment, Packet, Frame, Bits).",
          "Devices bottom-up: Hubs Switch Routes (Hub L1, Switch L2, Router L3).",
        ],
      },
      {
        title: "A sensor reading being encapsulated",
        items: [
          "Application: the reading 'temp=31.5' becomes an MQTT PUBLISH message.",
          "Transport: TCP adds a header with source port and destination port 1883: now a segment.",
          "Network: IP adds source and destination IP addresses: now a packet.",
          "Data Link: Wi-Fi adds MAC addresses in front and an FCS behind: now a frame.",
          "Physical: the frame leaves the antenna as radio signals (bits).",
        ],
      },
    ],
    exercises: [
      {
        problem: "Explain data encapsulation and decapsulation with the help of a diagram.",
        solution: `Encapsulation happens at the sender. Data moves down the layers and each layer adds a header with the control information its peer layer needs (addresses, ports, sequence numbers, type). The Data Link layer also adds a trailer with the FCS for error detection. The Physical layer then sends the result as bits.

\`\`\`
 L7  [ DATA ]
 L4  [H4][ DATA ]                       segment
 L3  [H3][H4][ DATA ]                   packet
 L2  [H2][H3][H4][ DATA ][T2]           frame
 L1  010110101110...                    bits
\`\`\`

Decapsulation happens at the receiver. Bits move up the layers; each layer checks and removes its own header (and the Data Link layer its trailer) and passes the rest up, until the application gets the original data. The postal analogy from the slides: a letter goes into an envelope, then a mailbag, then a truck, and is unwrapped in reverse at the destination.`,
      },
      {
        problem: "Name the PDU at each OSI layer and one device that works at layers 1, 2 and 3.",
        solution: `| Layer | PDU | Device |
|---|---|---|
| 7, 6, 5 | data | gateway / host |
| 4 Transport | segment (TCP), datagram (UDP) | host, firewall |
| 3 Network | packet | router |
| 2 Data Link | frame | switch, bridge |
| 1 Physical | bits | hub, repeater |

Mnemonic: Do Some People Fear Birthdays.`,
      },
      {
        problem: "Explain what an IoT gateway does and why it is said to work at multiple OSI layers.",
        solution: `An IoT gateway connects local devices that use low-power protocols (Zigbee, BLE, LoRa) to an IP network and the cloud.

On the sensor side it receives Zigbee or BLE frames (layers 1 and 2), extracts the sensor reading, and may filter or convert it (application-level processing). On the Internet side it puts the reading into an MQTT or HTTP message, wraps it in TCP and IP, and sends it over Wi-Fi, Ethernet or cellular.

Because it must understand both protocol stacks and translate between them, from the radio up to the application message, it works across all layers. That matches the textbook definition of a gateway.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lec 6.1 TCP/IP history and layers
  // ---------------------------------------------------------------------------
  {
    id: "iot-tcpip-layers",
    number: 5,
    chapter: LEC6,
    title: "The TCP/IP Model: Where It Came From and Its Layers",
    summary:
      "TCP/IP's origin at DARPA, the 4-layer and 5-layer versions you will see in books and slides, what each layer does, and how its layers line up against the seven OSI layers.",
    content: `## Where TCP/IP came from

From the slides: in the late 1960s the US Defense Advanced Research Projects Agency (DARPA) started the work that became the Transmission Control Protocol / Internet Protocol (TCP/IP), to connect the different computer networks of the defence department. ARPANET switched over to TCP/IP on 1 January 1983. Today the whole Internet uses TCP/IP to connect networks across the world.

The name comes from its two best-known protocols, TCP and IP, but TCP/IP is a whole **protocol suite**: a family of protocols (HTTP, DNS, UDP, ICMP, ARP and many more) organised in layers.

One big difference from OSI: with TCP/IP the protocols came first and the model was written afterwards to describe them. With OSI, the model came first.

## 4 layers or 5?

The slides say "4 or 5 layers", and both versions are correct. They differ only at the bottom.

\`\`\`
   4-layer TCP/IP (RFC 1122)        5-layer TCP/IP (Forouzan / hybrid)
  +-------------------------+      +-------------------------+
  | Application             |      | Application             |
  +-------------------------+      +-------------------------+
  | Transport               |      | Transport               |
  +-------------------------+      +-------------------------+
  | Internet                |      | Network                 |
  +-------------------------+      +-------------------------+
  | Network Access (Link)   |      | Data Link               |
  |                         |      +-------------------------+
  |                         |      | Physical                |
  +-------------------------+      +-------------------------+
\`\`\`

The original 4-layer model treats everything below IP as one "network access" (also called link or host-to-network) layer. The 5-layer version used in Forouzan's book and many courses splits it back into Data Link and Physical, which makes it easier to compare with OSI. If a question just says "the TCP/IP model", draw the 4-layer version and mention that some books use 5.

## Mapping onto OSI

\`\`\`
        OSI                         TCP/IP (4-layer)
  7 Application   \\
  6 Presentation   >------------->  Application
  5 Session       /
  4 Transport     -------------->   Transport
  3 Network       -------------->   Internet
  2 Data Link     \\
  1 Physical      />------------->  Network Access
\`\`\`

The three top OSI layers collapse into one TCP/IP Application layer. Whatever Session and Presentation did (encryption, data formats, keeping a session) is handled by the application protocol itself. For example, HTTPS does its encryption with TLS inside the application's own stack.

## What each TCP/IP layer does

| TCP/IP layer | Job | Main protocols | PDU |
|---|---|---|---|
| Application | services for user programs; includes OSI 5 to 7 | HTTP, FTP, SMTP, DNS, Telnet, IMAP, MQTT, CoAP | message / data |
| Transport | process-to-process delivery, ports, reliability | TCP, UDP (also SCTP) | segment / datagram |
| Internet | logical addressing and routing across networks | IP, ICMP, ARP, IGMP | packet (IP datagram) |
| Network Access | putting frames on the local medium; MAC addresses | Ethernet, Wi-Fi, Token Ring, PPP | frame, then bits |

The Internet layer is the glue of the whole Internet. Every device that wants to be reachable on the Internet must speak IP, whatever link technology sits below it. That is why IoT protocols like 6LoWPAN exist: they let tiny sensors speak IPv6.

## IoT example

A smart meter in a house sends its reading to the electricity company:

- Application: the meter publishes the reading using MQTT.
- Transport: TCP carries it to port 1883 (or 8883 with TLS) on the broker.
- Internet: IP routes it from the home network through the ISP to the company's server.
- Network Access: Wi-Fi from the meter to the home router, then fibre and Ethernet beyond.

## Common mistakes

- Saying TCP/IP has 7 layers. It has 4 (or 5 in the expanded version).
- Calling the TCP/IP layer 3 the "Network Access" layer. Network Access is the bottom layer; the third from the top is Internet.
- Thinking TCP/IP has separate Session and Presentation layers. They are folded into Application.
- Believing TCP/IP was designed from the OSI model. TCP/IP is older in practice; it was built and used first.

## How this shows up in the mid

"Draw the TCP/IP model and map it to OSI" is a likely short question. MCQs ask "Which organisation developed TCP/IP?" (DARPA), "Which TCP/IP layer corresponds to OSI's Network layer?" (Internet), and "How many layers in TCP/IP?" (4).`,
    mcqs: [
      {
        q: "Which agency originally developed TCP/IP?",
        options: ["ISO", "IEEE", "DARPA", "ITU"],
        answer: 2,
        explain: "The slides credit the US Defense Advanced Research Projects Agency (DARPA), late 1960s.",
      },
      {
        q: "How many layers does the original TCP/IP model have?",
        options: ["4", "3", "5", "7"],
        answer: 0,
        explain: "Application, Transport, Internet, Network Access. Some books expand it to 5 by splitting the bottom layer.",
      },
      {
        q: "Which TCP/IP layer corresponds to the OSI Network layer?",
        options: ["Network Access", "Transport", "Application", "Internet"],
        answer: 3,
        explain: "The Internet layer, where IP lives, matches OSI layer 3.",
      },
      {
        q: "Which OSI layers are merged into the TCP/IP Application layer?",
        options: [
          "Transport, Session, Presentation",
          "Session, Presentation, Application",
          "Network, Transport, Session",
          "Data Link and Physical",
        ],
        answer: 1,
        explain: "OSI layers 5, 6 and 7 map onto one TCP/IP Application layer.",
      },
      {
        q: "In the 4-layer TCP/IP model, OSI's Data Link and Physical layers together become the:",
        options: ["Internet layer", "Transport layer", "Network Access layer", "Session layer"],
        answer: 2,
        explain: "The bottom TCP/IP layer is Network Access (also called Link or Host-to-Network).",
      },
      {
        q: "Which statement about the history of TCP/IP is correct?",
        options: [
          "The protocols were built and used first, and the model was described afterwards",
          "It was designed by ISO after OSI was finished",
          "It was created for mobile phones in the 1990s",
          "It has never been used on the real Internet",
        ],
        answer: 0,
        explain: "TCP/IP grew out of ARPANET work; the layered model describes protocols that already existed.",
      },
      {
        q: "The 5-layer TCP/IP model has which layers, from top to bottom?",
        options: [
          "Application, Session, Transport, Network, Physical",
          "Application, Transport, Internet, Data Link, Physical",
          "Application, Transport, Network, Data Link, Physical",
          "Application, Presentation, Transport, Network, Link",
        ],
        answer: 2,
        explain: "Forouzan's 5-layer version: Application, Transport, Network, Data Link, Physical.",
      },
      {
        q: "Which protocol lives at the TCP/IP Internet layer?",
        options: ["IP", "HTTP", "UDP", "Ethernet"],
        answer: 0,
        explain: "IP is the Internet layer protocol. HTTP is Application, UDP is Transport, Ethernet is Network Access.",
      },
      {
        q: "Why does an IoT sensor need IP (for example via 6LoWPAN) to be reachable on the Internet?",
        options: [
          "IP encrypts the data",
          "The Internet layer is common to every network on the Internet",
          "IP is needed to power the radio",
          "Without IP the sensor cannot take readings",
        ],
        answer: 1,
        explain: "Whatever link technology is underneath, every Internet host speaks IP. That shared layer is what joins all the networks together.",
      },
    ],
    fillBlanks: [
      {
        q: "TCP/IP stands for Transmission Control Protocol / ___ Protocol.",
        answer: "Internet",
        alt: ["internet"],
      },
      {
        q: "TCP/IP was developed by ___ to connect defence department networks.",
        answer: "DARPA",
        alt: ["darpa", "arpa"],
      },
      {
        q: "The TCP/IP layer that matches OSI's Network layer is the ___ layer.",
        answer: "Internet",
        alt: ["internet"],
      },
      {
        q: "The bottom layer of the 4-layer TCP/IP model is the Network ___ layer.",
        answer: "Access",
        alt: ["access", "interface"],
      },
      {
        q: "In TCP/IP, the OSI Session and Presentation functions are handled inside the ___ layer.",
        answer: "Application",
        alt: ["application"],
      },
    ],
    trueFalse: [
      {
        q: "TCP/IP has separate Session and Presentation layers.",
        answer: false,
        explain: "They are merged into the TCP/IP Application layer.",
      },
      {
        q: "Both a 4-layer and a 5-layer version of TCP/IP appear in textbooks.",
        answer: true,
        explain: "The 5-layer version splits Network Access into Data Link and Physical.",
      },
      {
        q: "The TCP/IP Transport layer corresponds to the OSI Transport layer.",
        answer: true,
        explain: "Both are layer 4 and both handle process-to-process delivery.",
      },
      {
        q: "TCP/IP is a single protocol called TCP running over IP, with nothing else in the suite.",
        answer: false,
        explain: "It is a whole suite: HTTP, DNS, UDP, ICMP, ARP and many more.",
      },
      {
        q: "The Internet today runs on TCP/IP.",
        answer: true,
        explain: "The slides say so directly: the Internet uses TCP/IP to connect networks across the world.",
      },
    ],
    flashcards: [
      { front: "Who developed TCP/IP and when?", back: "DARPA, starting in the late 1960s, to connect defence networks. ARPANET switched to TCP/IP in 1983." },
      { front: "4 TCP/IP layers (top to bottom)", back: "Application, Transport, Internet, Network Access (Link)." },
      { front: "5-layer TCP/IP", back: "Application, Transport, Network, Data Link, Physical." },
      { front: "OSI 5, 6, 7 map to", back: "TCP/IP Application layer." },
      { front: "OSI 3 maps to", back: "TCP/IP Internet layer." },
      { front: "OSI 1 and 2 map to", back: "TCP/IP Network Access layer." },
      { front: "Protocols per TCP/IP layer", back: "App: HTTP, DNS, FTP, MQTT. Transport: TCP, UDP. Internet: IP, ICMP, ARP. Network Access: Ethernet, Wi-Fi." },
      { front: "Model-first or protocols-first?", back: "OSI: model first. TCP/IP: protocols first, model described after." },
      { front: "Other names for Network Access layer", back: "Link layer, Host-to-Network layer, Network Interface layer." },
    ],
    examples: [
      {
        title: "OSI to TCP/IP mapping memory trick",
        items: [
          "Top three OSI layers (All People Seem) squash into Application.",
          "T stays T: Transport maps to Transport.",
          "N becomes I: OSI Network = TCP/IP Internet.",
          "Bottom two (Data Processing) squash into Network Access.",
          "So 3 + 1 + 1 + 2 = 7 OSI layers onto 4 TCP/IP layers.",
        ],
      },
      {
        title: "A smart meter on TCP/IP",
        items: [
          "Application: MQTT PUBLISH 'meter/42/kwh = 3.7'.",
          "Transport: TCP to port 1883 on the broker.",
          "Internet: IP routes from 192.168.1.20 through the ISP to the company's server.",
          "Network Access: Wi-Fi frames to the home router, then fibre to the ISP.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Draw the layers of the TCP/IP model and explain the function of each layer.",
        solution: `\`\`\`
 +--------------------+
 | Application        |  HTTP, FTP, SMTP, DNS, Telnet, MQTT
 +--------------------+
 | Transport          |  TCP, UDP
 +--------------------+
 | Internet           |  IP, ICMP, ARP
 +--------------------+
 | Network Access     |  Ethernet, Wi-Fi, Token Ring
 +--------------------+
\`\`\`

Application: provides services to user programs (web, email, file transfer, name lookup). It also covers what OSI calls Session and Presentation.

Transport: delivers data from a process on one host to a process on another, using port numbers. TCP is connection-oriented and reliable; UDP is connectionless and fast.

Internet: gives each host a logical IP address and routes packets across many networks. ICMP reports errors.

Network Access: sends frames over the local medium using physical (MAC) addresses, and turns them into signals on the wire or radio.

Mention that some books split Network Access into Data Link and Physical, giving 5 layers.`,
      },
      {
        problem: "Map the layers of the TCP/IP model to the layers of the OSI model.",
        solution: `\`\`\`
 OSI                   TCP/IP
 7 Application  \\
 6 Presentation  > --> Application
 5 Session      /
 4 Transport    -----> Transport
 3 Network      -----> Internet
 2 Data Link    \\
 1 Physical     / ---> Network Access
\`\`\`

Three OSI layers (5, 6, 7) become one TCP/IP Application layer. Transport maps one to one. OSI Network becomes the Internet layer. OSI Data Link and Physical become Network Access (or stay separate in the 5-layer version).`,
      },
      {
        problem: "Write a short note on the development of TCP/IP.",
        solution: `TCP/IP was started in the late 1960s by DARPA (Defense Advanced Research Projects Agency) of the US Department of Defense, to interconnect the different computer networks used by the defence department. It grew out of the ARPANET project, and ARPANET adopted TCP/IP on 1 January 1983.

It is named after its two main protocols, TCP (transport) and IP (internet), but it is a full protocol suite with protocols like HTTP, FTP, DNS, UDP and ICMP. The protocols were developed and used first; the layered model (4 layers, or 5 in some books) was described afterwards. Today the Internet uses TCP/IP to connect networks across the world.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lec 6.2 Protocols per layer
  // ---------------------------------------------------------------------------
  {
    id: "iot-tcpip-protocols",
    number: 6,
    chapter: LEC6,
    title: "TCP/IP Protocols Layer by Layer: HTTP, TCP vs UDP, IP, ICMP, ARP, Ethernet",
    summary:
      "The protocols the slides list at each TCP/IP layer (HTTP, FTP, Telnet, IMAP; TCP and UDP; IP and ICMP; Ethernet with CSMA/CD and Token Ring), plus DNS, ARP and DHCP, the TCP three-way handshake, and the well-known port numbers.",
    content: `## Application layer protocols

The slides list four. The rest are ones you will meet everywhere.

| Protocol | What it does | Transport | Port |
|---|---|---|---|
| HTTP | browser and web server communication | TCP | 80 |
| HTTPS | HTTP encrypted with TLS | TCP | 443 |
| FTP | file transfer | TCP | 21 (control), 20 (data) |
| Telnet | remote login, plain text, insecure | TCP | 23 |
| SSH | encrypted remote login | TCP | 22 |
| SMTP | sending email | TCP | 25 |
| POP3 | downloads email, usually removes it from server | TCP | 110 |
| IMAP | retrieves email but keeps it on the server, organised in folders | TCP | 143 |
| DNS | name to IP address lookup | UDP (TCP for big replies) | 53 |
| DHCP | gives a device an IP address automatically | UDP | 67 server, 68 client |
| MQTT | IoT publish/subscribe messaging | TCP | 1883 (8883 with TLS) |
| CoAP | lightweight web protocol for constrained IoT devices | UDP | 5683 |

IMAP vs POP3 is a favourite: IMAP keeps your mail on the server so it syncs across your phone and laptop. POP3 downloads it to one device.

## Transport layer: TCP vs UDP

From the slides: TCP is connection-oriented (a connection is set up before data is sent) and reliable. UDP is connectionless (data is sent without setting up a connection), fast but unreliable.

TCP sets up a connection with the **three-way handshake**:

\`\`\`
  Client                          Server
    | ------- SYN (seq=x) -------->  |   1. "I want to talk"
    | <---- SYN-ACK (seq=y,ack=x+1)- |   2. "OK, and I want to talk too"
    | ------- ACK (ack=y+1) ------->  |   3. "Got it", connection open
    |  ...... data flows .......     |
\`\`\`

| Feature | TCP | UDP |
|---|---|---|
| Connection | connection-oriented | connectionless |
| Reliability | acks, retransmission, sequencing | none |
| Flow and congestion control | yes | no |
| Header size | 20 to 60 bytes | 8 bytes |
| Speed | slower | faster |
| Good for | web, email, file transfer, MQTT | DNS, streaming, VoIP, games, CoAP |

## Port number ranges

Port numbers are 16 bits, so 0 to 65535.

| Range | Name | Example |
|---|---|---|
| 0 to 1023 | well-known ports | 80 HTTP, 443 HTTPS, 53 DNS |
| 1024 to 49151 | registered ports | 1883 MQTT, 3306 MySQL |
| 49152 to 65535 | dynamic / ephemeral | the random port your browser uses for one connection |

## Internet (network) layer

**IP** (slides): path selection, routing and addressing. IP is connectionless and best effort. It does not promise delivery; that is TCP's job.

**ICMP** (Internet Control Message Protocol, slides): sends error messages, relying on IP to carry them. For example when a requested service is not available, or a host or router could not be reached. The ping and traceroute tools use ICMP.

**ARP** (Address Resolution Protocol): finds the MAC address that belongs to a known IP address on the local network. The host broadcasts "Who has 192.168.1.1?" and the owner replies with its MAC address. Forouzan places ARP at the network layer; other books say it sits between layers 2 and 3. Either answer is accepted if you explain it.

**IGMP**: manages multicast groups (brief mention is enough).

## Network Access (link) layer

**Ethernet** (slides): the standard wired LAN technology (IEEE 802.3). Classic shared Ethernet uses **CSMA/CD**, Carrier Sense Multiple Access with Collision Detection:

1. Carrier sense: listen; if the cable is busy, wait.
2. Multiple access: many stations share the same cable.
3. Collision detection: if two stations transmit together and collide, both stop, send a jam signal, wait a random backoff time and try again.

Modern full-duplex switched Ethernet has no collisions, so CSMA/CD is mostly historical, but it is what the slides teach.

**Token Ring** (slides, IEEE 802.5): stations are arranged in a ring and pass a special frame called a token. Only the station holding the token may transmit, so there are no collisions. It is now obsolete.

Also here: Wi-Fi (802.11, CSMA/CA), PPP, and for IoT, IEEE 802.15.4, BLE and LoRa radios at the bottom of their stacks.

## Common mistakes

- Swapping IMAP and POP3 behaviour.
- Saying DNS is a transport protocol. It is an application protocol that usually runs over UDP 53.
- Saying ICMP is reliable or that it carries user data. It reports errors and diagnostics.
- Thinking ARP maps names to IP addresses. That is DNS; ARP maps IP to MAC.
- Mixing CSMA/CD (Ethernet) with CSMA/CA (Wi-Fi).

## How this shows up in the mid

MCQs on ports (HTTP 80, HTTPS 443, FTP 21, Telnet 23, DNS 53), on which protocol does what (ICMP errors, ARP IP-to-MAC, IMAP keeps mail on server), and "TCP vs UDP" as a short question with the handshake diagram.`,
    mcqs: [
      {
        q: "According to the slides, which protocol retrieves email while keeping it on the server and organised in folders?",
        options: ["SMTP", "POP3", "FTP", "IMAP"],
        answer: 3,
        explain: "IMAP keeps mail on the server. POP3 usually downloads and removes it. SMTP sends mail.",
      },
      {
        q: "The default port for HTTPS is:",
        options: ["443", "80", "21", "8080"],
        answer: 0,
        explain: "HTTPS uses 443. HTTP uses 80, FTP control uses 21.",
      },
      {
        q: "Which protocol sends error messages such as 'host unreachable'?",
        options: ["ARP", "ICMP", "UDP", "DHCP"],
        answer: 1,
        explain: "ICMP reports errors and is used by ping and traceroute.",
      },
      {
        q: "ARP is used to find:",
        options: [
          "the IP address for a domain name",
          "the port number of a service",
          "the MAC address for a known IP address",
          "the shortest route to a network",
        ],
        answer: 2,
        explain: "ARP maps an IP address to a MAC address on the local network. DNS maps names to IPs.",
      },
      {
        q: "What is the correct order of the TCP three-way handshake?",
        options: ["SYN, ACK, SYN-ACK", "ACK, SYN, SYN-ACK", "SYN-ACK, SYN, ACK", "SYN, SYN-ACK, ACK"],
        answer: 3,
        explain: "Client sends SYN, server replies SYN-ACK, client confirms with ACK.",
      },
      {
        q: "Classic Ethernet controls access to the shared cable using:",
        options: ["CSMA/CD", "CSMA/CA", "Token passing", "Polling"],
        answer: 0,
        explain: "The slides list Ethernet with CSMA/CD. Token passing is Token Ring; CSMA/CA is Wi-Fi.",
      },
      {
        q: "Which port does Telnet use?",
        options: ["22", "25", "23", "53"],
        answer: 2,
        explain: "Telnet uses 23. SSH is 22, SMTP is 25, DNS is 53.",
      },
      {
        q: "Which statement about IP is correct?",
        options: [
          "IP guarantees delivery of every packet",
          "IP is connectionless and best effort",
          "IP works at the Transport layer",
          "IP uses port numbers to identify processes",
        ],
        answer: 1,
        explain: "IP does addressing and routing with no delivery guarantee. Reliability comes from TCP.",
      },
      {
        q: "Which IoT protocol runs over UDP on port 5683?",
        options: ["MQTT", "HTTP", "CoAP", "FTP"],
        answer: 2,
        explain: "CoAP uses UDP 5683. MQTT uses TCP 1883.",
      },
      {
        q: "In Token Ring, a station may transmit only when:",
        options: [
          "the cable is silent",
          "it holds the token",
          "the router allows it",
          "it detects a collision",
        ],
        answer: 1,
        explain: "Token passing gives the right to transmit to whoever holds the token, so collisions do not happen.",
      },
    ],
    fillBlanks: [
      {
        q: "DNS normally uses port ___.",
        answer: "53",
      },
      {
        q: "FTP uses port ___ for control commands.",
        answer: "21",
      },
      {
        q: "The protocol that maps an IP address to a MAC address is ___.",
        answer: "ARP",
        alt: ["arp", "address resolution protocol"],
      },
      {
        q: "The default port for MQTT without TLS is ___.",
        answer: "1883",
      },
      {
        q: "CSMA/CD stands for Carrier Sense Multiple Access with Collision ___.",
        answer: "Detection",
        alt: ["detection"],
      },
      {
        q: "The ping command uses the ___ protocol.",
        answer: "ICMP",
        alt: ["icmp"],
      },
    ],
    trueFalse: [
      {
        q: "UDP sends data without first establishing a connection.",
        answer: true,
        explain: "That is what connectionless means, as the slides put it.",
      },
      {
        q: "Telnet encrypts everything you type.",
        answer: false,
        explain: "Telnet sends everything, including passwords, in plain text. SSH is the encrypted replacement.",
      },
      {
        q: "Port numbers 0 to 1023 are called well-known ports.",
        answer: true,
        explain: "HTTP 80, HTTPS 443, DNS 53 and others sit in this range.",
      },
      {
        q: "ICMP is used to transfer files between hosts.",
        answer: false,
        explain: "ICMP carries error and control messages. File transfer is FTP.",
      },
      {
        q: "MQTT runs over TCP.",
        answer: true,
        explain: "MQTT relies on TCP's reliable, ordered delivery (port 1883, or 8883 with TLS).",
      },
      {
        q: "In CSMA/CD, after a collision both stations wait a random time before retrying.",
        answer: true,
        explain: "The random backoff makes it unlikely they collide again.",
      },
    ],
    flashcards: [
      { front: "HTTP / HTTPS ports", back: "80 / 443." },
      { front: "FTP, SSH, Telnet, SMTP ports", back: "FTP 21 (control) and 20 (data), SSH 22, Telnet 23, SMTP 25." },
      { front: "DNS, DHCP, POP3, IMAP ports", back: "DNS 53, DHCP 67/68, POP3 110, IMAP 143." },
      { front: "MQTT and CoAP ports", back: "MQTT TCP 1883 (8883 TLS); CoAP UDP 5683." },
      { front: "IMAP vs POP3", back: "IMAP keeps mail on the server in folders (syncs devices). POP3 downloads it to one device." },
      { front: "ICMP", back: "Internet Control Message Protocol: error and diagnostic messages carried by IP. Used by ping." },
      { front: "ARP", back: "Address Resolution Protocol: finds the MAC address for a known IP on the local network." },
      { front: "TCP three-way handshake", back: "SYN, SYN-ACK, ACK." },
      { front: "CSMA/CD steps", back: "Listen before sending; if a collision happens, stop, send jam, wait random backoff, retry." },
      { front: "Port ranges", back: "0-1023 well-known, 1024-49151 registered, 49152-65535 dynamic." },
    ],
    examples: [
      {
        title: "What happens when you open a website",
        items: [
          "DHCP gave your laptop an IP address when it joined Wi-Fi.",
          "DNS (UDP 53) turns facebook.com into an IP address.",
          "ARP finds the MAC address of your router so the first frame can be sent.",
          "TCP does the SYN, SYN-ACK, ACK handshake with the server on port 443.",
          "HTTPS fetches the page; IP routes every packet; Wi-Fi and Ethernet carry the frames.",
        ],
      },
      {
        title: "Port memory hooks",
        items: [
          "FTP 20/21, SSH 22, Telnet 23, SMTP 25: four services in a row in the low twenties.",
          "DNS 53, HTTP 80, POP3 110, IMAP 143, HTTPS 443.",
          "MQTT 1883 (8883 secure), CoAP 5683 for IoT.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Explain the protocols used at each layer of the TCP/IP model.",
        solution: `Application layer: HTTP (browser to web server), FTP (file transfer), Telnet (remote login), IMAP (retrieve email and keep it on the server in folders), plus SMTP, DNS, DHCP, and IoT protocols MQTT and CoAP.

Transport layer: TCP, which is connection-oriented (connection set up before sending) and reliable; UDP, which is connectionless (sends without a connection), fast but unreliable.

Internet layer: IP for path selection, routing and addressing; ICMP for error messages (service not available, host or router unreachable), carried by IP; ARP to find MAC addresses from IP addresses.

Link (Network Access) layer: Ethernet, which uses CSMA/CD to share the medium; Token Ring, which uses a circulating token; also Wi-Fi.`,
      },
      {
        problem: "Explain the TCP three-way handshake with a diagram.",
        solution: `TCP is connection-oriented, so both sides agree to talk and exchange starting sequence numbers before sending data.

\`\`\`
 Client                               Server
   |--- SYN, seq = x ------------------->|   1
   |<-- SYN + ACK, seq = y, ack = x+1 ---|   2
   |--- ACK, ack = y+1 ----------------->|   3
   |========= connection established ====|
\`\`\`

1. The client sends SYN with its initial sequence number x.
2. The server replies with SYN-ACK: its own sequence number y, and acknowledgement x+1.
3. The client sends ACK with acknowledgement y+1.

Now data can flow both ways. UDP has no handshake, which is one reason it is faster.`,
      },
      {
        problem: "Explain how CSMA/CD works in Ethernet.",
        solution: `CSMA/CD (Carrier Sense Multiple Access with Collision Detection) is the access method of classic shared Ethernet.

1. Carrier sense: a station listens to the cable before sending. If it is busy, it waits.
2. Multiple access: all stations share the same cable and any of them may try to send.
3. Collision detection: two stations may both see an idle cable and start together. Their signals collide. Each one detects the collision, stops transmitting, and sends a short jam signal so everyone knows.
4. Backoff: each station waits a random time (binary exponential backoff) and tries again, so a second collision is unlikely.

Modern switched, full-duplex Ethernet does not have collisions, so CSMA/CD is rarely active today. Wi-Fi uses CSMA/CA instead because a radio cannot reliably detect collisions while it is transmitting.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lec 6.3 Encapsulation and addressing in TCP/IP
  // ---------------------------------------------------------------------------
  {
    id: "iot-tcpip-addressing",
    number: 7,
    chapter: LEC6,
    title: "Packet Encapsulation and the Four Address Types in TCP/IP",
    summary:
      "How a message like 'Hey! What's up?' gets wrapped in TCP, IP and Ethernet headers (with the header sizes from the slides), and the four levels of addresses in TCP/IP: physical, logical, port and specific.",
    content: `## Encapsulation in TCP/IP

The slides say it simply: data is sent down the protocol stack, and each layer adds to it by **prepending** a header. The receiver strips them off in reverse.

The slides show a Facebook message, "Hey! What's up?", leaving as a full packet with several headers. Each header carries details like who the data is for, where it came from, how it should be delivered, and what type of data it is.

\`\`\`
 Application            [            "Hey! What's up?"             ]
 Transport         [TCP |            application data              ]
 Internet      [IP |TCP |            application data              ]
 Link   [Eth hdr|IP |TCP |            application data              |FCS]
\`\`\`

## Header sizes from the slides

| Part | Size | Notes |
|---|---|---|
| Ethernet header | 22 bytes | 8 bytes preamble/SFD + 6 destination MAC + 6 source MAC + 2 type |
| IP header | 20 bytes | IPv4 minimum, without options |
| TCP header | 20 bytes | minimum, without options |
| Data | up to 1500 bytes | the slide labels it "64 to 1500 bytes" |
| Ethernet trailer (FCS) | 4 bytes | CRC for error detection |

A note on that "64 to 1500" label: 1500 bytes is the normal Ethernet payload limit (the MTU). 64 bytes is actually the **minimum Ethernet frame** size; the minimum payload inside it is 46 bytes. If the exam copies the slide, write the slide's numbers, but know where they come from.

Quick arithmetic: with a full 1500-byte payload, the IP and TCP headers take 40 bytes, so the most application data per standard Ethernet frame is 1460 bytes.

## Four levels of addresses

The slides list four kinds of address used in a TCP/IP internet: **physical, logical, port and specific**. Each belongs to a different layer.

| Address | Layer | Size / form | Example | Scope |
|---|---|---|---|---|
| Physical (MAC) | Link (Data Link) | 48 bits, hex | 07:01:02:01:2C:4B | local link; changes at each hop |
| Logical (IP) | Internet (Network) | 32 bits IPv4 / 128 bits IPv6 | 192.168.1.10 | whole Internet; stays the same end to end |
| Port | Transport | 16 bits | 80, 443, 1883 | identifies a process on a host |
| Specific | Application | user-friendly text | ali@gmail.com, facebook.com | used by people and apps |

The slide's examples of specific addresses are an email address (ali@gmail.com) and a URL (facebook.com).

\`\`\`
  Application  ---->  specific address  (ali@gmail.com, facebook.com)
  Transport    ---->  port address      (443)
  Internet     ---->  logical address   (IP 31.13.71.36)
  Link         ---->  physical address  (MAC 07:01:02:01:2C:4B)
\`\`\`

## How the addresses get translated

- Specific to logical: **DNS** turns facebook.com into an IP address.
- Logical to physical: **ARP** finds the MAC address of the next hop for a given IP.
- The port comes from the protocol (HTTPS means 443 on the server) and the client's OS picks a random ephemeral port for its side.

## Physical vs logical address, in one example

A packet travels from your phone to a server through two routers. The IP addresses in the packet (source = your phone, destination = server) do not change. The MAC addresses in the frame are rewritten at every router, because each hop is a different link. That is why we need both: the IP says where the packet is finally going, the MAC says which device on this link gets it next.

## Common mistakes

- Calling the MAC address "logical". MAC is physical; IP is logical.
- Saying port numbers are 32 bits. They are 16 bits.
- Forgetting the fourth type, "specific" address (email, URL).
- Mixing the translators: DNS is name to IP, ARP is IP to MAC.

## How this shows up in the mid

"Name the four types of addresses in TCP/IP with an example of each" is a neat short question. MCQs: "Which address is used at the transport layer?" (port), "Size of a MAC address?" (48 bits), "IP header minimum size?" (20 bytes).`,
    mcqs: [
      {
        q: "Which address type is used at the Transport layer?",
        options: ["Physical", "Logical", "Port", "Specific"],
        answer: 2,
        explain: "Port addresses identify processes, which is the Transport layer's job.",
      },
      {
        q: "An email address like ali@gmail.com is which type of address in TCP/IP?",
        options: ["Specific", "Physical", "Logical", "Port"],
        answer: 0,
        explain: "The slides give email addresses and URLs as examples of specific (application-level) addresses.",
      },
      {
        q: "The minimum size of an IPv4 header is:",
        options: ["8 bytes", "14 bytes", "60 bytes", "20 bytes"],
        answer: 3,
        explain: "IPv4 header is 20 bytes without options (up to 60 with options).",
      },
      {
        q: "Which address stays the same from source to final destination as a packet crosses routers?",
        options: ["MAC address", "IP address", "Both", "Neither"],
        answer: 1,
        explain: "The IP (logical) address is end to end. MAC addresses are rewritten at each hop.",
      },
      {
        q: "During encapsulation, each layer adds its header by:",
        options: ["appending it at the end", "prepending it in front", "replacing the data", "encrypting the data"],
        answer: 1,
        explain: "The slides say each layer adds to the data by prepending headers. Only the link layer also appends a trailer.",
      },
      {
        q: "How many bytes is the Ethernet FCS (trailer)?",
        options: ["4", "2", "20", "22"],
        answer: 0,
        explain: "The Frame Check Sequence is a 4-byte CRC.",
      },
      {
        q: "Which protocol translates a specific address like facebook.com into a logical address?",
        options: ["ARP", "ICMP", "DHCP", "DNS"],
        answer: 3,
        explain: "DNS turns names into IP addresses.",
      },
      {
        q: "A physical address belongs to which TCP/IP layer?",
        options: ["Application", "Transport", "Link (Network Access)", "Internet"],
        answer: 2,
        explain: "The MAC (physical) address is used by the link layer to deliver frames on the local network.",
      },
      {
        q: "With a 1500-byte Ethernet payload and minimum IP and TCP headers, how much application data fits?",
        options: ["1500 bytes", "1460 bytes", "1480 bytes", "1440 bytes"],
        answer: 1,
        explain: "1500 minus 20 (IP) minus 20 (TCP) = 1460 bytes.",
      },
    ],
    fillBlanks: [
      {
        q: "The four address types in TCP/IP are physical, logical, port and ___.",
        answer: "specific",
      },
      {
        q: "A port address is ___ bits long.",
        answer: "16",
        alt: ["sixteen"],
      },
      {
        q: "The logical address used in TCP/IP is the ___ address.",
        answer: "IP",
        alt: ["ip", "internet protocol"],
      },
      {
        q: "The minimum TCP header size is ___ bytes.",
        answer: "20",
        alt: ["twenty"],
      },
      {
        q: "On standard Ethernet the maximum payload (MTU) is ___ bytes.",
        answer: "1500",
      },
    ],
    trueFalse: [
      {
        q: "The MAC address in a frame changes at each router along the path.",
        answer: true,
        explain: "Each hop is a new link, so the router builds a new frame with new MAC addresses.",
      },
      {
        q: "A URL such as facebook.com is a physical address.",
        answer: false,
        explain: "It is a specific (application-level) address. Physical means MAC.",
      },
      {
        q: "ARP maps a logical address to a physical address.",
        answer: true,
        explain: "ARP finds the MAC address for a given IP on the local network.",
      },
      {
        q: "Headers in TCP/IP encapsulation can tell the receiver what type of data is being carried.",
        answer: true,
        explain: "For example the Ethernet type field says IPv4, and the IP protocol field says TCP or UDP.",
      },
      {
        q: "An IPv6 address is 32 bits long.",
        answer: false,
        explain: "IPv6 is 128 bits. IPv4 is 32 bits.",
      },
    ],
    flashcards: [
      { front: "Four TCP/IP address types", back: "Physical (MAC), logical (IP), port, specific (email/URL)." },
      { front: "Physical address", back: "MAC, 48 bits, link layer, changes every hop. Example 07:01:02:01:2C:4B." },
      { front: "Logical address", back: "IP, 32-bit IPv4 or 128-bit IPv6, Internet layer, end to end." },
      { front: "Port address", back: "16 bits, Transport layer, identifies a process (80 = HTTP)." },
      { front: "Specific address", back: "User-friendly application address: ali@gmail.com, facebook.com." },
      { front: "Header sizes on the slide", back: "Ethernet 22 B (incl. preamble), IP 20 B, TCP 20 B, FCS 4 B, data up to 1500 B." },
      { front: "Name to IP? IP to MAC?", back: "DNS does name to IP. ARP does IP to MAC." },
      { front: "What a header tells the receiver", back: "Who the data is for, where it came from, how to deliver it, what type it is." },
      { front: "Max TCP data in one Ethernet frame", back: "1500 - 20 - 20 = 1460 bytes." },
    ],
    examples: [
      {
        title: "All four addresses in one Facebook message",
        items: [
          "Specific: you type facebook.com.",
          "Logical: DNS returns the server's IP; your phone's IP is the source.",
          "Port: destination 443 (HTTPS), source a random ephemeral port such as 52344.",
          "Physical: the frame leaving your phone carries your Wi-Fi MAC and your router's MAC.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Explain the four types of addresses used in TCP/IP with an example of each.",
        solution: `| Address | Layer | Example | Purpose |
|---|---|---|---|
| Physical | Link | MAC 07:01:02:01:2C:4B (48 bits) | delivers a frame to the next device on the local link |
| Logical | Internet | IP 192.168.1.10 (32 bits IPv4) | identifies a host uniquely across the Internet, end to end |
| Port | Transport | 80 (HTTP), 443 (HTTPS) (16 bits) | identifies the process on the host |
| Specific | Application | ali@gmail.com, facebook.com | human-friendly address used by applications |

DNS converts a specific address to a logical one. ARP converts a logical address to a physical one.`,
      },
      {
        problem: "Using the header sizes from the slides, draw an encapsulated TCP/IP packet over Ethernet and calculate the total frame size for 100 bytes of application data.",
        solution: `\`\`\`
 | Ethernet hdr | IP hdr | TCP hdr |   Data   | FCS |
 |   22 bytes   |  20 B  |  20 B   | 100 B    | 4 B |
\`\`\`

Total = 22 + 20 + 20 + 100 + 4 = 166 bytes.

The 22-byte Ethernet figure includes the 8-byte preamble/SFD. Without the preamble the frame itself is 166 - 8 = 158 bytes. Either way it is above the 64-byte minimum frame size, so no padding is needed.`,
      },
      {
        problem: "Why does a packet need both a physical address and a logical address?",
        solution: `The logical (IP) address names the final destination anywhere on the Internet, and stays the same for the whole journey. Routers use it to choose the path.

The physical (MAC) address only works on one local link. It tells the link which device should pick up the frame next, for example your home router. At every router the old frame is removed and a new one is built with new MAC addresses for the next link.

So the IP address answers "where is this going in the end?", and the MAC address answers "who on this link takes it next?". ARP connects the two by finding the MAC address of the next hop's IP.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lec 6.4 OSI vs TCP/IP
  // ---------------------------------------------------------------------------
  {
    id: "iot-tcpip-vs-osi",
    number: 8,
    chapter: LEC6,
    title: "OSI vs TCP/IP: Similarities and Differences",
    summary:
      "The full comparison between the two models: layers, who made them, model-first vs protocols-first, connection types at the network and transport layers, and why TCP/IP is the one used in practice.",
    content: `## The side-by-side picture

\`\`\`
        OSI (7)                 TCP/IP (4)
  +-----------------+     +------------------+
  | 7 Application   |     |                  |
  | 6 Presentation  |     |   Application    |
  | 5 Session       |     |                  |
  +-----------------+     +------------------+
  | 4 Transport     |     |   Transport      |
  +-----------------+     +------------------+
  | 3 Network       |     |   Internet       |
  +-----------------+     +------------------+
  | 2 Data Link     |     |  Network Access  |
  | 1 Physical      |     |                  |
  +-----------------+     +------------------+
\`\`\`

## Similarities

- Both are layered models.
- Both have an Application layer at the top and a Transport layer in the middle doing end-to-end delivery.
- Both have a layer that does logical addressing and routing (Network in OSI, Internet in TCP/IP).
- Both use the idea of encapsulation and peer layers.
- Both assume packet-switched networks.

## Differences

| Point | OSI | TCP/IP |
|---|---|---|
| Full form | Open Systems Interconnection | Transmission Control Protocol / Internet Protocol |
| Developed by | ISO (published 1984) | DARPA (US Department of Defense), from the late 1960s |
| Number of layers | 7 | 4 (5 in some books) |
| Session and Presentation | separate layers | merged into Application |
| Physical and Data Link | separate layers | merged into Network Access (4-layer version) |
| Which came first | model first, protocols later | protocols first, model described later |
| Nature | generic reference model, protocol independent | built around specific protocols (TCP, IP) |
| Use | teaching and describing networks | the actual Internet |
| Network layer service | connection-oriented and connectionless | connectionless only (IP) |
| Transport layer service | connection-oriented only | both: TCP (connection-oriented) and UDP (connectionless) |
| Layering | strict; services, interfaces and protocols clearly separated | looser; protocols can be swapped but boundaries are less formal |
| Flexibility for new protocols | protocols fit cleanly because the model is generic | the model describes existing protocols, so it is hard to apply to other stacks |

The two "service" rows come from Tanenbaum's comparison and are a classic exam point. Learn them as a pair: OSI network = both, OSI transport = connection-oriented only; TCP/IP is the reverse.

## Why TCP/IP won

- It was already running on ARPANET and in Unix systems when OSI protocols were still being written.
- It was free and simple enough to implement.
- OSI's protocols turned out complex, and some layers (Session, Presentation) were nearly empty in practice while others (Data Link, Network) were overloaded.

So we use TCP/IP to build networks and OSI to talk about them.

## Where IoT fits

IoT stacks follow TCP/IP but swap in lightweight protocols at some layers:

| TCP/IP layer | Normal web stack | Typical IoT stack |
|---|---|---|
| Application | HTTP | MQTT, CoAP |
| Transport | TCP | TCP (MQTT) or UDP (CoAP) |
| Internet | IPv4 | IPv6 over 6LoWPAN, RPL routing |
| Network Access | Ethernet, Wi-Fi | IEEE 802.15.4 (Zigbee, Thread), BLE, LoRa |

## Common mistakes

- Writing "OSI has 4 layers, TCP/IP has 7".
- Saying TCP/IP was developed by ISO, or OSI by DARPA.
- Writing "TCP/IP Transport only supports connection-oriented service". It has both, through TCP and UDP.

## How this shows up in the mid

"Compare OSI and TCP/IP models" is close to guaranteed as a long question. Draw both stacks side by side with arrows, then give a table of at least six differences and two or three similarities.`,
    mcqs: [
      {
        q: "Which model has separate Session and Presentation layers?",
        options: ["TCP/IP", "OSI", "Both", "Neither"],
        answer: 1,
        explain: "Only OSI has them. TCP/IP folds them into Application.",
      },
      {
        q: "Which statement is true?",
        options: [
          "OSI was built from protocols that already existed",
          "TCP/IP was defined by ISO",
          "In TCP/IP, the protocols came first and the model was described later",
          "Both models have exactly 7 layers",
        ],
        answer: 2,
        explain: "TCP/IP protocols were in use on ARPANET before the model was written. OSI went model first.",
      },
      {
        q: "At the transport layer, the TCP/IP model supports:",
        options: [
          "only connection-oriented service",
          "only connectionless service",
          "neither",
          "both connection-oriented and connectionless service",
        ],
        answer: 3,
        explain: "TCP is connection-oriented and UDP is connectionless.",
      },
      {
        q: "At the network layer, the TCP/IP model supports:",
        options: [
          "only connectionless service",
          "only connection-oriented service",
          "both",
          "neither",
        ],
        answer: 0,
        explain: "IP is connectionless. OSI's network layer allows both.",
      },
      {
        q: "Which model is the Internet actually built on?",
        options: ["OSI", "TCP/IP", "IoTWF", "IEEE 802"],
        answer: 1,
        explain: "TCP/IP is the working Internet stack. OSI is used as a reference.",
      },
      {
        q: "A similarity between OSI and TCP/IP is that both:",
        options: [
          "have seven layers",
          "were developed by ISO",
          "have a transport layer providing end-to-end delivery",
          "have a separate Presentation layer",
        ],
        answer: 2,
        explain: "Both have a Transport layer doing process-to-process, end-to-end delivery.",
      },
      {
        q: "Which is NOT a reason TCP/IP became more popular than OSI?",
        options: [
          "It was already working on ARPANET and Unix",
          "It was simpler to implement",
          "It had more layers than OSI",
          "OSI protocols were complex and arrived late",
        ],
        answer: 2,
        explain: "TCP/IP has fewer layers, not more.",
      },
      {
        q: "In an IoT stack, which protocol commonly replaces HTTP at the application layer?",
        options: ["MQTT", "ARP", "ICMP", "Ethernet"],
        answer: 0,
        explain: "MQTT (and CoAP) are lightweight application protocols for constrained devices.",
      },
      {
        q: "OSI is described as protocol independent because:",
        options: [
          "it has no layers",
          "it defines layers and services without being tied to particular protocols",
          "it only works with TCP",
          "it was written after TCP/IP and copied it",
        ],
        answer: 1,
        explain: "OSI is a generic model; any protocol can be described in its terms.",
      },
    ],
    fillBlanks: [
      {
        q: "OSI has 7 layers, while the original TCP/IP model has ___ layers.",
        answer: "4",
        alt: ["four"],
      },
      {
        q: "OSI was developed by ISO, while TCP/IP was developed by ___.",
        answer: "DARPA",
        alt: ["darpa", "arpa"],
      },
      {
        q: "In OSI, the transport layer offers only connection-___ service.",
        answer: "oriented",
      },
      {
        q: "In TCP/IP, the connectionless transport protocol is ___.",
        answer: "UDP",
        alt: ["udp"],
      },
      {
        q: "In TCP/IP, IP at the network layer provides only ___ service.",
        answer: "connectionless",
        alt: ["connection-less", "connection less"],
      },
    ],
    trueFalse: [
      {
        q: "TCP/IP has a separate Presentation layer for encryption.",
        answer: false,
        explain: "Encryption (TLS) is handled inside the TCP/IP Application layer.",
      },
      {
        q: "OSI is mainly used today as a reference and teaching model.",
        answer: true,
        explain: "Its protocols never took off, but its layer numbers are used everywhere.",
      },
      {
        q: "Both OSI and TCP/IP are layered models.",
        answer: true,
        explain: "That is the main similarity.",
      },
      {
        q: "The OSI network layer supports only connectionless service.",
        answer: false,
        explain: "The OSI network layer supports both connection-oriented and connectionless service.",
      },
      {
        q: "TCP/IP's Transport layer maps one to one onto OSI's Transport layer.",
        answer: true,
        explain: "Transport is the one layer that lines up exactly in both models.",
      },
    ],
    flashcards: [
      { front: "OSI vs TCP/IP: layers", back: "OSI 7; TCP/IP 4 (or 5)." },
      { front: "OSI vs TCP/IP: developer", back: "OSI: ISO (1984). TCP/IP: DARPA (late 1960s onward)." },
      { front: "OSI vs TCP/IP: what came first", back: "OSI: model first. TCP/IP: protocols first." },
      { front: "Network layer service", back: "OSI: connection-oriented and connectionless. TCP/IP: connectionless only." },
      { front: "Transport layer service", back: "OSI: connection-oriented only. TCP/IP: both (TCP and UDP)." },
      { front: "Which is used on the Internet?", back: "TCP/IP. OSI is the reference model." },
      { front: "Three similarities", back: "Both layered; both have Application and Transport layers; both have a routing/logical addressing layer." },
      { front: "IoT version of the TCP/IP stack", back: "MQTT/CoAP over TCP/UDP over IPv6/6LoWPAN over 802.15.4, BLE or LoRa." },
      { front: "Why TCP/IP won", back: "Already running, free, simpler; OSI protocols were complex and late." },
    ],
    examples: [
      {
        title: "Quick rule for the connection-type question",
        items: [
          "OSI: Network = both, Transport = connection-oriented only.",
          "TCP/IP: Network = connectionless only (IP), Transport = both (TCP and UDP).",
          "They are mirror images: whichever layer has 'both' in one model has 'one kind' in the other.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Compare the OSI and TCP/IP reference models.",
        solution: `Draw both stacks side by side with the mapping (OSI 5-7 to Application, 4 to Transport, 3 to Internet, 1-2 to Network Access).

Similarities:
- Both are layered and use encapsulation.
- Both have Application and Transport layers; Transport does end-to-end delivery in both.
- Both have a layer for logical addressing and routing.

Differences:

| OSI | TCP/IP |
|---|---|
| 7 layers | 4 layers (5 in some books) |
| developed by ISO, 1984 | developed by DARPA, late 1960s |
| model came before protocols | protocols came before model |
| separate Session and Presentation layers | merged into Application |
| separate Physical and Data Link | merged into Network Access |
| protocol independent, generic | built around TCP and IP |
| network layer: connection-oriented and connectionless | network layer: connectionless only |
| transport layer: connection-oriented only | transport layer: both (TCP, UDP) |
| reference / teaching model | used on the real Internet |`,
      },
      {
        problem: "Why is the OSI model still taught even though the Internet uses TCP/IP?",
        solution: `OSI is a clean, protocol-independent reference. Its seven layers separate jobs (framing, routing, encryption, sessions) more finely than TCP/IP, so it is easier to explain what each part of a network does.

Engineers still describe devices and problems with OSI layer numbers: a layer 2 switch, a layer 3 router, a layer 7 firewall. Troubleshooting also follows the OSI order, from cable to application. Knowing OSI makes it easy to place any new protocol, including IoT ones like Zigbee (layers 1-2), 6LoWPAN (between 2 and 3) and MQTT (7).`,
      },
      {
        problem: "Show how a typical IoT protocol stack fits into the TCP/IP model.",
        solution: `\`\`\`
 TCP/IP layer      Web stack        IoT stack
 Application       HTTP             MQTT / CoAP
 Transport         TCP              TCP (MQTT) / UDP (CoAP)
 Internet          IPv4             IPv6 + 6LoWPAN adaptation, RPL routing
 Network Access    Ethernet, Wi-Fi  IEEE 802.15.4 (Zigbee, Thread), BLE, LoRa
\`\`\`

The layers stay the same; only the protocols change. IoT devices have little memory, CPU and battery, so they use smaller headers (6LoWPAN compression), lighter messaging (MQTT publish/subscribe, CoAP over UDP) and low-power radios.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lec 7.1 Why IoT architecture + 3-layer model
  // ---------------------------------------------------------------------------
  {
    id: "iot-arch-three-layer",
    number: 9,
    chapter: LEC7,
    title: "IoT Architecture Basics and the Three-Layer Model",
    summary:
      "What IoT architecture is and why we split an IoT system into layers, the overview of the 3, 4, 5 and 7 layer models, and the three-layer model in detail: perception (sensors), network (gateway) and application (smart services and verticals).",
    content: `## What IoT architecture means

The slides define it as the description of how the parts of an IoT system work together to sense the physical world, communicate data, process and store it, analyse it, provide services, and take action. They give a one-line view:

\`\`\`
 Things --> Communication --> Processing --> Application --> Action
\`\`\`

A layered IoT architecture breaks a connected system into separate, manageable tiers so that devices, networks and cloud platforms can communicate safely and efficiently. It is the foundation every IoT product sits on, from a smart home to a factory.

## Why layers?

An IoT system can contain sensors, actuators, RFID tags, microcontrollers, Wi-Fi, Bluetooth, Zigbee, 4G/5G, gateways, IP networks, edge computing, cloud computing, databases, AI, mobile and web apps, and security mechanisms. Putting all of that in one diagram gets messy fast. So the system is divided into layers, and each layer has one responsibility and talks to the layers directly above and below it. The slides also point out that a clear structure helps with scalability, security and smooth communication between devices.

This is the same argument as for OSI (Lec 5): split the problem, keep each piece simple, change one piece without breaking the others.

## Which model?

There is no single official IoT architecture. The slides list four common ones by number of layers:

| Model | Layers (bottom to top) |
|---|---|
| 3-layer | Perception, Network, Application |
| 4-layer | Perception, Network, Support (or Processing/Middleware), Application |
| 5-layer | Perception, Transport, Processing, Application, Business |
| 7-layer (IoT World Forum) | Physical Devices and Controllers, Connectivity, Edge (Fog) Computing, Data Accumulation, Data Abstraction, Application, Collaboration and Processes |

The slides call the 4-layer model "the standard foundation". The 3-layer model is the simplest and the one to learn first. The others are covered in the next topics.

## The three-layer architecture

\`\`\`
 +-------------------------------------------------------------+
 | APPLICATION LAYER   smart home, smart health, smart city... |
 +-------------------------------------------------------------+
 | NETWORK LAYER       Ethernet, Wi-Fi, Bluetooth, gateways    |
 +-------------------------------------------------------------+
 | PERCEPTION LAYER    sensors, actuators, RFID                |
 +-------------------------------------------------------------+
                     the physical world
\`\`\`

### 1. Perception layer (sensor layer)

The bottom layer, also called the sensor layer. It contains every kind of sensor an IoT device might use. Sensors measure physical parameters in the environment, or recognise smart objects (for example with RFID), and turn those signals into digital data. Actuators in this layer carry out actions in the real world, like opening a valve.

Common sensors from the slides:

| Sensor | Typical use |
|---|---|
| Temperature | water heating systems, refrigerators, computers, vehicles |
| Humidity | keeping the right humidity when producing certain products |
| Pressure | measuring the flow of air or liquids |
| Level | amount of liquid in tanks, or gas in the air; cars, fridges, households |
| Infrared (IR) | detecting motion, mainly for security |

### 2. Network layer (gateway layer)

The slides call it the gateway layer. It connects devices to the platform and gives IoT its logical design. Data captured by the sensors is sent over wires or radio to back-end IoT services. That data is secured against unauthorised access, and in most cases it is encrypted.

Common technologies from the slides:

- **Ethernet**: wired, reliable and secure.
- **Wi-Fi**: wireless and convenient, no cables; works well in small premises.
- **Bluetooth**: transfers data with low power use, so it suits battery-powered devices.

Other options you should be able to name: Zigbee, LoRaWAN, 4G/5G cellular, NB-IoT, RFID/NFC.

### 3. Application layer

The top layer. It delivers specific services to users and meets whatever service the user (customer) asks for. It describes the different applications IoT is deployed in. The slides list these IoT verticals:

- smart cities
- smart energy
- smart health care
- smart buildings or homes
- smart living
- smart transportation
- smart industry

## Worked example: smart irrigation on a farm

- Perception: soil-moisture and temperature sensors in the field; a solenoid valve as the actuator.
- Network: sensors send readings over LoRaWAN to a gateway, which forwards them over 4G to the cloud.
- Application: the farmer's mobile app shows moisture levels and lets the system open the valve when soil is dry.

## Weaknesses of the three-layer model

It is good for explaining the idea, but it leaves out where data is stored and analysed, and how security and business decisions fit in. The slides say the three-layer model faced many security threats, which is why a fourth layer (Support) was added. That is the next topic.

## Common mistakes

- Putting the gateway in the perception layer. In the three-layer model it belongs to the network layer.
- Listing "smart home" as a layer. It is an application (vertical) inside the application layer.
- Writing the layers top to bottom without saying which is bottom. Always label the perception layer as the bottom.

## How this shows up in the mid

"Draw and explain the three-layer IoT architecture" is a standard short question. MCQs: "Which layer contains sensors?" (Perception), "Which layer is called the gateway layer?" (Network), "Smart health care belongs to which layer?" (Application).`,
    mcqs: [
      {
        q: "In the three-layer IoT architecture, which layer contains the sensors?",
        options: ["Application", "Network", "Business", "Perception"],
        answer: 3,
        explain: "The perception layer, also called the sensor layer, is the bottom layer.",
      },
      {
        q: "The slides also call the network layer the:",
        options: ["gateway layer", "business layer", "support layer", "sensor layer"],
        answer: 0,
        explain: "The network layer connects devices to the platform and is referred to as the gateway layer.",
      },
      {
        q: "What are the three layers of the basic IoT architecture, bottom to top?",
        options: [
          "Network, Perception, Application",
          "Perception, Network, Application",
          "Perception, Processing, Business",
          "Physical, Data Link, Network",
        ],
        answer: 1,
        explain: "Perception at the bottom, Network in the middle, Application at the top.",
      },
      {
        q: "Smart health care, smart cities and smart transportation are examples of:",
        options: ["sensors", "network technologies", "IoT verticals in the application layer", "security threats"],
        answer: 2,
        explain: "The slides list them as IoT verticals served by the application layer.",
      },
      {
        q: "Which sensor does the slide list for detecting motion, mainly for security?",
        options: ["Humidity sensor", "Infrared sensor", "Level sensor", "Pressure sensor"],
        answer: 1,
        explain: "Infrared sensors detect motion and are mainly used for security.",
      },
      {
        q: "Why is Bluetooth popular for battery-powered IoT devices, according to the slides?",
        options: [
          "It uses wires",
          "It has the longest range",
          "It transfers data with low power consumption",
          "It needs no pairing",
        ],
        answer: 2,
        explain: "Low power use is the reason the slides give.",
      },
      {
        q: "The slides' simple view of IoT architecture is:",
        options: [
          "Things, Communication, Processing, Application, Action",
          "Cloud, Fog, Edge, Things",
          "Application, Transport, Internet, Link",
          "Sensor, Router, Switch, Hub",
        ],
        answer: 0,
        explain: "Things to Communication to Processing to Application to Action.",
      },
      {
        q: "In the network layer, data sent from sensors is usually:",
        options: ["compressed into JPEG", "printed", "encrypted to prevent unauthorised access", "deleted after sending"],
        answer: 2,
        explain: "The slides say transmitted data is secured and in most cases encrypted.",
      },
      {
        q: "Which is the main reason for dividing an IoT system into layers?",
        options: [
          "To use more hardware",
          "So each layer handles one responsibility and the system stays manageable",
          "Because sensors require seven layers",
          "To avoid using the cloud",
        ],
        answer: 1,
        explain: "An IoT system has too many parts for one diagram. Layers give each part a clear role.",
      },
    ],
    fillBlanks: [
      {
        q: "The bottom layer of the IoT architecture is the ___ layer.",
        answer: "perception",
        alt: ["sensing", "sensor", "perception layer"],
      },
      {
        q: "The perception layer is also known as the ___ layer.",
        answer: "sensor",
        alt: ["sensing", "physical"],
      },
      {
        q: "The network layer is also called the ___ layer.",
        answer: "gateway",
        alt: ["transport"],
      },
      {
        q: "The top layer of the three-layer IoT model is the ___ layer.",
        answer: "application",
      },
      {
        q: "A ___ sensor measures the amount of liquid in a tank.",
        answer: "level",
      },
      {
        q: "The three-layer IoT model has perception, network and ___ layers.",
        answer: "application",
      },
    ],
    trueFalse: [
      {
        q: "There is a single official IoT architecture that everyone uses.",
        answer: false,
        explain: "Models range from 3 to 7 layers depending on the system's complexity.",
      },
      {
        q: "Actuators belong to the perception layer.",
        answer: true,
        explain: "The perception layer holds the sensors that gather data and the actuators that act on the real world.",
      },
      {
        q: "Wi-Fi is listed in the slides as a common network-layer technology for IoT.",
        answer: true,
        explain: "The slides list Ethernet, Wi-Fi and Bluetooth.",
      },
      {
        q: "Smart homes are a layer in the IoT architecture.",
        answer: false,
        explain: "Smart homes are an application (vertical) served by the application layer.",
      },
      {
        q: "The three-layer model was extended because it faced many security threats.",
        answer: true,
        explain: "The slides say a support (secure) layer was added to the three-layer model to deal with threats.",
      },
    ],
    flashcards: [
      { front: "IoT architecture (definition)", back: "How IoT components work together to sense, communicate, process and store, analyse, provide services and act." },
      { front: "Simple IoT flow", back: "Things, Communication, Processing, Application, Action." },
      { front: "3-layer IoT model", back: "Perception (bottom), Network, Application (top)." },
      { front: "Perception layer", back: "Sensor layer: sensors measure physical parameters and convert them to digital data; actuators act." },
      { front: "Network layer (3-layer)", back: "Gateway layer: carries sensor data to back-end services over wired or radio links, usually encrypted." },
      { front: "Application layer", back: "Delivers specific services to users: smart home, health, city, energy, transport, industry." },
      { front: "Common sensors on the slides", back: "Temperature, humidity, pressure, level, infrared (motion)." },
      { front: "Network technologies on the slides", back: "Ethernet (wired, reliable), Wi-Fi (no wires), Bluetooth (low power)." },
      { front: "IoT models by layer count", back: "3, 4, 5 and 7 layers." },
    ],
    examples: [
      {
        title: "Three-layer model applied to real systems",
        items: [
          "Smart home: PIR motion sensor (perception), Wi-Fi to the home router (network), phone app that switches on lights (application).",
          "Smart parking: ultrasonic sensor in each bay (perception), LoRaWAN to a city gateway (network), an app showing free spots (application).",
          "Health band: heart-rate sensor (perception), BLE to the phone (network), fitness app with alerts (application).",
        ],
      },
      {
        title: "Mnemonic for the 3-layer model",
        items: [
          "PNA, bottom up: Please Network Always = Perception, Network, Application.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Draw and explain the three-layer IoT architecture.",
        solution: `\`\`\`
 +-----------------------------------------------+
 | Application layer: smart services             |
 |   smart home, health, city, energy, transport |
 +-----------------------------------------------+
 | Network layer (gateway layer)                 |
 |   Ethernet, Wi-Fi, Bluetooth, Zigbee, 4G/5G   |
 +-----------------------------------------------+
 | Perception layer (sensor layer)               |
 |   temperature, humidity, IR sensors, RFID,    |
 |   actuators                                   |
 +-----------------------------------------------+
\`\`\`

Perception layer: the bottom layer with sensors and actuators. Sensors measure physical parameters (temperature, humidity, pressure, level, motion) or identify objects, and convert them into digital data. Actuators perform actions.

Network layer: also called the gateway layer. It connects the devices to the IoT platform and carries the data over wires or radio (Ethernet, Wi-Fi, Bluetooth) to back-end services. Data is secured and usually encrypted on the way.

Application layer: the top layer. It delivers services to users according to their requests, in verticals like smart cities, smart energy, smart health care, smart homes, smart transportation and smart industry.`,
      },
      {
        problem: "Why is IoT architecture divided into layers? Explain the importance of IoT architecture.",
        solution: `An IoT system can include sensors, actuators, RFID, microcontrollers, Wi-Fi, Bluetooth, Zigbee, 4G/5G, gateways, IP networks, edge and cloud computing, databases, AI, apps and security mechanisms. One diagram with all of these becomes too complicated, so the system is divided into layers. Each layer has a specific responsibility and communicates only with the layers above and below it.

Importance:
1. It shows how sensors, networks and cloud systems interact to collect, process and exchange data.
2. It is the foundation for all connected devices and applications.
3. Each layer has a distinct role, from sensing real-world data to delivering intelligent actions.
4. A clear structure supports scalability, security and smooth device communication.
5. Designers can change one layer (for example swap Wi-Fi for LoRaWAN) without redesigning the whole system.`,
      },
      {
        problem: "Map a smart irrigation system onto the three-layer IoT architecture.",
        solution: `Perception layer: soil-moisture and temperature sensors in the field measure conditions; a solenoid valve (actuator) controls the water.

Network layer: the sensors send readings over LoRaWAN (long range, low power) to a gateway at the farmhouse, which forwards them over 4G to the cloud. The data is encrypted in transit.

Application layer: a mobile app shows moisture levels and history, sends an alert when soil is dry, and opens the valve automatically or when the farmer taps a button. This is a smart agriculture service.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lec 7.2 Four- and five-layer models
  // ---------------------------------------------------------------------------
  {
    id: "iot-arch-four-five-layer",
    number: 10,
    chapter: LEC7,
    title: "Four-Layer and Five-Layer IoT Architectures",
    summary:
      "The four-layer model in both versions on the slides (with a Support/security layer, or with a Data Processing/Middleware layer), the security threats that motivated it, and the five-layer model: perception, transport, processing, application and business.",
    content: `## The four-layer model

The slides give two versions of the four-layer model, so learn both and say which one you are drawing.

### Version A: the four core layers (slides' "standard foundation")

\`\`\`
 +------------------------------------------------------------+
 | 4 Application layer      dashboards, mobile apps, alerts   |
 +------------------------------------------------------------+
 | 3 Data Processing /      store, clean, filter, analyse     |
 |   Middleware layer                                         |
 +------------------------------------------------------------+
 | 2 Network / Transport    Wi-Fi, cellular, Bluetooth        |
 +------------------------------------------------------------+
 | 1 Sensing / Perception   sensors and actuators             |
 +------------------------------------------------------------+
\`\`\`

1. **Sensing / Perception layer** (bottom): the physical foundation. Sensors and actuators gather raw data like temperature, motion or pressure, and carry out real-world actions.
2. **Network / Transport layer**: the communication highway. It securely carries raw data from the edge devices to central servers or cloud platforms over Wi-Fi, cellular or Bluetooth.
3. **Data Processing / Middleware layer**: the analytics engine. It stores, cleans, filters and analyses raw sensor input to extract useful information and spot patterns.
4. **Application layer** (top): the user-facing part, such as dashboards, mobile apps or automated alerts, where users and businesses monitor and control the system.

### Version B: three-layer model plus a Support layer

\`\`\`
 +------------------------------+
 | Application layer            |
 +------------------------------+
 | Support layer (secure layer) |
 +------------------------------+
 | Network layer                |
 +------------------------------+
 | Perception layer             |
 +------------------------------+
\`\`\`

The slides explain why it was added: the three-layer model faced a lot of threats, so another level was proposed to deal with most of them. The **Support layer** is also called the **Secure layer** because its focus is protecting IoT communication.

- It checks that information is sent by an authenticated user, usually with passwords or shared keys.
- Only after verifying the user does it pass the information on to the other layers.

Threat examples from the slides:

| Attack | How it works |
|---|---|
| DoS (Denial of Service) | the attacker floods the network layer with requests; the overloaded system cannot handle them all and stops working |
| Insider attack | the attacker gets the login credentials of a real user, then uploads malicious code to damage the system or steal sensitive information |

## The five-layer model

\`\`\`
 +--------------------------------------------------------------+
 | 5 Business layer     graphs, charts, business decisions      |
 +--------------------------------------------------------------+
 | 4 Application layer  services to users (smart home, health)  |
 +--------------------------------------------------------------+
 | 3 Processing layer   store, analyse, decide (middleware)     |
 +--------------------------------------------------------------+
 | 2 Transport layer    Ethernet, Wi-Fi, NFC, LAN, Bluetooth    |
 +--------------------------------------------------------------+
 | 1 Perception layer   sensors, actuators                      |
 +--------------------------------------------------------------+
\`\`\`

1. **Perception layer**: sensors and actuators, same as before.
2. **Transport layer**: transfers sensor data from the perception layer to the processing layer **and back** (commands go down too), over Ethernet, Wi-Fi, NFC, LAN, Bluetooth and more.
3. **Processing layer**: collects all the data that the perception layer sends through the network, stores and analyses it. The slides call it one of the most important layers because it makes decisions based on the analysis. It is often called the middleware layer (databases, cloud computing, big-data tools).
4. **Application layer**: provides the user with services and lets them manage and operate their IoT devices.
5. **Business layer**: the top layer, above the application layer. It makes the system easy for users to benefit from, for example by turning raw data into graphs and charts. It is tied to decision-making because it deals with stakeholders. (Textbooks add that it manages the overall IoT system, business models and user privacy.)

## Comparing the three models

| 3-layer | 4-layer (B) | 5-layer |
|---|---|---|
| Application | Application | Business |
| | | Application |
| | Support | Processing |
| Network | Network | Transport |
| Perception | Perception | Perception |

The 5-layer model renames Network as Transport, adds Processing in the middle, and adds Business on top.

## Example: smart hospital ward (5-layer)

- Perception: pulse oximeters and temperature patches on patients.
- Transport: BLE to a ward gateway, then hospital Wi-Fi/LAN.
- Processing: a hospital server stores readings and flags patients whose oxygen level drops.
- Application: nurses' tablet app shows live vitals and alarms.
- Business: management dashboard shows bed usage and response times, used to plan staff shifts.

## Common mistakes

- Putting the Business layer below Application. It is the top of the 5-layer model.
- Confusing the IoT "Transport layer" with the TCP/UDP transport layer. In IoT architecture it just means the layer that moves data between perception and processing.
- Forgetting that the transport layer carries commands back down to actuators as well.
- Calling the Support layer a "sensor" layer. It is about security and authentication.

## How this shows up in the mid

"Draw and explain the five-layer IoT architecture" is a very likely long question. Also expect "Why was the support layer added?" and MCQs like "Which layer converts data into graphs and charts for stakeholders?" (Business).`,
    mcqs: [
      {
        q: "Which layer is at the top of the five-layer IoT architecture?",
        options: ["Application", "Processing", "Business", "Transport"],
        answer: 2,
        explain: "Business sits above Application at the top of the 5-layer model.",
      },
      {
        q: "The Support layer in the four-layer model is also called the:",
        options: ["Secure layer", "Sensor layer", "Gateway layer", "Middleware layer"],
        answer: 0,
        explain: "The slides call it the Secure layer because it protects IoT communication.",
      },
      {
        q: "How does the Support layer usually verify that data comes from an authenticated user?",
        options: ["GPS location", "Passwords or shared keys", "Infrared sensors", "Data compression"],
        answer: 1,
        explain: "The slides mention passwords or shared keys as the usual authentication methods.",
      },
      {
        q: "An attacker floods the network layer with so many requests that the system stops working. This is a:",
        options: ["Insider attack", "Phishing attack", "Man-in-the-middle attack", "DoS attack"],
        answer: 3,
        explain: "Denial of Service overloads the system with requests.",
      },
      {
        q: "In the five-layer model, which layer stores and analyses data and makes decisions?",
        options: ["Processing", "Perception", "Transport", "Business"],
        answer: 0,
        explain: "The processing (middleware) layer gathers, stores and analyses data and makes decisions.",
      },
      {
        q: "The correct bottom-to-top order of the five-layer model is:",
        options: [
          "Perception, Processing, Transport, Application, Business",
          "Perception, Transport, Processing, Application, Business",
          "Transport, Perception, Processing, Business, Application",
          "Perception, Transport, Application, Processing, Business",
        ],
        answer: 1,
        explain: "Perception, Transport, Processing, Application, Business.",
      },
      {
        q: "According to the slides, the IoT transport layer moves sensor data:",
        options: [
          "only from perception to processing",
          "only from processing to the business layer",
          "from perception to processing and vice versa",
          "directly to the business layer",
        ],
        answer: 2,
        explain: "It carries data up and commands back down, using Ethernet, Wi-Fi, NFC, LAN, Bluetooth and others.",
      },
      {
        q: "An attacker steals a real user's login and uploads malicious code. This is an:",
        options: ["DoS attack", "insider attack", "eavesdropping attack", "jamming attack"],
        answer: 1,
        explain: "The slides describe this as an insider attack.",
      },
      {
        q: "In the four-layer 'core layers' version, the layer that stores, cleans, filters and analyses data is the:",
        options: ["Data Processing / Middleware layer", "Sensing layer", "Network layer", "Business layer"],
        answer: 0,
        explain: "The slides call it the analytics engine of the system.",
      },
      {
        q: "Which layer turns raw data into graphs and charts for stakeholders?",
        options: ["Perception", "Transport", "Support", "Business"],
        answer: 3,
        explain: "The Business layer presents insights and supports decision-making with stakeholders.",
      },
    ],
    fillBlanks: [
      {
        q: "The layer added to the three-layer model to handle security threats is the ___ layer.",
        answer: "support",
        alt: ["secure", "security"],
      },
      {
        q: "The top layer of the five-layer IoT model is the ___ layer.",
        answer: "business",
      },
      {
        q: "In the five-layer model, the layer between Transport and Application is the ___ layer.",
        answer: "processing",
        alt: ["middleware"],
      },
      {
        q: "DoS stands for Denial of ___.",
        answer: "Service",
        alt: ["service"],
      },
      {
        q: "The processing layer is also called the ___ layer.",
        answer: "middleware",
      },
    ],
    trueFalse: [
      {
        q: "The Business layer sits below the Application layer in the five-layer model.",
        answer: false,
        explain: "It is the top layer, above Application.",
      },
      {
        q: "The Support layer verifies users before passing information to the other layers.",
        answer: true,
        explain: "That is its job according to the slides.",
      },
      {
        q: "The five-layer model's Transport layer means exactly the same as TCP in the TCP/IP model.",
        answer: false,
        explain: "In IoT architecture, transport just means moving data between perception and processing, using technologies like Wi-Fi, Bluetooth and NFC.",
      },
      {
        q: "The slides say the processing layer is one of the most important layers because it makes decisions based on data analysis.",
        answer: true,
        explain: "Stated directly on the Processing Layer slide.",
      },
      {
        q: "Both four-layer versions keep the perception layer at the bottom and the application layer at the top.",
        answer: true,
        explain: "They differ only in the third layer: Support (security) or Data Processing/Middleware.",
      },
      {
        q: "NFC is one of the connectivity options listed for the five-layer transport layer.",
        answer: true,
        explain: "The slide lists Ethernet, Wi-Fi, NFC, LAN and Bluetooth.",
      },
    ],
    flashcards: [
      { front: "4-layer model (core layers version)", back: "Sensing/Perception, Network/Transport, Data Processing/Middleware, Application." },
      { front: "4-layer model (support version)", back: "Perception, Network, Support, Application." },
      { front: "Why was the Support layer added?", back: "The three-layer model faced many security threats. Support (Secure) layer authenticates users with passwords or shared keys." },
      { front: "Threat examples on the slides", back: "DoS: flood the network layer with requests. Insider attack: stolen credentials used to upload malicious code." },
      { front: "5-layer model (bottom to top)", back: "Perception, Transport, Processing, Application, Business." },
      { front: "Processing layer", back: "Stores and analyses data from the perception layer and makes decisions; also called middleware." },
      { front: "Business layer", back: "Top layer; turns data into graphs/charts and insights; supports decision-making with stakeholders." },
      { front: "IoT transport layer", back: "Carries data from perception to processing and back via Ethernet, Wi-Fi, NFC, LAN, Bluetooth." },
      { front: "5-layer mnemonic", back: "People Talk, Programs Answer, Bosses decide: Perception, Transport, Processing, Application, Business." },
    ],
    examples: [
      {
        title: "Mnemonic for the five-layer IoT model",
        items: [
          "Bottom to top: People Talk, Programs Answer, Bosses decide = Perception, Transport, Processing, Application, Business.",
          "The business layer sits at the top because the bosses (stakeholders) use it.",
        ],
      },
      {
        title: "Same smart-hospital system, three different models",
        items: [
          "3-layer: oximeters (perception), BLE plus Wi-Fi (network), nurses' app (application).",
          "4-layer with support: add a support layer that authenticates each device and nurse before data reaches the app.",
          "5-layer: add a processing layer (server that flags low oxygen) and a business layer (management dashboard for staffing).",
        ],
      },
    ],
    exercises: [
      {
        problem: "Draw and explain the five-layer IoT architecture.",
        solution: `\`\`\`
 +----------------------------------------------+
 | Business layer     graphs, charts, decisions |
 +----------------------------------------------+
 | Application layer  services to users         |
 +----------------------------------------------+
 | Processing layer   storage, analysis         |
 +----------------------------------------------+
 | Transport layer    Wi-Fi, BLE, NFC, LAN      |
 +----------------------------------------------+
 | Perception layer   sensors, actuators        |
 +----------------------------------------------+
\`\`\`

1. Perception layer: sensors measure physical parameters (temperature, humidity, motion) and convert them to digital data; actuators act on commands.
2. Transport layer: transfers sensor data from the perception layer to the processing layer and commands back the other way, using Ethernet, Wi-Fi, NFC, LAN, Bluetooth and others.
3. Processing layer (middleware): gathers all the data arriving from the perception layer, stores it and analyses it. It makes decisions based on the analysis, which makes it one of the most important layers.
4. Application layer: provides services to the user and lets them manage and operate their IoT devices (smart home, smart health, smart city).
5. Business layer: the top layer. It presents raw data as graphs and charts so users can work with the system easily, and supports decision-making with stakeholders.`,
      },
      {
        problem: "What is the support layer? Why was it added to the three-layer IoT architecture? Give two examples of attacks.",
        solution: `The support layer (also called the secure layer) sits between the network layer and the application layer in the four-layer model: Perception, Network, Support, Application.

It was added because the three-layer model faced many security threats. The support layer checks that information is sent by an authenticated user, usually with passwords or shared keys. Only after the user is verified does it pass information on to the other layers.

Attack examples:
1. DoS (Denial of Service): the attacker sends a huge number of requests to the network layer. The system cannot process them all at once, gets overloaded and stops working.
2. Insider attack: the attacker obtains the login credentials of an existing user, then uploads malicious code to damage the system or steal sensitive information.`,
      },
      {
        problem: "Compare the three-layer and five-layer IoT architectures.",
        solution: `| Point | 3-layer | 5-layer |
|---|---|---|
| Layers | Perception, Network, Application | Perception, Transport, Processing, Application, Business |
| Data processing | not shown as a separate layer | Processing layer stores and analyses data |
| Business view | none | Business layer for stakeholders and decisions |
| Detail | basic idea of IoT | closer to real deployments |
| Use | teaching the concept, small systems | larger systems with analytics and business goals |

The five-layer model keeps perception at the bottom, renames the network layer as transport, adds processing in the middle, and adds business above application.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lec 7.3 Seven-layer IoT World Forum model
  // ---------------------------------------------------------------------------
  {
    id: "iot-arch-seven-layer",
    number: 11,
    chapter: LEC7,
    title: "The Seven-Layer IoT Reference Model (IoT World Forum)",
    summary:
      "The IoT World Forum's seven-layer reference model layer by layer, the split into Operational Technology (layers 1 to 3, real time, event driven) and Information Technology (layers 4 to 7, stored data, non real time), and the point that security covers every layer.",
    content: `## Where it comes from

The seven-layer IoT reference model was published by the IoT World Forum (IoTWF) in 2014, led by Cisco. It is more detailed than the 3 to 5 layer models because it separates the edge processing, storage and data handling steps that those models lump together. The slides cover it under "7 Layer IoT Architecture".

## The seven layers

\`\`\`
 +-----------------------------------------------------------+
 | 7  Collaboration and Processes  people and business       |
 +-----------------------------------------------------------+
 | 6  Application                  reporting, analytics,     |
 |                                 control                   |
 +-----------------------------------------------------------+
 | 5  Data Abstraction             aggregation and access    |
 +-----------------------------------------------------------+
 | 4  Data Accumulation            storage                   |
 +===========================================================+
 | 3  Edge (Fog) Computing         data element analysis     |
 |                                 and transformation        |
 +-----------------------------------------------------------+
 | 2  Connectivity                 communication and         |
 |                                 processing units          |
 +-----------------------------------------------------------+
 | 1  Physical Devices and         the "things"              |
 |    Controllers                                            |
 +-----------------------------------------------------------+
   layers 1-3 = OT (data in motion)   layers 4-7 = IT (data at rest)
   security applies at every layer
\`\`\`

### Layer 1: Physical Devices and Controllers

The "things": sensors, actuators, cameras, controllers and machines. They generate data and can be controlled over the network.

### Layer 2: Connectivity

Moves data reliably between devices and across networks: between layer 1 devices, between devices and the network, and on to layer 3. It includes switching, routing, and translation between protocols. Technologies: Ethernet, Wi-Fi, Zigbee, BLE, LoRaWAN, cellular, IP.

### Layer 3: Edge (Fog) Computing

The slides say this layer uses the fog computing model. It removes the need for every device to reach the main server for computations. Instead, most computation happens locally, close to the devices, and most information is stored locally too, which cuts down data storage and transfer. Typical jobs: filtering and cleaning readings, aggregating them, checking thresholds (is this temperature too high?), and converting data formats. Example: a gateway only forwards a reading when it changes, instead of sending the same value every second.

### Layer 4: Data Accumulation

Data arriving from the network is moving and event-driven. Applications usually want it stored so they can query it later. This layer turns **data in motion into data at rest**: it stores data in databases or files, decides what is worth keeping, and puts it in a form the upper layers can use.

### Layer 5: Data Abstraction

Data may now sit in many places and formats. This layer combines data from multiple sources, reconciles different formats, makes it consistent, and provides controlled access so applications can find what they need without knowing where each piece is stored.

### Layer 6: Application

Software that uses the data: reporting, analytics, dashboards, control applications, mobile apps. Examples: a factory's machine-monitoring dashboard, a city's traffic-light control software.

### Layer 7: Collaboration and Processes

People and business processes. Information from the applications is only useful if people act on it: maintenance staff get a work order, managers change a process, teams share results. IoT here supports human decisions and workflows.

## OT and IT

The slides make three points about this model.

1. **Security spans all seven layers.** It is not a layer of its own; each layer has to be secured.
2. The stack is split into two domains: the lower three layers are **Operational Technology (OT)** and the upper four are **Information Technology (IT)**.
3. They work at different speeds:

| | Layers 1 to 3 (OT) | Layers 4 to 7 (IT) |
|---|---|---|
| Data | generated by events, periodically or when the environment changes | stored data |
| Timing | responses generally need to be real time | processed at the application's own pace, non real time |
| Example | a sensor detects a high temperature immediately | later, an application queries the historical temperature data |

## Mapping to the simpler models

| 7-layer IoTWF | 5-layer model |
|---|---|
| 1 Physical Devices and Controllers | Perception |
| 2 Connectivity | Transport |
| 3 Edge Computing, 4 Data Accumulation, 5 Data Abstraction | Processing |
| 6 Application | Application |
| 7 Collaboration and Processes | Business |

This mapping is approximate, but it is a good way to remember the seven layers if you already know the five.

## Worked example: smart factory

1. A vibration sensor on a motor (physical device).
2. Sends readings over industrial Ethernet or Wi-Fi (connectivity).
3. A gateway near the machine checks if vibration crosses a threshold and stops the motor within milliseconds (edge).
4. All readings are stored in a time-series database (accumulation).
5. Readings from many machines and sites are combined in one consistent format (abstraction).
6. A predictive-maintenance app shows which motors are likely to fail (application).
7. The maintenance team gets a work order and schedules the repair (collaboration and processes).

## Common mistakes

- Treating security as layer 8. In this model it applies across all seven.
- Swapping Data Accumulation (storage) and Data Abstraction (combining and giving access).
- Saying layers 4 to 7 are OT. Lower three are OT, upper four are IT.
- Calling layer 7 just "Business". The model's name is Collaboration and Processes.

## How this shows up in the mid

Expect "List and explain the layers of the seven-layer IoT reference model" as a long question, or MCQs like "Which layer converts data in motion to data at rest?" (Data Accumulation) and "Which layers form OT?" (1 to 3).`,
    mcqs: [
      {
        q: "Which organisation published the seven-layer IoT reference model?",
        options: ["ISO", "IoT World Forum", "IEEE", "DARPA"],
        answer: 1,
        explain: "The IoT World Forum (led by Cisco) published it in 2014.",
      },
      {
        q: "Layer 3 of the seven-layer IoT model is:",
        options: ["Data Accumulation", "Connectivity", "Edge (Fog) Computing", "Application"],
        answer: 2,
        explain: "Order: Physical Devices, Connectivity, Edge Computing, Data Accumulation, Data Abstraction, Application, Collaboration and Processes.",
      },
      {
        q: "Which layer turns data in motion into data at rest by storing it?",
        options: ["Data Abstraction", "Edge Computing", "Connectivity", "Data Accumulation"],
        answer: 3,
        explain: "Data Accumulation (layer 4) stores incoming data so applications can query it later.",
      },
      {
        q: "According to the slides, the lower three layers of the seven-layer model are:",
        options: ["Operational Technology (OT)", "Information Technology (IT)", "Business Technology", "Cloud Technology"],
        answer: 0,
        explain: "Layers 1 to 3 are OT; layers 4 to 7 are IT.",
      },
      {
        q: "Where is security placed in the seven-layer IoT reference model?",
        options: ["Only at layer 1", "Only at layer 7", "As a separate layer 8", "Across all seven layers"],
        answer: 3,
        explain: "The slides say security spans all seven layers.",
      },
      {
        q: "The top layer of the seven-layer model is:",
        options: ["Application", "Collaboration and Processes", "Business", "Data Abstraction"],
        answer: 1,
        explain: "Layer 7 is Collaboration and Processes: people and business processes.",
      },
      {
        q: "Which layer combines data from multiple sources and reconciles different formats?",
        options: ["Data Abstraction", "Data Accumulation", "Connectivity", "Physical Devices"],
        answer: 0,
        explain: "Data Abstraction (layer 5) makes stored data consistent and accessible.",
      },
      {
        q: "Responses in layers 1 to 3 generally need to be:",
        options: ["weekly", "non real time", "real time", "manual"],
        answer: 2,
        explain: "OT layers are event-driven and usually need real-time responses.",
      },
      {
        q: "The edge computing layer, according to the slides, mainly:",
        options: [
          "sends every reading to the main server for computation",
          "does most computation locally, reducing data storage and transfer",
          "replaces all sensors",
          "only stores historical data",
        ],
        answer: 1,
        explain: "Fog/edge computing removes the need for every device to use the main server.",
      },
    ],
    fillBlanks: [
      {
        q: "Layer 1 of the seven-layer model is Physical Devices and ___.",
        answer: "Controllers",
        alt: ["controllers"],
      },
      {
        q: "Layer 2 of the seven-layer model is ___.",
        answer: "Connectivity",
        alt: ["connectivity"],
      },
      {
        q: "Layers 4 to 7 of the seven-layer model form the ___ domain.",
        answer: "IT",
        alt: ["it", "information technology"],
      },
      {
        q: "Layer 7 of the IoTWF model is Collaboration and ___.",
        answer: "Processes",
        alt: ["processes"],
      },
      {
        q: "OT stands for Operational ___.",
        answer: "Technology",
        alt: ["technology"],
      },
      {
        q: "The edge layer of the seven-layer model uses the ___ computing model.",
        answer: "fog",
        alt: ["edge"],
      },
    ],
    trueFalse: [
      {
        q: "In the seven-layer model, security is a separate eighth layer.",
        answer: false,
        explain: "Security spans all seven layers.",
      },
      {
        q: "Layers 4 to 7 process stored data at their own pace.",
        answer: true,
        explain: "The IT layers are generally non real time.",
      },
      {
        q: "Data Accumulation comes before Data Abstraction in the layer order.",
        answer: true,
        explain: "Layer 4 is Data Accumulation, layer 5 is Data Abstraction.",
      },
      {
        q: "A sensor detecting high temperature immediately is an example of IT-layer processing.",
        answer: false,
        explain: "That is OT (layers 1 to 3), event-driven and real time. Querying historical temperatures later is IT.",
      },
      {
        q: "The Connectivity layer is responsible for moving data reliably between devices and networks.",
        answer: true,
        explain: "It covers communication, switching, routing and protocol translation.",
      },
    ],
    flashcards: [
      { front: "7-layer IoT model (bottom to top)", back: "Physical Devices and Controllers, Connectivity, Edge (Fog) Computing, Data Accumulation, Data Abstraction, Application, Collaboration and Processes." },
      { front: "Who made the 7-layer IoT model?", back: "IoT World Forum (Cisco-led), 2014." },
      { front: "Edge (Fog) Computing layer", back: "Processes data near the devices: filtering, aggregation, thresholds; less storage and transfer to the main server." },
      { front: "Data Accumulation", back: "Stores incoming data: turns data in motion into data at rest." },
      { front: "Data Abstraction", back: "Combines data from many sources/formats, makes it consistent, provides access." },
      { front: "Collaboration and Processes", back: "People and business processes act on the information from applications." },
      { front: "OT vs IT layers", back: "OT = layers 1-3, event-driven, real time. IT = layers 4-7, stored data, non real time." },
      { front: "Security in the 7-layer model", back: "Spans all seven layers." },
      { front: "Mnemonic (bottom to top)", back: "Please Connect Every Device And Activate Collaboration." },
    ],
    examples: [
      {
        title: "Mnemonic for the seven IoT layers",
        items: [
          "Bottom to top: Please Connect Every Device And Activate Collaboration = Physical devices, Connectivity, Edge, Data accumulation, data Abstraction, Application, Collaboration and processes.",
          "Notice the D then A in the middle: Data Accumulation (store) comes before data Abstraction (combine).",
        ],
      },
      {
        title: "OT vs IT in one sentence each",
        items: [
          "OT: the smoke sensor triggers the sprinkler right now.",
          "IT: next week the facilities team pulls a report of every smoke alarm this month.",
        ],
      },
    ],
    exercises: [
      {
        problem: "List and explain the layers of the seven-layer IoT reference model.",
        solution: `\`\`\`
 7 Collaboration and Processes
 6 Application
 5 Data Abstraction
 4 Data Accumulation
 ---------------------------- IT above, OT below
 3 Edge (Fog) Computing
 2 Connectivity
 1 Physical Devices and Controllers
\`\`\`

1. Physical Devices and Controllers: the things (sensors, actuators, machines) that generate data and can be controlled.
2. Connectivity: reliable communication between devices, the network and layer 3; switching, routing and protocol translation (Wi-Fi, Zigbee, Ethernet, cellular).
3. Edge (Fog) Computing: processing close to the devices using the fog model. Most computation and storage happen locally, so less data goes to the main server. Filtering, aggregation, threshold checks.
4. Data Accumulation: stores incoming data, turning data in motion into data at rest for later queries.
5. Data Abstraction: combines data from multiple sources, reconciles formats, keeps it consistent and gives applications controlled access.
6. Application: reporting, analytics, dashboards and control software.
7. Collaboration and Processes: people and business processes use the information to make decisions and take action.

Security spans all seven layers. Layers 1 to 3 are OT (event-driven, real time); layers 4 to 7 are IT (stored data, non real time).`,
      },
      {
        problem: "Differentiate between the OT and IT layers of the seven-layer IoT model with an example.",
        solution: `| | OT (layers 1 to 3) | IT (layers 4 to 7) |
|---|---|---|
| Layers | Physical Devices, Connectivity, Edge Computing | Data Accumulation, Data Abstraction, Application, Collaboration and Processes |
| Data | generated by events, periodically or when the environment changes | stored data |
| Timing | real-time response needed | processed at the application's own pace, non real time |

Example from the slides: a sensor detects a high temperature immediately (OT). Later, an application queries the historical temperature data (IT).`,
      },
      {
        problem: "Map a smart factory's predictive-maintenance system onto the seven-layer IoT model.",
        solution: `1. Physical Devices: vibration and temperature sensors on each motor.
2. Connectivity: industrial Ethernet and Wi-Fi carry readings to a local gateway.
3. Edge Computing: the gateway checks each reading against a threshold and stops a motor within milliseconds if vibration is dangerous; it forwards only summaries upward.
4. Data Accumulation: readings are saved in a time-series database.
5. Data Abstraction: data from several factories in different formats is combined into one consistent view.
6. Application: a predictive-maintenance dashboard shows which motors are likely to fail.
7. Collaboration and Processes: the maintenance team receives a work order and schedules the repair; managers adjust spare-parts ordering.`,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lec 7.4 Edge, fog, cloud + IoT protocols per layer
  // ---------------------------------------------------------------------------
  {
    id: "iot-arch-edge-fog-cloud",
    number: 12,
    chapter: LEC7,
    title: "Edge, Fog and Cloud Computing, and IoT Protocols at Each Layer",
    summary:
      "Where IoT data gets processed (edge, fog or cloud) with the slides' comparison table and examples, followed by which IoT protocols work at which architecture layer: BLE, Zigbee, LoRaWAN, Wi-Fi and cellular for connectivity, 6LoWPAN at the network level, and MQTT, CoAP and HTTP for applications.",
    content: `## Edge computing

Edge computing processes data **at or very close to where it is generated**. For IoT that can mean processing directly on sensors, cameras, microcontrollers, smartphones, IoT gateways or industrial controllers.

Slide example: a security camera detects a person's face. Rather than streaming all of its video to the cloud continuously, the camera runs the detection itself and only sends an alert, or a short clip, when it sees something. Less bandwidth used, and a faster reaction.

## Fog computing

Fog computing places computing, storage and networking resources **between** the IoT devices (the edge) and the cloud. It is a distributed middle layer. A fog node might be a router, gateway, local server, network appliance, micro data centre or base station.

Slide example: a smart city with 500 cameras. Sending all of that video to the cloud would use an enormous amount of bandwidth. Fog nodes in each area process the video locally and send only results (counts, alerts) to the cloud.

## Cloud computing

Cloud computing gives centralised computing, storage and services from remote data centres, such as Amazon Web Services (AWS), Microsoft Azure and Google Cloud. A typical IoT system sends data to the cloud for large-scale storage, big-data analytics, machine learning and historical analysis.

## Edge vs fog vs cloud (from the slides)

| Feature | Edge | Fog | Cloud |
|---|---|---|---|
| Location | at or very near the device | between edge and cloud | remote data centre |
| Distance from device | closest | intermediate | farthest |
| Processing | local | distributed / local network | centralised |
| Latency | very low | low | usually higher |
| Bandwidth needed | very low | reduced | higher |
| Storage | small / local | moderate | very large |
| Computing power | usually limited | moderate to high | very high |
| Internet dependency | low | moderate | higher |
| Typical use | real-time decisions | regional / local processing | global analytics |
| Example | camera AI | smart-city gateway / server | cloud data centre |

\`\`\`
   Cloud   (AWS, Azure, Google Cloud)   big storage, ML, history
     ^
     |  only summaries and alerts
   Fog     (gateways, local servers)    area-level processing
     ^
     |  filtered data
   Edge    (camera, MCU, sensor node)   instant local decisions
     ^
   Things  (physical world)
\`\`\`

## IoT protocols at each layer

This table places the common IoT protocols on the layered architecture (and on TCP/IP, which you know from Lec 6).

| Architecture layer | TCP/IP equivalent | Protocols / technologies |
|---|---|---|
| Application | Application | MQTT, CoAP, HTTP/REST, AMQP |
| (transport inside the network layer) | Transport | TCP (under MQTT, HTTP), UDP (under CoAP) |
| Network / Transport | Internet | IPv4, IPv6, 6LoWPAN, RPL |
| Network / Transport (link and radio) | Network Access | Wi-Fi, Ethernet, BLE, Zigbee (IEEE 802.15.4), LoRaWAN, NB-IoT, 4G/5G, RFID, NFC |
| Perception | (hardware) | sensors, actuators, microcontrollers |

### Application protocols

- **MQTT** (Message Queuing Telemetry Transport): lightweight **publish/subscribe** protocol. Devices publish messages to a topic (for example home/livingroom/temp) on a central **broker**, and any client subscribed to that topic receives them. Runs over TCP, port 1883 (8883 with TLS). It has three QoS levels (0, 1, 2). Good for unreliable, low-bandwidth links.
- **CoAP** (Constrained Application Protocol): a web-style **request/response** protocol for very small devices, with GET, POST, PUT and DELETE like HTTP. Runs over UDP, port 5683, so it has very little overhead.
- **HTTP/REST**: common between gateways, the cloud and apps, but heavy for tiny sensors.

### Network-level protocol

- **6LoWPAN** (IPv6 over Low-power Wireless Personal Area Networks): an adaptation layer that compresses IPv6 headers and fragments packets so they fit into small IEEE 802.15.4 frames (127 bytes). This lets tiny battery-powered sensors have real IPv6 addresses.

### Connectivity technologies

| Technology | Range | Data rate | Power | Typical IoT use |
|---|---|---|---|---|
| BLE (Bluetooth Low Energy) | short (tens of metres) | about 1 Mbps (up to 2 Mbps in BLE 5) | very low | wearables, health bands, beacons |
| Zigbee (on IEEE 802.15.4) | 10 to 100 m per hop, mesh | 250 kbps at 2.4 GHz | very low | smart home lights, plugs, building automation |
| Wi-Fi (IEEE 802.11) | about 50 m indoors | high (Mbps to Gbps) | high | cameras, smart TVs, home hubs |
| LoRaWAN | several km (more in rural areas) | 0.3 to about 50 kbps | very low | smart agriculture, metering, city sensors |
| NB-IoT / 4G / 5G | wide (cellular) | low (NB-IoT) to high (5G) | low to high | smart meters, vehicles, trackers |
| RFID / NFC | centimetres to a few metres | low | passive tags need no battery | tracking, payments, access cards |

The trade-off to remember: you can usually get two of long range, high data rate and low power, not all three. LoRaWAN picks range and low power; Wi-Fi picks data rate; BLE picks low power.

## Example: one system, every layer

A smart-city air quality network:

- Perception: particulate (PM2.5) and gas sensors on lamp posts.
- Connectivity: LoRaWAN to a gateway on a nearby building.
- Edge/fog: the gateway averages readings every minute and flags spikes.
- Network/transport: the gateway sends results with MQTT over TCP/IP across 4G.
- Cloud: readings are stored and machine-learning models predict tomorrow's smog levels.
- Application: a public app shows the air quality map; the city's environment department uses a dashboard to issue alerts.

## Common mistakes

- Saying fog computing is the same as cloud. Fog sits between edge and cloud, closer to the devices.
- Saying edge computing has the highest latency. Edge has the lowest; cloud is usually highest.
- Putting MQTT over UDP. MQTT uses TCP; CoAP uses UDP.
- Calling 6LoWPAN a radio. It is an adaptation layer that carries IPv6 over 802.15.4 radios.
- Saying Zigbee is the same as Bluetooth. Both are short range, but Zigbee runs on IEEE 802.15.4 and builds mesh networks.

## How this shows up in the mid

"Differentiate edge, fog and cloud computing" (use the table), MCQs on latency and location, and "Which protocol is publish/subscribe?" (MQTT). A long question may ask for IoT protocols at each layer of the architecture.`,
    mcqs: [
      {
        q: "Which computing model processes data at or very near the device where it is generated?",
        options: ["Edge", "Fog", "Cloud", "Mainframe"],
        answer: 0,
        explain: "Edge computing is closest to the device.",
      },
      {
        q: "According to the slides, which has the highest latency usually?",
        options: ["Edge", "Fog", "Cloud", "All have equal latency"],
        answer: 2,
        explain: "Cloud data centres are farthest from devices, so latency is usually higher.",
      },
      {
        q: "A smart-city gateway that processes video from 500 nearby cameras before sending results onward is an example of:",
        options: ["cloud computing", "fog computing", "the perception layer", "the business layer"],
        answer: 1,
        explain: "Fog nodes such as gateways and local servers sit between the edge and the cloud.",
      },
      {
        q: "Which IoT protocol uses a publish/subscribe model with a broker?",
        options: ["CoAP", "HTTP", "6LoWPAN", "MQTT"],
        answer: 3,
        explain: "MQTT clients publish to topics on a broker, and subscribers receive the messages.",
      },
      {
        q: "CoAP runs over which transport protocol?",
        options: ["TCP", "UDP", "ICMP", "ARP"],
        answer: 1,
        explain: "CoAP uses UDP (port 5683) to keep overhead low.",
      },
      {
        q: "What does 6LoWPAN do?",
        options: [
          "Encrypts MQTT messages",
          "Provides long-range cellular coverage",
          "Carries compressed IPv6 packets over IEEE 802.15.4 networks",
          "Stores data in the cloud",
        ],
        answer: 2,
        explain: "6LoWPAN is IPv6 over Low-power Wireless Personal Area Networks, an adaptation layer.",
      },
      {
        q: "Which technology gives several kilometres of range at very low power but a low data rate?",
        options: ["Wi-Fi", "BLE", "NFC", "LoRaWAN"],
        answer: 3,
        explain: "LoRaWAN trades data rate for long range and long battery life.",
      },
      {
        q: "Zigbee is built on which IEEE standard?",
        options: ["802.15.4", "802.3", "802.11", "802.5"],
        answer: 0,
        explain: "Zigbee uses IEEE 802.15.4 radios. 802.3 is Ethernet, 802.11 is Wi-Fi, 802.5 is Token Ring.",
      },
      {
        q: "Which is a typical reason to send IoT data to the cloud?",
        options: [
          "Millisecond reaction to a sensor event",
          "Big-data analytics and machine learning on historical data",
          "Reducing storage to almost zero",
          "Avoiding the Internet entirely",
        ],
        answer: 1,
        explain: "The slides list large-scale storage, big-data analytics, machine learning and historical analysis.",
      },
      {
        q: "Which of these is NOT an example of a fog node from the slides?",
        options: ["Router", "Base station", "Micro data centre", "Temperature sensor"],
        answer: 3,
        explain: "A sensor is an edge device. Fog nodes are routers, gateways, local servers, appliances, micro data centres and base stations.",
      },
    ],
    fillBlanks: [
      {
        q: "___ computing sits between the edge devices and the cloud.",
        answer: "Fog",
        alt: ["fog"],
      },
      {
        q: "MQTT uses a central ___ to pass messages between publishers and subscribers.",
        answer: "broker",
      },
      {
        q: "CoAP's default port is ___.",
        answer: "5683",
      },
      {
        q: "6LoWPAN carries ___ packets over low-power wireless networks.",
        answer: "IPv6",
        alt: ["ipv6", "ip"],
      },
      {
        q: "BLE stands for Bluetooth Low ___.",
        answer: "Energy",
        alt: ["energy"],
      },
      {
        q: "Of edge, fog and cloud, the one with the largest storage and computing power is ___.",
        answer: "cloud",
      },
    ],
    trueFalse: [
      {
        q: "Edge computing has very low latency because processing happens near the device.",
        answer: true,
        explain: "Data does not travel to a distant data centre before a decision is made.",
      },
      {
        q: "Fog computing has higher Internet dependency than cloud computing.",
        answer: false,
        explain: "The slides rate fog as moderate and cloud as higher.",
      },
      {
        q: "MQTT runs over UDP.",
        answer: false,
        explain: "MQTT uses TCP. CoAP is the one that uses UDP.",
      },
      {
        q: "AWS, Microsoft Azure and Google Cloud are examples of cloud computing providers.",
        answer: true,
        explain: "Listed on the cloud computing slide.",
      },
      {
        q: "Zigbee devices can form mesh networks.",
        answer: true,
        explain: "Zigbee routers relay messages for each other, which extends coverage across a building.",
      },
      {
        q: "Wi-Fi uses less power than BLE, which is why it is preferred in wearables.",
        answer: false,
        explain: "BLE uses far less power. Wearables prefer BLE; Wi-Fi is chosen for higher data rates.",
      },
    ],
    flashcards: [
      { front: "Edge computing", back: "Processing at or very near the device (camera, MCU, gateway). Very low latency, real-time decisions." },
      { front: "Fog computing", back: "Distributed middle layer between edge and cloud: routers, gateways, local servers, base stations." },
      { front: "Cloud computing", back: "Centralised remote data centres (AWS, Azure, Google Cloud) for big storage, analytics, ML, history." },
      { front: "Latency ranking", back: "Edge very low, fog low, cloud usually higher." },
      { front: "MQTT", back: "Publish/subscribe via a broker, over TCP, port 1883 (8883 TLS), QoS 0/1/2." },
      { front: "CoAP", back: "Request/response (GET, POST, PUT, DELETE) for constrained devices, over UDP port 5683." },
      { front: "6LoWPAN", back: "IPv6 over Low-power Wireless PANs: compresses IPv6 to fit IEEE 802.15.4 frames." },
      { front: "Zigbee", back: "IEEE 802.15.4, low power, 250 kbps at 2.4 GHz, mesh; smart home and buildings." },
      { front: "LoRaWAN", back: "Long range (km), very low power, low data rate; agriculture, metering, smart city." },
      { front: "BLE", back: "Bluetooth Low Energy: short range, very low power; wearables, beacons." },
    ],
    examples: [
      {
        title: "Edge, fog or cloud?",
        items: [
          "A car's collision-avoidance system braking in 50 ms: edge.",
          "A factory server combining readings from 200 machines on the shop floor: fog.",
          "Training a model on two years of nationwide electricity data: cloud.",
          "The slides' camera that recognises a face itself and only sends alerts: edge.",
        ],
      },
      {
        title: "Picking a connectivity technology",
        items: [
          "Fitness band talking to a phone: BLE.",
          "Smart bulbs throughout a house, relaying for each other: Zigbee mesh.",
          "Soil sensors spread over a 5 km farm: LoRaWAN.",
          "Security camera streaming HD video: Wi-Fi.",
          "Gas meter in a basement across a whole city: NB-IoT.",
        ],
      },
    ],
    exercises: [
      {
        problem: "Differentiate between edge, fog and cloud computing with examples.",
        solution: `| Feature | Edge | Fog | Cloud |
|---|---|---|---|
| Location | at or very near the device | between edge and cloud | remote data centre |
| Processing | local | distributed / local network | centralised |
| Latency | very low | low | usually higher |
| Bandwidth needed | very low | reduced | higher |
| Storage | small | moderate | very large |
| Computing power | limited | moderate to high | very high |
| Internet dependency | low | moderate | higher |
| Use | real-time decisions | regional processing | global analytics |
| Example | camera AI | smart-city gateway/server | AWS, Azure, Google Cloud |

Example: a security camera detects a face itself (edge). A gateway handling 500 city cameras processes their video locally and sends only results (fog). The city stores months of results in AWS for analytics and machine learning (cloud).`,
      },
      {
        problem: "Name the IoT protocols that work at each layer of the IoT architecture.",
        solution: `\`\`\`
 Application layer    MQTT, CoAP, HTTP/REST, AMQP
 Transport (TCP/IP)   TCP (MQTT, HTTP), UDP (CoAP)
 Network layer        IPv6, 6LoWPAN, RPL
 Link / connectivity  BLE, Zigbee (802.15.4), Wi-Fi, LoRaWAN, NB-IoT, 4G/5G, RFID, NFC
 Perception layer     sensors, actuators, microcontrollers
\`\`\`

MQTT: publish/subscribe through a broker, over TCP 1883.
CoAP: request/response for constrained devices, over UDP 5683.
6LoWPAN: compresses IPv6 so it fits in IEEE 802.15.4 frames.
Zigbee: low-power mesh on 802.15.4. BLE: very low power, short range. LoRaWAN: long range, low power, low data rate. Wi-Fi: high data rate, more power.`,
      },
      {
        problem: "Compare MQTT and CoAP.",
        solution: `| | MQTT | CoAP |
|---|---|---|
| Model | publish/subscribe through a broker | request/response, client-server (like HTTP) |
| Transport | TCP | UDP |
| Default port | 1883 (8883 with TLS) | 5683 |
| Reliability | from TCP, plus QoS levels 0, 1, 2 | optional confirmable messages over UDP |
| Methods | CONNECT, PUBLISH, SUBSCRIBE | GET, POST, PUT, DELETE |
| Best for | many devices sending telemetry to many consumers | very constrained devices, RESTful access to sensors |

Both are lightweight application-layer protocols designed for IoT, and both are much lighter than HTTP.`,
      },
    ],
  },
];
