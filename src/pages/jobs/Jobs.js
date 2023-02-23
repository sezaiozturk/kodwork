import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import Config from 'react-native-config'
import useFetch from '../../hooks/useFetch'
import JobsCard from '../../components/jobsCard'


const Jobs = ({ navigation }) => {
    const { data, load, error, fetch } = useFetch();

    useEffect(() => {
        fetch('https://www.themuse.com/api/public/jobs?page=1');
    }, []);
    const renderItem = ({ item }) => <JobsCard jobs={item} navigation={navigation} />

    return (
        <View>
            <Text>{Config.API_URL}</Text>
            <FlatList data={data} renderItem={renderItem} />
        </View>
    )
}

export default Jobs