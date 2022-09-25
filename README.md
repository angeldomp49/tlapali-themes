# Theme Descriptors #

Contains:

    const classStyles = [
        "color: #1c51c9;",
        "font-weight: bold;"
    ];

    const identifierStyles = [
        "color: #3894c2;",
        "font-weight: bold;"
    ];

    export const Makech: Theme = {
        name: "Makech",
        containerStyle: {
            backgroundColor: "#fdfdfa",
            fontFamily: "'Space Mono'",
            color: "#48637b",
            border: "2px solid #e0e7e6",
            borderRadius: "5px",
            maxWidth: "",
            overflow: "scroll",
        },
        supportedLaguages: [
            {
                name: "java",
                keywordsStyle: [
                    "font-weight: bold;",
                    "font-style: italic;",
                    "color: #7238c2"
                ],
                styleSets: [
                    {
                        rule: "class_declaration",
                        styles: [
                            ...classStyles
                        ]
                    },
                    {
                        rule: "class_name",
                        styles: [
                            ...classStyles
                        ]
                    },
                    {
                        rule: "import_declaration",
                        styles: [
                            ...classStyles
                        ]
                    },
                    {
                        rule: "variable_declaration",
                        styles: [
                            ...identifierStyles
                        ]
                    },
                    {
                        rule: "method_declaration",
                        styles: [
                            ...identifierStyles
                        ]
                    },
                    {
                        rule: "curly_brackets",
                        styles: [
                            "color: #b28a0a"
                        ]
                    }
                ]
            }
        ]
    }