import style from './page.module.css'

export default function NotFound() {
  return (
    <main>
        <div className={style.error}>
        <h1>404</h1>
        <p>Page not found</p>
        </div>
    </main>

  )
}