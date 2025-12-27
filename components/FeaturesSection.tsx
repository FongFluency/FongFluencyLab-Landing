import React from "react";
import Image from "next/image";

// Custom SVG Icons
const SchoolIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    />
  </svg>
);

const MicrophoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </svg>
);

const features = [
  {
    icon: <SchoolIcon />,
    title: "Lộ trình cá nhân hóa",
    description:
      "Được thiết kế riêng để tối ưu hóa thời gian và hiệu quả học tập của bạn.",
  },
  {
    icon: <MicrophoneIcon />,
    title: "AI Phân tích chuyên sâu",
    description:
      "Công nghệ AI độc quyền giúp tinh chỉnh từng âm tiết và ngữ điệu.",
  },
  {
    icon: <ChartIcon />,
    title: "Định hướng mục tiêu",
    description:
      "Minh bạch tiến độ, rõ ràng lộ trình để bạn luôn tràn đầy động lực.",
  },
  {
    icon: <UsersIcon />,
    title: "Tư duy ngôn ngữ",
    description:
      "Không chỉ là học vẹt, chúng tôi giúp bạn xây dựng tư duy tiếng Anh tự nhiên.",
  },
];

const detailedFeatures = [
  {
    title: "Lộ trình Chinh phục Toàn diện",
    subtitle: "Phá đảo Part 1, 2 và 3 một cách ngoạn mục",
    description:
      "Từ những câu hỏi phản xạ nhanh ở Part 1 đến những bài thuyết trình chuyên sâu ở Part 2 và tranh luận học thuật tại Part 3, chúng tôi đồng hành cùng bạn trên từng bước chân. Hệ thống bài học được cá nhân hóa sâu sắc, giúp bạn chuyển mình mượt mà giữa các cấp độ.",
    image: "/features/ielts-parts.png",
    reverse: true,
    tags: ["Part 1, 2, 3", "Cá nhân hóa", "Phản xạ tự nhiên"],
  },
  {
    title: "Khai phá Tiềm năng Riêng biệt",
    subtitle: "Lối đi riêng cho tư duy của chính bạn",
    description:
      "Bạn muốn làm chủ từ vựng theo từng chủ đề (Topic) hay nắm vững cấu trúc cho từng loại câu hỏi (Question Type)? Tại FongFluency, chúng tôi không bắt bạn học vẹt. Bạn chính là người kiến tạo lộ trình học tập tối ưu nhất, phù hợp nhất với thế mạnh của mình.",
    image: "/features/methods.png",
    reverse: false,
    tags: ["Học theo Topic", "Học theo Dạng câu hỏi", "Linh hoạt"],
  },
  {
    title: "Tuyệt kỹ Phương Pháp 'Timeline 4 Đỉnh'",
    subtitle: "Kiến tạo tư duy nói mạch lạc chưa từng có",
    description:
      "Bằng cách phân tách ý tưởng thành 4 trụ cột logic và quy trình kéo thả trực quan, FongFluency giúp bạn biến những suy nghĩ rời rạc thành những câu trả lời điểm cao, tự nhiên và đầy bản lĩnh. Làm chủ mọi chủ đề IELTS Speaking chỉ trong tầm tay với tư duy hệ thống độc bản.",
    image: "/features/timeline.png",
    reverse: false,
    tags: ["Độc quyền", "Tư duy 4 đỉnh", "Kéo thả trực quan"],
  },
  {
    title: "Hệ sinh thái Phân tích AI",
    subtitle: "Thấu hiểu sâu sắc từng tầng ngôn ngữ",
    description:
      "Sức mạnh của công nghệ AI nằm ngay trong tầm tay bạn. Hệ thống đánh giá phát âm (Pronunciation), luyện Shadowing chuẩn xác, tích hợp phiên âm IPA và giải thích từ vựng thông minh giúp bạn không chỉ học nhanh hơn mà còn cảm thụ ngôn ngữ một cách tinh tế.",
    image: "/features/smart-tools.png",
    reverse: true,
    tags: ["AI Pronunciation", "Smart Shadowing", "IPA Analysis"],
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-6 tracking-tight">
            Nền tảng học thuật{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              Thế hệ mới
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            FongFluency không chỉ cung cấp kiến thức, chúng tôi tái định nghĩa
            cách bạn tiếp cận và làm chủ tiếng Anh.
          </p>
        </div>

        {/* Quick Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-50/50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] group"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-teal-600 shadow-lg shadow-teal-600/20 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Features */}
        <div className="space-y-32">
          {detailedFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 lg:gap-24`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <p className="text-teal-600 font-bold tracking-widest uppercase text-sm">
                    {feature.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed italic">
                  &quot;{feature.description}&quot;
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {feature.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 relative group">
                <div
                  className={`absolute -inset-4 bg-gradient-to-tr ${
                    feature.reverse
                      ? "from-emerald-500/10 to-teal-600/10"
                      : "from-teal-600/10 to-emerald-500/10"
                  } rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500`}
                ></div>
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
