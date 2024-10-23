import styles from './app.module.css'
import {useQuery} from "@tanstack/react-query"

export function App() {
  const {data} = useQuery({
    queryKey: ["name"],
    queryFn: () => Promise.resolve("preact-boilerplate")
  })

  return (
    <div className={styles.bold}>
      {data}
    </div>
  )
}
