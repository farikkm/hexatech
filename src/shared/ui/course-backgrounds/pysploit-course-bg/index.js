import { useEffect, useRef, useState } from "react";
import styles from "./pysploit-course-bg.module.css";

const FIRST_BLOCK_HTML = `<span class=${styles.gray}>#0110010#&gt;</span> init_PYsploit()<br /><br /><span class=${styles.pink}>$encode:</span> "инструмент дляхакинга" -&gt; <span class=${styles.pink}>%%$!0101@</span><br /><span class=${styles.white}>%hash%</span> "Python + Exploit =PYsploit"<br />&gt; <span class=${styles.red}>decrypt:</span> "автоматизацияатак" =&gt; ***<br /><span class=${styles.pink}>0100$#@</span><span class=${styles.white}>monitor</span>("уязвимости")<br /><span class=${styles.white}>&gt;&gt; run_script</span>("тест напроникновение")<br /><span class=${styles.blue}>return</span><span class=${styles.cyan}>%%010010%%</span><span class=${styles.white}>-&gt;</span> "безопасность подконтролем"<br /><br /><span class=${styles.gray}>#end_transmission#</span>`;

const SECOND_BLOCK_HTML = `<span class=${styles.gray}>#0110011# load_module("firewall_bypass")</span><br /><br /><span class="keyword">$scan:</span><span class=${styles.green}>"сеть"</span> -&gt; %%PORTS[<span class=${styles.pink}>21,22,80,443</span>]%%<br /><span class="keyword">%inject%</span><span class=${styles.green}>"payload_dummy"</span> =&gt; &gt;&gt;&gt;###<br />&gt;&gt; <span class="function">analyze</span>(<span class=${styles.green}>"response_time"</span>)<br /><span class=${styles.gray}>&gt;&gt;&gt;</span><span class=${styles.blue}> if</span> latency &lt;<span class="number">50ms</span>:<br />..... status =<span class=${styles.green}>"уязвимость найдена"</span><br /><span class=${styles.gray}>&gt;&gt;&gt;</span><span class=${styles.blue}> else</span>:<br />...... status =<span class=${styles.green}>"система устойчива"</span><br /><span class="number">0101@#</span> log_event(<span class=${styles.green}>"trace blocked"</span>, secure=True)<br />&gt;<span class="function">run_script</span>(<span class=${styles.green}>"penetration_dummy_test"</span>)<br />&gt;&gt;&gt;result -&gt;<span class=${styles.green}>"сеть под наблюдением"</span><br /><span class=${styles.blue}>return</span> %%011010%% -&gt;<span class=${styles.green}>"контроль усилен"</span><br /><br /><span class=${styles.gray}>#close_session#</span>`;

export default function PysploitCourseBg() {
  const [block1, setBlock1] = useState("");
  const [block2, setBlock2] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const idxRef = useRef(0);
  const idxRef2 = useRef(0);
  const speed = 1;

  useEffect(() => {
    const full = FIRST_BLOCK_HTML;
    idxRef.current = 0;
    setBlock1("");
    setShowCursor1(true);
    setShowCursor2(true);

    const t = setInterval(() => {
      idxRef.current += 1;
      setBlock1(full.slice(0, idxRef.current));
      if (idxRef.current >= full.length) {
        clearInterval(t);
        setShowCursor1(false);
      }
    }, speed);

    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!showCursor2) return;
    const full = SECOND_BLOCK_HTML;
    idxRef2.current = 0;
    setBlock2("");

    const t2 = setInterval(() => {
      idxRef2.current += 1;
      setBlock2(full.slice(0, idxRef2.current));
      if (idxRef2.current >= full.length) {
        clearInterval(t2);
        setShowCursor2(false);
      }
    }, speed);

    return () => clearInterval(t2);
  }, [showCursor2]);

  return (
    <div className={`${styles.wrapper} transition-mask`}>
      <img className={styles.img} src="/images/course/pysploit-bg.png" />

      <div className="container">
        <div className={styles.code__block}>
          <p
            className={styles.code__inner}
            dangerouslySetInnerHTML={{ __html: block1 }}
          />
          {showCursor1 && <span className={styles.caret} />}
        </div>

        <div className={styles.code__block}>
          <p
            className={styles.code__block_white}
            dangerouslySetInnerHTML={{ __html: block2 }}
          />
          {showCursor2 && <span className={styles.caret} />}
        </div>
      </div>
    </div>
  );
}
