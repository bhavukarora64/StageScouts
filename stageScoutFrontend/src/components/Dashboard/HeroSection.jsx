import Button from "./Button"
import backgroundVideo from "../../assets/backgroundVideo.mp4"; // Import your video file

function HeroSection() {
  return (
    <div
      style={{
        position: "relative", // Set relative position for proper stacking of children
        height: "100vh", // Full screen height
        width: "200vh", // Full screen width
        overflow: "hidden", // Ensure no overflow from video or other elements
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Makes sure video covers the entire container
          zIndex: -1, // Video stays in the background
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag. Please use another browser for the best experience.
      </video>

      {/* Semi-Transparent Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Black overlay with 50% opacity
          zIndex: 0, // Overlay stays above the video but below content
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative", // Position relative to parent container
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%", // Take up the full container height
          width: "100%", // Take up the full container width
          color: "white", // Text color
          textAlign: "center", // Center text horizontally
          zIndex: 1, // Content stays on top of both video and overlay
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Discover the Best Views in Town!
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "40px" }}>
          Experience the magic of live performances from the best seats in the
          house, captured by real people just like you!
        </p>
        <div style={{ display: "flex", gap: "30px" }}>
          <Button title="Check Your View" redirectEndpoint="/imageLibrary" />
          <Button title="Share Your Experience" redirectEndpoint="/imageUpload" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
