const PORTFOLIO_DATA = {
  profile: {
    name: "Thu Tran",
    title: "Frontend Developer",
    subtitle:
      "Thiết kế giao diện web rõ ràng, hiện đại và tập trung vào trải nghiệm thực tế.",
    ctaPrimary: {
      label: "Let's collaborate",
      href: "mailto:hello@ngocthu.space",
    },
    ctaSecondary: {
      label: "View projects",
      href: "#projects",
    },
    portrait: "../images/avatar.jpg",
    socials: [
      { label: "GitHub", icon: "GH", href: "https://github.com/tranthingocthuol1234-cmyk" },
      { label: "Email", icon: "@", href: "mailto:hello@ngocthu.space" },
      { label: "Portfolio", icon: "WEB", href: "https://ngocthu-space.vercel.app" },
      { label: "Contact", icon: "CV", href: "mailto:hello@ngocthu.space?subject=Portfolio%20Inquiry" },
    ],
  },
  services: [
    {
      title: "UI/UX Design",
      description: "Lên bố cục, wireframe và nhịp nội dung để giao diện nhìn sạch và dễ dùng.",
    },
    {
      title: "Frontend Build",
      description: "Dựng giao diện bằng HTML, CSS, JavaScript hoặc React / Next.js tùy dự án.",
    },
    {
      title: "Responsive Layout",
      description: "Tối ưu hiển thị trên mobile, tablet và desktop mà không phá vỡ bố cục.",
    },
    {
      title: "Portfolio Custom",
      description: "Biến template thành portfolio cá nhân có phong cách riêng và dễ sửa về sau.",
    },
  ],
  experiences: [
    {
      company: "Freelance & Personal Projects",
      role: "Frontend Developer",
      period: "2024 - Now",
    },
    {
      company: "Coursework & Team Projects",
      role: "UI/UX and Frontend",
      period: "2022 - 2024",
    },
    {
      company: "Portfolio Rebuild",
      role: "Design System Customization",
      period: "2026",
    },
  ],
  projects: [
    {
      title: "ParkFlow B",
      year: "2026",
      description: "Dashboard concept cho bãi đỗ xe thông minh với thông tin rõ và dễ quét nhanh.",
      tags: ["Dashboard", "UI", "Responsive"],
    },
    {
      title: "Thu Portfolio",
      year: "2026",
      description: "Portfolio cá nhân chuyển từ template sang bản có phong cách tối giản dạng presentation.",
      tags: ["Portfolio", "HTML", "CSS", "JS"],
    },
    {
      title: "Brand Landing Page",
      year: "2026",
      description: "Landing page nhấn mạnh nhịp nội dung, hero section và CTA rõ ràng.",
      tags: ["Landing Page", "Visual", "Content Flow"],
    },
  ],
  contact: {
    title: "Bạn có thể sửa rất nhanh",
    description:
      "Toàn bộ nội dung trong demo này đang nằm ở đầu file script.js. Bạn chỉ cần đổi text, link, danh sách service, kinh nghiệm và project là xong.",
    actions: [
      { label: "Gửi email", href: "mailto:hello@ngocthu.space" },
      { label: "Mở GitHub", href: "https://github.com/tranthingocthuol1234-cmyk" },
    ],
    tips: [
      "Đổi ảnh chân dung bằng cách thay file portrait trong profile.",
      "Đổi màu bằng CSS variables ở đầu style.css.",
      "Đổi số slide bằng cách thêm hoặc bớt section trong mảng slides.",
      "Hiệu ứng chuyển slide nằm trong hàm setActiveSlide().",
    ],
  },
};

