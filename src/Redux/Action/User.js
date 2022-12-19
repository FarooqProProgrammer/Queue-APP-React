function setUserInfo(user) {

    console.log('user inside setTheme action', user)

    return {

        type: 'SET_USER',

        data: user

    }

}

export {
    setUserInfo
}