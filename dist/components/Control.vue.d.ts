declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<{}, {}, {
    SingleValue: import("vue").DefineComponent<{}, {}, {}, {
        node(): any;
        hasValue(): any;
        hasActiveQuery(): any;
        isFocused(): any;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        Placeholder: import("vue").DefineComponent<{}, {}, {}, {
            hasValue(): any;
            hasSearchQuery(): boolean;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Input: import("vue").DefineComponent<{}, {}, {
            inputWidth: number;
            value: string;
        }, {
            isSearchable(): any;
            isDisabled(): any;
            isRequired(): any;
            tabIndex(): any;
            hasValue(): any;
            isEmpty(): boolean;
            needAutoSize(): any;
            inputStyle(): {};
        }, {
            clear(): void;
            focus(): void;
            blur(): void;
            onFocus(): void;
            onBlur(): void;
            onInput(evt: any): void;
            onKeyDown(evt: any): any;
            onMouseDown(evt: any): void;
            updateInputWidth(): void;
            updateSearchQuery(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    MultiValue: import("vue").DefineComponent<{}, {}, {}, {
        multiValueItems(): any;
        count(): number;
        isFocused(): any;
        hasValue(): any;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        Placeholder: import("vue").DefineComponent<{}, {}, {}, {
            hasValue(): any;
            hasSearchQuery(): boolean;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        TransitionGroup: new () => {
            $props: import("vue").TransitionGroupProps;
        };
        Input: import("vue").DefineComponent<{}, {}, {
            inputWidth: number;
            value: string;
        }, {
            isSearchable(): any;
            isDisabled(): any;
            isRequired(): any;
            tabIndex(): any;
            hasValue(): any;
            isEmpty(): boolean;
            needAutoSize(): any;
            inputStyle(): {};
        }, {
            clear(): void;
            focus(): void;
            blur(): void;
            onFocus(): void;
            onBlur(): void;
            onInput(evt: any): void;
            onKeyDown(evt: any): any;
            onMouseDown(evt: any): void;
            updateInputWidth(): void;
            updateSearchQuery(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        MultiValueItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            node: {
                type: ObjectConstructor;
                required: true;
            };
        }>, {}, {}, {
            itemClass(): {
                'vue-treeselect__multi-value-item': boolean;
                'vue-treeselect__multi-value-item-disabled': any;
                'vue-treeselect__multi-value-item-new': any;
            };
        }, {
            handleMouseDown: (evt: any, ...args: any[]) => void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            node: {
                type: ObjectConstructor;
                required: true;
            };
        }>> & Readonly<{}>, {}, {}, {
            DeleteIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {
    isSingle(): any;
    /**
     * Should show the "×" button that resets value?
     * @return {boolean}
     */
    shouldShowX(): any;
    /**
     * Should show the arrow button that toggles menu?
     * @return {boolean}
     */
    shouldShowArrow(): boolean;
    /**
     * Has any undisabled option been selected?
     * @type {boolean}
     */
    hasUndisabledValue(): any;
}, {
    getTitleX(): any;
    getArrowClass(): {
        'vue-treeselect__control-arrow': boolean;
        'vue-treeselect__control-arrow--rotated': any;
    };
    handleMouseDownOnX: (evt: any, ...args: any[]) => void;
    handleMouseDownOnArrow: (evt: any, ...args: any[]) => void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    SingleValue: import("vue").DefineComponent<{}, {}, {}, {
        node(): any;
        hasValue(): any;
        hasActiveQuery(): any;
        isFocused(): any;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        Placeholder: import("vue").DefineComponent<{}, {}, {}, {
            hasValue(): any;
            hasSearchQuery(): boolean;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Input: import("vue").DefineComponent<{}, {}, {
            inputWidth: number;
            value: string;
        }, {
            isSearchable(): any;
            isDisabled(): any;
            isRequired(): any;
            tabIndex(): any;
            hasValue(): any;
            isEmpty(): boolean;
            needAutoSize(): any;
            inputStyle(): {};
        }, {
            clear(): void;
            focus(): void;
            blur(): void;
            onFocus(): void;
            onBlur(): void;
            onInput(evt: any): void;
            onKeyDown(evt: any): any;
            onMouseDown(evt: any): void;
            updateInputWidth(): void;
            updateSearchQuery(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    MultiValue: import("vue").DefineComponent<{}, {}, {}, {
        multiValueItems(): any;
        count(): number;
        isFocused(): any;
        hasValue(): any;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        Placeholder: import("vue").DefineComponent<{}, {}, {}, {
            hasValue(): any;
            hasSearchQuery(): boolean;
        }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        TransitionGroup: new () => {
            $props: import("vue").TransitionGroupProps;
        };
        Input: import("vue").DefineComponent<{}, {}, {
            inputWidth: number;
            value: string;
        }, {
            isSearchable(): any;
            isDisabled(): any;
            isRequired(): any;
            tabIndex(): any;
            hasValue(): any;
            isEmpty(): boolean;
            needAutoSize(): any;
            inputStyle(): {};
        }, {
            clear(): void;
            focus(): void;
            blur(): void;
            onFocus(): void;
            onBlur(): void;
            onInput(evt: any): void;
            onKeyDown(evt: any): any;
            onMouseDown(evt: any): void;
            updateInputWidth(): void;
            updateSearchQuery(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        MultiValueItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            node: {
                type: ObjectConstructor;
                required: true;
            };
        }>, {}, {}, {
            itemClass(): {
                'vue-treeselect__multi-value-item': boolean;
                'vue-treeselect__multi-value-item-disabled': any;
                'vue-treeselect__multi-value-item-new': any;
            };
        }, {
            handleMouseDown: (evt: any, ...args: any[]) => void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            node: {
                type: ObjectConstructor;
                required: true;
            };
        }>> & Readonly<{}>, {}, {}, {
            DeleteIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    DeleteIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ArrowIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
