import React from 'react'
import styles from './Menu.module.scss'
import { ReactComponent as Logo } from 'assets/img/logo.svg'
import { Search } from './Search-engine/Search'
import { Filters } from './Filters/Filters'
import { Computer } from './Computer/Computer'
import { Items } from './Items/Items'

export const Menu = () => {
  const [search, setSearch] = React.useState('')
  const [filter, setFilter] = React.useState<number | null>(null)
  const [computer, setComputer] = React.useState('')

  return (
    <main>
      <nav className={styles.navMenu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>Melhores sushis é só aqui!</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Computer computer={computer} setComputer={setComputer} />
        </div>
        <Items search={search} filter={filter} computer={computer} />
      </section>
    </main>
  )
}
