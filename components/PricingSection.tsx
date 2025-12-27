"use client";

import React, { useEffect, useState } from "react";
import { ROUTES } from "@/constants";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-teal-600 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const pricingData = [
  {
    duration: "1 ngày",
    price: "30.000đ",
    originalPrice: null,
    discount: null,
    save: null,
    best: false,
    features: [
      "Truy cập toàn bộ bài học",
      "Luyện tập trong 24h",
      "Hỗ trợ cơ bản",
    ],
  },
  {
    duration: "1 tháng",
    price: "189.000đ",
    originalPrice: null,
    discount: null,
    save: null,
    best: false,
    features: [
      "Truy cập toàn bộ bài học",
      "Luyện tập không giới hạn",
      "Hỗ trợ cơ bản",
    ],
  },
  {
    duration: "3 tháng",
    price: "510.000đ",
    originalPrice: "567.000đ",
    discount: "10%",
    save: "57.000đ",
    best: false,
    features: [
      "Tiết kiệm 10%",
      "Truy cập toàn bộ bài học",
      "Luyện tập không giới hạn",
    ],
  },
  {
    duration: "6 tháng",
    price: "860.000đ",
    originalPrice: "1.134.000đ",
    discount: "24%",
    save: "274.000đ",
    best: false,
    features: [
      "Tiết kiệm 24%",
      "Truy cập toàn bộ bài học",
      "Luyện tập không giới hạn",
      "Hỗ trợ ưu tiên",
    ],
  },
  {
    duration: "12 tháng",
    price: "1.250.000đ",
    originalPrice: "2.268.000đ",
    discount: "45%",
    save: "1.018.000đ",
    best: true,
    features: [
      "Tiết kiệm 45%",
      "Truy cập toàn bộ bài học",
      "Luyện tập không giới hạn",
      "Hỗ trợ VIP 24/7",
      "Quyền lợi đặc biệt",
    ],
  },
];

interface Package {
  _id: string;
  duration: number;
  unit: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  features: string[];
  active: boolean;
  displayOrder: number;
  isBest: boolean;
}

const PricingSection: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchPackages = async () => {
  //     try {
  //       const apiUrl =
  //         process.env.NEXT_PUBLIC_API_URL || "https://api.fongfluency.com/api";
  //       const response = await fetch(`${apiUrl}/package`);
  //       const result = await response.json();

  //       if (result.success && Array.isArray(result.data)) {
  //         // Sort by display order
  //         const sortedPackages = result.data.sort(
  //           (a: Package, b: Package) => a.displayOrder - b.displayOrder
  //         );
  //         setPackages(sortedPackages);
  //       } else {
  //         setError("Không thể tải danh sách gói cước.");
  //       }
  //     } catch (err) {
  //       console.error("Error fetching packages:", err);
  //       setError("Đã có lỗi xảy ra khi kết nối máy chủ.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPackages();
  // }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  // if (loading) {
  //   return (
  //     <section className="py-20 bg-slate-50">
  //       <div className="container mx-auto px-4 max-w-6xl text-center">
  //         <div className="animate-pulse flex flex-col items-center">
  //           <div className="h-10 w-48 bg-slate-200 rounded mb-4"></div>
  //           <div className="h-6 w-64 bg-slate-200 rounded mb-16"></div>
  //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
  //             {[1, 2, 3, 4].map((i) => (
  //               <div
  //                 key={i}
  //                 className="h-96 bg-white rounded-2xl border border-slate-200 shadow-sm"
  //               ></div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  // if (error) {
  //   return (
  //     <section className="py-20 bg-slate-50">
  //       <div className="container mx-auto px-4 max-w-6xl text-center">
  //         <p className="text-red-500 font-medium">{error}</p>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-[1600px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">
            Bảng giá
          </h2>
          <p className="text-lg text-slate-500">
            Chọn gói phù hợp với lộ trình học của bạn.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-end">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`
                relative rounded-2xl bg-white transition-all duration-300
                ${
                  plan.best
                    ? "border-2 border-teal-600 shadow-xl scale-105 z-10"
                    : "border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-lg"
                }
              `}
            >
              {/* Best Badge */}
              {plan.best && (
                <div className="absolute top-0 left-0 right-0 bg-teal-600 text-white text-center py-1.5 font-bold uppercase text-sm rounded-t-xl">
                  Phổ biến nhất
                </div>
              )}

              <div className={`p-8 ${plan.best ? "pt-12" : ""}`}>
                {/* Duration */}
                <h3 className="text-2xl font-bold text-slate-700 text-center mb-4">
                  {plan.duration}
                </h3>

                {/* Pricing */}
                <div className="text-center mb-4">
                  {plan.originalPrice && (
                    <p className="text-sm text-slate-400 line-through mb-1">
                      {plan.originalPrice}
                    </p>
                  )}
                  <p className="text-3xl font-extrabold text-teal-600">
                    {plan.price}
                  </p>
                </div>

                {/* Save Badge */}
                {plan.save && (
                  <div className="text-center mb-6">
                    <span className="inline-block px-3 py-1 text-sm font-bold bg-red-50 text-red-500 rounded-full">
                      Tiết kiệm {plan.save}
                    </span>
                  </div>
                )}

                {/* Divider */}
                <hr className="border-slate-200 my-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-sm text-slate-500">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={ROUTES.REGISTER}
                  className={`
                    block w-full py-3 rounded-full font-bold text-base text-center transition-all duration-300 cursor-pointer
                    ${
                      plan.best
                        ? "bg-teal-600 text-white shadow-lg shadow-teal-600/30 hover:bg-teal-700 hover:scale-105"
                        : "border-2 border-teal-600 text-teal-600 hover:bg-teal-50"
                    }
                  `}
                >
                  Đăng ký ngay
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
