/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles } from 'lucide-react';
import EdmissionFormIframe from './EdmissionFormIframe';

interface LeadFormProps {
  compact?: boolean;
}

export default function LeadForm({ compact = false }: LeadFormProps) {
  return (
    <div
      id="apply-lead-form"
      className={`bg-white text-gray-800 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden ${compact ? 'max-w-md w-full' : ''}`}
    >
      {/* Form Header */}
      <div className="bg-brand-navy text-white px-8 py-6 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-lightblue/10 rounded-full blur-xl -ml-6 -mb-6 pointer-events-none"></div>

        <span className="inline-block px-3 py-1 bg-brand-yellow text-brand-navy text-xs font-extrabold uppercase rounded-full tracking-wider mb-2">
          Admissions Open
        </span>
        <h3 className="text-xl font-bold tracking-tight">Apply Now for BHM 2026</h3>
        <p className="text-brand-lightblue text-xs mt-1">
          Fill the form to secure standard application fee waiver & benefits
        </p>
      </div>

      <div className="p-8">
        {/* Counselling Session Ticket Display */}
        <div className="mb-6 p-4 bg-yellow-50/70 border border-brand-yellow/30 rounded-2xl flex items-start gap-3">
          <div className="h-10 w-10 shrink-0 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-navy font-bold shadow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider">
              Free Hospitality Career Counseling Session
            </h4>
            <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">
              Included with every application today. Plan your hospitality future in culinary, management, or luxury
              cruise liner roles.
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-100">
          <EdmissionFormIframe />
        </div>

        <div className="mt-4 text-center">
          <span className="text-[10px] text-gray-400 block">
            🔒 Your private details are secure with AMC Admissions.
          </span>
        </div>
      </div>
    </div>
  );
}
