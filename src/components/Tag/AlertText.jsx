export default function AlertText({ children }) {
    return (
      <p className=" text-red-600 font-semibold">
        {children}
      </p>
    );
  }