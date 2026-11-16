/*
 * All site content lives here. To add a member, copy one object in SITE.members.
 * Every user-visible string is { en: "...", fa: "..." }; use both("...") when it is the same in both languages.
 * Fields left empty or removed are simply not shown.
 */
const t = (en, fa) => ({ en, fa });
const both = (x) => ({ en: x, fa: x });

const SITE = {
  team: {
    // Set a real address to enable the contact form (mailto). Left empty on purpose: no team email was provided.
    email: "",
    // Team-level social links, e.g. { label: "GitHub", url: "https://github.com/your-org" }. None provided yet.
    socials: [],
    focus: [
      t("Embedded Systems", "سیستم‌های نهفته"),
      t("PCB Design", "طراحی PCB"),
      t("LoRa / LoRaWAN", "LoRa / LoRaWAN"),
      t("Biosignal Processing", "پردازش سیگنال‌های زیستی"),
      t("IoT", "اینترنت اشیا"),
      t("Blockchain", "بلاکچین")
    ]
  },

  ui: {
    skip: t("Skip to content", "رفتن به محتوا"),
    nav_home: t("Home", "خانه"), nav_about: t("About", "درباره"),
    nav_projects: t("Projects", "پروژه‌ها"), nav_members: t("Members", "اعضا"), nav_contact: t("Contact", "تماس"),
    tagline: t("Hardware, firmware and wireless systems, from idea to prototype", "سخت‌افزار، فریمور و سیستم‌های بی‌سیم، از ایده تا نمونه اولیه"),
    lead: t("A team of three electrical engineering students at Isfahan University of Technology, working on embedded systems, PCB design, wireless networking and signal processing.", "تیمی سه‌نفره از دانشجویان مهندسی برق دانشگاه صنعتی اصفهان که روی سیستم‌های نهفته، طراحی PCB، شبکه‌های بی‌سیم و پردازش سیگنال کار می‌کنند."),
    cta_explore: t("Explore the team", "آشنایی با تیم"), cta_members: t("View members", "مشاهده اعضا"),
    about_h: t("About the team", "درباره تیم"),
    about_p: t("Viyan R&D brings together three electrical engineering students at Isfahan University of Technology. Our work covers firmware for microcontrollers, PCB design and simulation, long-range wireless networks, signal processing and blockchain development. The team also goes by Madarafzar Hooshmand Isfahan.", "ویان R&D سه دانشجوی مهندسی برق دانشگاه صنعتی اصفهان را کنار هم آورده است. کار ما شامل فریمور میکروکنترلر، طراحی و شبیه‌سازی PCB، شبکه‌های بی‌سیم برد بلند، پردازش سیگنال و توسعه بلاکچین است. نام دیگر تیم «مدارافزار هوشمند اصفهان» است."),
    focus_h: t("Focus areas", "حوزه‌های فعالیت"),
    projects_h: t("Team projects", "پروژه‌های تیم"),
    projects_p: t("What we have built, and the project we are working on now.", "آنچه ساخته‌ایم و پروژه‌ای که اکنون روی آن کار می‌کنیم."),
    st_active: t("Proposed: feasibility and design", "پیشنهادشده: امکان‌سنجی و طراحی"),
    st_done: t("Completed", "تکمیل‌شده"),
    members_h: t("Members", "اعضا"),
    members_p: t("Open a member's resume for the full background.", "برای دیدن سوابق کامل، رزومه هر عضو را باز کنید."),
    view_resume: t("View full resume", "مشاهده رزومه کامل"),
    contact_h: t("Contact", "تماس"),
    contact_p: t("Reach any member directly through the links below.", "از طریق لینک‌های زیر مستقیم با هر عضو در ارتباط باشید."),
    form_h: t("Send a message to the team", "ارسال پیام به تیم"),
    f_name: t("Your name", "نام شما"), f_email: t("Your email", "ایمیل شما"), f_msg: t("Message", "پیام"),
    f_send: t("Open in email app", "باز کردن در برنامه ایمیل"),
    made: t("Made with care by", "ساخته‌شده با دقت توسط"), top: t("Back to top", "بازگشت به بالا"),
    close: t("Close", "بستن"),
    summary: t("Professional summary", "خلاصه حرفه‌ای"), contact: t("Contact", "اطلاعات تماس"),
    experience: t("Work experience", "سوابق کاری"), education: t("Education", "تحصیلات"),
    skills: t("Skills", "مهارت‌ها"), projects: t("Projects", "پروژه‌ها")
  },

  projects: [
    { status: "active",
      name: t("Wearable vital-signs monitoring system for crisis conditions", "سامانه پوشیدنی پایش علائم حیاتی در شرایط بحران"),
      desc: t("A wrist-worn module that measures heart rate, SpO2 and body temperature and sends the data over Wi-Fi to a monitoring system. An IMU corrects motion artifacts in the optical signal. The design is modular, with a 4-layer PCB, so sensors can be added later.", "ماژولی قابل نصب روی مچ که ضربان قلب، SpO2 و دمای بدن را اندازه می‌گیرد و داده را از طریق Wi-Fi به سامانه پایش می‌فرستد. یک IMU آرتیفکت حرکتی سیگنال اپتیکال را اصلاح می‌کند. طراحی ماژولار و با PCB چهارلایه است تا بتوان بعداً حسگر اضافه کرد."),
      tags: ["ESP32", "MAX30102", "MAX30205", "BMI160 / MPU6050", "Altium Designer", "Wi-Fi"] },
    { status: "done",
      name: t("STM32F103C8 development board", "برد توسعه مبتنی بر STM32F103C8"),
      desc: t("A custom BluePill-style board designed in Altium Designer: power supply, crystal, I/O ports, serial interfaces and expansion headers on a multi-layer PCB.", "یک برد توسعه سفارشی (مشابه BluePill) در Altium Designer شامل مدار تغذیه، کریستال، پورت‌های I/O، ارتباطات سریال و پایه‌های توسعه روی PCB چندلایه."),
      tags: ["STM32", "Altium Designer", "PCB"] },
    { status: "done",
      name: t("Wi-Fi controlled car on ESP32", "ماشین کنترلی مبتنی بر ESP32 با Wi-Fi"),
      desc: t("A car controlled over Wi-Fi with TCP/IP. It includes the motor driver and power circuits, the wireless link, and both the server and client software.", "خودروی کنترلی که با Wi-Fi و TCP/IP کنترل می‌شود. شامل مدار درایو موتورها و تغذیه، ارتباط بی‌سیم و نرم‌افزار سمت سرور و کلاینت است."),
      tags: ["ESP32", "TCP/IP", "Motor driver"] },
    { status: "done",
      name: t("LoRaWAN stack port (LBM) for STM32", "پورت استک LoRaWAN (LBM) روی STM32"),
      desc: t("LoRaWAN running on LBM stack ports for LoRa chips and STM32 L0, L4 and WL55 microcontrollers: MAC layers, power management and data-rate optimization for IoT and remote monitoring. Delivered with test code and a performance analysis.", "اجرای LoRaWAN با پورت‌های استک LBM روی چیپ‌های LoRa و میکروکنترلرهای STM32 سری L0، L4 و WL55: لایه‌های MAC، مدیریت توان و بهینه‌سازی نرخ ارسال برای اینترنت اشیا و پایش از راه دور. همراه با کد تست و گزارش تحلیل عملکرد."),
      tags: ["LoRaWAN", "STM32 L0 / L4 / WL55", "IoT"] },
    { status: "done",
      name: t("IMU filtering with Kalman and complementary filters", "فیلتر داده‌های IMU با فیلتر کالمن و مکمل"),
      desc: t("Kalman and complementary filters combine accelerometer and gyroscope data from MPU6050 and BMI160 sensors to estimate angle and remove noise and drift. Simulated in Python, then run on microcontrollers.", "فیلتر کالمن و فیلتر مکمل داده‌های شتاب‌سنج و ژیروسکوپ سنسورهای MPU6050 و BMI160 را ترکیب می‌کنند تا زاویه را تخمین بزنند و نویز و دریفت را حذف کنند. ابتدا در Python شبیه‌سازی و سپس روی میکروکنترلر پیاده‌سازی شد."),
      tags: ["Kalman filter", "IMU", "Python"] }
  ],

  members: [
    {
      id: "sina",
      initials: "SY",
      name: t("Sina Yeganeh", "سینا یگانه فعال"),
      title: [t("Hardware Developer", "توسعه‌دهنده سخت‌افزار"), t("Embedded System Design", "طراحی سیستم‌های نهفته")],
      photo: "assets/img/sina.webp",
      website: "https://sina-yeganeh.github.io/",
      bio: t("Electrical engineering student at Isfahan University of Technology. Designs PCBs and embedded systems, and keeps learning cybersecurity.", "دانشجوی مهندسی برق دانشگاه صنعتی اصفهان. طراحی PCB و سیستم‌های نهفته و یادگیری مداوم امنیت سایبری."),
      core: ["PCB Design", "Altium Designer", "KiCad", "C / C++", "Python"],
      github: "sina-yeganeh",
      email: "sinayeganeh.dev@gmail.com",
      resume: {
        education: [{
          role: t("B.Sc. in Electrical Engineering", "کارشناسی مهندسی برق"),
          org: t("Isfahan University of Technology", "دانشگاه صنعتی اصفهان"),
          period: t("Since 2024", "از تیر ۱۴۰۳"),
          points: [t("GPA 17.58 / 20", "معدل ۱۷٫۵۸ از ۲۰")]
        }],
        experience: [{
          role: t("Network Security Intern", "کارآموز امنیت شبکه"),
          org: t("APA, Industrial IT Center, Isfahan University of Technology", "شرکت آپا، مرکز فناوری اطلاعات صنعتی اصفهان"),
          period: null, points: []
        }],
        projects: [
          { name: both("sina-yeganeh.github.io"), desc: t("Personal portfolio website (HTML).", "وب‌سایت شخصی (HTML).") },
          { name: both("btc-terminal-tracker"), desc: t("Bitcoin price tracker for the terminal, built with Node.js.", "ردیاب قیمت بیت‌کوین در ترمینال با Node.js.") },
          { name: both("no-boycott"), desc: t("Python terminal tool for connecting to Iranian DNS servers to get around boycott-related access blocks.", "ابزار ترمینالی (Python) برای اتصال به DNSهای ایرانی جهت دور زدن محدودیت‌های دسترسی ناشی از تحریم.") },
          { name: both("nodejs-hackernews-clone"), desc: t("Hacker News clone: Node.js and TypeScript back end, EJS front end.", "کلون Hacker News با Node.js و TypeScript در بک‌اند و EJS در فرانت‌اند.") },
          { name: both("ACM-roadmap"), desc: t("ACM learning path and resources for teammates.", "مسیر یادگیری و منابع ACM برای هم‌تیمی‌ها.") }
        ],
        skills: [
          { label: t("Programming", "برنامه‌نویسی"), items: ["Python", "C", "C++", "MicroPython", "MATLAB"] },
          { label: t("Web and security", "وب و امنیت"), items: ["JavaScript", "React", "Flask", "Node.js", "MySQL", "Kali Linux", "TryHackMe"] },
          { label: t("Engineering tools", "ابزارهای مهندسی"), items: ["Altium Designer", "KiCad", "Proteus", "STM32CubeIDE"] },
          { label: t("Other", "سایر"), items: ["Linux", "Git", "VS Code", t("Soldering", "لحیم‌کاری")] }
        ],
        extras: [
          { title: t("Activities", "فعالیت‌ها"), items: [t("Active member, IEEE Student Branch, Isfahan University of Technology (since 2024)", "عضو فعال شاخه دانشجویی IEEE دانشگاه صنعتی اصفهان (از ۱۴۰۳)")] },
          { title: t("Online courses (Udemy, no certificates)", "دوره‌های آنلاین (یودمی، بدون گواهینامه)"), items: [
            "Build an Arduino Nano with Altium Designer", "PCB Design with Altium Designer",
            "Soldering Requirements for Electronics", "Hardware Design with KiCad V6 and STM32", "PCB Design with KiCad"] }
        ]
      }
    },
    {
      id: "ali",
      initials: "AM",
      name: t("Ali Moeini", "علی معینی"),
      title: [t("Firmware Development", "توسعه فریمور"), t("System Design", "طراحی سیستم")],
      bio: t("Electrical engineering student at Isfahan University of Technology with a Quantum Technology minor. Focuses on firmware, system design, system-level C++ and system modeling.", "دانشجوی مهندسی برق دانشگاه صنعتی اصفهان با مینور فناوری کوانتومی. متمرکز بر فریمور، طراحی سیستم، C++ سیستمی و مدل‌سازی سیستم‌ها."),
      core: ["C++", "STM32", "Altium Designer", "LTspice", "Python"],
      github: "opaip",
      linkedin: "ali-moeiini",
      email: "moeini.a@ec.iut.ac.ir",
      resume: {
        education: [{
          role: t("B.Sc. in Electrical Engineering", "کارشناسی مهندسی برق"),
          org: t("Isfahan University of Technology", "دانشگاه صنعتی اصفهان"),
          period: t("Since Sep 2024", "از مهر ۱۴۰۳"),
          points: [t("GPA 17.35 / 20", "معدل ۱۷٫۳۵ از ۲۰"), t("Academic minor: Quantum Technology and Quantum Physics", "مینور: فناوری کوانتومی و فیزیک کوانتوم")]
        }],
        experience: [{
          role: t("Hardware Systems R&D Intern", "کارآموز R&D سیستم‌های سخت‌افزاری"),
          org: t("Industrial R&D Engineering Lab, Isfahan", "آزمایشگاه صنعتی R&D مهندسی، اصفهان"),
          period: t("Jun 2026 to present", "از خرداد ۱۴۰۵ تا اکنون"),
          points: [
            t("Precision measurement and transient-response analysis of sensor hardware under strict timing constraints (under 20 ms).", "اندازه‌گیری دقیق و تحلیل پاسخ گذرای سخت‌افزار سنسور تحت محدودیت‌های زمانی سخت (کمتر از ۲۰ میلی‌ثانیه)."),
            t("Debugged multi-layer PCBs and power distribution schematics in Altium Designer, validating power-path stability with LTspice simulations.", "دیباگ بردهای چندلایه و شماتیک توزیع توان در Altium Designer و اعتبارسنجی پایداری مسیر توان با شبیه‌سازی LTspice.")
          ]
        }],
        projects: [
          { name: both("Project Penguin"), desc: t("Open-source C++ engine for equilibrium analysis and network topology solving, based on Modified Nodal Analysis (MNA). It separates network topology from physical laws and adds transient time-stepping for reactive storage components.", "موتور متن‌باز C++ برای تحلیل تعادل و حل توپولوژی شبکه بر پایه تحلیل گره اصلاح‌شده (MNA). توپولوژی شبکه را از قوانین فیزیکی جدا می‌کند و گام‌زنی زمانی گذرا برای المان‌های ذخیره‌کننده انرژی دارد.") },
          { name: both("SearchInHafez"), desc: t("Finds Hafez poems related to a search query (Jupyter Notebook).", "یافتن شعرهای مرتبط حافظ با جستجوی کاربر (Jupyter Notebook).") },
          { name: both("ComplexNumbers"), desc: t("C++ library for complex-number calculations.", "کتابخانه C++ برای محاسبات اعداد مختلط.") },
          { name: both("ExeProcessManager"), desc: t("Python manager for executable processes.", "مدیریت پروسه‌های اجرایی با Python.") },
          { name: both("RLC-Simulator"), desc: t("Simple series RLC circuit simulator in Python.", "شبیه‌ساز ساده مدار RLC سری با Python.") },
          { name: t("Agent-Based Complex Networks Modeling (Nov 2025 to present)", "مدل‌سازی عامل‌بنیان شبکه‌های پیچیده (از آبان ۱۴۰۴ تا اکنون)"), desc: t("Vectorized interaction-matrix models of opinion dynamics and numerical simulation pipelines in Python, studying phase transitions and collective behavior in complex networks.", "مدل‌های برداری ماتریس برهم‌کنش برای دینامیک عقیده و خطوط شبیه‌سازی عددی با Python برای بررسی گذار فاز و رفتار جمعی در شبکه‌های پیچیده.") }
        ],
        skills: [
          { label: t("Programming", "برنامه‌نویسی"), items: ["Modern C++ (C++17/20)", "Python (NumPy, SciPy)", "CMake"] },
          { label: t("Tools", "ابزارها"), items: ["Altium Designer", "LTspice", "LabVIEW", "LaTeX", "Git / GitHub"] },
          { label: t("Embedded", "نهفته"), items: ["STM32", "ESP32"] },
          { label: t("Modeling", "مدل‌سازی"), items: [t("Graph theory", "نظریه گراف"), t("Numerical linear algebra", "جبر خطی عددی"), t("Differential equations", "معادلات دیفرانسیل"), t("Statistical dynamics", "دینامیک آماری")] }
        ],
        extras: [
          { title: t("Additional experience (self-reported)", "سوابق دیگر (اظهار شخصی)"), items: [
            t("Firmware development for STM32 microcontrollers", "توسعه فریمور برای میکروکنترلرهای STM32"),
            t("RTOS-based weather prediction system: developer", "سیستم پیش‌بینی هوا مبتنی بر RTOS: توسعه‌دهنده"),
            t("Standby attitude indicator: system architecture, hardware debugging, software design", "سیستم standby attitude indicator: معماری سیستم، دیباگ سخت‌افزار، طراحی نرم‌افزار"),
            t("Digital health monitoring gadget: signal-processing algorithms", "گجت پایش دیجیتال سلامت: الگوریتم‌های پردازش سیگنال"),
            t("Firmware for state estimation systems: developer", "فریمور سیستم‌های state estimation: توسعه‌دهنده")] },
          { title: t("Research interests", "علایق پژوهشی"), items: [t("Operator theory", "نظریه عملگرها"), t("Event-driven systems (QP/C++ statecharts)", "سیستم‌های رویدادمحور (QP/C++ statecharts)"), t("Signal processing", "پردازش سیگنال")] },
          { title: t("Awards", "افتخارات"), items: [t("Top 4.5% among 128,000+ candidates in the Iranian national university entrance exam (Mathematics and Physics); Region 1 rank 3,000", "رتبه در میان ۴٫۵ درصد برتر از بیش از ۱۲۸ هزار داوطلب کنکور ریاضی و فیزیک؛ رتبه ۳٬۰۰۰ منطقه ۱")] }
        ]
      }
    },
    {
      id: "behrad",
      initials: "BK",
      name: t("Behrad Kabiri Samani", "بهراد کبیری سامانی"),
      title: [t("Blockchain Developer", "توسعه‌دهنده بلاکچین"), t("Embedded Systems", "سیستم‌های نهفته")],
      photo: "assets/img/behrad.webp",
      bio: t("Electrical engineering student building embedded firmware, PCB hardware and LoRa networks, plus Ethereum smart contracts in Solidity. Currently a Vibe Coder and Tech Support at Arasta, shipping features with AI coding agents.", "دانشجوی مهندسی برق؛ فعال در فریمور نهفته، سخت‌افزار PCB و شبکه‌های LoRa و همچنین قراردادهای هوشمند اتریوم با Solidity. اکنون به‌عنوان Vibe Coder و پشتیبانی فنی در آراسته فعالیت می‌کند و قابلیت‌ها را با ایجنت‌های کدنویسی هوش مصنوعی توسعه می‌دهد."),
      core: ["Solidity", "Altium Designer", "ARM Cortex-M / ESP32", "FreeRTOS", "LoRa / LoRaWAN", "AI Coding Agents"],
      github: "Behrad-bs",
      linkedin: "behrad-kabiri-777138361",
      email: "behradkabiri13841384@gmail.com",
      resume: {
        education: [{
          role: t("B.Sc. in Electrical Engineering", "کارشناسی مهندسی برق"),
          org: t("Isfahan University of Technology", "دانشگاه صنعتی اصفهان"),
          period: t("Since Oct 2024", "از مهر ۱۴۰۳"),
          points: [t("GPA 18.5 / 20", "معدل ۱۸٫۵ از ۲۰"), t("Focus: digital electronics, logic circuits, microprocessor systems, PCB design and circuit simulation", "تمرکز: الکترونیک دیجیتال، مدارهای منطقی، سیستم‌های ریزپردازنده‌ای، طراحی PCB و شبیه‌سازی مدار")]
        }],
        experience: [
          { role: t("Vibe Coder & Technical Support", "وایب کدر و پشتیبانی فنی"), org: t("Arasta (arasta.ir)", "آراسته (arasta.ir)"), period: t("Nov 2026 to present (6-month contract)", "از آبان ۱۴۰۵ تا اکنون (قرارداد ۶ ماهه)"), points: [
            t("Shipping product features with AI coding agents and agentic workflows across multiple agent managers and LLM models.", "توسعه قابلیت‌های محصول با ایجنت‌های کدنویسی هوش مصنوعی و گردش‌کارهای agentic روی انواع agent managerها و مدل‌های LLM."),
            t("Handling deployment, CI/CD and production troubleshooting for live customer-facing services.", "مدیریت دیپلوی، CI/CD و رفع مشکلات محیط تولید برای سرویس‌های در دسترس مشتری."),
            t("Team collaboration on GitHub: pull-request review, branching strategy and release coordination.", "همکاری تیمی روی GitHub: بازبینی pull-request، استراتژی برنچینگ و هماهنگی ریلیز.")] },
          { role: t("Hardware Design Engineer", "مهندس طراحی سخت‌افزار"), org: both("Viyan R&D"), period: t("Jul 2026 to present", "از تیر ۱۴۰۵ تا اکنون"), points: [
            t("Designed a wearable vital-signs gadget end to end, from component selection to PCB layout in Altium Designer.", "طراحی کامل یک گجت پوشیدنی علائم حیاتی، از انتخاب قطعات تا چیدمان PCB در Altium Designer."),
            t("Optimized the PCB layout for EMI/EMC to reduce noise in a circuit sensitive to biosignals.", "بهینه‌سازی چیدمان PCB از نظر EMI/EMC برای کاهش نویز در مداری حساس به سیگنال‌های زیستی."),
            t("Simulated power and signal integrity (PI/SI) before fabrication.", "شبیه‌سازی یکپارچگی توان و سیگنال (PI/SI) پیش از ساخت.")] },
          { role: t("Hardware Engineering Intern", "کارآموز سخت‌افزار"), org: t("Private employer, Isfahan", "کارفرمای خصوصی، اصفهان"), period: t("Jul to Sep 2026", "تیر تا شهریور ۱۴۰۵"), points: [
            t("Contributed to PCB design from schematic to final layout, applying high-speed and high-frequency considerations.", "مشارکت در طراحی PCB از شماتیک تا چیدمان نهایی با رعایت ملاحظات سرعت و فرکانس بالا."),
            t("Simulated circuits to verify performance before fabrication.", "شبیه‌سازی مدارها برای راستی‌آزمایی عملکرد پیش از ساخت.")] },
          { role: t("R&D Engineer", "مهندس R&D"), org: t("Behbood Ertebat Chehelston, Isfahan", "بهبود ارتباط چهلستون، اصفهان"), period: t("Jun to Sep 2026", "خرداد تا شهریور ۱۴۰۵"), points: [
            t("Designed a long-range, low-power radio network based on LoRa, using LoRaWAN stacks.", "طراحی شبکه رادیویی برد بلند و کم‌مصرف مبتنی بر LoRa با استفاده از استک‌های LoRaWAN."),
            t("Implemented a system on Meshtastic firmware to create an infrastructure-independent mesh network.", "پیاده‌سازی سیستم بر پایه فریمور Meshtastic برای ایجاد شبکه مش مستقل از زیرساخت."),
            t("Integrated wireless (LoRa/LoRaWAN) and wired (RS-485) protocols into one system architecture.", "یکپارچه‌سازی پروتکل‌های بی‌سیم (LoRa/LoRaWAN) و سیمی (RS-485) در یک معماری سیستم.")] },
          { role: t("Blockchain Developer (freelance)", "توسعه‌دهنده بلاکچین (فریلنس)"), org: t("Isfahan", "اصفهان"), period: t("Dec 2024 to present", "از آذر ۱۴۰۳ تا اکنون"), points: [
            t("Designed and implemented smart contracts on the Ethereum blockchain.", "طراحی و پیاده‌سازی قراردادهای هوشمند روی بلاکچین اتریوم."),
            t("Developed and optimized decentralized applications (dApps) in Solidity.", "توسعه و بهینه‌سازی اپلیکیشن‌های غیرمتمرکز (dApp) با Solidity."),
            t("Collaborated on blockchain projects building decentralized finance (DeFi) systems.", "همکاری در پروژه‌های بلاکچین برای ایجاد سیستم‌های مالی غیرمتمرکز (DeFi).")] }
        ],
        projects: [
          { name: t("Decentralized Finance (DeFi) platform on Ethereum", "پلتفرم مالی غیرمتمرکز (DeFi) روی اتریوم") },
          { name: t("Solana wallet; ERC-20 token with ICO; NFT design", "کیف پول Solana؛ توکن ERC-20 با ICO؛ طراحی NFT") },
          { name: t("Smart weather station with multitasked sensor management (FreeRTOS)", "ایستگاه هواشناسی هوشمند با مدیریت چندوظیفگی سنسورها (FreeRTOS)") },
          { name: t("Wearable vital-signs gadget and gateway: hardware and PCB design", "گجت پوشیدنی علائم حیاتی و گیت‌وی: طراحی سخت‌افزار و PCB") },
          { name: t("Meshtastic firmware customization and LoRa communication system (MQTT)", "شخصی‌سازی فریمور Meshtastic و سامانه ارتباطی LoRa با MQTT") },
          { name: both("lorawan-lbm-cubewl"), desc: t("Production LoRaWAN stack port based on Semtech LBM (LoRa Basics Modem) and STM32CubeWL — full MAC layer, regional parameters (EU868 / AS923 / US915) and Class A/B/C support for STM32WL55, L0 and L4 families.", "پورت تولیدی استک LoRaWAN بر پایه LBM شرکت Semtech و STM32CubeWL — لایه MAC کامل، پارامترهای منطقه‌ای (EU868 / AS923 / US915) و پشتیبانی کلاس A/B/C برای خانواده‌های STM32WL55 و L0 و L4.") },
          { name: both("altium-hub"), desc: t("Personal Altium Designer hub: reusable footprints, schematic templates, design-rule sets and library components maintained across hardware projects.", "هاب شخصی Altium Designer: فوت‌پرینت‌های قابل‌استفاده مجدد، قالب‌های شماتیک، مجموعه قواعد طراحی و کامپوننت‌های کتابخانه‌ای که در پروژه‌های سخت‌افزاری نگهداری می‌شوند.") },
          { name: both("ArduWorks"), desc: t("Curated Arduino playground: code samples, hardware schematics and mini-projects built with sensors, displays, wireless modules and motor drivers.", "مجموعه‌تمرین Arduino: نمونه‌کد، شماتیک سخت‌افزار و مینی‌پروژه با سنسورها، نمایشگرها، ماژول‌های بی‌سیم و درایو موتور.") },
          { name: both("ESPWorks-IoT"), desc: t("Distributed IoT system that links ESP devices over the Internet — one node sends commands, another executes and responds in real time, with a small protocol for command/ack and status push.", "سامانه IoT توزیع‌شده که چند دستگاه ESP را از طریق اینترنت به هم وصل می‌کند — یک نود فرمان می‌فرستد و نود دیگر در لحظه اجرا و پاسخ می‌دهد، با پروتکل کوچک برای command/ack و push وضعیت.") },
          { name: both("BlockForge-ERC20-Tokens"), desc: t("ERC-20 token contracts in Solidity with Hardhat test setup and deployment scripts.", "قراردادهای توکن ERC-20 با Solidity، همراه با Hardhat برای تست و اسکریپت دیپلوی.") },
          { name: both("BlockForge-Solidity"), desc: t("Solidity smart-contract experiments: access patterns, gas tuning and reentrancy guards.", "آزمایش‌های قرارداد هوشمند با Solidity: الگوهای دسترسی، تنظیم گس و محافظ‌های reentrancy.") },
          { name: both("STMWorks"), desc: t("STM32 firmware projects: HAL/LL drivers, FreeRTOS tasks and peripheral demos across F1, L4 and WL55.", "پروژه‌های فریمور STM32: درایورهای HAL/LL، تسک‌های FreeRTOS و دموهای جانبی روی F1 و L4 و WL55.") }
        ],
        skills: [
          { label: t("Blockchain", "بلاکچین"), items: ["Ethereum", "Solana", "Smart contracts", "dApps", "DeFi", "ERC-20", "NFT"] },
          { label: t("Languages", "زبان‌ها"), items: ["Solidity", "C", "C++", "Rust", "Python", "Assembly"] },
          { label: t("Embedded", "نهفته"), items: ["ARM Cortex-M", "AVR", "ESP32", "FreeRTOS", "Meshtastic"] },
          { label: t("Hardware and EDA", "سخت‌افزار و EDA"), items: ["Altium Designer", "Cadence OrCAD PSpice", "EMI/EMC", "SI/PI"] },
          { label: t("Communication", "ارتباطات"), items: ["LoRa", "LoRaWAN", "MQTT", "RS-485", "Modbus", "Bluetooth LE"] },
          { label: t("AI coding tools", "ابزارهای کدنویسی هوش مصنوعی"), items: ["Zcode", "Cursor", "Claude Code"] },
          { label: t("Tools", "ابزارها"), items: ["Zephyr RTOS", "PlatformIO", "Hardhat", "OpenZeppelin", "IPFS", "Docker", "Wireshark", "CMake", "Git / GitHub"] }
        ],
        extras: [
          { title: t("Languages", "زبان‌ها"), items: [t("Persian (native), English (advanced)", "فارسی (زبان مادری)، انگلیسی (پیشرفته)")] }
        ]
      }
    }
  ]
};
