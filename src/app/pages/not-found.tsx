import style from '@/app/page.module.css'

type Error = {
    title: string
}

export default function NotFound(props: Error ) {
  return (
    <main>
        <div className={style.error}>
        <h1>404</h1>
        <p>{props.title} not found</p>
        </div>
    </main>
  )
}