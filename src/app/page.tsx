export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-[800px] h-[600px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-contain"
        >
          <source src="/Akilah.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
