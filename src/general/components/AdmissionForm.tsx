import { useEffect, useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import {
  getCoursesForLevel,
  getDefaultsForProgram,
  type ProgramLevel,
} from '../courses';
import { redirectToThankYou, submitLead } from '../submitLead';

interface AdmissionFormProps {
  formId?: string;
  nameInputId?: string;
  defaultProgramId?: string;
  showHeader?: boolean;
  submitLabel?: string;
  className?: string;
}

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  state: '',
  city: '',
  programLevel: '' as '' | ProgramLevel,
  courseId: '',
};

export default function AdmissionForm({
  formId,
  nameInputId = 'admission-name-input',
  defaultProgramId,
  showHeader = true,
  submitLabel = 'Submit Form',
  className = '',
}: AdmissionFormProps) {
  const defaults = getDefaultsForProgram(defaultProgramId);
  const [formData, setFormData] = useState({
    ...EMPTY_FORM,
    programLevel: defaults.level,
    courseId: defaults.courseId,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const nextDefaults = getDefaultsForProgram(defaultProgramId);
    setFormData((current) => ({
      ...current,
      programLevel: nextDefaults.level,
      courseId: nextDefaults.courseId,
    }));
  }, [defaultProgramId]);

  const availableCourses = formData.programLevel
    ? getCoursesForLevel(formData.programLevel)
    : [];

  const handleProgramChange = (programLevel: ProgramLevel) => {
    setFormData((current) => ({
      ...current,
      programLevel,
      courseId: '',
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please fill in name, number, and email.');
      return;
    }

    if (!formData.state.trim() || !formData.city.trim()) {
      setError('Please fill in state and city.');
      return;
    }

    if (!formData.programLevel || !formData.courseId) {
      setError('Please select program and course.');
      return;
    }

    setLoading(true);

    try {
      await submitLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        state: formData.state,
        city: formData.city,
        courseId: formData.courseId,
      });
      redirectToThankYou();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Unable to submit your application. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClassName =
    'w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:border-[#161D4A] focus:ring-1 focus:ring-[#161D4A] outline-none transition-all bg-slate-50/50';
  const labelClassName =
    'block text-[11px] font-mono font-bold uppercase tracking-wider text-[#161D4A] mb-1';

  return (
    <form id={formId} onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {showHeader && (
        <div className="space-y-1 text-left">
          <h3 className="text-xl font-black text-[#161D4A] font-sans">Start Campus Enquiry</h3>
          <p className="text-xs text-slate-500 font-sans">
            Reserve your seat and schedule a campus tour under Bannerghatta.
          </p>
        </div>
      )}

      <div className="space-y-3.5">
        <div className="text-left">
          <label htmlFor={nameInputId} className={labelClassName}>
            Name *
          </label>
          <input
            type="text"
            required
            id={nameInputId}
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(event) => setFormData({ ...formData, name: event.target.value })}
            className={inputClassName}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <div>
            <label className={labelClassName}>Number *</label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              placeholder="10-digit mobile"
              value={formData.phone}
              onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
              className={inputClassName}
            />
          </div>
          <div>
            <label className={labelClassName}>Email *</label>
            <input
              type="email"
              required
              placeholder="rahul@domain.com"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              className={inputClassName}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <div>
            <label className={labelClassName}>State *</label>
            <input
              type="text"
              required
              placeholder="e.g. Karnataka"
              value={formData.state}
              onChange={(event) => setFormData({ ...formData, state: event.target.value })}
              className={inputClassName}
            />
          </div>
          <div>
            <label className={labelClassName}>City *</label>
            <input
              type="text"
              required
              placeholder="e.g. Bengaluru"
              value={formData.city}
              onChange={(event) => setFormData({ ...formData, city: event.target.value })}
              className={inputClassName}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          <div>
            <label className={labelClassName}>Select Program *</label>
            <select
              required
              value={formData.programLevel}
              onChange={(event) => handleProgramChange(event.target.value as ProgramLevel)}
              className={inputClassName}
            >
              <option value="">-- Select Program --</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </div>
          <div>
            <label className={labelClassName}>Select Course *</label>
            <select
              required
              value={formData.courseId}
              disabled={!formData.programLevel}
              onChange={(event) => setFormData({ ...formData, courseId: event.target.value })}
              className={inputClassName}
            >
              <option value="">
                {formData.programLevel ? '-- Select Course --' : '-- Select Program First --'}
              </option>
              {availableCourses.map((course) => (
                <option key={course.courseId} value={course.courseId}>
                  {course.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-600 font-medium text-left" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-4 bg-[#161D4A] text-white hover:bg-[#FED304] hover:text-[#161D4A] disabled:opacity-70 disabled:cursor-not-allowed font-extrabold rounded-xl transition-all duration-300 text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow cursor-pointer mt-4"
      >
        {loading ? 'Submitting...' : submitLabel}
        {!loading && <Send className="w-3.5 h-3.5" />}
      </button>

      <div className="text-[10px] text-slate-400 font-mono text-center">
        Secure Admissions Gateway — 2026 Batch
      </div>
    </form>
  );
}
