"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const LawyerProfile = () => {
  return (
    <div className="container mx-auto mt-16 px-4 py-6">
      {" "}
      {/* Added margin top here */}
      <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
        {/* Cover Photo Section */}
        <div className="relative h-48 w-full md:h-64">
          <Image
            src="/images/lawyer/lawyer-cover.jpg"
            alt="Lawyer Profile Cover"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Profile Details Container */}
        <div className="px-4 py-6 md:px-8 md:py-8">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-x-6 md:space-y-0">
            {/* Profile Photo */}
            <div className="relative h-32 w-32 rounded-full border-4 border-white shadow-lg dark:border-gray-700 md:h-40 md:w-40">
              <Image
                src="/images/hero/profile.png"
                alt="Lawyer Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>

            {/* Personal Information */}
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Advocate Varun Sood
              </h2>
              <div className="mt-2 text-gray-600 dark:text-gray-300">
                <p>Criminal Defense Specialist</p>
                <p>Bar Registration: BAR-MH-2015-4567</p>
              </div>

              {/* Professional Statistics */}
              <div className="mt-4 grid grid-cols-3 gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
                <div className="text-center">
                  <span className="block text-lg font-bold text-gray-800 dark:text-white">
                    127
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Cases Solved
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-lg font-bold text-gray-800 dark:text-white">
                    Criminal
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Specialization
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-lg font-bold text-gray-800 dark:text-white">
                    Active
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    License Status
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Personal Details */}
            <div>
              <h3 className="mb-4 border-b pb-2 text-xl font-semibold">
                Personal Information
              </h3>
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-600 dark:text-gray-300">
                    Date of Birth:
                  </strong>
                  <span className="ml-2">15 August 1985</span>
                </div>
                <div>
                  <strong className="text-gray-600 dark:text-gray-300">
                    Contact:
                  </strong>
                  <span className="ml-2">+91 9876543210</span>
                </div>
                <div>
                  <strong className="text-gray-600 dark:text-gray-300">
                    Email:
                  </strong>
                  <span className="ml-2">varun.sood@lawfirm.com</span>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div>
              <h3 className="mb-4 border-b pb-2 text-xl font-semibold">
                Professional Information
              </h3>
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-600 dark:text-gray-300">
                    Specializations:
                  </strong>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <span className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                      Criminal Law
                    </span>
                    <span className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                      Human Rights
                    </span>
                    <span className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800 dark:bg-gray-600 dark:text-gray-200">
                      Bail Proceedings
                    </span>
                  </div>
                </div>
                <div>
                  <strong className="text-gray-600 dark:text-gray-300">
                    Availability:
                  </strong>
                  <span className="ml-2">Monday to Saturday, 10 AM - 6 PM</span>
                </div>
                <div>
                  <strong className="text-gray-600 dark:text-gray-300">
                    License Verified:
                  </strong>
                  <span className="ml-2 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 inline-block h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
            <h3 className="mb-3 border-b pb-2 text-xl font-semibold">
              Additional Information
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Experienced criminal defense attorney with over 15 years of
              practice. Committed to providing robust legal representation and
              ensuring justice for clients. Specialized in handling complex
              criminal cases and bail proceedings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;
