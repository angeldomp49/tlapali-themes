import { Theme } from "@makechtec/tlapali_dev";

const classStyles = [
    "color: #012A68;",
    "font-family: roboto;",
    "font-weight: bold;"
];

const identifierStyles = [
    "color: #2A058B;",
    "font-family: roboto;",
    "font-weight: normal;"
];

export const Makech: Theme = {
    name: "Makech",
    supportedLaguages: [
        {
            name: "java",
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
