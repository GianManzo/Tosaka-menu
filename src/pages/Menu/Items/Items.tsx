import React from 'react'
import { Item } from './Item/Item'
import plates from './plates.json'
import styles from './Items.module.scss'

interface Props {
  search: string
  filter: number | null
  computer: string
}

export const Items = ({ search, filter, computer }: Props) => {
  const [list, setList] = React.useState(plates)

  function handleSearch(title: string) {
    const regex = new RegExp(search, 'i')
    return regex.test(title)
  }
  function handleFilter(id: number) {
    if (filter !== null) return filter === id
    return true
  }

  function order(newList: typeof plates) {
    switch (computer) {
      case 'portion':
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1))
      case 'amount_people':
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1))
      case 'price':
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1))
      default:
        return newList
    }
  }

  React.useEffect(() => {
    const newList = plates.filter(
      item => handleSearch(item.title) && handleFilter(item.category.id)
    )
    setList(order(newList))
  }, [search, filter, computer])

  return (
    <div className={styles.items}>
      {list.map(dish => (
        <Item key={dish.id} {...dish} />
      ))}
    </div>
  )
}
