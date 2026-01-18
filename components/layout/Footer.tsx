"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-3 sm:px-4 py-2 sm:py-3 text-center">
      <div className="text-[10px] sm:text-xs text-slate-500">
        <p className="hidden sm:block">
          3D Model:{" "}
          <a
            href="https://sketchfab.com/3d-models/nissan-skyline-r34-gt-r-ff8fb2251dfa4bb9979e7022c5a6666c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Nissan Skyline R34 GT-R
          </a>
          {" "}by{" "}
          <a
            href="https://sketchfab.com/Lexyc16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Lexyc16
          </a>
          {" "}(CC Attribution)
        </p>
        <p className="sm:hidden">
          Model by{" "}
          <a
            href="https://sketchfab.com/Lexyc16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            Lexyc16
          </a>
        </p>
      </div>
    </footer>
  );
}
