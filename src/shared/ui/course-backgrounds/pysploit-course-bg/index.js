import styles from "./pysploit-course-bg.module.css";

export default function PysploitCourseBg() {
  return (
    <div className={`${styles.wrapper} transition-mask`}>
      <img className={styles.img} src="/images/course/pysploit-bg.png" />

      <div className="container">
        <div className={styles.code__block}>
          <span className={styles.gray}>#0110010#&gt;</span> init_PYsploit()
          <br />
          <br />
          <span className={styles.pink}>$encode:</span> "инструмент для хакинга"
          -&gt; <span className={styles.pink}>%%$!0101@</span>
          <br />
          <span className={styles.white}>%hash%</span> "Python + Exploit =
          PYsploit"
          <br />
          &gt; <span className={styles.red}>decrypt:</span> "автоматизация атак"
          =&gt; ***
          <br />
          <span className={styles.pink}>0100$#@</span>{" "}
          <span className={styles.white}>monitor</span>("уязвимости")
          <br />
          <span className={styles.white}>&gt;&gt; run_script</span>("тест на
          проникновение")
          <br />
          <span className={styles.blue}>return</span>{" "}
          <span className={styles.cyan}>%%010010%%</span>{" "}
          <span className={styles.white}>-&gt;</span> "безопасность под
          контролем"
          <br />
          <br />
          <span className={styles.gray}>#end_transmission#</span>
        </div>

        <div className={styles.code__block}>
          <span className={styles.gray}>#0110010#&gt;</span> init_PYsploit()
          <br />
          <br />
          <span className={styles.pink}>$encode:</span> "инструмент для хакинга"
          -&gt; <span className={styles.pink}>%%$!<br /> 0101@</span>
          <br />
          <span className={styles.white}>%hash%</span> "Python + Exploit =
          PYsploit"
          <br />
          &gt; <span className={styles.red}>decrypt:</span> "автоматизация атак"
          =&gt; ***
          <br />
          <span className={styles.pink}>0100$#@</span>{" "}
          <span className={styles.white}>monitor</span>("уязвимости")
          <br />
          <span className={styles.white}>&gt;&gt; run_script</span>("тест на
          проникновение")
          <br />
          <span className={styles.blue}>return</span>{" "}
          <span className={styles.cyan}>%%010010%%</span>{" "}
          <span className={styles.white}>-&gt;</span> "безопасность под
          контролем"
          <br />
          <br />
          <span className={styles.gray}>#end_transmission#</span>
        </div>
      </div>
    </div>
  );
}
