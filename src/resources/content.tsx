import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Thu",
  lastName: "Tran",
  name: "Thu Tran",
  role: "Frontend Developer & UI Designer",
  avatar: "/images/avatar.jpg",
  email: "hello@ngocthu.space",
  location: "Asia/Ho_Chi_Minh",
  languages: ["Tiếng Việt", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Nhận cập nhật từ {person.firstName}</>,
  description: <>Chia sẻ ngắn về giao diện web, thiết kế sản phẩm và quá trình học tập.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tranthingocthuol1234-cmyk",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Trang chủ",
  title: `${person.name} | Portfolio`,
  description: `Portfolio cá nhân của ${person.name}, tập trung vào thiết kế giao diện và phát triển web bằng Next.js.`,
  headline: <>Thiết kế giao diện rõ ràng, xây trải nghiệm web mượt và dễ dùng</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong>ParkFlow B</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Dự án nổi bật
        </Text>
      </Row>
    ),
    href: "/work/parkflow-b-smart-parking-platform",
  },
  subline: (
    <>
      Mình tập trung vào landing page, dashboard và website cá nhân bằng React / Next.js.
      <br />
      Ưu tiên giao diện sạch, responsive và dễ mở rộng khi deploy thực tế.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Giới thiệu",
  title: `Giới thiệu | ${person.name}`,
  description: `Thông tin về ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Tổng quan",
    description: (
      <>
        Mình xây dựng giao diện web theo hướng tối giản, hiện đại và ưu tiên khả năng sử dụng
        thực tế. Điểm mình tập trung nhất là chuyển ý tưởng thành giao diện có cấu trúc tốt, chạy
        ổn trên desktop lẫn mobile và dễ mở rộng sau này.
      </>
    ),
  },
  work: {
    display: true,
    title: "Kinh nghiệm",
    experiences: [
      {
        company: "Freelance & Personal Projects",
        timeframe: "2024 - nay",
        role: "Frontend Developer",
        achievements: [
          <>
            Thiết kế và phát triển các trang portfolio, landing page và trang giới thiệu sản phẩm
            bằng React / Next.js với bố cục rõ ràng và responsive.
          </>,
          <>
            Triển khai dự án lên Vercel, tối ưu lại nội dung hiển thị và cấu trúc component để dễ
            chỉnh sửa khi cần cập nhật.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Portfolio homepage preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Coursework & Team Projects",
        timeframe: "2022 - 2024",
        role: "UI/UX and Frontend",
        achievements: [
          <>
            Tham gia các đồ án nhóm, phụ trách thiết kế giao diện, wireframe và code các màn hình
            chính cho website quản lý và sản phẩm học tập.
          </>,
          <>
            Rèn luyện cách chia component, làm việc với GitHub và phối hợp giữa phần nội dung,
            giao diện và triển khai.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Học tập",
    institutions: [
      {
        name: "Information Technology",
        description: <>Nền tảng về lập trình web, cấu trúc dữ liệu và quy trình phát triển sản phẩm số.</>,
      },
      {
        name: "Self-learning",
        description: <>Tự học thêm về UI/UX, thiết kế hệ thống giao diện, GitHub và quy trình deploy dự án.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Kỹ năng chính",
    skills: [
      {
        title: "Next.js & React",
        description: (
          <>Xây dựng giao diện component-based, responsive layout, routing và tối ưu trải nghiệm người dùng.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Next.js interface",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "UI Design & Prototype",
        description: (
          <>Lên bố cục, wireframe và prototype trước khi code để luồng sử dụng rõ ràng ngay từ đầu.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "UI design preview",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Prototype preview",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Deployment & Collaboration",
        description: (
          <>Làm việc với GitHub, quản lý phiên bản và deploy trên Vercel để dự án có thể chia sẻ và cập nhật nhanh.</>
        ),
        tags: [
          {
            name: "GitHub",
          },
          {
            name: "Vercel",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Bài viết | ${person.name}`,
  description: `Góc chia sẻ về giao diện, code và quá trình học tập của ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Dự án",
  title: `Dự án tiêu biểu | ${person.name}`,
  description: `Các dự án giao diện và phát triển web của ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery | ${person.name}`,
  description: `Bộ sưu tập hình ảnh của ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "gallery image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
