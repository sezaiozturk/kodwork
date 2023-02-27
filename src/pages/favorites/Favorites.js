import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobsCard from '../../components/jobsCard/JobsCard'
import { removeJobs } from '../../context/jobsSlice'

const Favorites = ({ navigation }) => {
    const favoriteJobs = useSelector((state) => state.jobs.favoriteJobs);
    const dispatch = useDispatch();

    const renderFavorite = ({ item }) => <JobsCard jobId={item.id} navigation={navigation} visibility onPress={() => dispatch(removeJobs(item.id))} />
    return (
        <View>
            <FlatList data={favoriteJobs} renderItem={renderFavorite} />
        </View>
    )
}

export default Favorites