const slides = [
  {
    id: "intro",
    label: "Intro",
    theme: "light",
    render: () => {
      const { profile } = PORTFOLIO_DATA;

      return `
        <div class="slide-inner hero-slide">
          <div class="hero-grid">
            <div class="hero-copy">
              <span class="eyebrow">Portfolio</span>
              <h1>${profile.title}</h1>
              <p>${profile.subtitle}</p>
              <div class="hero-buttons">
                <a class="button-link primary" href="${profile.ctaPrimary.href}">${profile.ctaPrimary.label} ↗</a>
                <a class="button-link secondary" href="${profile.ctaSecondary.href}">${profile.ctaSecondary.label}</a>
              </div>
            </div>

            <div class="portrait-wrap">
              <div class="portrait-glow"></div>
              <img class="portrait-image" src="${profile.portrait}" alt="${profile.name}" />
            </div>

            <div class="social-stack">
              ${profile.socials
                .map(
                  (social) => `
                    <a class="social-pill" href="${social.href}" target="_blank" rel="noreferrer">
                      <span class="social-icon">${social.icon}</span>
                      <strong>${social.label}</strong>
                    </a>
                  `,
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
    },
  },
  {
    id: "services",
    label: "Services",
    theme: "light",
    render: () => `
      <div class="slide-inner">
        <div class="service-layout">
          <div class="service-copy">
            <div class="watermark">SERVICE</div>
            <h2 class="slash-title">/SERVICE</h2>
            <p>
              Bố cục trong video gốc có cảm giác như một presentation tối giản. Phần này giữ đúng tinh thần đó:
              chữ lớn, nền sạch, khoảng thở rộng và mỗi service là một khối riêng rõ ràng.
            </p>
          </div>

          <div class="service-grid">
            ${PORTFOLIO_DATA.services
              .map(
                (service) => `
                  <article class="service-card">
                    <div class="service-card-head">
                      <h3>${service.title}</h3>
                      <span class="arrow">↗</span>
                    </div>
                    <p>${service.description}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `,
  },
  {
    id: "experience",
    label: "Experience",
    theme: "dark",
    render: () => `
      <div class="slide-inner">
        <div class="watermark">EXPERIENCE</div>
        <div class="experience-header">
          <h2 class="slash-title">/EXPERIENCE</h2>
          <p>${PORTFOLIO_DATA.experiences.length}+ items of experience</p>
        </div>

        <div class="experience-list">
          ${PORTFOLIO_DATA.experiences
            .map(
              (item) => `
                <article class="experience-row">
                  <div>
                    <h3>${item.company}</h3>
                    <p>${item.role}</p>
                  </div>
                  <span>${item.period}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    `,
  },
  {
    id: "projects",
    label: "Projects",
    theme: "light",
    render: () => `
      <div class="slide-inner" id="projects">
        <div class="project-layout">
          <div>
            <div class="watermark">PROJECTS</div>
            <h2 class="slash-title">/PROJECTS</h2>
          </div>

          <div class="project-grid">
            ${PORTFOLIO_DATA.projects
              .map(
                (project) => `
                  <article class="project-card">
                    <div class="project-meta">
                      <strong>${project.title}</strong>
                      <span>${project.year}</span>
                    </div>
                    <p>${project.description}</p>
                    <div class="project-tags">
                      ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `,
  },
  {
    id: "contact",
    label: "Contact",
    theme: "light",
    render: () => `
      <div class="slide-inner">
        <div class="contact-layout">
          <div class="contact-panel">
            <div class="watermark">CONTACT</div>
            <h2 class="slash-title">/CONTACT</h2>
            <p>${PORTFOLIO_DATA.contact.description}</p>
            <div class="contact-actions">
              ${PORTFOLIO_DATA.contact.actions
                .map(
                  (action, index) => `
                    <a class="button-link ${index === 0 ? "primary" : "secondary"}" href="${action.href}" target="_blank" rel="noreferrer">
                      ${action.label}
                    </a>
                  `,
                )
                .join("")}
            </div>
          </div>

          <div class="contact-grid">
            <article class="contact-card">
              <small>Editable</small>
              <h3>${PORTFOLIO_DATA.contact.title}</h3>
              <p>Mỗi phần đang được render từ JavaScript nên bạn có thể copy sang nơi khác hoặc thêm section mới rất dễ.</p>
            </article>
            ${PORTFOLIO_DATA.contact.tips
              .map(
                (tip) => `
                  <article class="contact-card">
                    <small>Tip</small>
                    <h3>${tip}</h3>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `,
  },
];

const slidesTrack = document.getElementById("slidesTrack");
const dotNav = document.getElementById("dotNav");
const sectionIndex = document.getElementById("sectionIndex");
const sectionName = document.getElementById("sectionName");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

let activeIndex = 0;
let wheelLock = false;

function renderSlides() {
  slidesTrack.innerHTML = slides
    .map(
      (slide, index) => `
        <section
          class="slide slide-${slide.theme} ${index === activeIndex ? "is-active" : ""}"
          data-slide-index="${index}"
          aria-hidden="${index === activeIndex ? "false" : "true"}"
        >
          ${slide.render()}
        </section>
      `,
    )
    .join("");

  dotNav.innerHTML = slides
    .map(
      (slide, index) => `
        <button
          class="dot-button ${index === activeIndex ? "active" : ""}"
          type="button"
          aria-label="Đi đến ${slide.label}"
          data-dot-index="${index}"
        ></button>
      `,
    )
    .join("");

  bindDotButtons();
  updateMeta();
}

function updateMeta() {
  const current = slides[activeIndex];
  sectionIndex.textContent = String(activeIndex + 1).padStart(2, "0");
  sectionName.textContent = current.label;
}

function setActiveSlide(nextIndex) {
  if (nextIndex < 0 || nextIndex >= slides.length || nextIndex === activeIndex) return;

  activeIndex = nextIndex;

  document.querySelectorAll(".slide").forEach((slideEl, index) => {
    const isActive = index === activeIndex;
    slideEl.classList.toggle("is-active", isActive);
    slideEl.setAttribute("aria-hidden", String(!isActive));
  });

  document.querySelectorAll(".dot-button").forEach((dotEl, index) => {
    dotEl.classList.toggle("active", index === activeIndex);
  });

  updateMeta();
}

function bindDotButtons() {
  document.querySelectorAll("[data-dot-index]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveSlide(Number(button.dataset.dotIndex));
    });
  });
}

function move(direction) {
  const nextIndex = activeIndex + direction;
  if (nextIndex < 0 || nextIndex >= slides.length) return;
  setActiveSlide(nextIndex);
}

nextButton.addEventListener("click", () => move(1));
prevButton.addEventListener("click", () => move(-1));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === "PageDown") {
    move(1);
  }

  if (event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "PageUp") {
    move(-1);
  }
});

window.addEventListener(
  "wheel",
  (event) => {
    if (window.innerWidth <= 1100) return;
    if (wheelLock) return;

    if (Math.abs(event.deltaY) < 18) return;

    wheelLock = true;
    if (event.deltaY > 0) move(1);
    else move(-1);

    window.setTimeout(() => {
      wheelLock = false;
    }, 650);
  },
  { passive: true },
);

let touchStartY = 0;
window.addEventListener("touchstart", (event) => {
  touchStartY = event.changedTouches[0].clientY;
});

window.addEventListener("touchend", (event) => {
  const touchEndY = event.changedTouches[0].clientY;
  const delta = touchStartY - touchEndY;

  if (Math.abs(delta) < 40) return;
  if (delta > 0) move(1);
  else move(-1);
});

renderSlides();
