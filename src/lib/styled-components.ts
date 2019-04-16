import {
    IntrinsicElementAttributes,
    EventsOn
} from "vue-tsx-support/types/dom";
import { PropsDefinition } from "vue/types/options";
import { TsxComponent } from "vue-tsx-support";
import Vue from "vue";

const styled = require("vue-styled-components").default;

type HTMLTags = keyof IntrinsicElementAttributes;

type IExtensibleStyledComponent<
    Prop = {},
    EventsWithOn = {},
    ScopedSlotArgs = {},
    AddtionalThisAttrs = {}
> = TsxComponent<
    Vue,
    Prop,
    EventsWithOn,
    ScopedSlotArgs,
    AddtionalThisAttrs
> & {
    extend: <P = Prop>(
        css: TemplateStringsArray,
        propFunction?: (prop: P) => string
    ) => IExtensibleStyledComponent<
        P,
        EventsWithOn,
        ScopedSlotArgs,
        AddtionalThisAttrs
    >;
};

type IStyledWrapper<
    Prop = {},
    EventsWithOn = {},
    ScopedSlotArgs = {},
    AddtionalThisAttrs = {}
> = {
    [TAG in HTMLTags]: <P = Prop>(
        css: TemplateStringsArray,
        propFunction?: (prop: P) => string
    ) => IExtensibleStyledComponent<
        P & IntrinsicElementAttributes[TAG],
        EventsWithOn & EventsOn<IntrinsicElementAttributes[TAG]>,
        ScopedSlotArgs,
        AddtionalThisAttrs
    >
} & {
    <W>(wrapped: W): <P = Prop>(
        css: TemplateStringsArray,
        propFunction?: (prop: P) => string
    ) => IExtensibleStyledComponent<
        P,
        EventsWithOn,
        ScopedSlotArgs,
        AddtionalThisAttrs
    > &
        W;
};

const styleWithProps = <
    Prop = {},
    EventsWithOn = {},
    ScopedSlotArgs = {},
    AddtionalThisAttrs = {}
>(
    props: PropsDefinition<Prop>
) => {
    return new Proxy<
        IStyledWrapper<Prop, EventsWithOn, ScopedSlotArgs, AddtionalThisAttrs>
    >(new Function() as any, {
        get: (target, p) => {
            return styled(p, props);
        },
        apply: (target, that, args) => {
            return styled(...args, props);
        }
    });
};

export default styleWithProps;
