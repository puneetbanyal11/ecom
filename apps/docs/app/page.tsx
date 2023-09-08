// import Image from "next/image";
// import { Card } from "ui";
import styles from "./page.module.css";

// function Gradient({
//   conic,
//   className,
//   small,
// }: {
//   small?: boolean;
//   conic?: boolean;
//   className?: string;
// }): JSX.Element {
//   return (
//     <span
//       className={[
//         styles.gradient,
//         conic ? styles.glowConic : undefined,
//         small ? styles.gradientSmall : styles.gradientLarge,
//         className,
//       ]
//         .filter(Boolean)
//         .join(" ")}
//     />
//   );
// }


export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
            APP1
        </p>
      </div>
    </main>
  );
}
