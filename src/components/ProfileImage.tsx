import { useState } from 'react';

export default function ProfileImage({
  className = ""
}: {
  className?: string
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-center overflow-hidden rounded-full ring-4 ring-white/10 shadow-2xl w-full h-full">
        {!hasError ? (
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            onError={() => setHasError(true)}
            style={{ width: '100%', height: '100%' }}
            className="object-cover"
          />
        ) : (
          <div
            className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center text-white font-semibold text-4xl"
          >
            MK
          </div>
        )}
      </div>
    </div>
  );
}
