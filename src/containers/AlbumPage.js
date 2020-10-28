import React from 'react'
import { useParams } from 'react-router-dom'

export default function TodosPage(props) {
      const { albumId } = useParams()

      return (
            <>
                  <h2>Todos page {albumId} </h2>
            </>
      )
}
