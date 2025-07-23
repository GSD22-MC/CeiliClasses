/**
 * StyleSheet utility for React Native to Web conversion
 * Provides a compatible API for style definitions
 */

type NamedStyles<T> = { [P in keyof T]: React.CSSProperties };

export class StyleSheet {
  /**
   * Create styles object (compatible with React Native StyleSheet.create)
   * In web, this just returns the styles object as-is since we don't need
   * the optimization that React Native's StyleSheet provides
   */
  static create<T extends NamedStyles<T>>(styles: T): T {
    return styles;
  }

  /**
   * Compose multiple styles (similar to StyleSheet.compose but simpler)
   */
  static compose(...styles: (React.CSSProperties | undefined | null | false)[]): React.CSSProperties {
    return Object.assign({}, ...styles.filter(Boolean));
  }

  /**
   * Flatten style array (similar to StyleSheet.flatten)
   */
  static flatten(style: React.CSSProperties | React.CSSProperties[] | undefined): React.CSSProperties {
    if (!style) return {};
    if (Array.isArray(style)) {
      return this.compose(...style);
    }
    return style;
  }

  /**
   * Absolute fill object (equivalent to StyleSheet.absoluteFillObject)
   */
  static get absoluteFillObject(): React.CSSProperties {
    return {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    };
  }

  /**
   * Absolute fill (equivalent to StyleSheet.absoluteFill)
   */
  static get absoluteFill(): React.CSSProperties {
    return this.absoluteFillObject;
  }

  /**
   * Hairline width (1px on web)
   */
  static get hairlineWidth(): number {
    return 1;
  }
}

// Export for compatibility
export default StyleSheet;