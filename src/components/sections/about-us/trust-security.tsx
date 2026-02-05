import React from 'react';
import { Shield, Lock, FileText, CheckCircle, Users, Building2, Heart, Network } from 'lucide-react';

export default function TrustSecuritySection() {
  return (
    <div className="min-h-screen bg-[#EFECE6] p-8 flex justify-center">
      {/* GRID SYSTEM */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[900px]">

        {/* Trust & Security Card (TOP LEFT, ALWAYS FIRST) */}
        <div className="bg-[#F4F2EE] rounded-3xl shadow-md p-6 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#EFECE6] p-2 rounded-xl">
              <Shield className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Trust & Security</h2>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            We protect every connection.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-[#EFECE6] rounded-lg">
              <Lock className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-0.5">End-to-end data encryption</h3>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#EFECE6] rounded-lg">
              <Shield className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Secure hosting and access controls</h3>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#EFECE6] rounded-lg">
              <FileText className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Detailed audit logs</h3>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#EFECE6] rounded-lg">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Consent-driven data handling</h3>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#EFECE6] rounded-lg">
              <Shield className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-0.5">Compliance with global standards</h3>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 bg-[#EFECE6] rounded-lg border-l-4 border-amber-600">
            <p className="text-gray-700 font-medium text-sm">
              Your users' data remains confidential, secure, and protected at all times.
            </p>
          </div>
        </div>

        {/* Who We Serve Card (RIGHT on lg, BELOW on mobile) */}
        <div className="bg-[#F4F2EE] rounded-3xl shadow-md p-6 w-full lg:mt-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#EFECE6] p-2 rounded-xl">
              <Users className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Who We Serve</h2>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Supporting a Wide Range of Matrimony Operators
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-[#EFECE6] rounded-lg">
              <div className="bg-[#EFECE6] p-1.5 rounded-lg">
                <Heart className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">✔ Matchmakers & Marriage Bureaus</h3>
                <p className="text-gray-700 text-xs">
                  Tools, insights, and training to enhance their matchmaking expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#EFECE6] rounded-lg">
              <div className="bg-[#EFECE6] p-1.5 rounded-lg">
                <Building2 className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">✔ Nonprofits & Charity Organizations</h3>
                <p className="text-gray-700 text-xs">
                  Affordable, culturally aligned matchmaking platforms for social initiatives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#EFECE6] rounded-lg">
              <div className="bg-[#EFECE6] p-1.5 rounded-lg">
                <Users className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">✔ Community Leaders & Associations</h3>
                <p className="text-gray-700 text-xs">
                  Empower communities with modern, trusted matchmaking systems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-[#EFECE6] rounded-lg">
              <div className="bg-[#EFECE6] p-1.5 rounded-lg">
                <Network className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-sm mb-1">✔ Enterprise Platforms</h3>
                <p className="text-gray-700 text-xs">
                  PaaS infrastructure, integrations, SSO, analytics, and governance tools.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
