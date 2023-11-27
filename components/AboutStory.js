"use client";

import Image from "next/image";
import styles from "../styles/about.module.scss";
import { useInView } from "react-intersection-observer";

export default function AboutStory() {
  const { ref: ref1, inView: el1Visible } = useInView();
  const { ref: ref2, inView: el2Visible } = useInView();
  const { ref: ref3, inView: el3Visible } = useInView();
  const { ref: ref4, inView: el4Visible } = useInView();

  return (
    <main>
      <div
        className={`${styles.section} ${
          el1Visible ? styles.appear : styles.disappear
        }`}
      >
        <div className={styles.text}>
          <h3>
            Cosy Jet Sessions is a unique music platform showcasing raw talent
            in a vintage and warm setting
          </h3>
          <p ref={ref1}>
            Cosy Jet Sessions, nestled in the heart of Brussels, invites you to
            experience the magic of music in its purest form. As an intimate
            acoustic live session media, we curate a haven where melodies take
            flight in a vintage haven, embracing you in warmth and nostalgia.
            With a commitment to unearthing hidden gems, we offer a serene
            escape where new talented artists shine under the spotlight, sharing
            their soulful sounds and authentic stories. Step into our world,
            where the art of music takes center stage, and let the cozy ambiance
            envelop you in an unforgettable journey of discovery and creativity.
            Welcome to Cosy Jet Sessions – where music comes alive in the
            embrace of vintage charm.
          </p>
        </div>
        <Image
          id={styles.cjsDecor}
          src="/images/decor.png"
          alt="cjs studio decor"
          width={1850}
          height={1044}
        />
      </div>
      <div
        className={`${styles.section} ${
          el2Visible ? styles.appear : styles.disappear
        }`}
      >
        <Image
          id={styles.cjsLights}
          // priority
          src="/images/lights.png"
          alt="cjs studio lights"
          width={732}
          height={1206}
        />
        <div className={styles.text}>
          <p ref={ref2}>
            Ladies and gentlemen, music enthusiasts, and fellow creatives, allow
            me to take you on a journey into the heart and soul of Cosy Jet
            Sessions – a musical haven that was born out of a passionate desire
            to celebrate the pure essence of music in its most intimate form.
          </p>
          <p>
            Picture this: a vintage-inspired oasis nestled right here in the
            vibrant city of Brussels. Imagine a space that wraps you in a cozy
            embrace, where the warm glow of dimmed lights dances across the
            room, and the echoes of melodies linger in the air. This is the
            world of Cosy Jet Sessions.
          </p>
        </div>
      </div>
      <div
        className={`${styles.section} ${
          el3Visible ? styles.appear : styles.disappear
        }`}
      >
        <div className={styles.text}>
          <p ref={ref3}>
            You might wonder, why did we embark on this musical odyssey? Well,
            my friends, it all began with a fervent belief in the power of
            simplicity. In an era of grand stages and elaborate productions, we
            yearned for a return to the basics – where the unadulterated beauty
            of an artist's voice and the strings of an acoustic guitar could
            create magic. We envisioned a platform that wasn't just about music,
            but about the stories that each song weaves – stories that touch our
            hearts, make us reflect, and ultimately, bring us closer together..
          </p>
          <p>
            {" "}
            And so, Cosy Jet Sessions was born. It's more than just a media;
            it's a sanctuary for musicians to bare their souls, to share their
            artistry in a space that embraces them like an old friend. We are on
            a mission to shine a spotlight on raw, untamed talent – the kind
            that doesn't need elaborate productions to captivate an audience.
            We've scoured every corner, hunted for those hidden gems, those
            emerging artists who are ready to grace the world with their
            melodies.
          </p>
        </div>
        <Image
          id={styles.cjsSynths}
          src="/images/synth.png"
          alt="cjs studio lights"
          width={768}
          height={1108}
        />
      </div>
      <div
        className={`${styles.section} ${
          el4Visible ? styles.appear : styles.disappear
        }`}
      >
        <Image
          id={styles.cjsLights}
          src="/images/lights.png"
          alt="cjs studio lights"
          width={732}
          height={1206}
        />
        <div>
          <p ref={ref4}>
            But it's not just about the artists; it's about you – the listeners
            who crave an escape from the chaos of the world, who seek solace in
            the serenity of acoustic sounds. Our purpose is to curate an
            experience that transports you to a different time, a different
            place – where music transcends barriers and touches the core of your
            being.
          </p>
          <p>
            The journey hasn't been without its challenges. Yet, every note,
            every chord struck, every story shared – they fuel our passion to
            continue. The smiles on the faces of artists who find their voice,
            the messages from listeners who discover new favorite tunes – these
            are the moments that remind us why we set out on this path.
          </p>
          <p>
            So, my friends, join us in this musical adventure. Let the
            enchanting melodies and heartfelt lyrics carry you away. Let Cosy
            Jet Sessions be your refuge, your source of inspiration, your
            reminder that in the midst of a chaotic world, music remains a
            timeless thread that connects us all.
          </p>
        </div>
      </div>
    </main>
  );
}
