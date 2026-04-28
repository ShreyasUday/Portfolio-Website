import Script from "next/script";

export function SplineEmbed({
  sceneUrl,
  className,
}: {
  sceneUrl: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <spline-viewer
        url={sceneUrl}
        loading-anim="true"
        className="h-full w-full"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

