import React from 'react'
import filters from './filters.json'
import styles from './Filters.module.scss'
import classNames from 'classnames'

type IOption = typeof filters[0]

interface Props {
  filter: number | null
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export const Filters = ({ filter, setFilter }: Props) => {
  function selectedFilter(option: IOption) {
    if (filter === option.id) return setFilter(null)
    return setFilter(option.id)
  }

  return (
    <div className={styles.filters}>
      {filters.map(option => (
        <button
          key={option.id}
          className={classNames({
            [styles.filters__filter]: true,
            [styles['filters__filter--active']]: filter === option.id
          })}
          onClick={() => selectedFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
