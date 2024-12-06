"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const UndertrialProfile = () => {
  return (
    <div className="container mx-auto mt-20 px-4 py-6">
      {" "}
      {/* Added mt-20 to create space below the navbar */}
      <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
        {/* Cover Photo Section */}
        <div className="relative h-48 w-full md:h-64">
          <Image
            // src="/images/prison/prison-cover.jpg"
            src="/images/cover/coverimg.jpg"
            alt="Undertrial Prisoner Cover"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Profile Details Container */}
        <div className="px-4 py-6 md:px-6">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-x-6 md:space-y-0">
            {/* Profile Photo */}
            <div className="relative h-32 w-32 rounded-full border-4 border-white shadow-lg dark:border-gray-700 md:h-40 md:w-40">
              <Image
                src="/images/hero/profile.png"
                alt="Undertrial Prisoner"
                fill
                className="rounded-full object-cover"
              />
            </div>

            {/* Personal Information */}
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Rajesh Kumar Singh
              </h2>
              <div className="mt-2 text-gray-600 dark:text-gray-300">
                <p>Undertrial Prisoner</p>
                <p>Case Number: CRM-2023-1245</p>
              </div>

              {/* Case Statistics */}
              <div className="mt-4 grid grid-cols-3 gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
                <div className="text-center">
                  <span className="block text-lg font-bold text-gray-800 dark:text-white">
                    45
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Days in Custody
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-lg font-bold text-gray-800 dark:text-white">
                    Pending
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Case Status
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-lg font-bold text-gray-800 dark:text-white">
                    District
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Court
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
                    Age:
                  </strong>
                  <span className="ml-2">32 Years</span>
                </div>
                <div>
                  <strong className="text-gray-600 dark:text-gray-300">
                    Gender:
                  </strong>
                  <span className="ml-2">Male</span>
                </div>
                <div>
                  <strong className="text-gray-600 dark:text-gray-300">
                    Occupation:
                  </strong>
                  <span className="ml-2">Daily Wage Laborer</span>
                </div>
              </div>
            </div>

            {/* Legal Details */}
            <div>
              <h3 className="mb-4 border-b pb-2 text-xl font-semibold">
                Legal Information
              </h3>
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-600 dark:text-gray-300">
                    Charges:
                  </strong>
                  <span className="ml-2">Section 307 IPC</span>
                </div>
                <div>
                  <strong className="text-gray-600 dark:text-gray-300">
                    Arrest Date:
                  </strong>
                  <span className="ml-2">15 November 2023</span>
                </div>
                <div>
                  <strong className="text-gray-600 dark:text-gray-300">
                    Next Hearing:
                  </strong>
                  <span className="ml-2">25 January 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer or Additional Notes */}
          <div className="mt-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
            <p className="text-sm italic text-gray-600 dark:text-gray-300">
              Note: This information is based on available records and is
              subject to legal proceedings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UndertrialProfile;
