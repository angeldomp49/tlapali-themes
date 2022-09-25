import { Theme } from "@makechtec/tlapali_dev";

const classStyles = [
    "color: #1c51c9;",
    "font-family: Roboto;",
    "font-weight: bold;"
];

const identifierStyles = [
    "color: #2A058B;",
    "font-weight: normal;"
];

export const Makech: Theme = {
    name: "Makech",
    containerStyle: {
        backgroundColor: "#f8fffe",
        fontFamily: "Ubuntu",
        color: "#48637b"
    },
    supportedLaguages: [
        {
            name: "java",
            keywordsStyle: [
                "font-family: Poppins",
                "font-weight: bold",
                "font-style: italic",
            ],
            styleSets: [
                {
                    rule: "class_declaration",
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
            ]
        }
    ]
}
