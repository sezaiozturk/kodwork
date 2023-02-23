import { View, Text, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'
import RenderHtml from 'react-native-render-html'
import styles from './Details.style'
import Button from '../../components/button/Button'

const Details = ({ route }) => {
    const { content, location, level } = route.params;
    const { width } = useWindowDimensions();
    return (
        <View>
            <ScrollView style={styles.scroll_container}>
                <View style={styles.container}>
                    <Text style={styles.main_title}>Implementation Consultant</Text>
                    <View>
                        <View style={styles.head_container}>
                            <Text style={styles.subtitle}>Location : </Text>
                            <Text style={styles.text}>{location}</Text>
                        </View>
                        <View style={styles.head_container}>
                            <Text style={styles.subtitle}>Job level : </Text>
                            <Text style={styles.text}>{level}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={styles.description_title}>Job Detail</Text>
                        <View style={styles.html_container}>
                            <RenderHtml contentWidth={width} source={{ html: content }} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.foot}>
                <Button title="Submit" />
                <Button title="Favorite Job" />
            </View>
        </View>
    )
}

export default Details