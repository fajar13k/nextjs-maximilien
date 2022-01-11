import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/fajar.jpg"
          alt="An Image showing Fajar"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Fajar</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, dicta.
      </p>
    </section>
  );
}
