declare module 'react-native-mathjax-text-svg' {
    import { ReactNode } from 'react';
    import { TextStyle, ViewStyle } from 'react-native';

    type Props = {
        fontSize?: number,
        color?: string,
        fontCache?: boolean,
        style?: ViewStyle,
        textStyle?: TextStyle,
        children?: ReactNode,
    };

    export function MathJaxSvg(props: Props);
}
