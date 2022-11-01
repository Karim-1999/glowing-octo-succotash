import React from "react";
import { LanguageContext } from "./LanguageContext";

const string = {
    en: {
            CURRENT_LANGUAGE: "The selected language is: "
        },
    it: {
            CURRENT_LANGUAGE: "La lingua selezionata è: "
        }
    }

    export default class DisplayLanguage extends React.Component {
        render() {
        return(
                <div>
                    <LanguageContext.Consumer>
                        {(language) => {
                            return <h1> {string[language].CURRENT_LANGUAGE} {language}</h1>
                        }}
                    </LanguageContext.Consumer>
                </div>
            )
        }
    }