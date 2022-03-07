import React from 'react'
import CharacterCard from './CharacterCard'
import Spinner from './Spinner'

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
      <Spinner />
  ):(
      <section className='cards'>
          {items.map((item) => (
              <CharacterCard key={item.char_id} item={item}></CharacterCard>
          ))}
      </section>
  )
}

export default CharacterGrid