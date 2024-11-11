import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = ({
  size = 50,
  color = "#252525",
  height = "100vh",
  borderWidth = "5px",
}) => {
  return (
    <div
      className={`w-[100%] h-[var(--ctmHeight)] flex items-center justify-center`}
      style={{ "--ctmHeight": height }}
    >
      <ClipLoader color={color} size={size} cssOverride={{ borderWidth }} />
    </div>
  );
};

export default LoadingSpinner;