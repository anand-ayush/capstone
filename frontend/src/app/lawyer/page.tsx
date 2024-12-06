'use client'; // Mark as Client Component

import React, { useState } from "react";

// Example data (this would ideally be fetched from an API or database)
const lawyersData = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "+1 234 567 890",
      barRegistrationNumber: "123456",
      casesSolved: 120,
      specializations: "Family Law, Criminal Defense",
      availability: "Available",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "+1 987 654 321",
      barRegistrationNumber: "654321",
      casesSolved: 95,
      specializations: "Corporate Law, Contract Law",
      availability: "Unavailable",
    },
    {
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      contact: "+1 234 567 123",
      barRegistrationNumber: "234567",
      casesSolved: 150,
      specializations: "Intellectual Property, Patent Law",
      availability: "Available",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      contact: "+1 345 678 234",
      barRegistrationNumber: "345678",
      casesSolved: 80,
      specializations: "Employment Law, Labor Law",
      availability: "Available",
    },
    {
      name: "Chris Brown",
      email: "chris.brown@example.com",
      contact: "+1 456 789 345",
      barRegistrationNumber: "456789",
      casesSolved: 200,
      specializations: "Civil Litigation, Personal Injury",
      availability: "Unavailable",
    },
    {
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      contact: "+1 567 890 456",
      barRegistrationNumber: "567890",
      casesSolved: 50,
      specializations: "Real Estate Law, Property Law",
      availability: "Available",
    },
    {
      name: "David Martinez",
      email: "david.martinez@example.com",
      contact: "+1 678 901 567",
      barRegistrationNumber: "678901",
      casesSolved: 175,
      specializations: "Business Law, Tax Law",
      availability: "Available",
    },
    {
      name: "Olivia Taylor",
      email: "olivia.taylor@example.com",
      contact: "+1 789 012 678",
      barRegistrationNumber: "789012",
      casesSolved: 110,
      specializations: "Immigration Law, International Law",
      availability: "Unavailable",
    },
    {
      name: "Daniel Harris",
      email: "daniel.harris@example.com",
      contact: "+1 890 123 789",
      barRegistrationNumber: "890123",
      casesSolved: 190,
      specializations: "Criminal Defense, DUI Defense",
      availability: "Available",
    },
    {
      name: "Sophia Clark",
      email: "sophia.clark@example.com",
      contact: "+1 901 234 890",
      barRegistrationNumber: "901234",
      casesSolved: 135,
      specializations: "Family Law, Divorce Law",
      availability: "Unavailable",
    },
  ];
  
const LawyerListing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter lawyers based on search term (name, email, or specialization)
  const filteredLawyers = lawyersData.filter((lawyer) =>
    lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lawyer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lawyer.specializations.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 bg-gray-900 text-white">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Lawyers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Lawyer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLawyers.map((lawyer, index) => (
          <div key={index} className="bg-gray-800 shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{lawyer.name}</h3>
            <p className="text-gray-400 text-sm mb-1">Email: {lawyer.email}</p>
            <p className="text-gray-400 text-sm mb-1">Contact: {lawyer.contact}</p>
            <p className="text-gray-400 text-sm mb-1">Bar Registration Number: {lawyer.barRegistrationNumber}</p>
            <p className="text-gray-400 text-sm mb-1">Cases Solved: {lawyer.casesSolved}</p>
            <p className="text-gray-400 text-sm mb-1">Specializations: {lawyer.specializations}</p>
            <p className="text-gray-400 text-sm mb-3">Availability: {lawyer.availability}</p>
            {/* Button to select or contact lawyer */}
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Contact Lawyer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawyerListing;
