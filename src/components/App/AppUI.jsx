import styles from  './AppUI.module.css'
import {
  Counter,
  CreateButton,
  CreateForm,
  List,
  Modal,
  Search
} from '@/components'

function AppUI() {

  return (
    <main className={styles.app}>
      <header>
        <strong className={styles.title}>Momento III Web</strong>
        <Counter />
      </header>
      <Search />
      <List />
      <CreateButton />
      <Modal>
        <CreateForm />
      </Modal>
      
    </main>
  )
}

export default AppUI