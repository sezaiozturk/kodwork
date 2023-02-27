import { View, Text, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import RenderHtml from 'react-native-render-html'
import styles from './Details.style'
import Button from '../../components/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setFavoriteJobs } from '../../context/jobsSlice'

const Details = ({ route }) => {
    const { jobId } = route.params;
    const job = useSelector((state) => state.jobs.jobs.filter((item) => item.id === jobId));
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();
    const addFavoriteJobs = () => {
        dispatch(setFavoriteJobs(job[0]));
    }
    return (
        <View>
            <ScrollView style={styles.scroll_container}>
                <View style={styles.container}>
                    <Text style={styles.main_title}>Implementation Consultant</Text>
                    <View>
                        <View style={styles.head_container}>
                            <Text style={styles.subtitle}>Location : </Text>
                            <Text style={styles.text}>{job[0].locations[0].name}</Text>
                        </View>
                        <View style={styles.head_container}>
                            <Text style={styles.subtitle}>Job level : </Text>
                            <Text style={styles.text}>{job[0].levels[0].name}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.description_title}>Job Detail</Text>
                        <View style={styles.html_container}>
                            <RenderHtml contentWidth={width} source={{ html: job[0].contents }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.foot}>
                <Button title="Submit" visibility={true} icon='login' />
                <Button title="Favorite Job" visibility={true} icon='favorite' onPress={addFavoriteJobs} />
            </View>
        </View>
    )
}

export default Details