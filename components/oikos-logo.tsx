export function OikosLogo() {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-20 h-20 bg-[#005c2d] rounded-full flex items-center justify-center mb-2">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 text-[#90ee90]"
              fill="currentColor"
            >
              <path d="M12 2L4.5 9.5L6 11L12 5L18 11L19.5 9.5L12 2ZM12 6.5L4.5 14L6 15.5L12 9.5L18 15.5L19.5 14L12 6.5Z" />
            </svg>
          </div>
        </div>
      </div>
      <h1 className="text-white text-2xl font-medium">Oikos</h1>
    </div>
  );
}
