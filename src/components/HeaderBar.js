import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

// import Icon from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { height, width } = Dimensions.get('window');

function HeaderBar({ navigation, route, options, back, backgroundColor, style, showBack, showSearch, showMenu, buttonStyle, searchContainerStyle, searchTextStyle, searchPlaceholderTextColor }) {

    const insets = useSafeAreaInsets();

    let singleStyles = {};
    let backVisibility = {};
    let menuVisibility = {};
    if (backgroundColor) singleStyles = { ...singleStyles, backgroundColor };
    if (!showBack && showBack !== undefined) backVisibility = { display: 'none' };
    if (!showMenu && showMenu !== undefined) menuVisibility = { display: 'none' };

    return (
        <View style={{ backgroundColor: '#222020' }}>
            <View
                style={[{ paddingTop: insets.top, height: 80 + insets.top }, styles.header_container, singleStyles, style]}
            >
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: '#FFC52C' }}>Good Morning!</Text>
                    <Text style={{ fontSize: 12, color: '#FF6B00' }}>Joseph Legere</Text>
                </View>
                <View style={{ width: 40, height: 40, backgroundColor: '#C4C4C4', borderRadius: 40 }} />
            </View>
        </View>
    )
}

export default HeaderBar;

const styles = StyleSheet.create({
    header_container: {
        flexDirection: 'row',
        backgroundColor: '#050504',
        paddingVertical: 5,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        width,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    blur_wrap: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    search_container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexGrow: 1
    },
    search_icon: {
        padding: 12
    },
    search_input: {
        flex: 1,
        paddingLeft: 0,
        backgroundColor: 'transparent',
        width: '90%'
    },
    back_icon: {
        color: '#1f1f1f'
    },
    menu_icon: {
        color: '#1f1f1f'
    }
});