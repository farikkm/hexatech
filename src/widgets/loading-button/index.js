export default function LoadingButton({ children, isLoading, ...props }) {
  return (
    <button
      {...props}
      disabled={props.disabled || isLoading}
      style={{
        cursor: props.disabled || isLoading ? "not-allowed" : "pointer",
      }}
    >
      {isLoading && (
        <span
          style={{
            width: "18px",
            height: "18px",
            border: "2px solid #fff",
            borderTop: "2px solid red",
            borderRadius: "50%",
            display: "inline-block",
            animation: "spin 1s linear infinite",
          }}
        ></span>
      )}
      {children}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </button>
  );
}
