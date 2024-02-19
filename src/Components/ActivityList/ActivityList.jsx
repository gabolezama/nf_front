import React from 'react'
import { useSelector } from 'react-redux'
import { CustomCard } from '../CustomCard/CustomCard'

function ActivityList() {
    const {list} = useSelector(state => state.activity)
    return (
        <div>
            {
                list.map( activity =>(
                    <CustomCard activity={activity}/>
                ))
            }
        </div>
    )
}

export default ActivityList
