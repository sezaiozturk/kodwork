import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './JobsCard.style'
import Button from '../button/Button'
import { useSelector } from 'react-redux'

const JobsCard = ({ jobId, navigation, visibility, onPress }) => {
    const job = useSelector((state) => state.jobs.jobs.filter((item) => item.id === jobId));
    handleDetails = () => {
        navigation.navigate('detailsScreen', { jobId });
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handleDetails}>
                <View>
                    <View style={styles.top_container}>
                        <Text style={styles.name}>{job[0].name}</Text>
                        <Text style={styles.type}>{job[0].type}</Text>
                        <View style={styles.inner_container}>
                            <Text style={styles.location}>{job[0].locations[0].name}</Text>
                        </View>
                    </View>
                    <View style={styles.bottom_container}>
                        <Text style={styles.level}>{job[0].levels[0].name}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Button title='Remove' visibility={visibility} onPress={onPress} />
        </View>
    )

}

export default JobsCard