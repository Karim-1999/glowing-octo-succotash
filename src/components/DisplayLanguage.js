import React from "react";


export default class DisplayLanguage extends React.Component {
    render() {
        state = {
            language: 'en'
        }
    }

    handleLenguageChange = (lenguage) => {
        this.setState({
            language,
        })
    }

    return(
        <languageContext.Provider value = {this.state.language}>
        <languageSelector onLanguageChange = {this.handleLenguageChange}/>
        </languageContext>
    )
}