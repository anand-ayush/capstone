import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

import { Metadata } from "next";

const undertrialInfo = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight font-serif">
                  Support Resources for Undertrial Prisoners
                </h1>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="author"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          By <span> Legal Research Team</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                          </svg>
                        </span>
                        02 Dec 2024
                      </p>
                      <p className="flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="20"
                            height="12"
                            viewBox="0 0 20 12"
                            className="fill-current"
                          >
                            <path d="M10.2559 3.8125C9.03711 3.8125 8.06836 4.8125 8.06836 6C8.06836 7.1875 9.06836 8.1875 10.2559 8.1875C11.4434 8.1875 12.4434 7.1875 12.4434 6C12.4434 4.8125 11.4746 3.8125 10.2559 3.8125ZM10.2559 7.09375C9.66211 7.09375 9.16211 6.59375 9.16211 6C9.16211 5.40625 9.66211 4.90625 10.2559 4.90625C10.8496 4.90625 11.3496 5.40625 11.3496 6C11.3496 6.59375 10.8496 7.09375 10.2559 7.09375Z" />
                          </svg>
                        </span>
                        Professional Resources
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a
                      href="#0"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                    >
                      Justice
                    </a>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Undertrial prisoners face unique challenges in accessing
                    justice, legal aid, and rehabilitation opportunities. This
                    resource aims to bridge the gap by providing comprehensive
                    support, including legal advice, rights awareness, and
                    emotional counseling.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-01.webp"
                        alt="image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Our mission is to provide undertrial prisoners with the
                    necessary resources to navigate the complexities of the
                    justice system. By ensuring that every individual receives
                    fair representation, we aim to foster a system of equality.
                    We focus on the{" "}
                    <strong className="text-primary dark:text-white">
                      empowerment
                    </strong>{" "}
                    of the incarcerated, helping them understand their legal
                    rights and make informed decisions. Through collaboration
                    and support, we can work together to enhance their legal
                    journey and ensure justice is served.
                  </p>

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Our platform aims to support undertrial prisoners by
                    providing resources and information to help navigate the
                    legal system.
                    <span className="text-primary underline dark:text-white">
                      We believe in promoting access to justice for all
                      individuals,
                    </span>
                    regardless of their circumstances. Together, we can work
                    towards a fairer legal process and empower those in need.
                  </p>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight font-serif">
                    Accessing Justice: What You Need to Know
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Steps to find a legal representative.
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Steps to find a legal representative.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      How to prepare for your court hearings.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Rights every undertrial prisoner should know.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Resources for family and emotional support.
                    </li>
                  </ul>
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      Our mission is to provide undertrial prisoners with access
                      to essential legal assistance, ensuring they are treated
                      with dignity and fairness throughout the legal process.
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Empowering undertrial prisoners by providing essential legal
                    resources and support to ensure their rights are upheld and
                    justice is accessible.
                  </p>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Justice" />
                        <TagButton text="Legal Aid" />
                        <TagButton text="Rehabilitation" />
                      </div>
                    </div>
                  </div>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Important Links:
                      </h4>
                      <div className="flex flex-wrap items-center">
                        <a
                          href="https://nalsa.gov.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mb-2 mr-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover:bg-primary hover:text-white"
                        >
                          National Legal Services Authority (NALSA)
                        </a>
                        <a
                          href="https://districts.ecourts.gov.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mb-2 mr-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover:bg-primary hover:text-white"
                        >
                          eCourts Services
                        </a>
                        <a
                          href="https://doj.gov.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mb-2 mr-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary hover:bg-primary hover:text-white"
                        >
                          Department of Justice (India)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="mb-10 mt-12 rounded-sm bg-white p-6 shadow-three dark:bg-gray-dark dark:shadow-none lg:mt-0">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="border-stroke mr-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                  <button
                    aria-label="search button"
                    className="flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-sm bg-primary text-white"
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Popular Category
                </h3>
                <ul className="px-8 py-6">
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Inmate Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Fair Trial
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Support Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Counseling
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Pro Bono
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap px-8 py-6">
                  <TagButton text="Court Hearings" />
                  <TagButton text="Bail Information" />
                  <TagButton text="Prison Reform" />
                  <TagButton text="Rights Awareness" />
                  <TagButton text="Legal Procedures" />
                </div>
              </div>

              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default undertrialInfo;
