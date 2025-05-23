import React from "react";
import style from "./footer.module.scss";
export default function Footer() {
  return (
    <>
      <footer>
        <div className={style.container}>
          <div className={style.footer}>
            <section className={style.about}>
              <h2>Oasis Homes</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                hendrerit nunc quis est mattis, et commodo metus euismod. Nunc
                malesuada nisl eu enim posuere luctus. Fusce eget est a quam
                tincidunt commodo. In semper rhoncus sem, non blandit enim
                elementum eu. Morbi volutpat erat interdum eros tincidunt, ut
                maximus orci ornare. Fusce vitae sapien eget tellus faucibus
                rutrum. Vivamus auctor urna ut ex molestie, ut pellentesque
                dolor porttitor.
              </p>
            </section>

            <section className={style.contacts}>
              <address>
                <p>
                  Phone <strong>+63 (2) 0000 0000</strong>
                </p>
                <p>
                  Address{" "}
                  <strong>
                    123 Main Street, Zone 1337, Manila, Philippines
                  </strong>
                </p>
                <p>
                  Opening <strong>Mon to Sat: 09:00 - 19:00</strong>
                </p>
              </address>
            </section>

            <section className={style.social}>
              <address>
                <p>
                  Instagram <strong>instagram.com/oasishomes</strong>
                </p>
                <p>
                  Youtube <strong>youtube.com/oasishomes</strong>
                </p>
                <p>
                  X <strong>x.com/oasishomes</strong>
                </p>
              </address>
            </section>
          </div>
        </div>
      </footer>

      <footer className={style.sub}>
        <section className={style.bottom}>
          <div className={style.nav_left}>
            <span>© Hakeem S.</span>
          </div>
          <div className={style.nav_center}>
                <ul className={style.nav_links}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Properties</li>
                    <li>Agents</li>
                    <li>Blogs</li>
                </ul>
            </div>

          <div className={style.nav_right}>
            <ul className={style.nav_links}>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
}
