import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// export default function Container({
//   children,
//   className = "",
// }: ContainerProps) {
//   return (
//     <div className={`mx-auto w-full max-w-6xl px-6 lg:px-10 ${className}`}>
//       {children}
//     </div>
//   );
// }

export default function Container({ children, className }: any) {
    return (
      <div
        className={`mx-auto w-full max-w-[1200px] px-10 md:px-16 xl:px-24 ${className}`}
      >
        {children}
      </div>
    );
  }