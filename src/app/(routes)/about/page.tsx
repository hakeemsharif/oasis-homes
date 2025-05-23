import React from "react";
import style from "./about.module.scss";
export default function AboutPage() {
  return (
    <main>
      <div className={style.container}>
        <div className={style.grid}>
          <div className={style.card_one}>
            <div className={style.content}>
              <h1>Integrity</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent facilisis imperdiet pharetra. Fusce in eros tempus,
                cursus tortor ac, auctor sapien. Sed vitae ullamcorper metus.
                Curabitur libero augue, pellentesque ac interdum quis, bibendum
                eu leo.
              </p>
            </div>
          </div>
          <div className={style.card_two}>
            <div className={style.content}>
              <h1>Excellence</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent facilisis imperdiet pharetra. Fusce in eros tempus,
                cursus tortor ac, auctor sapien. Sed vitae ullamcorper metus.
                Curabitur libero augue, pellentesque ac interdum quis, bibendum
                eu leo.
              </p>
            </div>
          </div>
          <div className={style.card_three}>
            <div className={style.content}>
              <h1>Community</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent facilisis imperdiet pharetra. Fusce in eros tempus,
                cursus tortor ac, auctor sapien. Sed vitae ullamcorper metus.
                Curabitur libero augue, pellentesque ac interdum quis, bibendum
                eu leo.
              </p>
            </div>
          </div>
          <div className={style.card_four}>
            <div className={style.content}>
              <h1>Innovation</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent facilisis imperdiet pharetra. Fusce in eros tempus,
                cursus tortor ac, auctor sapien. Sed vitae ullamcorper metus.
                Curabitur libero augue, pellentesque ac interdum quis, bibendum
                eu leo.
              </p>
            </div>
          </div>
          <div className={style.card_five}>
            <div className={style.content}>
              <span>950+</span>
              <p>Properties Sold</p>
            </div>
          </div>
          <div className={style.card_six}>
            <div className={style.content}>
              <span>1337+</span>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className={style.card_seven}>
            <div className={style.content}>
              <h1>Our Company</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent facilisis imperdiet pharetra. Fusce in eros tempus,
                cursus tortor ac, auctor sapien. Sed vitae ullamcorper metus.
                Curabitur libero augue, pellentesque ac interdum quis, bibendum
                eu leo.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent facilisis imperdiet pharetra. Fusce in eros tempus,
                cursus tortor ac, auctor sapien. Sed vitae ullamcorper metus.
                Curabitur libero augue, pellentesque ac interdum quis, bibendum
                eu leo.
              </p>
            </div>
          </div>
          <div className={style.card_eight}>
            <div className={style.content}>
              <span>25</span>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className={style.card_nine}>
            <div className={style.content}>
              <span>254</span>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
