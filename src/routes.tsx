import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const { Navigator, Screen } = createStackNavigator()

import OrphanagesMap from './pages/OrphanageMap'
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition'
import OrphanageData from './pages/CreateOrphanage/OrphanageData'
import OrphanageDetails from './pages/OrphanageDetails'
import Header from './components/Header'

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen name="OrphanagesMap" component={OrphanagesMap}/>
                <Screen name="SelectMapPosition" component={SelectMapPosition} options={{headerShown: true, header: () => <Header title="Selecione no maapa"/>}}/>
                <Screen name="OrphanageData" component={OrphanageData} options={{headerShown: true, header: () => <Header title="Informe os dados"/>}}/>
                <Screen name="OrphanagesDetails" component={OrphanageDetails} options={{headerShown: true, header: () => <Header showCancel={true} title="Orfanato"/>}}/>
            </Navigator>
        </NavigationContainer>
    )
}