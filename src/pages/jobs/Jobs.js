import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import Config from 'react-native-config'
import useFetch from '../../hooks/useFetch'
import JobsCard from '../../components/jobsCard'
import Lottie from 'lottie-react-native'
import { useSelector } from 'react-redux'


const Jobs = ({ navigation }) => {
    const { load, error, fetch } = useFetch();
    const data = useSelector((state) => state.jobs.jobs);
    const loadPath = '../../assets/load.json';

    useEffect(() => {
        fetch(Config.API_URL);
    }, []);

    if (load) {
        return <Lottie source={require(loadPath)} autoPlay loop />
    }
    const renderItem = ({ item }) => <JobsCard jobId={item.id} navigation={navigation} visibility={false} />

    return (
        <View>
            <FlatList data={data} renderItem={renderItem} />
        </View>
    )
}

export default Jobs